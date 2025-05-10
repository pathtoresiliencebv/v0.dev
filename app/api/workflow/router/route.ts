import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { togetherai } from '@ai-sdk/togetherai';
import { groq } from '@ai-sdk/groq';
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "edge";

// Define task types and corresponding models
const taskRoutes = {
  "code": {
    model: "Qwen/Qwen2.5-Coder-32B-Instruct",
    description: "Code generation or explanation tasks",
    systemPrompt: "You are an expert programming assistant. Provide clear, efficient code solutions with comments."
  },
  "reasoning": {
    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
    description: "Logic, reasoning and analytical tasks",
    systemPrompt: "You are a logical reasoning assistant. Break down problems step-by-step and provide clear analytical thinking."
  },
  "creative": {
    model: "Gryphe/MythoMax-L2-13b",
    description: "Creative writing, storytelling and artistic tasks",
    systemPrompt: "You are a creative writing assistant. Create engaging, imaginative content with vivid descriptions."
  }
};

// Schema for route selection
const routeSchema = z.object({
  task: z.enum(["code", "reasoning", "creative"] as const),
  confidence: z.number().min(0).max(1),
  reason: z.string(),
});

type TaskRoute = keyof typeof taskRoutes;

/**
 * Router workflow that analyzes input and routes to appropriate model
 */
async function routerWorkflow(inputQuery: string) {
  try {
    // First, analyze the input to determine the appropriate route
    const routerPrompt = `
Analyze the following user query and determine which category it best fits into:

Query: "${inputQuery}"

Choose from these categories:
- code: Programming questions, code generation, debugging help, coding explanations
- reasoning: Math problems, logical puzzles, analytical questions, step-by-step reasoning tasks
- creative: Story writing, creative content generation, imaginative scenarios

Respond with JSON only containing:
1. "task": The most appropriate task category (code, reasoning, or creative)
2. "confidence": Number between 0-1 indicating your confidence in this classification
3. "reason": Short explanation for your classification
`;

    // Use togetherai for the routing decision
    const routeResponse = await streamText({
      model: togetherai("meta-llama/Llama-3.1-8B-Instruct"),
      messages: [{ role: "user", content: routerPrompt }],
      temperature: 0.2,
    });

    // Get the text from stream
    const routeText = await routeResponse.text;
    
    try {
      // Parse the JSON response
      const routeJson = JSON.parse(routeText);
      
      // Validate with Zod
      const routeData = routeSchema.parse(routeJson);
      
      // Get the selected route configuration
      const selectedRoute = taskRoutes[routeData.task];
      
      // Determine which provider to use based on model name
      let modelProvider;
      const modelName = selectedRoute.model;
      
      if (modelName.includes('llama') || modelName.includes('mistral') || modelName.includes('Gryphe') || modelName.includes('Qwen')) {
        modelProvider = togetherai(modelName);
      } else if (modelName.includes('groq') || modelName.includes('gemma')) {
        modelProvider = groq(modelName);
      } else {
        modelProvider = openai(modelName);
      }
      
      // Process the input with the selected model
      const finalResponse = await streamText({
        model: modelProvider,
        system: selectedRoute.systemPrompt,
        messages: [{ role: "user", content: inputQuery }],
        temperature: 0.7,
      });
      
      // Get text from stream
      const result = await finalResponse.text;
      
      return {
        result,
        routing: {
          task: routeData.task,
          model: selectedRoute.model,
          confidence: routeData.confidence,
          reason: routeData.reason
        }
      };
    } catch (parseError) {
      console.error("Error parsing route JSON:", parseError);
      
      // Fallback to default model if parsing fails
      const fallbackResponse = await streamText({
        model: togetherai("meta-llama/Llama-3.3-70B-Instruct-Turbo"),
        messages: [{ role: "user", content: inputQuery }],
      });
      
      const fallbackResult = await fallbackResponse.text;
      
      return {
        result: fallbackResult,
        routing: {
          task: "fallback" as TaskRoute,
          model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
          confidence: 0,
          reason: "Failed to parse routing information"
        }
      };
    }
  } catch (error) {
    console.error("Router workflow error:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { inputQuery } = await req.json();
    
    if (!inputQuery || typeof inputQuery !== 'string') {
      return new Response(JSON.stringify({ 
        error: 'Missing or invalid inputQuery parameter'
      }), { 
        status: 400, 
        headers: { 'Content-Type': 'application/json' } 
      });
    }
    
    const result = await routerWorkflow(inputQuery);
    
    return new Response(JSON.stringify(result), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: unknown) {
    console.error('Error in router workflow POST:', error);
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
