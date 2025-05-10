"use client";

import React, { useState } from "react";
import { GithubCopilotChat } from "@/app/components/ui/github-copilot-chat";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Github, Code2, Terminal } from "lucide-react";

const initialMessages = [
  {
    id: "1",
    role: "user" as const,
    content: "I'll help you set up the proper configuration for Vercel deployment and ensure all environment variables are properly handled."
  },
  {
    id: "2",
    role: "assistant" as const,
    content: "Let me search through the codebase to find relevant files and make necessary changes."
  }
];

export default function GithubCopilotShowcase() {
  const [layout, setLayout] = useState<"split" | "editor" | "chat">("split");
  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter mb-4">GitHub Copilot Chat Interface</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A recreation of the GitHub Copilot Chat interface as seen in modern code editors like VS Code.
        </p>
      </div>
      
      <div className="mb-6 flex justify-center">
        <Tabs defaultValue="split" className="w-[400px]" onValueChange={(value) => setLayout(value as any)}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="split">Split View</TabsTrigger>
            <TabsTrigger value="editor">Code Editor</TabsTrigger>
            <TabsTrigger value="chat">Chat Only</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="border rounded-lg overflow-hidden bg-zinc-950 shadow-xl">
        <div className="flex h-[600px]">
          {(layout === "split" || layout === "editor") && (
            <div className={layout === "split" ? "w-1/2 border-r border-zinc-800" : "w-full"}>
              <div className="h-full flex flex-col">
                <div className="border-b border-zinc-800 bg-zinc-950 h-10 flex items-center px-4 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-zinc-400" />
                    <span>worker-configuration.d.ts</span>
                  </div>
                </div>
                <div className="flex-1 overflow-auto bg-zinc-950 p-4 font-mono text-sm">
                  <pre className="text-white/90">
                    <span className="text-zinc-500">1  | </span><span className="text-blue-400">interface</span> <span className="text-green-400">Env</span> {"{"}<br/>
                    <span className="text-zinc-500">2  | </span>  <span className="text-cyan-400">// Vercel KV Configuration</span><br/>
                    <span className="text-zinc-500">3  | </span>  <span className="text-purple-400">KV_REST_API_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">4  | </span>  <span className="text-purple-400">KV_REST_API_TOKEN</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">5  | </span><br/>
                    <span className="text-zinc-500">6  | </span>  <span className="text-cyan-400">// Edge Config</span><br/>
                    <span className="text-zinc-500">7  | </span>  <span className="text-purple-400">EDGE_CONFIG</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">8  | </span><br/>
                    <span className="text-zinc-500">9  | </span>  <span className="text-cyan-400">// Next.js App Router</span><br/>
                    <span className="text-zinc-500">10 | </span>  <span className="text-purple-400">NEXT_PUBLIC_API_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">11 | </span><br/>
                    <span className="text-zinc-500">12 | </span>  <span className="text-cyan-400">// PostgreSQL Configuration</span><br/>
                    <span className="text-zinc-500">13 | </span>  <span className="text-purple-400">POSTGRES_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">14 | </span>  <span className="text-purple-400">POSTGRES_URL_NON_POOLING</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">15 | </span>  <span className="text-purple-400">POSTGRES_USER</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">16 | </span>  <span className="text-purple-400">POSTGRES_HOST</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">17 | </span>  <span className="text-purple-400">POSTGRES_PASSWORD</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">18 | </span>  <span className="text-purple-400">POSTGRES_DATABASE</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">19 | </span><br/>
                    <span className="text-zinc-500">20 | </span>  <span className="text-cyan-400">// Redis/KV Configuration</span><br/>
                    <span className="text-zinc-500">21 | </span>  <span className="text-purple-400">KV_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">22 | </span>  <span className="text-purple-400">REDIS_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">23 | </span><br/>
                    <span className="text-zinc-500">24 | </span>  <span className="text-cyan-400">// API Keys</span><br/>
                    <span className="text-zinc-500">25 | </span>  <span className="text-purple-400">OPENAI_API_KEY</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">26 | </span>  <span className="text-purple-400">ANTHROPIC_API_KEY</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">27 | </span>  <span className="text-purple-400">GROQ_API_KEY</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">28 | </span>{"}"}<br/>
                  </pre>
                </div>
              </div>
            </div>
          )}
          
          {(layout === "split" || layout === "chat") && (
            <div className={layout === "split" ? "w-1/2" : "w-full"}>
              <GithubCopilotChat initialMessages={initialMessages} />
            </div>
          )}
        </div>
        
        <div className="h-10 border-t border-zinc-800 flex items-center px-4 bg-zinc-950 text-white/70 text-xs">
          <div className="flex items-center gap-2">
            <Terminal className="h-3.5 w-3.5" />
            <span>VS Code with GitHub Copilot Chat</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>Realistic GitHub Copilot Chat interface styling</li>
          <li>Interactive chat with AI assistance</li>
          <li>Code file search and reference viewing</li>
          <li>Syntax highlighted code blocks</li>
          <li>Typing indicators and animations</li>
          <li>Multiple layout options for different use cases</li>
        </ul>
      </div>
    </div>
  );
} 