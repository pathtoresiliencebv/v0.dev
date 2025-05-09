import { TogetherAI } from "@vercel/ai";
import { NextResponse } from "next/server";

// Initialize Together AI client
const together = new TogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
});

export const runtime = "edge";

/**
 * Sequential workflow that chains multiple LLM calls where each step feeds into the next
 */
async function sequentialWorkflow(
  inputQuery: string,
  promptChain: string[] = [],
  model: string = "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
) {
  try {
    const responseChain = [];
    let response = inputQuery;

    for (let i = 0; i < promptChain.length; i++) {
      console.log(`Step ${i + 1}`);
      
      const currentPrompt = `${promptChain[i]}\nInput:\n${response}`;
      
      const llmResponse = await together.chat({
        messages: [{ role: "user", content: currentPrompt }],
        model,
        temperature: 0.7,
        max_tokens: 4000,
      });
      
      // Convert stream to text
      let fullResponse = "";
      for await (const chunk of llmResponse) {
        fullResponse += chunk;
      }
      
      response = fullResponse;
      responseChain.push(response);
      console.log(`Response from step ${i + 1}: ${response.substring(0, 100)}...`);
    }
    
    return {
      finalResponse: responseChain[responseChain.length - 1],
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
    const { inputQuery, promptChain, model } = await req.json();
    
    if (!inputQuery || !promptChain || !Array.isArray(promptChain)) {
      return NextResponse.json(
        { error: "Input query and prompt chain array are required" },
        { status: 400 }
      );
    }
    
    const result = await sequentialWorkflow(
      inputQuery,
      promptChain,
      model || "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"
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