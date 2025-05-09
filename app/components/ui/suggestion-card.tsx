'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

export interface Suggestion {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  action?: string
}

interface SuggestionCardProps {
  suggestion: Suggestion
  onSelect: (suggestion: Suggestion) => void
}

export function SuggestionCard({ suggestion, onSelect }: SuggestionCardProps) {
  return (
    <Card className="overflow-hidden transition-colors hover:bg-accent/50 cursor-pointer group" onClick={() => onSelect(suggestion)}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          {suggestion.icon && (
            <div className="flex-shrink-0 p-1 h-10 w-10 rounded-md bg-background flex items-center justify-center border">
              {suggestion.icon}
            </div>
          )}
          <div className="space-y-1">
            <h3 className="font-medium text-foreground">{suggestion.title}</h3>
            <p className="text-sm text-muted-foreground">{suggestion.description}</p>
          </div>
        </div>
      </CardContent>
      {suggestion.action && (
        <CardFooter className="bg-muted/50 p-3 justify-end">
          <Button variant="ghost" size="sm" className="h-8 opacity-0 group-hover:opacity-100 transition-opacity">
            {suggestion.action}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
