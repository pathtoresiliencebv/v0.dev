'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { V0Logo } from '@/app/components/logo'
import { Project, ProjectCard } from '@/app/components/project-card'

// Mock data for projects
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'E-commerce Store',
    description: 'A modern e-commerce store with product catalog and cart functionality',
    lastUpdated: '2023-11-20T14:48:00',
    deployedUrl: 'https://demo-store.vercel.app',
  },
  {
    id: '2',
    name: 'Portfolio Website',
    description: 'Personal portfolio website with project showcase',
    lastUpdated: '2023-11-10T09:30:00',
  },
  {
    id: '3',
    name: 'Task Management App',
    description: 'Organize tasks with drag-and-drop interface',
    lastUpdated: '2023-10-25T16:20:00',
    deployedUrl: 'https://tasks-app.vercel.app',
  },
]

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleDeleteProject = async (id: string) => {
    // Filter out the deleted project
    setProjects(projects.filter(project => project.id !== id))
    
    // In a real app, you would make an API call to delete the project
    // await fetch(`/api/projects/${id}`, { method: 'DELETE' })
  }
  
  const handleRenameProject = async (id: string, name: string) => {
    // Update the project name
    setProjects(projects.map(project => 
      project.id === id ? { ...project, name } : project
    ))
    
    // In a real app, you would make an API call to update the project
    // await fetch(`/api/projects/${id}`, { 
    //   method: 'PATCH', 
    //   body: JSON.stringify({ name }),
    //   headers: { 'Content-Type': 'application/json' }
    // })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <V0Logo className="h-8 w-8" />
            <span className="font-bold text-xl">v0</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/chat">
              <Button variant="outline">Chat</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">Projects</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Projects</h1>
          <Link href="/project/new">
            <Button>New Project</Button>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div 
                key={i} 
                className="h-64 rounded-lg border bg-muted/30 animate-pulse"
              />
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onDelete={handleDeleteProject}
                onRename={handleRenameProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No projects yet</h2>
            <p className="text-muted-foreground mb-6">
              Create your first project to get started
            </p>
            <Link href="/project/new">
              <Button>Create Project</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
} 