'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  MoreVerticalIcon, 
  Globe2Icon, 
  CodeIcon, 
  TrashIcon,
  PencilIcon,
  ArrowUpRightIcon
} from 'lucide-react'

export interface Project {
  id: string
  name: string
  description?: string
  lastUpdated: string
  deployedUrl?: string
  thumbnail?: string
}

interface ProjectCardProps {
  project: Project
  onDelete?: (id: string) => void
  onRename?: (id: string, name: string) => void
}

export function ProjectCard({ project, onDelete, onRename }: ProjectCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  
  const handleDelete = async () => {
    if (!onDelete) return
    
    setIsDeleting(true)
    try {
      await onDelete(project.id)
    } finally {
      setIsDeleting(false)
    }
  }
  
  const handleRename = () => {
    if (!onRename) return
    
    const newName = window.prompt('Enter new project name', project.name)
    if (newName && newName !== project.name) {
      onRename(project.id, newName)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-40 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
          {project.thumbnail ? (
            <img 
              src={project.thumbnail} 
              alt={project.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <CodeIcon className="w-12 h-12 text-gray-400" />
          )}
          
          <div className="absolute top-2 right-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 bg-black/50 text-white hover:bg-black/70">
                  <MoreVerticalIcon className="h-4 w-4" />
                  <span className="sr-only">Actions</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleRename}>
                  <PencilIcon className="mr-2 h-4 w-4" />
                  <span>Rename</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="text-red-600 focus:text-red-600" 
                  onClick={handleDelete}
                  disabled={isDeleting}
                >
                  <TrashIcon className="mr-2 h-4 w-4" />
                  <span>{isDeleting ? 'Deleting...' : 'Delete'}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <Link href={`/project/${project.id}`} className="hover:underline">
          <CardTitle className="text-lg flex items-center gap-1.5 truncate">
            {project.name}
          </CardTitle>
        </Link>
        
        {project.description && (
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {project.description}
          </p>
        )}
        
        <p className="text-xs text-muted-foreground mt-2">
          Last updated {new Date(project.lastUpdated).toLocaleDateString()}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <Link href={`/project/${project.id}`}>
          <Button variant="outline" size="sm">
            <CodeIcon className="mr-2 h-3.5 w-3.5" />
            Edit
          </Button>
        </Link>
        
        {project.deployedUrl && (
          <a 
            href={project.deployedUrl} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="sm">
              <Globe2Icon className="mr-2 h-3.5 w-3.5" />
              View
              <ArrowUpRightIcon className="ml-1 h-3 w-3" />
            </Button>
          </a>
        )}
      </CardFooter>
    </Card>
  )
} 