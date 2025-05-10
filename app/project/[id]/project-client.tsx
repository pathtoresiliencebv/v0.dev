'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowLeftIcon, 
  CodeIcon,
  PanelRightIcon,
  FolderIcon, 
  V0Logo
} from '@/components/ui/icons'
import { Play, Rocket, MessageSquare } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ProjectClient({ id }: { id: string }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<string>('workspace')
  const [inputText, setInputText] = useState<string>('')
  const [messages, setMessages] = useState<Array<{role: string, content: string}>>([
    {
      role: 'system',
      content: `Welcome to your project workspace! Describe what you'd like to build, and I'll help you create it.`
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [projectName, setProjectName] = useState('My Project')
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!inputText.trim() || isLoading) return
    
    const userMessage = {
      role: 'user',
      content: inputText
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: 'system',
        content: `I'll help you build that! Here's how we can approach it:

1. First, we'll create the basic structure
2. Then we'll implement the core functionality
3. Finally, we'll style the interface

Let me know if you'd like to proceed with this plan.`
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <V0Logo className="h-6 w-6" />
              <span className="font-medium">v0</span>
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <span className="text-sm font-medium">{projectName}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Preview
            </Button>
            <Button size="sm">
              <Rocket className="mr-2 h-4 w-4" />
              Deploy
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Project Navigation */}
        <div className="w-64 border-r bg-background p-4 hidden md:block">
          <div className="space-y-1">
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => setActiveTab('workspace')}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Chat
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start"
              onClick={() => setActiveTab('code')}
            >
              <CodeIcon className="mr-2 h-4 w-4" />
              Code
            </Button>
          </div>
        </div>
        
        {/* Workspace */}
        <div className="flex-1 flex flex-col">
          <Tabs 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="flex-1 flex flex-col"
          >
            <div className="border-b">
              <TabsList className="h-10 w-full justify-start rounded-none border-b bg-transparent p-0">
                <TabsTrigger
                  value="workspace"
                  className="h-10 rounded-none border-b-2 border-b-transparent px-4 hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  Chat
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="h-10 rounded-none border-b-2 border-b-transparent px-4 hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                >
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="workspace" className="flex-1 p-0 m-0 flex flex-col">
              {/* Chat Interface */}
              <div className="flex-1 overflow-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg max-w-[80%] ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="p-3 rounded-lg bg-muted">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce delay-100"></div>
                        <div className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce delay-200"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Chat Input */}
              <div className="border-t p-4">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Describe what you want to build..."
                    className="flex-1 border rounded-md px-3 py-2"
                  />
                  <Button type="submit" disabled={isLoading || !inputText.trim()}>
                    Send
                  </Button>
                </form>
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="flex-1 p-0 m-0">
              <div className="p-6 flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <CodeIcon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No code generated yet</h3>
                  <p className="max-w-md">
                    Describe what you want to build in the chat, and I'll generate the code for you.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 