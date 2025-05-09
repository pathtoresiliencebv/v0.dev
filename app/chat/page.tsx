'use client'

import ChatComponent from "../components/ui/ChatComponent";
import Link from "next/link";

export default function ChatPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="mb-8 flex w-full max-w-5xl items-center justify-between">
        <Link href="/" className="text-sm hover:underline">
          ← Back to home
        </Link>
        <h1 className="text-2xl font-bold">AI Chat</h1>
        <div className="w-16"></div> {/* Spacer for centering */}
      </div>
      
      <div className="w-full max-w-5xl flex-1">
        <ChatComponent />
      </div>
    </main>
  );
} 