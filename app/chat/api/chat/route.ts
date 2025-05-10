import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { togetherai } from '@ai-sdk/togetherai';
import { groq } from '@ai-sdk/groq';
import { NextResponse } from "next/server";

export const runtime = "edge";

// Define interface for chat messages
interface ChatMessage {
  role: string;
  content: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  model?: string;
  temperature?: number;
  systemPrompt?: string;
}

/**
 * Helper function to determine the appropriate provider for a model
 */
function getModelProvider(modelName: string) {
  if (modelName.includes('llama') || modelName.includes('mistral') || 
      modelName.includes('deepseek') || modelName.includes('qwen') ||
      modelName.includes('togethercomputer') || modelName.includes('Qwen') ||
      modelName.includes('Mixtral') || modelName.includes('nvidia')) {
    return togetherai(modelName);
  } else if (modelName.includes('groq') || modelName.includes('gemma') || 
             modelName.includes('claude') || modelName.includes('llama3') || 
             modelName.includes('llama-3')) {
    return groq(modelName);
  } else {
    return openai(modelName);
  }
}

export async function POST(req: Request) {
  try {
    // Parse request body
    const body = await req.json() as ChatRequest;
    const { 
      messages, 
      model = "meta-llama/Llama-3.1-8B-Instruct-Turbo-Free", 
      temperature = 0.7,
      systemPrompt
    } = body;

    // Validate messages
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ 
        error: "Invalid or missing messages parameter" 
      }, { status: 400 });
    }
    
    try {
      // Get the appropriate provider for the model
      const modelProvider = getModelProvider(model);
      
      // Format for streamText
      const formattedMessages = messages.map(msg => ({
        role: msg.role as "system" | "user" | "assistant",
        content: msg.content
      }));
      
      // Use streamText for response
      const response = await streamText({
        model: modelProvider,
        messages: formattedMessages,
        system: systemPrompt,
        temperature
      });
      
      // Get the full text response
      const responseText = await response.text;
      
      // Return the formatted response
      return NextResponse.json({
        response: responseText,
        id: crypto.randomUUID(),
      });
    } catch (error) {
      console.error("Error with AI provider:", error);
      
      // Try with a fallback model if the original fails
      try {
        console.log("Attempting fallback to Together AI default model...");
        const fallbackProvider = togetherai("meta-llama/Llama-3.1-8B-Instruct-Turbo-Free");
        
        const formattedMessages = messages.map(msg => ({
          role: msg.role as "system" | "user" | "assistant",
          content: msg.content
        }));
        
        const fallbackResponse = await streamText({
          model: fallbackProvider,
          messages: formattedMessages,
          system: systemPrompt,
          temperature
        });
        
        const fallbackText = await fallbackResponse.text;
        
        return NextResponse.json({
          response: fallbackText,
          id: crypto.randomUUID(),
          fallback: true,
          original_error: error instanceof Error ? error.message : "Unknown error with original model"
        });
      } catch (fallbackError) {
        throw error; // If fallback fails too, throw the original error
      }
    }
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
