'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckIcon, CopyIcon, DownloadIcon, FileIcon } from 'lucide-react'

interface CodeEditorProps {
  fileName?: string
  code: string
  language?: string
  readOnly?: boolean
  onChange?: (value: string) => void
  onSave?: (value: string) => void
}

export function CodeEditor({
  fileName = 'untitled.js',
  code,
  language = 'javascript',
  readOnly = false,
  onChange,
  onSave
}: CodeEditorProps) {
  const [value, setValue] = useState(code)
  const [copied, setCopied] = useState(false)
  
  // Update value when code prop changes
  useEffect(() => {
    setValue(code)
  }, [code])
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value
    setValue(newValue)
    onChange?.(newValue)
  }
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Handle tab key to insert spaces instead of changing focus
    if (e.key === 'Tab') {
      e.preventDefault()
      const cursorPosition = e.currentTarget.selectionStart
      const newValue = value.substring(0, cursorPosition) + '  ' + value.substring(cursorPosition)
      setValue(newValue)
      onChange?.(newValue)
      
      // Set cursor position after inserted tab
      setTimeout(() => {
        e.currentTarget.selectionStart = cursorPosition + 2
        e.currentTarget.selectionEnd = cursorPosition + 2
      }, 0)
    }
    
    // Handle Ctrl+S for save
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault()
      onSave?.(value)
    }
  }
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }
  
  const handleDownload = () => {
    const blob = new Blob([value], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col rounded-lg border bg-background">
      <div className="flex items-center justify-between p-3 border-b">
        <div className="flex items-center gap-2">
          <FileIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">{fileName}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCopy}
            title="Copy code"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Copy code</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleDownload}
            title="Download file"
          >
            <DownloadIcon className="h-4 w-4" />
            <span className="sr-only">Download file</span>
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="editor" className="w-full">
        <div className="flex items-center justify-between px-3 border-b">
          <TabsList className="h-9">
            <TabsTrigger value="editor" className="text-xs">Editor</TabsTrigger>
            <TabsTrigger value="preview" className="text-xs">Preview</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="editor" className="p-0 m-0">
          <div className="relative">
            <label htmlFor="code-editor" className="sr-only">Code Editor</label>
            <textarea
              id="code-editor"
              value={value}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              readOnly={readOnly}
              className="font-mono text-sm w-full h-[350px] p-4 resize-none bg-card outline-none"
              spellCheck="false"
              placeholder="Enter your code here..."
              aria-label="Code editor"
              style={{ 
                whiteSpace: 'pre',
                overflowWrap: 'normal',
                overflowX: 'auto'
              }}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="p-0 m-0">
          <div className="w-full h-[350px] p-4 overflow-auto">
            <pre className="font-mono text-sm whitespace-pre">{value}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 