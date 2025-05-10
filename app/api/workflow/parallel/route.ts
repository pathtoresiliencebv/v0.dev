import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { togetherai } from '@ai-sdk/togetherai';
import { groq } from '@ai-sdk/groq';
import { NextResponse } from "next/server";

export const runtime = "edge";

// Define reference models for parallel processing
const referenceModels = [
  "deepseek-ai/DeepSeek-V3", 
  "meta-llama/Llama-3.1-8B-Instruct",
  "meta-llama/Llama-3.3-70B-Instruct-Turbo"
];

/**
 * Helper function to determine the appropriate provider for a model
 */
function getModelProvider(modelName: string) {
  if (modelName.includes('llama') || modelName.includes('mistral') || modelName.includes('deepseek')) {
    return togetherai(modelName);
  } else if (modelName.includes('groq') || modelName.includes('gemma')) {
    return groq(modelName);
  } else {
    return openai(modelName);
  }
}

/**
 * Parallel workflow that sends a prompt to multiple models and aggregates results
 */
async function parallelWorkflow(
  prompt: string, 
  models: string[] = referenceModels,
  aggregatorModelName: string = "meta-llama/Llama-3.3-70B-Instruct-Turbo"
) {
  try {
    // Run models in parallel
    const modelPromises = models.map(async (modelName) => {
      try {
        const modelProvider = getModelProvider(modelName);
        
        const response = await streamText({
          model: modelProvider,
          messages: [{ role: "user", content: prompt }],
        });
        
        // Get text from stream
        const fullResponse = await response.text;
        return { model: modelName, response: fullResponse, error: null };
      } catch (error) {
        console.error(`Error with model ${modelName}:`, error);
        return { 
          model: modelName, 
          response: `Error: Model ${modelName} failed to generate a response.`, 
          error: error instanceof Error ? error.message : "Unknown error" 
        };
      }
    });
    
    // Wait for all models to complete
    const modelResults = await Promise.all(modelPromises);
    
    // Format responses for aggregation
    const modelResponsesText = modelResults
      .map((result, index) => `Response ${index + 1} (${result.model}):\n${result.response}`)
      .join("\n\n");
    
    // Aggregate results with another model
    const aggregatorPrompt = `
You have been provided with responses from various models to the following query:

"${prompt}"

Your task is to synthesize these responses into a single, high-quality response.
It is crucial to critically evaluate the information provided in these responses, 
recognizing that some of it may be biased or incorrect.

The responses are:

${modelResponsesText}

Provide a final comprehensive answer that represents the best information from all sources.
`;

    // Get the appropriate provider for the aggregator model
    const aggregatorProvider = getModelProvider(aggregatorModelName);
    
    const aggregatorResponse = await streamText({
      model: aggregatorProvider,
      messages: [{ role: "user", content: aggregatorPrompt }],
    });
    
    // Get text from stream
    const finalResponse = await aggregatorResponse.text;
    
    return { 
      finalResponse,
      models,
      modelResponses: modelResults
    };
  } catch (error) {
    console.error("Parallel workflow error:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { prompt, models = referenceModels, aggregatorModel = "meta-llama/Llama-3.3-70B-Instruct-Turbo" } = await req.json();
    
    if (!prompt || typeof prompt !== 'string') {
      return new Response(JSON.stringify({ 
        error: 'Missing or invalid prompt parameter'
      }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    
    if (models && (!Array.isArray(models) || models.length === 0)) {
      return new Response(JSON.stringify({ 
        error: 'Invalid models parameter: must be a non-empty array of model strings'
      }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    
    const result = await parallelWorkflow(prompt, models, aggregatorModel);
    
    return new Response(JSON.stringify(result), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    console.error('Error in parallel workflow POST:', error);
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
