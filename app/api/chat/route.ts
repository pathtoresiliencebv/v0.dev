import { TogetherAI, Groq } from "@vercel/ai";
import { StreamingTextResponse, ChatCompletionMessage } from "ai";

// Initialize AI providers
const together = new TogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY || "",
});

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages, provider = "together", model } = await req.json();

    // Select provider based on request
    const selectedProvider = provider === "groq" ? groq : together;
    
    // Select model based on provider or use default
    const selectedModel = model || 
      (provider === "groq" ? "llama3-70b-8192" : "meta-llama/Llama-3.3-70B-Instruct-Turbo");

    // Generate stream from the selected provider
    const response = await selectedProvider.chat({
      messages: messages as ChatCompletionMessage[],
      model: selectedModel,
      temperature: 0.7,
      max_tokens: 1000,
    });

    // Return streaming response
    return new StreamingTextResponse(response);
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
} 