"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { XIcon } from '@/components/ui/icons'
import { CodeEditor } from '@/app/components/ui/code-editor'

interface FileTab {
  id: string
  name: string
  content: string
  language?: string
}

interface TabbedEditorProps {
  tabs: FileTab[]
  activeTabId?: string
  onTabChange: (tabId: string) => void
  onTabClose: (tabId: string) => void
  onContentChange?: (tabId: string, content: string) => void
  className?: string
}

export function TabbedEditor({
  tabs,
  activeTabId,
  onTabChange,
  onTabClose,
  onContentChange,
  className
}: TabbedEditorProps) {
  // Get the currently active tab
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0]
  
  // Handle content change
  const handleContentChange = (content: string) => {
    if (activeTab && onContentChange) {
      onContentChange(activeTab.id, content)
    }
  }
  
  // Get language from file extension
  const getLanguageFromFileName = (fileName: string): string => {
    const extension = fileName.split('.').pop()?.toLowerCase() || ''
    
    const languageMap: Record<string, string> = {
      'js': 'javascript',
      'jsx': 'jsx',
      'ts': 'typescript',
      'tsx': 'tsx',
      'html': 'html',
      'css': 'css',
      'json': 'json',
      'md': 'markdown'
    }
    
    return languageMap[extension] || 'plaintext'
  }

  return (
    <div className={cn("flex flex-col h-full border rounded-lg overflow-hidden", className)}>
      {/* Tab bar */}
      <div className="flex overflow-x-auto bg-muted/30 border-b">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={cn(
              "flex items-center gap-1 px-3 py-2 border-r text-sm whitespace-nowrap",
              tab.id === activeTabId ? "bg-background" : "bg-muted/30 hover:bg-muted/50 cursor-pointer"
            )}
            onClick={() => tab.id !== activeTabId && onTabChange(tab.id)}
          >
            <span className="truncate max-w-[120px]">{tab.name}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-4 w-4 p-0 opacity-50 hover:opacity-100 hover:bg-muted"
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.id)
              }}
            >
              <XIcon className="h-3 w-3" />
              <span className="sr-only">Close tab</span>
            </Button>
          </div>
        ))}
      </div>
      
      {/* Editor content */}
      <div className="flex-1 overflow-hidden">
        {activeTab ? (
          <CodeEditor
            fileName={activeTab.name}
            code={activeTab.content}
            language={activeTab.language || getLanguageFromFileName(activeTab.name)}
            onChange={handleContentChange}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            No file selected
          </div>
        )}
      </div>
    </div>
  )
} 