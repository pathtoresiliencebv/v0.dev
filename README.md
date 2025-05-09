# v0.dev AI Chat

A modern AI chat application and development platform powered by Together AI and Groq, built with Next.js, TypeScript, and Tailwind CSS. Similar to v0.dev, it allows you to generate UI, ask questions, debug code, and much more.

## Features

- 🤖 Chat with powerful LLMs from multiple providers
- 🔄 Switch between models from Together AI and Groq
- 💬 Real-time chat interface with message history
- 📝 Version history for code generations
- 🖥️ Code editor with syntax highlighting
- 📁 Project management system
- 🚀 Deployment capabilities
- 🌈 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- 🔧 Built with Next.js and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- API keys for Together AI and Groq

### Installation

1. Clone the repository:

```bash
git clone https://github.com/likhonsdev/v0.dev.git
cd v0.dev
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env` file in the root directory and add your API keys:

```
TOGETHER_API_KEY=your-together-api-key
GROQ_API_KEY=your-groq-api-key
```

You can get these API keys by signing up at:
- [Together AI](https://together.ai)
- [Groq](https://console.groq.com)

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
v0.dev/
├── app/                   # Next.js app directory
│   ├── chat/              # Chat page and API routes
│   ├── components/        # UI components
│   │   └── ui/            # UI components specific to app
│   ├── hooks/             # Custom React hooks
│   ├── project/           # Project pages
│   └── lib/               # Utility functions and helpers
├── components/            # Shared UI components
│   └── ui/                # shadcn/ui components
├── lib/                   # Global utility functions
├── public/                # Static assets
└── ...
```

## Version History

Each time v0 updates a code block from a message, it creates a new version. Non-message actions (such as editing code or modifying files directly) do not generate new versions.

Restoring an old version creates a new, most recent version using the restored code to maintain a linear version history.

When deploying, the latest version of the code is used. If you want to deploy a previous version, you can restore it and then deploy.

## Projects

Creating a project automatically sets up everything you need to start developing. Projects allow you to:

1. Organize your work into separate spaces
2. Track version history of your code
3. Deploy your applications directly
4. Share and collaborate with others

## Available Models

### Together AI Models
- Llama 3.1 8B (Free)
- Llama 3.1 70B
- Mixtral 8x7B
- DeepSeek Coder 33B

### Groq Models
- Llama 3 8B
- Llama 3 70B
- Mixtral 8x7B
- Gemma 7B

## Deployment

This application can be deployed on Vercel or any other Next.js compatible hosting service.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flikhonsdev%2Fv0.dev)

Remember to set up your environment variables on your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
