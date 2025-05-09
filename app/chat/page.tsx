'use client'

import { useState } from 'react'
import { useChat, Message } from '@/app/hooks/use-chat'
import { ChatMessage } from '@/app/components/ui/chat-message'
import { ChatInput } from '@/app/components/ui/chat-input'
import { ModelSelector } from '@/app/components/model-selector'
import { Button } from '@/components/ui/button'
import { TrashIcon } from '@/components/ui/icons'

export default function ChatPage() {
  const [selectedModel, setSelectedModel] = useState('meta-llama/Llama-3.1-8B-Instruct-Turbo-Free')
  const { messages, isLoading, error, sendMessage, resetMessages } = useChat({
    options: { model: selectedModel }
  })

  const handleSendMessage = async (content: string) => {
    await sendMessage(content)
  }

  const handleModelChange = (model: string) => {
    setSelectedModel(model)
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="flex items-center justify-between p-4 border-b">
        <h1 className="text-xl font-semibold">AI Chat</h1>
        <div className="flex items-center gap-2">
          <div className="w-48">
            <ModelSelector 
              defaultModel={selectedModel} 
              onModelChange={handleModelChange} 
            />
          </div>
          {messages.length > 0 && (
            <Button
              variant="outline"
              size="icon"
              onClick={resetMessages}
              title="Clear chat"
            >
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Clear chat</span>
            </Button>
          )}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-center p-8">
            <div className="max-w-md space-y-4">
              <h2 className="text-2xl font-bold">Welcome to AI Chat</h2>
              <p className="text-muted-foreground">
                This chat application uses Together AI and Groq to power conversational AI experiences.
                Select a model from the dropdown and start chatting!
              </p>
            </div>
          </div>
        ) : (
          <div className="divide-y">
            {messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message} 
              />
            ))}
            {isLoading && (
              <ChatMessage 
                message={{ 
                  id: 'loading', 
                  role: 'assistant', 
                  content: '' 
                }} 
                isLoading={true} 
              />
            )}
          </div>
        )}
        
        {error && (
          <div className="p-4 m-4 text-sm text-red-500 bg-red-50 rounded-md">
            Error: {error}
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isLoading={isLoading} 
          placeholder="Type a message..."
        />
        <p className="mt-2 text-xs text-center text-muted-foreground">
          Powered by {selectedModel.includes('meta-llama') || selectedModel.includes('mistralai') 
            ? 'Together AI' 
            : 'Groq'
          }
        </p>
      </div>
    </div>
  )
} 