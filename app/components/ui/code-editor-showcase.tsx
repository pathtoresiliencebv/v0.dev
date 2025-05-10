"use client"

import * as React from 'react'
import { FileTree } from '@/app/components/ui/file-tree'
import { TabbedEditor } from '@/app/components/ui/tabbed-editor'
import { AnimatedChatInput } from '@/app/components/ui/animated-chat-input'
import { ChatMessage } from '@/app/components/ui/chat-message'
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PanelRightIcon, XIcon } from '@/components/ui/icons'
import { CodeBlock } from '@/app/components/ui/code-block'
import { Layout } from 'lucide-react'
import { cn } from '@/lib/utils'

// Sample file structure for the demo
const sampleFiles = [
  {
    id: 'components',
    name: 'components',
    type: 'folder' as const,
    children: [
      {
        id: 'button.tsx',
        name: 'button.tsx',
        type: 'file' as const,
        extension: 'tsx',
        content: `"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export function Button({
  variant = "default",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" && "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-10 px-4",
        size === "lg" && "h-11 px-6",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}`
      },
      {
        id: 'card.tsx',
        name: 'card.tsx',
        type: 'file' as const,
        extension: 'tsx',
        content: `import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className, children, ...props }: CardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props} />
}

export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-muted-foreground", className)} {...props} />
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
}`
      }
    ]
  },
  {
    id: 'app',
    name: 'app',
    type: 'folder' as const,
    children: [
      {
        id: 'page.tsx',
        name: 'page.tsx',
        type: 'file' as const,
        extension: 'tsx',
        content: `import { Button } from "@/components/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card"

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ready to start building your next great project?</p>
            <Button>Let's Go</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Learn More</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Explore our documentation to get the most out of the platform.</p>
            <Button variant="outline">Documentation</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}`
      }
    ]
  }
]

export function CodeEditorShowcase() {
  const [activeFileId, setActiveFileId] = React.useState<string | undefined>('button.tsx')
  const [openTabs, setOpenTabs] = React.useState<Array<{id: string, name: string, content: string}>>([
    {
      id: 'button.tsx',
      name: 'button.tsx',
      content: sampleFiles[0].children?.[0].content || ''
    }
  ])
  const [sidebarVisible, setSidebarVisible] = React.useState(true)
  const [viewMode, setViewMode] = React.useState<'vertical' | 'horizontal'>('vertical')
  const [messages, setMessages] = React.useState<Array<{id: string, role: 'user' | 'assistant', content: string}>>([
    {
      id: '1',
      role: 'assistant',
      content: 'How can I help you with your code today?'
    }
  ])
  
  // Flatten the file structure for easier lookup
  const flattenedFiles = React.useMemo(() => {
    const flattened: Record<string, {id: string, name: string, content: string, extension?: string}> = {}
    
    const processNode = (node: any) => {
      if (node.type === 'file') {
        flattened[node.id] = {
          id: node.id,
          name: node.name,
          content: node.content || '',
          extension: node.extension
        }
      } else if (node.children) {
        node.children.forEach(processNode)
      }
    }
    
    sampleFiles.forEach(processNode)
    return flattened
  }, [])
  
  const handleFileSelect = (file: {id: string, name: string, type: string}) => {
    if (file.type !== 'file') return
    
    // Check if the file is already open in a tab
    if (!openTabs.some(tab => tab.id === file.id)) {
      setOpenTabs([...openTabs, {
        id: file.id,
        name: file.name,
        content: flattenedFiles[file.id]?.content || ''
      }])
    }
    
    setActiveFileId(file.id)
  }
  
  const handleTabChange = (tabId: string) => {
    setActiveFileId(tabId)
  }
  
  const handleTabClose = (tabId: string) => {
    const newTabs = openTabs.filter(tab => tab.id !== tabId)
    setOpenTabs(newTabs)
    
    // If we closed the active tab, activate another one
    if (activeFileId === tabId && newTabs.length > 0) {
      setActiveFileId(newTabs[newTabs.length - 1].id)
    } else if (newTabs.length === 0) {
      setActiveFileId(undefined)
    }
  }
  
  const handleContentChange = (tabId: string, content: string) => {
    setOpenTabs(tabs => 
      tabs.map(tab => 
        tab.id === tabId ? { ...tab, content } : tab
      )
    )
  }
  
  const handleSendMessage = (message: string) => {
    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      role: 'user' as const,
      content: message
    }
    
    setMessages(prev => [...prev, userMessage])
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: `ai-${Date.now()}`,
        role: 'assistant' as const,
        content: `I can help you with that! Here's an example of how to approach "${message}":

\`\`\`tsx
function Example() {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">Example Component</h2>
      <p>This demonstrates the functionality you requested.</p>
    </div>
  )
}
\`\`\``
      }
      
      setMessages(prev => [...prev, aiResponse])
    }, 1000)
  }

  return (
    <Card className="w-full max-w-6xl mx-auto overflow-hidden">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Interactive Code Editor</CardTitle>
            <CardDescription>A demo of the animated chat and code editing experience</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSidebarVisible(!sidebarVisible)}
              className="h-8"
            >
              <PanelRightIcon className="h-4 w-4 mr-2" />
              {sidebarVisible ? 'Hide' : 'Show'} Files
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode(viewMode === 'vertical' ? 'horizontal' : 'vertical')}
            >
              <Layout className="h-4 w-4" />
              <span className="sr-only">Change Layout</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <div className="flex h-[600px]">
        {sidebarVisible && (
          <div className="w-64 border-r overflow-auto">
            <FileTree 
              files={sampleFiles} 
              onFileSelect={handleFileSelect}
              activeFileId={activeFileId}
            />
          </div>
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-hidden border-b">
            <TabbedEditor
              tabs={openTabs}
              activeTabId={activeFileId}
              onTabChange={handleTabChange}
              onTabClose={handleTabClose}
              onContentChange={handleContentChange}
            />
          </div>
          
          <div className="h-1/3 overflow-auto p-4 bg-muted/10 flex flex-col">
            <div className="flex-1 overflow-auto mb-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
            
            <AnimatedChatInput 
              onSendMessage={handleSendMessage}
              placeholder="Ask me about your code..."
              initialSuggestions={[
                "How do I add a hover effect to this button?",
                "Create a responsive grid layout",
                "Add form validation to this component",
                "Implement dark mode for this UI"
              ]}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}
