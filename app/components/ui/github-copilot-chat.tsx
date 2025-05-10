"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Github, 
  Search,
  File,
  ArrowRight,
  Terminal,
  X,
  Send,
  RefreshCw,
  ChevronDown,
  ChevronRight,
  Plus,
  Copy
} from "lucide-react";
import { AnimatedAIChat } from "./animated-ai-chat";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
}

interface CodeSnippet {
  language: string;
  code: string;
}

interface CopilotSuggestion {
  title: string;
  description: string;
  onClick: () => void;
}

interface CopilotChatProps {
  initialMessages?: ChatMessage[];
  onSendMessage?: (message: string) => void;
  fullScreen?: boolean;
}

function SearchResult({ file, highlight, onClick }: { file: string, highlight?: string, onClick?: () => void }) {
  return (
    <div className="flex items-center text-xs py-1 px-1 hover:bg-zinc-700/30 cursor-pointer rounded" onClick={onClick}>
      <div className="w-4 h-4 flex-shrink-0 mr-2">
        <File className="w-4 h-4 text-blue-400" />
      </div>
      <div className="truncate text-zinc-300">
        {file}
        {highlight && <span className="text-amber-400"> — {highlight}</span>}
      </div>
    </div>
  );
}

function CodeBlock({ language = "typescript", code }: { language?: string, code: string }) {
  return (
    <div className="rounded bg-zinc-900 overflow-hidden my-2 text-sm relative group">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800/50 text-xs text-zinc-400">
        <span>{language}</span>
        <button 
          className="p-1 hover:bg-zinc-700/50 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          <Copy className="w-3.5 h-3.5" />
        </button>
      </div>
      <pre className="p-4 overflow-auto">
        <code className="text-zinc-200">
          {code}
        </code>
      </pre>
    </div>
  );
}

export function GithubCopilotChat({
  initialMessages = [],
  onSendMessage,
  fullScreen = false
}: CopilotChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [currentReference, setCurrentReference] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);
    
    // Focus the input after sending
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
    
    // Simulate Assistant response
    setTimeout(() => {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'll help you set up the proper configuration for Vercel deployment and ensure all environment variables are properly handled. Let me search through the codebase to find relevant files and make necessary changes.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
      
      // Simulate search results after assistant response
      setTimeout(() => {
        setSearchResults([
          "app/lib/server/llm",
          "worker-configuration.d.ts",
          "prompts.ts:28-40", 
          "constants.ts:1-4", 
          "env.server.ts", 
          "bindings.sh:1-17"
        ]);
      }, 800);
    }, 1500);
  };

  const handleSearchClick = (file: string) => {
    setCurrentReference(file);
    setSearchResults([]);
  };

  return (
    <div className={cn(
      "flex flex-col bg-black border-l border-zinc-800 text-white",
      fullScreen ? "h-screen" : "h-full"
    )}>
      {/* Header */}
      <div className="border-b border-zinc-800 flex items-center justify-between p-2 h-10">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm px-2">GitHub Copilot</span>
        </div>
        
        <div className="flex items-center">
          <button className="p-1 rounded hover:bg-zinc-800" aria-label="Close">
            <X className="h-4 w-4 text-zinc-400" />
          </button>
        </div>
      </div>
      
      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto flex flex-col p-4 space-y-4">
        {currentReference ? (
          <div className="text-sm">
            <div className="flex items-center gap-2 mb-2 text-zinc-400">
              <button 
                className="hover:text-white" 
                onClick={() => setCurrentReference(null)}
                aria-label="Go back"
              >
                <ArrowRight className="h-4 w-4 transform rotate-180" />
              </button>
              <div className="flex items-center">
                <span>Used 1 reference</span>
              </div>
            </div>
            
            <div className="text-sm font-mono text-white rounded bg-zinc-900 overflow-hidden">
              <div className="bg-zinc-800 text-zinc-300 px-3 py-1 text-xs">
                {currentReference}
              </div>
              <div className="p-3 overflow-auto">
                {currentReference === "worker-configuration.d.ts" && (
                  <pre className="whitespace-pre-wrap">
                    <span className="text-zinc-500">1  | </span><span className="text-blue-400">interface</span> <span className="text-green-400">Env</span> {"{"}<br/>
                    <span className="text-zinc-500">2  | </span>  <span className="text-cyan-400">// Vercel KV Configuration</span><br/>
                    <span className="text-zinc-500">3  | </span>  <span className="text-purple-400">KV_REST_API_URL</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">4  | </span>  <span className="text-purple-400">KV_REST_API_TOKEN</span>: <span className="text-yellow-400">string</span>;<br/>
                    {/* Additional code content can be added here */}
                    <span className="text-zinc-500">12 | </span>  <span className="text-purple-400">POSTGRES_URL_UNPOOLED</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">13 | </span>  <span className="text-purple-400">POSTGRES_HOST</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">14 | </span>  <span className="text-purple-400">POSTGRES_USER</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">15 | </span>  <span className="text-purple-400">POSTGRES_PASSWORD</span>: <span className="text-yellow-400">string</span>;<br/>
                    <span className="text-zinc-500">16 | </span>  <span className="text-purple-400">POSTGRES_DATABASE</span>: <span className="text-yellow-400">string</span>;<br/>
                  </pre>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={cn(
                  "max-w-full",
                  message.role === "user" ? "self-end" : "self-start"
                )}
              >
                <div className="flex items-start gap-2">
                  {message.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center">
                      <Github className="w-4 h-4" />
                    </div>
                  )}
                  
                  <div className={cn(
                    "rounded-lg px-3 py-2 text-sm",
                    message.role === "user" 
                      ? "bg-blue-600 text-white" 
                      : "bg-zinc-800 text-zinc-200"
                  )}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="self-start">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-800 flex-shrink-0 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  
                  <div className="bg-zinc-800 text-white rounded-lg px-3 py-2 text-sm flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {searchResults.length > 0 && (
              <div className="self-start mt-2 ml-8">
                <div className="text-xs text-zinc-400 mb-1">Searched codebase for "environment variables configuration env.server utils database configuration"</div>
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-md p-2 max-w-md">
                  <div className="text-xs font-medium text-zinc-300 mb-1">8 results</div>
                  <div className="space-y-0.5 max-h-40 overflow-y-auto pr-1">
                    {searchResults.map((file, index) => (
                      <SearchResult 
                        key={index} 
                        file={file} 
                        onClick={() => handleSearchClick(file)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {/* Input Area */}
      <div className="border-t border-zinc-800 p-3">
        <form onSubmit={handleSendMessage} className="flex items-center">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask GitHub Copilot..."
            className="flex-1 bg-zinc-800 border border-zinc-700 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
          />
          <button 
            type="submit" 
            disabled={!inputValue.trim() || isTyping}
            className={cn(
              "ml-2 p-2 rounded-md",
              inputValue.trim() && !isTyping 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-zinc-800 text-zinc-500"
            )}
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default GithubCopilotChat; 