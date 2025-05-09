'use client';

import { useState } from "react";
import Link from "next/link";

export default function EvaluatorWorkflowPage() {
  const [task, setTask] = useState("");
  const [criteria, setCriteria] = useState("");
  const [maxIterations, setMaxIterations] = useState(3);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const exampleTasks = [
    {
      task: "Write a one-paragraph product description for a new smartphone",
      criteria: "Must mention at least 3 features, include a price point, and use persuasive language. Keep it under 100 words.",
    },
    {
      task: "Draft a function to sort an array of objects by a specific property in JavaScript",
      criteria: "The code must be efficient (O(n log n)), handle edge cases like null values, include good variable names, and have comments explaining the logic.",
    },
  ];
  
  const handleUseExample = (example: { task: string, criteria: string }) => {
    setTask(example.task);
    setCriteria(example.criteria);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!task.trim() || !criteria.trim()) {
      setError("Please fill in all required fields");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch("/api/workflow/evaluator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          task,
          criteria,
          maxIterations
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
        <h1 className="text-2xl font-bold">Evaluator Workflow</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="w-full max-w-5xl space-y-8">
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Iterative Improvement Loop</h2>
          <p className="mb-6 text-sm text-gray-600">
            This workflow repeatedly generates and evaluates AI responses, improving with each iteration until the output meets your criteria or reaches the maximum number of iterations.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">
                Task Description:
              </label>
              <textarea
                id="task"
                rows={3}
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Describe the task for the AI to complete..."
              />
            </div>
            
            <div>
              <label htmlFor="criteria" className="block text-sm font-medium text-gray-700 mb-1">
                Evaluation Criteria:
              </label>
              <textarea
                id="criteria"
                rows={3}
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                placeholder="Specify the criteria for evaluating the response..."
              />
            </div>
            
            <div>
              <label htmlFor="max-iterations" className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Iterations:
              </label>
              <input
                id="max-iterations"
                type="number"
                min={1}
                max={5}
                className="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={maxIterations}
                onChange={(e) => setMaxIterations(parseInt(e.target.value) || 3)}
              />
              <p className="mt-1 text-xs text-gray-500">
                Limit: 5 iterations (higher values will take longer to process)
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Example Tasks:</h3>
              <div className="flex flex-col gap-2">
                {exampleTasks.map((example, index) => (
                  <button
                    key={index}
                    type="button"
                    className="text-left text-xs bg-gray-100 hover:bg-gray-200 rounded px-3 py-2 transition-colors"
                    onClick={() => handleUseExample(example)}
                  >
                    <span className="font-medium">Task:</span> {example.task}
                    <br />
                    <span className="font-medium">Criteria:</span> {example.criteria}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={loading || !task.trim() || !criteria.trim()}
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
              {loading ? "Processing..." : "Run Evaluator Workflow"}
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
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">Final Result</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Final Score:</span>
                  <span className={`rounded-full px-2 py-1 text-xs font-medium ${
                    result.passed 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {result.finalScore}/10 {result.passed ? "(Passed)" : "(Not Passed)"}
                  </span>
                </div>
              </div>
              <div className="whitespace-pre-wrap rounded-md bg-gray-50 p-4 text-gray-800">
                {result.finalResponse}
              </div>
            </div>
            
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold">Iteration History</h3>
              <div className="space-y-4">
                {result.iterations.map((iteration: any) => (
                  <div key={iteration.iteration} className="rounded border p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="font-medium">
                        Iteration {iteration.iteration}
                      </h4>
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        iteration.evaluation.passed 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        Score: {iteration.evaluation.score}/10
                      </span>
                    </div>
                    
                    <div className="mb-3 whitespace-pre-wrap rounded bg-gray-50 p-3 text-sm">
                      {iteration.response}
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium">Feedback:</span>
                      <p className="mt-1">{iteration.evaluation.feedback}</p>
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