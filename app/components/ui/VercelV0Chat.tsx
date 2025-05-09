"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  FileIcon,
  Figma,
  LayoutIcon,
  UserIcon,
  ArrowUpIcon,
  Paperclip,
  PlusIcon,
  ChevronDownIcon,
  Maximize2Icon,
} from "lucide-react";
import { useAutoResizeTextarea, AnimatedTextarea } from "./AnimatedTextarea";

export function VercelV0Chat() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 60,
    maxHeight: 200,
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) {
        setValue("");
        adjustHeight(true);
      }
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-white">
        What can I help you ship?
      </h1>

      <div className="w-full">
        <div className="relative bg-zinc-950 rounded-xl border border-zinc-800 shadow-lg">
          <div className="overflow-y-auto">
            <AnimatedTextarea
              ref={textareaRef}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                adjustHeight();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Ask v0 to build..."
              className={cn(
                "w-full px-4 py-4",
                "resize-none",
                "bg-transparent",
                "border-none",
                "text-white text-sm",
                "focus:outline-none",
                "focus-visible:ring-0 focus-visible:ring-offset-0",
                "placeholder:text-zinc-500 placeholder:text-sm",
                "min-h-[60px]"
              )}
              style={{
                overflow: "hidden",
              }}
              showRing={false}
            />
          </div>

          <div className="flex items-center justify-between p-3 border-t border-zinc-800">
            <div className="flex items-center gap-1">
              <ProjectSelector />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Expand"
                className="group p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Maximize2Icon className="w-4 h-4 text-zinc-400" />
              </button>
              <button
                type="button"
                aria-label="Attach file"
                className="group p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <Paperclip className="w-4 h-4 text-zinc-400" />
              </button>
              <button
                type="button"
                aria-label="Send message"
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  value.trim()
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "text-zinc-400 hover:bg-zinc-800"
                )}
              >
                <ArrowUpIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <ActionButton
            icon={<ImageIcon className="w-4 h-4" />}
            label="Clone a Screenshot"
          />
          <ActionButton
            icon={<Figma className="w-4 h-4" />}
            label="Import from Figma"
          />
          <ActionButton
            icon={<FileIcon className="w-4 h-4" />}
            label="Upload a Project"
          />
          <ActionButton
            icon={<LayoutIcon className="w-4 h-4" />}
            label="Landing Page"
          />
          <ActionButton
            icon={<UserIcon className="w-4 h-4" />}
            label="Sign Up Form"
          />
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-12 pt-8 border-t border-zinc-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-white">From the Community</h2>
          <a href="#" className="text-sm text-zinc-400 hover:text-white flex items-center gap-1">
            Browse All
            <ChevronDownIcon className="w-4 h-4" />
          </a>
        </div>
        <p className="text-zinc-400 text-sm mb-6">Explore what the community is building with v0.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <CommunityCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectSelector() {
  return (
    <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-200 rounded-lg border border-dashed border-zinc-700 hover:border-zinc-600 transition-colors">
      <span>No project selected</span>
      <ChevronDownIcon className="w-4 h-4" />
    </button>
  );
}

function CommunityCard() {
  return (
    <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 hover:border-zinc-700 transition-colors">
      <div className="h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-4">
        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
          <LayoutIcon className="w-8 h-8" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-white">Project Example</h3>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">
            U
          </div>
          <span className="text-xs text-zinc-400">8.1K Forks</span>
        </div>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

function ActionButton({ icon, label }: ActionButtonProps) {
  return (
    <button
      type="button"
      className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-full border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </button>
  );
} 