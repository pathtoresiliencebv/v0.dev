"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  Github, 
  Settings, 
  Share2, 
  ChevronDown, 
  Code2, 
  Sparkles,
  ArrowLeft,
  Play,
  Rocket,
  FileCode,
  MessageSquare,
  PanelRight,
  SplitSquareVertical,
  Folder,
  Plus,
  Command,
  Terminal,
  LayoutPanelLeft,
  Copy,
  ExternalLink
} from "lucide-react";
import { AnimatedAIChat } from "./animated-ai-chat";

interface V0HeaderProps {
  title?: string;
  isPersonal?: boolean;
  isPrivate?: boolean;
  showIntegrations?: boolean;
  onDeploy?: () => void;
}

function V0Header({
  title = "Personal",
  isPersonal = true,
  isPrivate = true,
  showIntegrations = true,
  onDeploy
}: V0HeaderProps) {
  return (
    <header className="h-14 border-b border-zinc-800 bg-black flex items-center px-4 sticky top-0 z-50">
      <div className="flex items-center gap-2 mr-4">
        <Link href="/" className="flex items-center mr-2">
          <V0Logo className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="h-5 w-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white text-xs font-medium">
              {isPersonal && "P"}
            </div>
            <span className="text-sm font-medium text-white">{title}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-zinc-400" />
        </div>
      </div>
      
      <div className="h-6 w-px bg-zinc-800 mx-3" />
      
      <div className="flex items-center gap-2">
        <button className="h-8 px-3 text-sm rounded-lg border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white flex items-center gap-1.5">
          <Plus className="h-3.5 w-3.5" />
          Project
        </button>
        
        {isPrivate && (
          <div className="flex items-center gap-1.5 ml-3 px-2 py-1 bg-zinc-800/60 rounded text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 bg-amber-400 rounded-full"></span>
            Private
          </div>
        )}
      </div>
      
      <div className="ml-auto flex items-center gap-2">
        {showIntegrations && (
          <div className="flex items-center gap-2 mr-2">
            <span className="bg-zinc-800 text-xs text-zinc-400 px-1.5 py-0.5 rounded">
              <span className="mr-1">📦</span>
              <span className="mr-1">⚡</span>
              Integrations
            </span>
          </div>
        )}
        
        <button 
          onClick={onDeploy} 
          className="h-8 px-3 text-sm rounded-lg bg-white text-black hover:bg-zinc-200 flex items-center gap-1.5"
        >
          <Rocket className="h-3.5 w-3.5" />
          Deploy
        </button>
        
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white">
          <span className="text-xs font-medium">P</span>
        </div>
      </div>
    </header>
  );
}

interface CodeEditorProps {
  showCode?: boolean;
  showPreview?: boolean;
  onToggleView?: (view: 'code' | 'preview') => void;
  children?: React.ReactNode;
}

