import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { V0Logo } from "./components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <V0Logo className="w-10 h-10" />
                <h1 className="text-3xl font-bold tracking-tight">v0</h1>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
                Your AI Pair Programmer
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                v0 is a pair programmer that lets you describe your ideas in natural language 
                and generates both the code and UI for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/project/new">
                  <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
                </Link>
                <Link href="/faq">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border shadow-xl bg-zinc-950">
              <div className="bg-zinc-900 p-4 rounded-t-lg flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-zinc-400 text-sm">v0.dev</div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">You</div>
                    <p className="px-4 py-2 rounded-xl bg-zinc-900 text-zinc-100">Create a landing page for a tech startup</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">v0</div>
                  <div className="px-4 py-2 rounded-xl bg-blue-600/10 border border-blue-600/20 text-blue-100">
                    Here&apos;s a modern landing page for your tech startup...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Build Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">You can use v0 to build anything</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From a basic landing page to a full-stack app, v0 helps you bring your ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Landing pages</CardTitle>
                <CardDescription>Create beautiful, responsive landing pages</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Full-stack apps</CardTitle>
                <CardDescription>Build complete applications with frontend and backend</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Blogs</CardTitle>
                <CardDescription>Design and implement content-focused websites</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Chatbots</CardTitle>
                <CardDescription>Implement conversational interfaces</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Data analysis</CardTitle>
                <CardDescription>Visualize and interpret complex datasets</CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Customer support</CardTitle>
                <CardDescription>Create systems to help customers</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Getting started with v0</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
            v0 is free to use and you can get started by creating an account on v0.dev. v0 offers additional Premium and Ultra plans.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Creating projects</h3>
              <p className="mb-4">
                Creating a project in v0 automatically creates a corresponding Vercel project 
                within your logged in scope.
              </p>
              
              <h4 className="font-medium mb-2">To create a new project:</h4>
              <ol className="list-decimal list-inside space-y-1 mb-6">
                <li>Open the sidebar</li>
                <li>Click on Projects</li>
                <li>Click on New Project</li>
                <li>Enter a project name</li>
                <li>Click Create Project</li>
              </ol>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Deploying to Vercel</h3>
              <p className="mb-4">
                When you are happy with your generation, click the Deploy button 
                in the top-right corner of the v0 interface.
              </p>
              <p className="mb-4">
                When the deployment is built, a toast notification will appear. 
                Click on the notification to view your live deployment.
              </p>
              <div className="flex justify-center">
                <Button>Deploy to Vercel</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Version Control</h3>
              <p>
                Each time v0 updates a code block, it creates a new version. 
                You can restore previous versions anytime.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Integrations</h3>
              <p>
                Connect with third-party services like Supabase, Neon, 
                Grok, and more to enhance your projects.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">AI-Powered</h3>
              <p>
                Use natural language to describe what you want to build,
                and v0 turns your ideas into working code.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">More Resources</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#">
              <Button variant="outline">v0 Documentation</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">Example Creations</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">FAQ</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">AI Policy</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">Vercel Community</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
