'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProjectCard, Project } from '@/app/components/project-card'
import { PlusIcon, SearchIcon } from 'lucide-react'

// Sample projects data
const sampleProjects: Project[] = [
  {
    id: '1',
    name: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing an online store with sales analytics.',
    lastUpdated: '2023-09-15T10:30:00Z',
    deployedUrl: 'https://example.com/dashboard',
  },
  {
    id: '2',
    name: 'Portfolio Website',
    description: 'Personal portfolio showcasing projects and skills.',
    lastUpdated: '2023-10-20T14:45:00Z',
    deployedUrl: 'https://example.com/portfolio',
  },
  {
    id: '3',
    name: 'Social Media App',
    description: 'A platform for connecting with friends and sharing content.',
    lastUpdated: '2023-11-05T09:15:00Z',
  },
]

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>(sampleProjects)
  const [searchQuery, setSearchQuery] = useState('')
  
  const filteredProjects = projects.filter(project => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (project.description && project.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  
  const handleDeleteProject = async (id: string) => {
    // In a real app, you would make an API call to delete the project
    setProjects(projects.filter(project => project.id !== id))
  }
  
  const handleRenameProject = (id: string, newName: string) => {
    // In a real app, you would make an API call to update the project
    setProjects(projects.map(project => 
      project.id === id ? { ...project, name: newName } : project
    ))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center text-center space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            <h1 className="inline">What can I help</h1>
            <h1 className="inline bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"> you ship?</h1>
          </div>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Generate UI, ask questions, debug, execute code, and much more.
          </p>
          <div className="w-full max-w-md space-y-2">
            <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
              <Link href="/chat" className="w-full">
                <Button className="w-full">
                  <PlusIcon className="mr-2 h-4 w-4" />
                  New Chat
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Your Projects</h2>
            <Link href="/project/new">
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>
          
          <div className="relative w-full max-w-md mx-auto mb-8">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-full pl-10"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found. Create a new project to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onDelete={handleDeleteProject}
                  onRename={handleRenameProject}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
