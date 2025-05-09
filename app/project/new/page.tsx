'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeftIcon, Loader2Icon } from '@/components/ui/icons'
import Link from 'next/link'

export default function NewProjectPage() {
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name.trim()) return
    
    setIsCreating(true)
    
    try {
      // In a real application, you would make an API call here
      // to create the project on the server
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Navigate to the new project
      const projectId = crypto.randomUUID()
      router.push(`/project/${projectId}`)
    } catch (error) {
      console.error('Failed to create project:', error)
      setIsCreating(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="container max-w-2xl mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Create a New Project</CardTitle>
          </CardHeader>
          
          <CardContent>
            <form id="new-project-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="My awesome project"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isCreating}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description (optional)</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your project..."
                  value={formData.description}
                  onChange={handleInputChange}
                  disabled={isCreating}
                  className="min-h-[100px]"
                />
              </div>
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-end mt-auto">
            <Button
              type="submit"
              form="new-project-form"
              disabled={!formData.name.trim() || isCreating}
            >
              {isCreating ? (
                <>
                  <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create Project'
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 