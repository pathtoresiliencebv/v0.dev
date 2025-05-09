'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { 
  HelpCircleIcon, 
  InfoIcon, 
  DollarSignIcon, 
  DatabaseIcon, 
  ShieldIcon, 
  FileTextIcon, 
  CodeIcon, 
  ServerIcon, 
  HistoryIcon, 
  BriefcaseIcon, 
  UserIcon, 
  CheckCircleIcon, 
  UsersIcon, 
  LayoutIcon,
  ExternalLinkIcon
} from '@/components/ui/icons'
import { V0Logo } from "../components/logo"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
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
      <main className="container mx-auto px-4 py-8 flex-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-3">What is v0?</h2>
              <p className="text-muted-foreground mb-3">
                v0 is a pair programmer that lets you describe your ideas in natural language 
                and generates both the code and UI for your project. It's powered by sophisticated 
                AI models that understand your requirements and can translate them into functional code.
              </p>
              <p className="text-muted-foreground">
                You can use v0 to build anything from simple landing pages to complex web applications, 
                with support for modern frameworks and libraries.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">How does v0 work?</h2>
              <p className="text-muted-foreground mb-3">
                v0 leverages advanced AI workflows to transform your ideas into production-ready code:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Sequential Processing:</strong> Chains multiple steps for complex tasks like requirements extraction, 
                  design analysis, and code generation.
                </li>
                <li>
                  <strong>Parallel Processing:</strong> Runs multiple AI models simultaneously to generate UI designs and 
                  functional code in parallel.
                </li>
                <li>
                  <strong>Evaluation Loops:</strong> Iteratively refines the output through continuous evaluation and 
                  feedback to ensure high-quality results.
                </li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">What can I build with v0?</h2>
              <p className="text-muted-foreground mb-3">
                v0 is versatile and can help you create a wide range of web projects:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Landing pages and marketing sites</li>
                <li>Full-stack applications with frontend and backend components</li>
                <li>Blogs and content-focused websites</li>
                <li>Chatbots and conversational interfaces</li>
                <li>Data visualization and dashboard applications</li>
                <li>E-commerce stores</li>
                <li>And much more!</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Is v0 free to use?</h2>
              <p className="text-muted-foreground">
                v0 offers a free tier that allows you to experiment and build simple projects. 
                For more advanced features, larger projects, and higher usage limits, 
                v0 provides Premium and Ultra subscription plans with enhanced capabilities.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">How do I deploy my v0 projects?</h2>
              <p className="text-muted-foreground mb-3">
                v0 seamlessly integrates with Vercel for deployment. When you're satisfied with your 
                generated code, simply click the "Deploy" button in the project interface to deploy 
                your project to Vercel's hosting platform.
              </p>
              <p className="text-muted-foreground">
                Each deployment creates a unique URL where you can access your live application. 
                You can also connect your custom domain for production use.
              </p>
            </section>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to start building?</h3>
            <div className="flex justify-center gap-4">
              <Link href="/project/new">
                <Button size="lg">Create New Project</Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline">Try Chat Interface</Button>
              </Link>
            </div>
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
  )
} 