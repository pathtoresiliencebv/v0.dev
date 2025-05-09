'use client';

import { useState } from "react";
import Link from "next/link";

export default function SequentialWorkflowPage() {
  const [inputQuery, setInputQuery] = useState("");
  const [promptChain, setPromptChain] = useState<string[]>([
    "Given the problem, ONLY extract any relevant numerical information and how it can be used.",
    "Given the information extracted, ONLY express the steps you would take to solve the problem.",
    "Given the steps, express the final answer to the problem."
  ]);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const handleAddPrompt = () => {
    setPromptChain([...promptChain, ""]);
  };
  
  const handleRemovePrompt = (index: number) => {
    setPromptChain(promptChain.filter((_, i) => i !== index));
  };
  
  const handleChangePrompt = (index: number, value: string) => {
    const newPrompts = [...promptChain];
    newPrompts[index] = value;
    setPromptChain(newPrompts);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputQuery.trim() || promptChain.some(p => !p.trim())) {
      setError("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/workflow/sequential", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          inputQuery, 
          promptChain,
        }),
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
        <h1 className="text-2xl font-bold">Sequential Workflow</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="w-full max-w-5xl space-y-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Chain multiple AI steps</h2>
          <p className="mb-6 text-sm text-gray-600">
            This demonstration runs your input through a sequence of AI models, where each step's output becomes the input for the next step.
            Perfect for breaking down complex problems into manageable steps.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="input-query" className="block text-sm font-medium text-gray-700 mb-1">
                Initial Input:
              </label>
              <textarea
                id="input-query"
                rows={3}
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Enter a math problem, text to process, or any input for the first step..."
              />
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Prompt Chain Steps:</h3>
                <button
                  type="button"
                  onClick={handleAddPrompt}
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  + Add Step
                </button>
              </div>
              
              {promptChain.map((prompt, index) => (
                <div key={index} className="relative rounded-md border p-4">
                  <div className="flex items-start justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Step {index + 1}:
                    </label>
                    {promptChain.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePrompt(index)}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <textarea
                    rows={2}
                    className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={prompt}
                    onChange={(e) => handleChangePrompt(index, e.target.value)}
                    placeholder={`Prompt for step ${index + 1}...`}
                  />
                </div>
              ))}
            </div>
            
            <button
              type="submit"
              disabled={loading || !inputQuery.trim() || promptChain.some(p => !p.trim())}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Run Sequential Workflow"}
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
              <h3 className="mb-3 text-lg font-semibold">Final Result</h3>
              <p className="whitespace-pre-wrap text-gray-800">{result.finalResponse}</p>
            </div>
            
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Step-by-Step Progression</h3>
              <div className="space-y-4">
                {result.stepResponses.map((stepResponse: any) => (
                  <div key={stepResponse.step} className="rounded border p-4">
                    <h4 className="mb-2 font-medium">
                      Step {stepResponse.step}
                    </h4>
                    <div className="mb-2">
                      <span className="text-sm font-medium text-gray-500">Prompt:</span>
                      <p className="text-sm bg-gray-50 p-2 rounded mt-1">{stepResponse.prompt}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Response:</span>
                      <p className="whitespace-pre-wrap text-sm mt-1">{stepResponse.response}</p>
                    </div>
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