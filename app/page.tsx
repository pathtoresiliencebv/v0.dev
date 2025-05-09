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

      {/* AI Workflow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful AI Agent Workflows</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              v0 leverages advanced AI workflows to transform your ideas into production-ready code
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-200 dark:border-blue-900 relative">
              <div className="absolute -top-3 -right-3 bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <CardHeader>
                <CardTitle>Sequential Processing</CardTitle>
                <CardDescription>Chain multiple steps for complex tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    </div>
                    <span>Extract requirements from input</span>
                  </div>
                  <div className="border-l-2 border-dashed border-blue-200 dark:border-blue-800 h-6 ml-5"></div>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    </div>
                    <span>Analyze design patterns</span>
                  </div>
                  <div className="border-l-2 border-dashed border-blue-200 dark:border-blue-800 h-6 ml-5"></div>
                  <div className="flex gap-2 items-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                    </div>
                    <span>Generate optimized code</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 dark:border-purple-900 relative">
              <div className="absolute -top-3 -right-3 bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <CardHeader>
                <CardTitle>Parallel Processing</CardTitle>
                <CardDescription>Run multiple AI models simultaneously</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 2H8"></path><path d="M12 2v5"></path></svg>
                      </div>
                      <span className="text-xs text-center">UI Model</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                      </div>
                      <span className="text-xs text-center">Code Model</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 4 4 4-4"></path><path d="M7 20V4"></path><path d="m21 8-4-4-4 4"></path><path d="M17 4v16"></path></svg>
                    </div>
                    <span className="text-xs text-center">Combined Result</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 dark:border-green-900 relative">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <CardHeader>
                <CardTitle>Evaluation Loops</CardTitle>
                <CardDescription>Iterate and improve output quality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 relative">
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-green-200 dark:border-green-800 animate-spin-slow"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-green-300 dark:border-green-700 flex items-center justify-center">
                      <span className="text-lg font-bold">AI</span>
                    </div>
                    {/* Quality indicators */}
                    <div className="absolute top-0 -ml-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">Quality</div>
                    <div className="absolute bottom-0 -ml-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">Feedback</div>
                    <div className="absolute left-0 -mt-2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded">Testing</div>
                    <div className="absolute right-0 -mt-2 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-yellow-500 text-white text-xs px-2 py-1 rounded">Standards</div>
                  </div>
                  <p className="text-sm mt-4 text-center">Continuous improvement through automated evaluation and refinement</p>
                </div>
              </CardContent>
            </Card>
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
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Landing pages</CardTitle>
                <CardDescription>Create beautiful, responsive landing pages</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Full-stack apps</CardTitle>
                <CardDescription>Build complete applications with frontend and backend</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Blogs</CardTitle>
                <CardDescription>Design and implement content-focused websites</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Chatbots</CardTitle>
                <CardDescription>Implement conversational interfaces</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Data analysis</CardTitle>
                <CardDescription>Visualize and interpret complex datasets</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle>Customer support</CardTitle>
                <CardDescription>Create systems to help customers</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-40 bg-zinc-100 dark:bg-zinc-800 rounded-md flex items-center justify-center overflow-hidden group-hover:scale-[1.02] transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </div>
              </CardContent>
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
            <Link href="/components-showcase">
              <Button variant="outline">Components Showcase</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">v0 Documentation</Button>
            </Link>
            <Link href="#">
              <Button variant="outline">Example Creations</Button>
            </Link>
            <Link href="/faq">
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
