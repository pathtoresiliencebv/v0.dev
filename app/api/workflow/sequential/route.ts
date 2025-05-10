import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { togetherai } from '@ai-sdk/togetherai';
import { groq } from '@ai-sdk/groq';
import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Sequential workflow that chains multiple LLM calls where each step feeds into the next
 */
async function sequentialWorkflow(
  inputQuery: string,
  promptChain: string[] = [],
  model: string = "meta-llama/Llama-3.3-70B-Instruct-Turbo"
) {
  try {
    const responseChain: string[] = [];
    let response = inputQuery;

    for (let i = 0; i < promptChain.length; i++) {
      console.log(`Step ${i + 1}`);
      
      // Determine which AI provider to use based on model name
      let modelProvider;
      if (model.includes('llama') || model.includes('mistral')) {
        modelProvider = togetherai(model);
      } else if (model.includes('groq') || model.includes('llama-3') || model.includes('mixtral')) {
        modelProvider = groq(model);
      } else {
        modelProvider = openai(model);
      }
      
      const currentPrompt = `${promptChain[i]}\nInput:\n${response}`;
      
      try {
        // Generate response for this step
        const llmResponse = await streamText({
          model: modelProvider,
          messages: [{ role: "user", content: currentPrompt }]
        });
        
        // Get text from stream
        response = await llmResponse.text;
        responseChain.push(response);
        console.log(`Response from step ${i + 1}: ${response.substring(0, 100)}...`);
      } catch (error) {
        console.error(`Error in step ${i + 1}:`, error);
        throw new Error(`Failed at workflow step ${i + 1}`);
      }
    }
    
    return {
      finalResponse: responseChain[responseChain.length - 1] || inputQuery,
      stepResponses: responseChain.map((resp, i) => ({
        step: i + 1,
        prompt: promptChain[i],
        response: resp
      }))
    };
  } catch (error) {
    console.error("Sequential workflow error:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { inputQuery, promptChain, model = 'meta-llama/Llama-3.3-70B-Instruct-Turbo' } = await req.json();
    
    if (!inputQuery || !promptChain || !Array.isArray(promptChain) || promptChain.length === 0) {
      return new Response(JSON.stringify({ 
        error: 'Missing required parameters: inputQuery and promptChain (array) are required' 
      }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    
    const result = await sequentialWorkflow(inputQuery, promptChain, model);
    
    return new Response(JSON.stringify(result), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    console.error('Error in sequential workflow POST:', error);
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
