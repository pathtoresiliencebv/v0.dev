'use client'

import { SuggestionCard, Suggestion } from '@/app/components/ui/suggestion-card'

interface SuggestionListProps {
  suggestions: Suggestion[]
  onSelect: (suggestion: Suggestion) => void
}

export function SuggestionList({ suggestions, onSelect }: SuggestionListProps) {
  if (!suggestions?.length) {
    return null
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {suggestions.map((suggestion) => (
        <SuggestionCard
          key={suggestion.id}
          suggestion={suggestion}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
} 