"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon, ChevronRightIcon, FileIcon, FolderIcon } from '@/components/ui/icons'

interface FileNode {
  id: string
  name: string
  type: 'file' | 'folder'
  children?: FileNode[]
  extension?: string
}

interface FileTreeProps {
  files: FileNode[]
  onFileSelect: (file: FileNode) => void
  activeFileId?: string
  className?: string
}

export function FileTree({ 
  files, 
  onFileSelect, 
  activeFileId,
  className 
}: FileTreeProps) {
  return (
    <div className={cn("p-2", className)}>
      {files.map((file) => (
        <FileTreeNode 
          key={file.id} 
          file={file} 
          onFileSelect={onFileSelect}
          activeFileId={activeFileId}
          level={0}
        />
      ))}
    </div>
  )
}

interface FileTreeNodeProps {
  file: FileNode
  onFileSelect: (file: FileNode) => void
  activeFileId?: string
  level: number
}

function FileTreeNode({ 
  file, 
  onFileSelect, 
  activeFileId,
  level 
}: FileTreeNodeProps) {
  const [isExpanded, setIsExpanded] = React.useState(level < 1)
  
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsExpanded(!isExpanded)
  }
  
  const handleFileSelect = () => {
    if (file.type === 'file') {
      onFileSelect(file)
    } else {
      setIsExpanded(!isExpanded)
    }
  }
  
  const getFileIcon = () => {
    if (file.type === 'folder') {
      return <FolderIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
    }
    
    return <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
  }
  
  const isActive = activeFileId === file.id
  
  return (
    <div>
      <div 
        className={cn(
          "flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer text-sm",
          isActive && "bg-accent text-accent-foreground",
          !isActive && "hover:bg-accent/50"
        )}
        style={{ paddingLeft: `${(level * 12) + 4}px` }}
        onClick={handleFileSelect}
      >
        {file.type === 'folder' ? (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-4 w-4 p-0"
            onClick={handleToggle}
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-3.5 w-3.5" />
            ) : (
              <ChevronRightIcon className="h-3.5 w-3.5" />
            )}
          </Button>
        ) : (
          <span className="w-4" />
        )}
        
        {getFileIcon()}
        <span className="truncate">{file.name}</span>
      </div>
      
      {file.type === 'folder' && isExpanded && file.children && (
        <div>
          {file.children.map((child) => (
            <FileTreeNode
              key={child.id}
              file={child}
              onFileSelect={onFileSelect}
              activeFileId={activeFileId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
} 