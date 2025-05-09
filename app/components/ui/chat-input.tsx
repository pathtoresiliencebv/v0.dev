'use client'

import { useState, useRef, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2Icon, SendIcon } from '@/components/ui/icons'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading?: boolean
  placeholder?: string
  disabled?: boolean
}

export function ChatInput({ 
  onSendMessage, 
  isLoading = false, 
  placeholder = "Type your message...",
  disabled = false
}: ChatInputProps) {
  const [input, setInput] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return
    
    onSendMessage(input)
    setInput('')
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
    
    // Auto-resize textarea
    const textarea = e.target
    textarea.style.height = 'auto'
    textarea.style.height = `${textarea.scrollHeight}px`
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex items-end w-full gap-2 border rounded-lg p-2 bg-background"
    >
      <textarea
        ref={textareaRef}
        value={input}
        onChange={handleTextareaChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled || isLoading}
        className="flex-1 max-h-32 resize-none bg-transparent border-0 outline-none placeholder:text-muted-foreground"
        rows={1}
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!input.trim() || isLoading || disabled}
        className="rounded-full h-9 w-9 shrink-0"
      >
        {isLoading ? (
          <Loader2Icon className="h-4 w-4" />
        ) : (
          <SendIcon className="h-4 w-4" />
        )}
        <span className="sr-only">Send</span>
      </Button>
    </form>
  )
} 