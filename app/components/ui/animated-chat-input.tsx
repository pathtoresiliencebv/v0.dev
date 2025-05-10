"use client"

import { useState, useRef, FormEvent, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2Icon, SendIcon } from '@/components/ui/icons'
import { useAnimatedText } from '@/app/hooks/use-animated-text'

interface AnimatedChatInputProps {
  onSendMessage: (message: string) => void
  isLoading?: boolean
  placeholder?: string
  disabled?: boolean
  initialSuggestions?: string[]
}

export function AnimatedChatInput({ 
  onSendMessage, 
  isLoading = false, 
  placeholder = "What can I help you ship?",
  disabled = false,
  initialSuggestions = [
    "Create a landing page for a SaaS product",
    "Build a dashboard with charts",
    "Design a checkout page with Stripe integration",
    "Make a responsive navbar with dropdown menus"
  ]
}: AnimatedChatInputProps) {
  const [input, setInput] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>(initialSuggestions)
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null)
  const [animationComplete, setAnimationComplete] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Use animated text when a suggestion is selected
  const animatedText = useAnimatedText(selectedSuggestion || '', '')
  
  useEffect(() => {
    if (selectedSuggestion && animatedText === selectedSuggestion) {
      setAnimationComplete(true)
    }
  }, [animatedText, selectedSuggestion])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return
    
    onSendMessage(input)
    setInput('')
    setSelectedSuggestion(null)
    setAnimationComplete(false)
    
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

  const selectSuggestion = (suggestion: string) => {
    setSelectedSuggestion(suggestion)
    setInput(suggestion)
    setAnimationComplete(false)
    
    // Focus and resize the textarea
    if (textareaRef.current) {
      textareaRef.current.focus()
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.style.height = 'auto'
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
      }, 0)
    }
  }

  return (
    <div className="w-full space-y-4">
      {!input && !selectedSuggestion && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => selectSuggestion(suggestion)}
              className="text-left p-3 rounded-md border bg-card hover:bg-accent/50 transition-colors"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
      
      <form 
        onSubmit={handleSubmit} 
        className="flex items-end w-full gap-2 border rounded-lg p-2 bg-background"
      >
        <textarea
          ref={textareaRef}
          value={selectedSuggestion && !animationComplete ? animatedText : input}
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
          disabled={Boolean((!input.trim() && !selectedSuggestion) || isLoading || disabled || (selectedSuggestion && !animationComplete))}
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
    </div>
  )
} 