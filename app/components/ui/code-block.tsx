"use client"

import { cn } from "@/lib/utils"
import React, { useEffect, useState } from "react"

export type CodeBlockProps = {
  children?: React.ReactNode
  language?: string
  withCopyButton?: boolean
  withLineNumbers?: boolean
  code?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  children,
  language = "typescript",
  withCopyButton = true,
  withLineNumbers = true,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [codeContent, setCodeContent] = useState<string>("")

  useEffect(() => {
    if (typeof children === "string") {
      setCodeContent(children)
    } else if (code) {
      setCodeContent(code)
    } else if (React.isValidElement(children)) {
      const childrenProps = children.props as any
      setCodeContent(childrenProps.children || "")
    }
  }, [children, code])

  const copyToClipboard = () => {
    if (codeContent) {
      navigator.clipboard.writeText(codeContent)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const lines = codeContent.split("\n")

  return (
    <div className="relative w-full">
      <pre className={cn("relative rounded-lg overflow-hidden bg-zinc-950 text-zinc-50", className)}>
        {withCopyButton && (
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-3 z-10 rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-100 hover:bg-zinc-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        )}
        <div className="relative p-4 h-full overflow-auto">
          <code className={`language-${language}`}>
            {lines.map((line, i) => (
              <div key={i} className="table-row">
                {showLineNumbers && withLineNumbers && (
                  <span className="table-cell pr-4 text-right select-none text-zinc-500">{i + 1}</span>
                )}
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </div>
      </pre>
    </div>
  )
}

export type CodeBlockGroupProps = React.HTMLAttributes<HTMLDivElement>

function CodeBlockGroup({
  children,
  className,
  ...props
}: CodeBlockGroupProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { CodeBlockGroup, CodeBlock } 