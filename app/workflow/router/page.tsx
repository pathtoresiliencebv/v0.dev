'use client';

import { useState } from "react";
import Link from "next/link";

export default function RouterWorkflowPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const exampleQueries = [
    "Write a Python function to find the nth Fibonacci number with memoization",
    "Sally earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?",
    "Write a short story about a dragon who's afraid of fire"
  ];
  
  const handleUseExample = (example: string) => {
    setQuery(example);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setError("Please enter a query");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/workflow/router", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
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
        <h1 className="text-2xl font-bold">Router Workflow</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="w-full max-w-5xl space-y-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Task-Based Model Routing</h2>
          <p className="mb-6 text-sm text-gray-600">
            This workflow analyzes your query and automatically routes it to the most appropriate AI model based on the task type:
            code generation, reasoning/math, or creative writing.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">
                Your Query:
              </label>
              <textarea
                id="query"
                rows={3}
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter a question, task, or prompt..."
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Example Queries:</h3>
              <div className="flex flex-wrap gap-2">
                {exampleQueries.map((example, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-xs bg-gray-100 hover:bg-gray-200 rounded px-2 py-1 transition-colors"
                    onClick={() => handleUseExample(example)}
                  >
                    {example.length > 40 ? example.substring(0, 40) + "..." : example}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Submit Query"}
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
              <div className="mb-4 flex flex-col gap-2 rounded-md bg-gray-50 p-3">
                <h3 className="text-lg font-semibold">Routing Information</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="font-medium">Task Type:</span>
                  <span className="capitalize">{result.routing.task}</span>
                  
                  <span className="font-medium">Model Used:</span>
                  <span>{result.routing.model}</span>
                  
                  <span className="font-medium">Confidence:</span>
                  <span>{Math.round(result.routing.confidence * 100)}%</span>
                  
                  <span className="font-medium">Reason:</span>
                  <span>{result.routing.reason}</span>
                </div>
              </div>
              
              <h3 className="mb-3 text-lg font-semibold">Response</h3>
              <div className="whitespace-pre-wrap rounded-md bg-gray-50 p-4 text-gray-800">
                {result.result}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
} 