# v0.dev
v0 is a pair programmer that lets you describe your ideas in natural language and generates both the code and UI for your project. Anything you create with v0 can be deployed to Vercel.


# v0.dev AI Chat

A modern AI chat application powered by Together AI and Groq, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🤖 Chat with powerful LLMs from multiple providers
- 🔄 Switch between models from Together AI and Groq
- 💬 Real-time chat interface with message history
- 🌈 Modern UI with Tailwind CSS and shadcn/ui components
- 📱 Fully responsive design
- 🚀 Built with Next.js and TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- API keys for Together AI and Groq

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/v0-dev.git
cd v0-dev
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
│   ├── hooks/             # Custom React hooks
│   └── lib/               # Utility functions and helpers
├── components/            # Shared UI components
│   └── ui/                # shadcn/ui components
├── lib/                   # Global utility functions
├── public/                # Static assets
└── ...
```

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

This application can be deployed on Vercel, Netlify, or any other Next.js compatible hosting service.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fv0-dev)

Remember to set up your environment variables on your deployment platform.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
