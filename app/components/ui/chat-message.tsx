'use client'

import { useState } from 'react'
import { Message } from '@/app/hooks/use-chat'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CheckIcon, CopyIcon } from '@/components/ui/icons'

interface ChatMessageProps {
  message: Message
  isLoading?: boolean
}

export function ChatMessage({ message, isLoading }: ChatMessageProps) {
  const [isCopied, setIsCopied] = useState(false)
  
  const isUser = message.role === 'user'
  
  // Helper function to format message content with markdown
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => <div key={i}>{line || '\u00A0'}</div>)
  }
  
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(message.content)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <div className={cn(
      "flex w-full p-4 gap-4",
      isUser ? "bg-accent/30" : "bg-background"
    )}>
      <div className={cn(
        "flex items-start justify-center h-8 w-8 rounded-md shrink-0",
        isUser ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
      )}>
        <div className="font-semibold text-sm mt-1.5">
          {isUser ? 'U' : 'AI'}
        </div>
      </div>
      
      <div className="flex flex-col w-full min-w-0">
        <div className="text-sm font-medium mb-1">
          {isUser ? 'You' : 'Assistant'}
        </div>
        
        <div className="text-sm whitespace-pre-wrap break-words">
          {isLoading ? (
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse" />
              <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150 mx-1" />
              <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-300" />
            </div>
          ) : (
            formatContent(message.content)
          )}
        </div>
      </div>
      
      {!isUser && !isLoading && (
        <Button 
          size="icon" 
          variant="ghost" 
          className="h-8 w-8 rounded-md opacity-70 hover:opacity-100"
          onClick={copyToClipboard}
        >
          {isCopied ? (
            <CheckIcon className="h-4 w-4" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isCopied ? 'Copied' : 'Copy message'}
          </span>
        </Button>
      )}
    </div>
  )
} 