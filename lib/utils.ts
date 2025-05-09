import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for the application

/**
 * Creates a delay for the specified duration
 * @param ms - The number of milliseconds to delay
 * @returns A promise that resolves after the specified duration
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Determines the provider for a given model name
 * @param model - The model name to check
 * @returns The provider name ("together", "groq", or "unknown")
 */
export const getModelProvider = (model: string): "together" | "groq" | "unknown" => {
  // Together AI models typically start with these prefixes
  const togetherPrefixes = [
    "meta-llama",
    "mistralai",
    "deepseek",
    "qwen",
    "togethercomputer",
    "gemma",
    "nvidia",
    "codellama",
    "Qwen",
    "Llama",
    "Mixtral"
  ];

  // Groq models typically use these names
  const groqModels = [
    "llama3",
    "llama-3",
    "mixtral-8x7b",
    "gemma-7b",
    "claude"
  ];

  // Check if the model belongs to Together AI
  for (const prefix of togetherPrefixes) {
    if (model.startsWith(prefix)) {
      return "together";
    }
  }

  // Check if the model belongs to Groq
  for (const modelName of groqModels) {
    if (model.includes(modelName)) {
      return "groq";
    }
  }

  // Default to unknown if no match is found
  return "unknown";
};
