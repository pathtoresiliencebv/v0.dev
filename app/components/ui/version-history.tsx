'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { HistoryIcon, ChevronDownIcon, CheckCircle2Icon } from 'lucide-react'

export interface Version {
  id: string
  number: number
  timestamp: string
  description?: string
  isActive?: boolean
}

interface VersionHistoryProps {
  versions: Version[]
  currentVersion: number
  onVersionSelect: (version: Version) => void
  onRestoreVersion?: (version: Version) => void
}

export function VersionHistory({
  versions,
  currentVersion,
  onVersionSelect,
  onRestoreVersion
}: VersionHistoryProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 gap-1 pr-1.5">
          <span className="text-xs font-medium">v{currentVersion}</span>
          <ChevronDownIcon className="h-3.5 w-3.5 opacity-70" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex items-center gap-2">
          <HistoryIcon className="h-4 w-4" />
          <span>Version History</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-80 overflow-y-auto py-1">
          {versions.map((version) => (
            <DropdownMenuItem
              key={version.id}
              className="flex justify-between px-3 py-2 cursor-pointer"
              onClick={() => onVersionSelect(version)}
            >
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-1">
                  <span className="font-medium text-sm">v{version.number}</span>
                  {version.isActive && (
                    <CheckCircle2Icon className="h-3.5 w-3.5 text-green-500" />
                  )}
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(version.timestamp).toLocaleString()}
                </span>
                {version.description && (
                  <span className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {version.description}
                  </span>
                )}
              </div>
              {onRestoreVersion && !version.isActive && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={(e) => {
                    e.stopPropagation()
                    onRestoreVersion(version)
                  }}
                >
                  Restore
                </Button>
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 