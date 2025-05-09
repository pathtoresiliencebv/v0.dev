import { NextResponse } from "next/server"
import { delay, getModelProvider } from "@/lib/utils"
import Together from "together-ai";
import Groq from "groq-sdk";

// Initialize clients
const together = new Together({
  apiKey: process.env.TOGETHER_API_KEY,
});

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// Define interface for chat messages
interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json() as ChatRequest;
    const { messages, model = "meta-llama/Llama-3.1-8B-Instruct-Turbo-Free", temperature = 0.7, max_tokens = 1024 } = body;

    // Determine which provider to use based on the model name
    const provider = getModelProvider(model);
    
    let responseText: string;

    // Route to the appropriate provider API
    if (provider === "together") {
      // Convert messages to Together AI format
      const togetherMessages = messages.map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content
      }));
      
      // Use Together AI API
      const response = await together.chat.completions.create({
        model,
        messages: togetherMessages,
        temperature,
        max_tokens,
      });
      responseText = response.choices[0]?.message?.content || "No response generated";
    } else if (provider === "groq") {
      // Convert messages to Groq format
      const groqMessages = messages.map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content
      }));
      
      // Use Groq API
      const response = await groq.chat.completions.create({
        model,
        messages: groqMessages,
        temperature,
        max_tokens,
      });
      responseText = response.choices[0]?.message?.content || "No response generated";
    } else {
      // Default fallback to Together AI with default model
      console.warn(`Unknown model provider for "${model}", falling back to Together AI default model`);
      
      // Convert messages to Together AI format
      const togetherMessages = messages.map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content
      }));
      
      const response = await together.chat.completions.create({
        model: "meta-llama/Llama-3.1-8B-Instruct-Turbo-Free",
        messages: togetherMessages,
        temperature,
        max_tokens,
      });
      responseText = response.choices[0]?.message?.content || "No response generated";
    }

    // Return the formatted response
    return NextResponse.json({
      response: responseText,
      id: crypto.randomUUID(),
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    
    // Return appropriate error response
    if (error instanceof Error) {
      return NextResponse.json({ 
        error: `Failed to process request: ${error.message}` 
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      error: "An unknown error occurred while processing your request" 
    }, { status: 500 });
  }
}
