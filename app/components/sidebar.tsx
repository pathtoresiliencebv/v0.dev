import React from 'react'
import Link from 'next/link'

interface SidebarProps {
  activeProject?: string
  projects: string[]
}

export default function Sidebar({ activeProject, projects }: SidebarProps) {
  return (
    <div className="w-64 h-screen bg-zinc-900 border-r border-zinc-800 flex flex-col">
      <div className="p-4 border-b border-zinc-800 flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <h1 className="text-xl font-bold text-white">v0.dev</h1>
      </div>
      
      <div className="p-4">
        <h2 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Projects</h2>
        <div className="space-y-1">
          {projects.map((project) => (
            <Link
              key={project}
              href={`/project/${encodeURIComponent(project)}`}
              className={`block px-3 py-2 rounded-md text-sm ${
                project === activeProject
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              {project}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="mt-auto p-4 border-t border-zinc-800">
        <button
          className="w-full px-3 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md text-sm text-white flex items-center justify-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span>New Project</span>
        </button>
      </div>
    </div>
  )
} 