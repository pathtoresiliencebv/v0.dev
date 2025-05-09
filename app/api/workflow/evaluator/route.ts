import { TogetherAI } from "@vercel/ai";
import { NextResponse } from "next/server";
import { z } from "zod";

// Initialize Together AI client
const together = new TogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
});

export const runtime = "edge";

// Schema for evaluation results
const evaluationSchema = z.object({
  score: z.number().min(1).max(10),
  feedback: z.string(),
  passed: z.boolean(),
});

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
    const iterations = [];
    let currentResponse = "";
    let evaluationResult = null;
    let iteration = 0;
    
    // Generation system prompt
    const generationPrompt = `
You are a helpful assistant tasked with completing the following:

${task}

Please complete this task to the best of your ability.
${iteration > 0 ? `
Previous attempt: 
${currentResponse}

Feedback on previous attempt:
${evaluationResult?.feedback}

Improve your response based on the feedback.` : ''}
`;

    // Iterate until we have a passing response or reach max iterations
    while (iteration < maxIterations) {
      console.log(`Iteration ${iteration + 1}`);
      
      // Generate a response
      const generationResponse = await together.chat({
        messages: [
          { role: "system", content: generationPrompt },
          { role: "user", content: task }
        ],
        model,
        temperature: 0.7,
      });
      
      // Convert stream to text
      currentResponse = "";
      for await (const chunk of generationResponse) {
        currentResponse += chunk;
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

      const evaluationResponse = await together.chat({
        messages: [{ role: "user", content: evaluationPrompt }],
        model: "meta-llama/Llama-3.1-8B-Instruct",
        temperature: 0.2,
        response_format: { type: "json_object" },
      });
      
      // Convert evaluation stream to text
      let evaluationText = "";
      for await (const chunk of evaluationResponse) {
        evaluationText += chunk;
      }
      
      try {
        const evaluationJson = JSON.parse(evaluationText);
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
        const generationPrompt = `
You are a helpful assistant tasked with completing the following:

${task}

Please complete this task to the best of your ability.

Previous attempt: 
${currentResponse}

Feedback on previous attempt:
${evaluationResult.feedback}

Improve your response based on the feedback.
`;
      } catch (error) {
        console.error("Error parsing evaluation JSON:", error);
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
    const { task, criteria, maxIterations, model } = await req.json();
    
    if (!task || !criteria) {
      return NextResponse.json(
        { error: "Task and criteria are required" },
        { status: 400 }
      );
    }
    
    const result = await evaluatorWorkflow(
      task,
      criteria,
      maxIterations || 3,
      model || "meta-llama/Llama-3.3-70B-Instruct-Turbo"
    );
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process workflow" },
      { status: 500 }
    );
  }
} 