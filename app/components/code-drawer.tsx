import React, { useState } from 'react'

interface CodeDrawerProps {
  isOpen: boolean
  onClose: () => void
  activeTab: 'code' | 'preview' | 'console'
  onTabChange: (tab: 'code' | 'preview' | 'console') => void
  children: React.ReactNode
}

export default function CodeDrawer({ 
  isOpen, 
  onClose, 
  activeTab,
  onTabChange,
  children 
}: CodeDrawerProps) {
  const [height, setHeight] = useState(400)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      const newHeight = window.innerHeight - e.clientY
      setHeight(Math.max(200, Math.min(newHeight, window.innerHeight * 0.8)))
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 overflow-hidden z-50"
      style={{ height: `${height}px` }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div 
        className="absolute top-0 left-0 right-0 h-1 bg-zinc-800 cursor-ns-resize"
        onMouseDown={handleMouseDown}
      />
      
      <div className="flex justify-between items-center p-2 border-b border-zinc-800">
        <div className="flex space-x-1">
          <button
            onClick={() => onTabChange('code')}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeTab === 'code' 
                ? 'bg-zinc-800 text-white' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Code
          </button>
          <button
            onClick={() => onTabChange('preview')}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeTab === 'preview' 
                ? 'bg-zinc-800 text-white' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Preview
          </button>
          <button
            onClick={() => onTabChange('console')}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeTab === 'console' 
                ? 'bg-zinc-800 text-white' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Console
          </button>
        </div>
        
        <button
          onClick={onClose}
          className="p-1.5 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white"
          aria-label="Close drawer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="h-full overflow-auto p-4">
        {children}
      </div>
    </div>
  )
} 