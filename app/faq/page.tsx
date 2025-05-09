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

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-5xl">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get answers to common questions about v0.dev AI Chat, the modern AI pair programmer
          powered by Together AI and Groq.
        </p>
      </div>

      <Accordion type="multiple" className="w-full space-y-4">
        <AccordionItem value="what-is-v0" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <InfoIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">What is v0?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p className="pb-2">
              <strong className="text-foreground">v0</strong> is your always-on pair-programmer: a generative chat interface with deep knowledge of modern web technologies. 
              It can generate UI, write and execute code, explain complex topics, and more—all in a conversational interface.
            </p>
            <p>
              You can use v0 to build anything from basic landing pages to full-stack applications, blogs, chatbots, 
              data analysis tools, and more.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-does-v0-work" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <CodeIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">How does v0 work?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              v0 uses a chat interface to interact with you. It can output advanced UI Blocks 
              (React, Svelte, Vue, HTML+CSS), generate and run code, and provide technical guidance. 
              You can preview, copy, or install these Blocks directly into your project.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cost" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <DollarSignIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">How much does v0 cost?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              v0 offers a free tier, with additional Premium and Ultra plans for advanced features. 
              See the <Link href="https://vercel.com/pricing" className="text-primary hover:underline inline-flex items-center gap-1">
                pricing page <ExternalLinkIcon className="h-3 w-3" />
              </Link> for details.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-trained-on" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <DatabaseIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">What data was v0 trained on?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              v0 is trained on a mix of public and private datasets, focusing on web development, 
              React, Next.js, and modern frameworks. For more, see <Link href="https://vercel.com/policy" className="text-primary hover:underline inline-flex items-center gap-1">
                Vercel's AI Policy <ExternalLinkIcon className="h-3 w-3" />
              </Link>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="generations-training" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <ShieldIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Will my generations be used for training?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              User-generated prompts and content may be used to improve v0, except for v0 Enterprise customers. 
              No customer data from Vercel platform services is used for training.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="access-data" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <FileTextIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Can I access or delete my data?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              Currently, downloading your usage data is not supported. For deletion requests, 
              contact Vercel support. See <Link href="https://vercel.com/legal/privacy-policy" className="text-primary hover:underline inline-flex items-center gap-1">
                Vercel's Privacy Notice <ExternalLinkIcon className="h-3 w-3" />
              </Link> for more.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="without-react-tailwind" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <CodeIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Is v0 useful without React or Tailwind?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              Yes! v0 can generate code for Svelte, Vue, HTML, Bootstrap, Material UI, and more. 
              It's not limited to React or Tailwind.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="data-fetching" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <ServerIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Can v0 generate data fetching code?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              Yes, v0 can generate code to fetch data from APIs. Only the React v0 Block can execute code in your browser.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="chat-history" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <HistoryIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Can I see a history of all my chats?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              Yes, visit <Link href="/chat/history" className="text-primary hover:underline">
                v0.dev/chat/history
              </Link> to view your chat history.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="commercial-use" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <BriefcaseIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Can I use v0 output for commercial projects?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              Yes, but you are responsible for evaluating the generated code for suitability and IP compliance. 
              See <Link href="https://vercel.com/agreement" className="text-primary hover:underline inline-flex items-center gap-1">
                Vercel's Terms <ExternalLinkIcon className="h-3 w-3" />
              </Link>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="account-sharing" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <UserIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Do I need a new v0 account if I have a Vercel account?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              No. Your Vercel account gives you access to v0. Just log in at <Link href="https://v0.dev" className="text-primary hover:underline inline-flex items-center gap-1">
                v0.dev <ExternalLinkIcon className="h-3 w-3" />
              </Link>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compliance" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <CheckCircleIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Is v0 compliant?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              v0 is included in Vercel's SOC 2 Type 2 attestation for Security, Confidentiality, and Availability. 
              More info at <Link href="https://security.vercel.com" className="text-primary hover:underline inline-flex items-center gap-1">
                security.vercel.com <ExternalLinkIcon className="h-3 w-3" />
              </Link>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="who-built" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <UsersIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">Who built v0?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <p>
              v0 is built by Vercel's AI team. <Link href="https://vercel.com/careers" className="text-primary hover:underline inline-flex items-center gap-1">
                We're hiring! <ExternalLinkIcon className="h-3 w-3" />
              </Link>
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="use-cases" className="border rounded-lg px-6">
          <AccordionTrigger className="py-4 hover:no-underline">
            <div className="flex items-center gap-3 text-left">
              <LayoutIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-base font-semibold">What are some ways I can use v0?</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 text-muted-foreground">
            <div className="space-y-4">
              <p>v0 can elevate everyone's abilities across your organization:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Technical support & code generation:</strong> Debug, write tests, generate UIs.</li>
                <li><strong className="text-foreground">Product planning:</strong> Plan features and generate tests.</li>
                <li><strong className="text-foreground">Prototyping & design:</strong> Create animations, 3D assets, and interactive mockups.</li>
                <li><strong className="text-foreground">Sales demos & landing pages:</strong> Build SEO-friendly pages and tailored demos.</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-16 pt-8 border-t">
        <h2 className="text-2xl font-semibold mb-6 text-center">Need more help?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link 
            href="https://vercel.com/docs/v0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <FileTextIcon className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Documentation</h3>
            <p className="text-sm text-center text-muted-foreground">
              Read the official v0 documentation
            </p>
          </Link>
          
          <Link 
            href="https://discord.gg/4ECCp2V5y9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <svg className="h-8 w-8 mb-4 text-primary" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.5535 3.01557C12.5023 2.5343 11.3925 2.19287 10.2526 2C10.0966 2.27886 9.95547 2.56577 9.82976 2.85952C8.6155 2.67655 7.38067 2.67655 6.16641 2.85952C6.04063 2.5658 5.89949 2.27889 5.74357 2C4.60289 2.1945 3.4924 2.53674 2.44013 3.01809C0.351096 6.10885 -0.215207 9.12285 0.0679444 12.0941C1.29133 12.998 2.66066 13.6854 4.11639 14.1265C4.44417 13.6856 4.73422 13.2179 4.98346 12.7283C4.51007 12.5515 4.05317 12.3334 3.61804 12.0764C3.73256 11.9934 3.84456 11.9078 3.95279 11.8248C5.21891 12.4202 6.60083 12.7289 7.99997 12.7289C9.39912 12.7289 10.781 12.4202 12.0472 11.8248C12.1566 11.9141 12.2686 11.9997 12.3819 12.0764C11.9459 12.3338 11.4882 12.5524 11.014 12.7296C11.2629 13.2189 11.553 13.6862 11.881 14.1265C13.338 13.6872 14.7084 13.0001 15.932 12.0953C16.2642 8.64968 15.3644 5.66336 13.5535 3.01557ZM5.34212 10.2668C4.55307 10.2668 3.90119 9.55073 3.90119 8.66981C3.90119 7.78889 4.53042 7.06654 5.3396 7.06654C6.14879 7.06654 6.79563 7.78889 6.78179 8.66981C6.76795 9.55073 6.14627 10.2668 5.34212 10.2668ZM10.6578 10.2668C9.86752 10.2668 9.21815 9.55073 9.21815 8.66981C9.21815 7.78889 9.84738 7.06654 10.6578 7.06654C11.4683 7.06654 12.1101 7.78889 12.0962 8.66981C12.0824 9.55073 11.462 10.2668 10.6578 10.2668Z" />
            </svg>
            <h3 className="text-lg font-medium mb-2">Discord Community</h3>
            <p className="text-sm text-center text-muted-foreground">
              Join our community to ask questions
            </p>
          </Link>
          
          <Link 
            href="https://vercel.com/support" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-lg bg-card hover:bg-accent/50 transition-colors"
          >
            <HelpCircleIcon className="h-8 w-8 mb-4 text-primary" />
            <h3 className="text-lg font-medium mb-2">Support</h3>
            <p className="text-sm text-center text-muted-foreground">
              Get help from our support team
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
} 