import * as React from "react"

// A collection of Geist icons used across the application
// Based on Vercel's Geist Design System: https://vercel.com/geist/icons

// User related icons
export function UserIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="6" r="2.5" />
      <path d="M4.5 12.5v-1a3.5 3.5 0 013.5-3.5h0a3.5 3.5 0 013.5 3.5v1" />
    </svg>
  )
}

export function UsersIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none" 
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round" 
      strokeWidth="1.5"
      className={className}
    >
      <path d="M10 14v-1a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v1" />
      <circle cx="5" cy="5" r="3" />
      <path d="M16 14v-1a3 3 0 0 0-2-2.83" />
      <path d="M11 2a3 3 0 0 1 0 6" />
    </svg>
  )
}

export function SettingsIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M7.5 1.5h1L9 5l1.5.5 2.5-2 .7.7-2 2.5.5 1.5 3.5.5v1l-3.5.5-.5 1.5 2 2.5-.7.7-2.5-2-1.5.5-.5 3.5h-1L6 13l-1.5-.5-2.5 2-.7-.7 2-2.5-.5-1.5L1 9.5v-1l3.5-.5.5-1.5-2-2.5.7-.7 2.5 2L7.5 5l.5-3.5z" />
      <circle cx="8" cy="8" r="2" />
    </svg>
  )
}

export function LogOutIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M6 14H3a1 1 0 01-1-1V3a1 1 0 011-1h3" />
      <path d="M10 11l3-3-3-3" />
      <path d="M13 8H6" />
    </svg>
  )
}

// Navigation and action icons
export function PlusIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M8 1.5v13M1.5 8h13" />
    </svg>
  )
}

export function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M10.5 10.5L14 14" />
      <circle cx="7.5" cy="7.5" r="5" />
    </svg>
  )
}

export function CodeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M5 2.5L9.5 14" />
      <path d="M11 4L14 8l-3 4" />
      <path d="M5 12L2 8l3-4" />
    </svg>
  )
}

export function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M11.5 12.5L7 8l4.5-4.5" />
      <path d="M4.5 4v8" />
    </svg>
  )
}

export function Globe2Icon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M1.5 8h13" />
      <path d="M8 1.5a10.5 10.5 0 014 6.5 10.5 10.5 0 01-4 6.5 10.5 10.5 0 01-4-6.5 10.5 10.5 0 014-6.5z" />
    </svg>
  )
}

export function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M4.5 11.5l7-7" />
      <path d="M4.5 4.5h7v7" />
    </svg>
  )
}

export function TrashIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M2.5 4.5h11M5.5 4.5V3a1 1 0 011-1h3a1 1 0 011 1v1.5M6.5 7v5M9.5 7v5M4 4.5l.5 8a1 1 0 001 1h5a1 1 0 001-1l.5-8" />
    </svg>
  )
}

export function PencilIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M10.5 2a1.82 1.82 0 012.5 0 1.82 1.82 0 010 2.5L4 13.5 1 14l.5-3L10.5 2z" />
    </svg>
  )
}

export function Loader2Icon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={`${className} animate-spin`}
    >
      <path d="M8 1v2M8 13v2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M1 8h2M13 8h2M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" />
    </svg>
  )
}

export function MoreVerticalIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="2.5" r=".75" />
      <circle cx="8" cy="8" r=".75" />
      <circle cx="8" cy="13.5" r=".75" />
    </svg>
  )
}

export function FileIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M9.5 1.5H4a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V5.5L9.5 1.5z" />
      <path d="M9.5 1.5v4h4" />
    </svg>
  )
}

export function FileTextIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M9.5 1.5H4a1 1 0 00-1 1v11a1 1 0 001 1h8a1 1 0 001-1V5.5L9.5 1.5z" />
      <path d="M9.5 1.5v4h4" />
      <path d="M5 9h6" />
      <path d="M5 7h2" />
      <path d="M5 11h6" />
    </svg>
  )
}

export function CopyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="2.5" y="2.5" width="8" height="8" rx="1" />
      <path d="M5.5 5.5h8a1 1 0 011 1v8a1 1 0 01-1 1h-8a1 1 0 01-1-1v-8a1 1 0 011-1z" />
    </svg>
  )
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M2.5 8l3.5 3.5 7.5-7" />
    </svg>
  )
}

export function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M8 1.5v9M5 8l3 3 3-3" />
      <path d="M2.5 11.5v2a1 1 0 001 1h9a1 1 0 001-1v-2" />
    </svg>
  )
}

export function HistoryIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M8.5 4.5V8l2 2" />
      <path d="M13.2 9.8a6 6 0 11-2-9.3" />
      <path d="M14.5 1.5v4h-4" />
    </svg>
  )
}

export function CheckCircleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5.5 8l2 2 3-4" />
    </svg>
  )
}

export function CheckCircle2Icon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M5.5 8l2 2 3-4" />
    </svg>
  )
}

export function SendIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M14.5 1.5l-6.5 13-2-5.5-5.5-2 13-6.5z" />
    </svg>
  )
}

export function InfoIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M8 10.5v-4" />
      <path d="M8 4.5v-.01" />
    </svg>
  )
}

export function DollarSignIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M8 1.5v13" />
      <path d="M4.5 4C4.5 2.8 6.1 1.5 8 1.5S11.5 2.8 11.5 4 9.9 6.5 8 6.5 4.5 5.2 4.5 4z" />
      <path d="M11.5 12c0 1.2-1.6 2.5-3.5 2.5S4.5 13.2 4.5 12 6.1 9.5 8 9.5s3.5 1.3 3.5 2.5z" />
    </svg>
  )
}

export function DatabaseIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <ellipse cx="8" cy="4" rx="5.5" ry="2.5" />
      <path d="M2.5 4v8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5V4" />
      <path d="M2.5 8c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5" />
    </svg>
  )
}

export function ShieldIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M8 14.5s6-2 6-6V3.5l-6-2-6 2V8.5c0 4 6 6 6 6z" />
    </svg>
  )
}

export function ServerIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="2.5" y="2.5" width="11" height="3" rx="1" />
      <rect x="2.5" y="10.5" width="11" height="3" rx="1" />
      <path d="M5.5 5.5v1" />
      <path d="M5.5 13.5v1" />
    </svg>
  )
}

export function BriefcaseIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="1.5" y="4.5" width="13" height="9" rx="1" />
      <path d="M5.5 4.5v-2a1 1 0 011-1h3a1 1 0 011 1v2" />
      <path d="M1.5 8.5h13" />
    </svg>
  )
}

export function LayoutIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <rect x="2.5" y="2.5" width="11" height="11" rx="1" />
      <path d="M2.5 6.5h11" />
      <path d="M6.5 6.5v7" />
    </svg>
  )
}

export function HelpCircleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <circle cx="8" cy="8" r="6.5" />
      <path d="M6 6a2 2 0 114 0c0 1.5-2 1.5-2 3" />
      <path d="M8 11.5v.01" />
    </svg>
  )
}

export function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M6.5 3.5h6v6" />
      <path d="M12.5 3.5L7 9" />
      <path d="M4.5 4.5V12.5H12.5" />
    </svg>
  )
}

export function V0Logo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 40 20"
      width="16"
      className={className}
    >
      <title>Logo v0</title>
      <path
        clipRule="evenodd"
        d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" fill="currentColor"></path>
    </svg>
  );
}

export function ChevronRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M6.5 3.5L11 8l-4.5 4.5" />
    </svg>
  )
}

export function CircleIcon({ className = "h-2 w-2 fill-current" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  )
}

export function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M4 12L12 4M4 4l8 8" />
    </svg>
  )
} 