'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@/components/ui/icons'
import { getModelProvider } from '@/lib/utils'

// Available models with their respective providers
const models = [
  // Together AI Models
  { id: 'meta-llama/Llama-3.1-8B-Instruct-Turbo-Free', name: 'Llama 3.1 8B', provider: 'together', free: true },
  { id: 'meta-llama/Llama-3.1-70B-Instruct-Turbo', name: 'Llama 3.1 70B', provider: 'together' },
  { id: 'mistralai/Mixtral-8x7B-Instruct-v0.1', name: 'Mixtral 8x7B', provider: 'together' },
  { id: 'deepseek/deepseek-coder-33b-instruct', name: 'DeepSeek Coder 33B', provider: 'together' },
  
  // Groq Models
  { id: 'llama3-8b-8192', name: 'Llama 3 8B (Groq)', provider: 'groq' },
  { id: 'llama3-70b-8192', name: 'Llama 3 70B (Groq)', provider: 'groq' },
  { id: 'mixtral-8x7b-32768', name: 'Mixtral 8x7B (Groq)', provider: 'groq' },
  { id: 'gemma-7b-it', name: 'Gemma 7B (Groq)', provider: 'groq' },
]

interface ModelSelectorProps {
  defaultModel?: string
  onModelChange: (model: string) => void
}

export function ModelSelector({ 
  defaultModel = 'meta-llama/Llama-3.1-8B-Instruct-Turbo-Free',
  onModelChange 
}: ModelSelectorProps) {
  const [selectedModel, setSelectedModel] = React.useState(defaultModel)
  
  const handleModelChange = (value: string) => {
    setSelectedModel(value)
    onModelChange(value)
  }
  
  // Find current model details
  const currentModel = models.find(model => model.id === selectedModel) || {
    id: selectedModel,
    name: selectedModel.split('/').pop() || selectedModel,
    provider: getModelProvider(selectedModel)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="truncate">{currentModel.name}</span>
            {currentModel.free && (
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600">
                Free
              </span>
            )}
          </div>
          <ChevronDownIcon className="h-4 w-4 ml-2 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]" align="end">
        <DropdownMenuRadioGroup value={selectedModel} onValueChange={handleModelChange}>
          <DropdownMenuSeparator />
          <div className="p-2">
            <p className="text-sm font-medium">Together AI</p>
          </div>
          <DropdownMenuSeparator />
          {models
            .filter(model => model.provider === 'together')
            .map(model => (
              <DropdownMenuRadioItem key={model.id} value={model.id}>
                <div className="flex justify-between w-full items-center">
                  <span className="truncate">{model.name}</span>
                  {model.free && (
                    <span className="rounded-full bg-green-100 px-1.5 py-0.5 text-xs text-green-600">
                      Free
                    </span>
                  )}
                </div>
              </DropdownMenuRadioItem>
            ))
          }
          
          <DropdownMenuSeparator />
          <div className="p-2">
            <p className="text-sm font-medium">Groq</p>
          </div>
          <DropdownMenuSeparator />
          {models
            .filter(model => model.provider === 'groq')
            .map(model => (
              <DropdownMenuRadioItem key={model.id} value={model.id}>
                <span className="truncate">{model.name}</span>
              </DropdownMenuRadioItem>
            ))
          }
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 