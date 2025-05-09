import React from 'react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
}

interface ChatInterfaceProps {
  messages: Message[]
}

export default function ChatInterface({ messages }: ChatInterfaceProps) {
  return (
    <div className="flex flex-col space-y-6 w-full">
      {messages.map((message) => (
        <div 
          key={message.id}
          className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'}`}
        >
          <div className="flex items-start gap-3 max-w-3xl">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white 
              ${message.role === 'user' ? 'bg-zinc-700' : 'bg-blue-600'}`}
            >
              {message.role === 'user' ? 'U' : 'AI'}
            </div>
            <div className={`rounded-lg px-4 py-3 
              ${message.role === 'user' 
                ? 'bg-zinc-800 text-white' 
                : 'bg-blue-600/10 border border-blue-600/20 text-white'}`}
            >
              {message.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 