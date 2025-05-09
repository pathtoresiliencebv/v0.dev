import { TogetherAI } from "@vercel/ai";
import { NextResponse } from "next/server";

// Initialize Together AI client
const together = new TogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
});

export const runtime = "edge";

// Define reference models for parallel processing
const referenceModels = [
  "deepseek-ai/DeepSeek-V3", 
  "meta-llama/Llama-3.1-8B-Instruct",
  "meta-llama/Llama-3.3-70B-Instruct-Turbo"
];

// Default aggregator model
const aggregatorModel = "meta-llama/Llama-3.3-70B-Instruct-Turbo";

/**
 * Parallel workflow that sends a prompt to multiple models and aggregates results
 */
async function parallelWorkflow(
  prompt: string, 
  models: string[] = referenceModels,
  aggregatorModel: string = "meta-llama/Llama-3.3-70B-Instruct-Turbo"
) {
  try {
    // Run models in parallel
    const modelPromises = models.map(async (model) => {
      const response = await together.chat({
        messages: [{ role: "user", content: prompt }],
        model,
        temperature: 0.7,
      });
      
      // Convert stream to text
      let fullResponse = "";
      for await (const chunk of response) {
        fullResponse += chunk;
      }
      
      return { model, response: fullResponse };
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

    const aggregatorResponse = await together.chat({
      messages: [{ role: "user", content: aggregatorPrompt }],
      model: aggregatorModel,
      temperature: 0.5,
    });
    
    // Convert stream to text
    let finalResponse = "";
    for await (const chunk of aggregatorResponse) {
      finalResponse += chunk;
    }
    
    return { 
      finalResponse,
      modelResponses: modelResults
    };
  } catch (error) {
    console.error("Parallel workflow error:", error);
    throw error;
  }
}

export async function POST(req: Request) {
  try {
    const { prompt, models, aggregator } = await req.json();
    
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    
    const result = await parallelWorkflow(
      prompt,
      models || referenceModels,
      aggregator || aggregatorModel
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