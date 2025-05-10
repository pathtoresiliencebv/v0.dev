import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { togetherai } from '@ai-sdk/togetherai';
import { groq } from '@ai-sdk/groq';
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

// Schema for evaluation results
const evaluationSchema = z.object({
  score: z.number().min(1).max(10),
  feedback: z.string(),
  passed: z.boolean(),
});

type EvaluationResult = z.infer<typeof evaluationSchema>;

/**
 * Evaluator workflow that keeps improving responses until they meet criteria
 */
async function evaluatorWorkflow(
  task: string, 
  criteria: string, 
  maxIterations: number = 3,
  model: string = "meta-llama/Llama-3.3-70B-Instruct-Turbo"
) {
  try {
    // Store the iterations
    const iterations: Array<{
      iteration: number;
      response: string;
      evaluation: EvaluationResult;
    }> = [];
    
    let currentResponse = "";
    let evaluationResult: EvaluationResult | null = null;
    let iteration = 0;
    
    // Initialize the generation system prompt
    let generationPrompt = `
You are a helpful assistant tasked with completing the following:

${task}

Please complete this task to the best of your ability.`;

    // Iterate until we have a passing response or reach max iterations
    while (iteration < maxIterations) {
      console.log(`Iteration ${iteration + 1}`);
      
      // Determine which AI provider to use based on model name
      let modelProvider;
      if (model.includes('llama') || model.includes('mistral')) {
        modelProvider = togetherai(model);
      } else if (model.includes('groq') || model.includes('llama-3') || model.includes('mixtral')) {
        modelProvider = groq(model);
      } else {
        modelProvider = openai(model);
      }
      
      try {
        // Generate a response
        const response = await streamText({
          model: modelProvider,
          system: generationPrompt,
          messages: [{ role: "user", content: task }]
        });
        
        // Convert stream to text
        currentResponse = await response.text;
      } catch (error) {
        console.error("Error generating response:", error);
        throw new Error("Failed to generate response");
      }
      
      // Evaluate the response
      const evaluationPrompt = `
You need to evaluate the quality of the following response to a task based on specific criteria.

Task: ${task}

Criteria: ${criteria}

Response to evaluate:
${currentResponse}

Rate this on a scale of 1-10, where 10 is perfect.
Provide specific feedback on how the response could be improved.
Determine if the response passes the criteria (true/false).

Respond with JSON only containing:
1. "score": Number rating from 1-10
2. "feedback": String with specific feedback
3. "passed": Boolean indicating whether the response meets the criteria
`;

      try {
        // Use togetherai for evaluation
        const evaluationResponse = await streamText({
          model: togetherai("meta-llama/Llama-3.1-8B-Instruct"),
          messages: [{ role: "user", content: evaluationPrompt }]
        });
        
        // Get the raw text
        const evaluationText = await evaluationResponse.text;
        const evaluationJson = JSON.parse(evaluationText);
        
        // Parse and validate JSON
        evaluationResult = evaluationSchema.parse(evaluationJson);
        
        // Record this iteration
        iterations.push({
          iteration: iteration + 1,
          response: currentResponse,
          evaluation: evaluationResult,
        });
        
        // If the response passes, we're done
        if (evaluationResult.passed) {
          break;
        }
        
        // Otherwise, update the generation prompt with feedback for the next iteration
        generationPrompt = `
You are a helpful assistant tasked with completing the following:

${task}

Please complete this task to the best of your ability.

Previous attempt: 
${currentResponse}

Feedback on previous attempt:
${evaluationResult.feedback}

Improve your response based on the feedback.`;
        
      } catch (error) {
        console.error("Error parsing evaluation:", error);
        break;
      }
      
      iteration++;
    }
    
    return {
      finalResponse: currentResponse,
      iterations,
      finalScore: evaluationResult?.score || 0,
      passed: evaluationResult?.passed || false,
    };
  } catch (error) {
    console.error("Evaluator workflow error:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { task, criteria, maxIterations = 3, model = 'meta-llama/Llama-3.3-70B-Instruct-Turbo' } = await req.json();
    
    if (!task || !criteria) {
      return new Response(JSON.stringify({ 
        error: 'Missing required parameters: task and criteria are required' 
      }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    
    const result = await evaluatorWorkflow(task, criteria, maxIterations, model);
    
    return new Response(JSON.stringify(result), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    console.error('Error in evaluator POST:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    
    return new Response(JSON.stringify({ 
      error: 'Failed to process request',
      details: errorMessage
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
