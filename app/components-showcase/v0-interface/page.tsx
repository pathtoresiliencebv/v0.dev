"use client";

import React from "react";
import V0Interface from "@/app/components/ui/v0-interface";

export default function V0InterfaceShowcase() {
  // Sample code that would be visible in the editor
  const sampleCode = `import { useState } from "react";
import { motion } from "framer-motion";

export function CoolComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-black rounded-lg">
      <motion.h2 
        className="text-2xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Cool Component: {count}
      </motion.h2>
      
      <button
        onClick={() => setCount(prev => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Increment
      </button>
    </div>
  );
}`;

  // Sample console messages
  const consoleMessages = [
    { id: "1", text: "Building project..." },
    { id: "2", text: "Dependencies installed successfully." },
    { id: "3", text: "Starting development server..." },
    { id: "4", text: "Server started on http://localhost:3000" },
  ];

  return (
    <V0Interface 
      title="v0 UI Demo"
      description="A showcase of the v0.dev interface styling"
      consoleMessages={consoleMessages}
    >
      <div className="h-full w-full bg-zinc-950 text-white overflow-auto p-4 font-mono text-sm">
        <pre className="whitespace-pre">
          <code className="text-white/80">
            <span className="text-blue-400">// v0.dev UI Interface Demo</span>
            <br/><br/>
            {sampleCode.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                <span className="text-zinc-500">{index + 1}</span>
                <span className="text-zinc-700 mr-4"> | </span>
                <span 
                  dangerouslySetInnerHTML={{ 
                    __html: line
                      .replace(/import\s+.*?from\s+.*?;/g, match => `<span class="text-blue-400">${match}</span>`)
                      .replace(/export\s+function/g, match => `<span class="text-purple-400">${match}</span>`)
                      .replace(/useState/g, `<span class="text-yellow-400">useState</span>`)
                      .replace(/className=".*?"/g, match => `<span class="text-green-400">${match}</span>`)
                      .replace(/(\{.*?\})/g, match => `<span class="text-orange-400">${match}</span>`)
                  }} 
                />
                <br/>
              </React.Fragment>
            ))}
          </code>
        </pre>
      </div>
    </V0Interface>
  );
} 