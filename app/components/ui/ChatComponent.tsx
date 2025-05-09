import { useState } from "react";
import { useChat } from "ai/react";

export default function ChatComponent() {
  const [provider, setProvider] = useState<"together" | "groq">("together");
  const [model, setModel] = useState<string>("");
  
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useChat({
    api: "/api/chat",
    body: {
      provider,
      model: model || undefined,
    },
  });

  return (
    <div className="flex flex-col h-[600px] w-full max-w-3xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <select
          value={provider}
          onChange={(e) => setProvider(e.target.value as "together" | "groq")}
          className="p-2 border rounded"
          aria-label="Select AI provider"
        >
          <option value="together">Together AI</option>
          <option value="groq">Groq</option>
        </select>
        
        <input
          type="text"
          placeholder="Model name (optional)"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="p-2 border rounded flex-1"
        />
      </div>
      
      <div className="flex-1 overflow-auto border rounded p-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-3 p-3 rounded-lg ${
              message.role === "user"
                ? "bg-blue-100 ml-auto max-w-[80%]"
                : "bg-gray-100 max-w-[80%]"
            }`}
          >
            <div className="font-semibold">
              {message.role === "user" ? "You" : "AI"}
            </div>
            <div className="whitespace-pre-wrap">{message.content}</div>
          </div>
        ))}
        
        {isLoading && (
          <div className="mb-3 p-3 rounded-lg bg-gray-100 max-w-[80%]">
            <div className="font-semibold">AI</div>
            <div className="animate-pulse">Thinking...</div>
          </div>
        )}
        
        {error && (
          <div className="mb-3 p-3 rounded-lg bg-red-100 max-w-[80%]">
            <div className="font-semibold">Error</div>
            <div>{error.message}</div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Send
        </button>
      </form>
    </div>
  );
} 