import Link from "next/link";
import ChatComponent from "./components/ui/ChatComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4">
          <p className="font-mono font-bold">v0.dev - AI-Powered Interface Builder</p>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img
              src="/vercel.svg"
              alt="Vercel Logo"
              width={100}
              height={24}
              className="dark:invert"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Build with AI-Powered Components
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-5xl">
          <Link 
            href="/chat" 
            className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Chat Interface</h2>
            <p>Interactive chat powered by multiple AI models</p>
          </Link>
          
          <Link 
            href="/workflow/sequential" 
            className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Sequential Workflow</h2>
            <p>Chain multiple AI tasks for step-by-step processing</p>
          </Link>
          
          <Link 
            href="/workflow/parallel" 
            className="p-6 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">Parallel Workflow</h2>
            <p>Run AI tasks in parallel for better results</p>
          </Link>
        </div>
        
        <div className="w-full max-w-5xl mb-16">
          <h2 className="text-2xl font-semibold mb-4 text-center">Try the AI Chat</h2>
          <ChatComponent />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="https://vercel.com/docs/concepts/ai/ai-sdk"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            AI SDK{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Vercel&apos;s AI SDK to build AI-powered applications.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore the Next.js + AI templates for your projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Instantly deploy your Next.js site with AI to Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
