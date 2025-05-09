import { TogetherAI } from "@vercel/ai";
import { NextResponse } from "next/server";
import { z } from "zod";

// Initialize Together AI client
const together = new TogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
});

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

    // Get the route classification from the analysis
    const routeResponse = await together.chat({
      messages: [{ role: "user", content: routerPrompt }],
      model: "meta-llama/Llama-3.1-8B-Instruct",
      temperature: 0.2,
      response_format: { type: "json_object" },
    });

    // Parse the JSON response
    let routeText = "";
    for await (const chunk of routeResponse) {
      routeText += chunk;
    }
    
    let routeJson;
    try {
      routeJson = JSON.parse(routeText);
      // Validate with Zod
      const routeData = routeSchema.parse(routeJson);
      
      // Get the selected route configuration
      const selectedRoute = taskRoutes[routeData.task];
      
      // Process the input with the selected model
      const finalResponse = await together.chat({
        messages: [
          { role: "system", content: selectedRoute.systemPrompt },
          { role: "user", content: inputQuery }
        ],
        model: selectedRoute.model,
        temperature: 0.7,
      });
      
      // Convert stream to text
      let result = "";
      for await (const chunk of finalResponse) {
        result += chunk;
      }
      
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
      const fallbackResponse = await together.chat({
        messages: [{ role: "user", content: inputQuery }],
        model: "meta-llama/Llama-3.3-70B-Instruct-Turbo",
      });
      
      let fallbackResult = "";
      for await (const chunk of fallbackResponse) {
        fallbackResult += chunk;
      }
      
      return {
        result: fallbackResult,
        routing: {
          task: "fallback",
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
    const { query } = await req.json();
    
    if (!query) {
      return NextResponse.json(
        { error: "Query is required" },
        { status: 400 }
      );
    }
    
    const result = await routerWorkflow(query);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Failed to process workflow" },
      { status: 500 }
    );
  }
} 