import React, { useState } from 'react'

interface FileStatus {
  name: string
  status: 'edited' | 'fixed' | 'new'
}

interface VersionControlProps {
  versions: string[]
  currentVersion: string
  onVersionChange: (version: string) => void
  files: FileStatus[]
}

export default function VersionControl({
  versions,
  currentVersion,
  onVersionChange,
  files
}: VersionControlProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-800">
      <div className="border-b border-zinc-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full px-4 py-2 text-sm text-white"
        >
          <div className="flex items-center space-x-2">
            <span>Version {currentVersion}</span>
            <span className="text-xs bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-400">Latest</span>
          </div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor"
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="p-2 text-sm">
          {files.map((file) => (
            <div key={file.name} className="flex items-center justify-between py-1.5 px-2 hover:bg-zinc-800 rounded-md">
              <span className="text-zinc-300 truncate">{file.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                file.status === 'edited' 
                  ? 'bg-blue-900/30 text-blue-400' 
                  : file.status === 'fixed'
                    ? 'bg-green-900/30 text-green-400'
                    : 'bg-purple-900/30 text-purple-400'
              }`}>
                {file.status.charAt(0).toUpperCase() + file.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 