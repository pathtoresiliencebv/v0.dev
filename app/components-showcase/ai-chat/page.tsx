"use client";

import React from "react";
import { AnimatedAIChat } from "@/app/components/ui/animated-ai-chat";

export default function AnimatedAIChatShowcase() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">Animated AI Chat Component</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          An interactive AI chat interface with animations, command suggestions, file uploads, and support for multiple AI providers.
        </p>
      </div>
      
      <div className="mb-8 p-4 rounded-lg border border-border bg-card">
        <h2 className="text-lg font-medium mb-4">Features:</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Real-time text generation with AI SDK providers</li>
          <li>Support for OpenAI, Together.ai, and Groq models</li>
          <li>Animated UI with framer-motion for typing effects</li>
          <li>Command palette with suggestions</li>
          <li>File attachment capabilities</li>
          <li>Auto-resizing text area</li>
          <li>Animated typing indicators</li>
          <li>Model selection</li>
        </ul>
      </div>
      
      <div className="my-10">
        <AnimatedAIChat defaultModel="gemma2-9b-it" />
      </div>
    </div>
  );
}