function CodeEditor({
  showCode = true,
  showPreview = false,
  onToggleView,
  children
}: CodeEditorProps) {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b border-zinc-800 h-12 flex items-center px-2">
        <div className="flex items-center gap-1">
          <button 
            className={cn(
              "px-3 py-1.5 text-sm rounded-md flex items-center gap-1.5", 
              showPreview ? "bg-zinc-800/60 text-white" : "text-zinc-400 hover:text-white"
            )}
            onClick={() => onToggleView?.('preview')}
          >
            <Play className="h-3.5 w-3.5" />
            Preview
          </button>
          <button 
            className={cn(
              "px-3 py-1.5 text-sm rounded-md flex items-center gap-1.5", 
              showCode ? "bg-zinc-800/60 text-white" : "text-zinc-400 hover:text-white"
            )}
            onClick={() => onToggleView?.('code')}
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </button>
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <button 
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800/60"
            aria-label="Toggle layout panel"
          >
            <LayoutPanelLeft className="h-4 w-4" />
          </button>
          <button 
            className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800/60"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 border-r border-zinc-800 overflow-auto bg-zinc-950">
          <div className="p-2">
            <div className="flex items-center text-zinc-400 px-2 py-1.5 hover:text-white cursor-pointer">
              <ChevronDown className="h-4 w-4 mr-1.5" />
              <span className="text-sm">app</span>
            </div>
            
            <div className="flex items-center text-zinc-400 px-2 py-1.5 ml-3 hover:text-white cursor-pointer">
              <ChevronDown className="h-4 w-4 mr-1.5" />
              <span className="text-sm">components</span>
            </div>
            
            <div className="flex items-center text-zinc-400 px-2 py-1.5 ml-6 hover:text-white cursor-pointer">
              <FileCode className="h-4 w-4 mr-1.5" />
              <span className="text-sm">chat-interface.tsx</span>
            </div>
            
            <div className="flex items-center text-zinc-400 px-2 py-1.5 ml-3 hover:text-white cursor-pointer">
              <ChevronDown className="h-4 w-4 mr-1.5" />
              <span className="text-sm">api</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto bg-black">
          {children || (
            <div className="p-4 text-zinc-400 flex items-center justify-center h-full">
              <div className="text-center max-w-md">
                <Code2 className="h-12 w-12 mb-4 mx-auto text-zinc-500" />
                <h3 className="text-lg font-medium text-white mb-2">Code Editor</h3>
                <p>View and edit code for this project. Your changes will be automatically saved.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface V0ConsoleProps {
  messages?: Array<{id: string; text: string}>;
}

function V0Console({ messages = [] }: V0ConsoleProps) {
  return (
    <div className="h-64 border-t border-zinc-800 bg-black overflow-hidden flex flex-col">
      <div className="h-9 border-b border-zinc-800 bg-zinc-950 flex items-center px-4">
        <button className="text-sm text-white bg-zinc-800 px-3 py-1 rounded">Console</button>
        <div className="ml-auto flex items-center gap-1">
          <button 
            className="text-zinc-400 hover:text-white p-1 rounded hover:bg-zinc-800/60"
            aria-label="Terminal options"
          >
            <Terminal className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto p-4 text-zinc-400 text-sm font-mono">
        {messages.length > 0 ? (
          messages.map(message => (
            <div key={message.id} className="mb-2">
              <span>{message.text}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-zinc-500">
            No logs available to display
          </div>
        )}
      </div>
    </div>
  );
}

function V0Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 40 20"
      width="16"
      className={className}
      fill="currentColor"
    >
      <title>Logo v0</title>
      <path
        clipRule="evenodd"
        d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
        fillRule="evenodd"
      ></path>
      <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"></path>
    </svg>
  );
}

interface ProjectProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  showConsole?: boolean;
  consoleMessages?: Array<{id: string; text: string}>;
}

interface V0ThoughtProps {
  thought: string;
  thinkingTime?: string;
}

function V0Thought({ thought, thinkingTime = "8 seconds" }: V0ThoughtProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <V0Logo className="w-5 h-5 text-white" />
        <div className="flex items-center gap-1 text-zinc-400 text-sm">
          <span>Thought for</span>
          <div className="flex items-center gap-1">
            <span>{thinkingTime}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </div>
        </div>
      </div>
      <p className="text-white text-base">{thought}</p>
    </div>
  );
}

interface VersionInfoProps {
  version: string | number;
  files: Array<{
    path: string;
    status: "Generated" | "Edited" | "Generating";
  }>;
}

function VersionInfo({ version, files }: VersionInfoProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center">
          <ChevronDown className="h-4 w-4 text-zinc-400 mr-1" />
          <span className="text-sm font-medium text-white">Version {version}</span>
        </div>
        
        <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">Latest</span>
        
        <div className="ml-auto">
          <button className="px-2 py-1 text-sm rounded bg-zinc-800 text-white">View</button>
        </div>
      </div>
      
      <div className="space-y-1">
        {files.map((file, index) => (
          <div key={index} className="flex items-center gap-3 text-sm py-1">
            <div className="w-4 h-4 rounded-full border border-emerald-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
            </div>
            <span className="text-zinc-300">{file.path}</span>
            <span className="ml-auto text-zinc-500">{file.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function V0Interface({
  title = "Project",
  description = "AI-powered interface with v0.dev styling",
  children,
  showConsole = true,
  consoleMessages = []
}: ProjectProps) {
  const [view, setView] = useState<'code' | 'preview'>('code');
  const [showAIChat, setShowAIChat] = useState(false);
  
  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <V0Header title={title} />
      
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="border-b border-zinc-800 p-4">
            <div className="mb-4">
              <V0Thought 
                thought="I'll recreate the v0 interface shown in your screenshots as accurately as possible using Next.js and Tailwind CSS." 
              />
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">v0 Interface Recreation</h2>
              <p className="text-zinc-400">
                I'll recreate the v0 interface shown in your screenshots using Next.js and Tailwind CSS. The interface includes a dark-themed main page with a sidebar, header, and various UI components.
              </p>
            </div>
            
            <VersionInfo 
              version={2}
              files={[
                { path: "app/page.tsx", status: "Generated" },
                { path: "components/sidebar.tsx", status: "Generated" },
                { path: "components/v0-interface.tsx", status: "Generating" }
              ]}
            />
            
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setShowAIChat(!showAIChat)}
                className="px-3 py-1.5 text-sm rounded border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                {showAIChat ? "Hide AI Chat" : "Show AI Chat"}
              </button>
              
              <div className="flex items-center gap-2">
                <button 
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800/60"
                  aria-label="Share project"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button 
                  className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800/60"
                  aria-label="Project settings"
                >
                  <Settings className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          {showAIChat ? (
            <div className="flex-1 bg-black overflow-hidden">
              <AnimatedAIChat defaultModel="gpt-4o" />
            </div>
          ) : (
            <CodeEditor
              showCode={view === 'code'}
              showPreview={view === 'preview'}
              onToggleView={setView}
            >
              {children}
            </CodeEditor>
          )}
          
          {showConsole && <V0Console messages={consoleMessages} />}
        </div>
      </div>

      <div className="border-t border-zinc-800 px-4 py-2 text-xs text-zinc-500">
        v0 may make mistakes. Please use with discretion.
      </div>
    </div>
  );
}

export default V0Interface; 