import Link from "next/link";
import { ExpandableTabsShowcase } from "@/app/components/ui/ExpandableTabsShowcase";
import { AnimatedTextarea } from "@/app/components/ui/AnimatedTextarea";
import { VercelV0Chat } from "@/app/components/ui/VercelV0Chat";
import { Button } from "@/components/ui/button";
import { V0Logo } from "@/app/components/logo";
import { CodeEditorShowcase } from "@/app/components/ui/code-editor-showcase";

export default function ComponentsShowcasePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <V0Logo className="h-8 w-8" />
            <span className="font-bold text-xl">v0</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/chat">
              <Button variant="outline">Chat</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">Projects</Button>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 space-y-20">
          <h1 className="text-3xl font-bold mb-2">Components Showcase</h1>
          <p className="text-muted-foreground mb-8">A collection of custom components for v0.dev</p>
          
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-semibold mb-6">Interactive Code Editor & Animated Chat</h2>
              <div className="bg-gradient-to-br from-neutral-950 to-black p-8 rounded-lg shadow-2xl">
                <CodeEditorShowcase />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-6">Expandable Tabs</h2>
              <div className="bg-gradient-to-br from-neutral-950 to-black p-8 rounded-lg shadow-2xl">
                <ExpandableTabsShowcase />
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">Animated Textarea</h2>
              <div className="bg-gradient-to-br from-neutral-950 to-black p-8 rounded-lg shadow-2xl">
                <AnimatedTextarea />
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6">Vercel v0 Chat Interface</h2>
              <div className="bg-gradient-to-br from-neutral-950 to-black p-8 rounded-lg shadow-2xl">
                <VercelV0Chat />
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <V0Logo className="h-6 w-6" />
              <span className="font-medium">v0</span>
            </div>
            
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} v0.dev. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Docs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 