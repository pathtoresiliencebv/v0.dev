'use client';

import { useState } from "react";
import Link from "next/link";

export default function ParallelWorkflowPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/workflow/parallel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="mb-8 flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="text-sm hover:underline">
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">Parallel Workflow</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="w-full max-w-5xl space-y-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Send a prompt to multiple AI models</h2>
          <p className="mb-6 text-sm text-gray-600">
            This demonstration runs your prompt through multiple AI models in parallel,
            then aggregates their responses into a final, comprehensive answer.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
                Enter your prompt:
              </label>
              <textarea
                id="prompt"
                rows={3}
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask a question or provide a task..."
              />
            </div>
            
            <button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Submit"}
            </button>
          </form>
        </div>
        
        {error && (
          <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}
        
        {result && (
          <div className="space-y-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Final Aggregated Response</h3>
              <p className="whitespace-pre-wrap text-gray-800">{result.finalResponse}</p>
            </div>
            
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Individual Model Responses</h3>
              <div className="space-y-4">
                {result.modelResponses.map((modelResponse: any, index: number) => (
                  <div key={index} className="rounded border p-4">
                    <h4 className="mb-2 font-medium">
                      Model: {modelResponse.model}
                    </h4>
                    <p className="whitespace-pre-wrap text-sm">{modelResponse.response}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 