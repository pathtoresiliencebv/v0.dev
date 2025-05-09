# v0.dev AI Chat

<div align="center">
  <img src="https://raw.githubusercontent.com/likhonsdev/v0.dev/refs/heads/main/public/IMG_8943.png" alt="v0.dev Logo" width="180" height="180" style="border-radius: 10px;">
  
  <p align="center">
    <a href="https://github.com/likhonsdev/v0.dev/stargazers">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/likhonsdev/v0.dev?style=for-the-badge&color=indigo">
    </a>
    <a href="https://github.com/likhonsdev/v0.dev/network/members">
      <img alt="GitHub forks" src="https://img.shields.io/github/forks/likhonsdev/v0.dev?style=for-the-badge&color=indigo">
    </a>
    <a href="https://github.com/likhonsdev/v0.dev/issues">
      <img alt="GitHub issues" src="https://img.shields.io/github/issues/likhonsdev/v0.dev?style=for-the-badge&color=indigo">
    </a>
    <a href="https://github.com/likhonsdev/v0.dev/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/likhonsdev/v0.dev?style=for-the-badge&color=indigo">
    </a>
  </p>
  
  <h3 align="center">A modern AI chat application and development platform</h3>
  
  <p align="center">
    Powered by Together AI and Groq • Built with Next.js, TypeScript, and Tailwind CSS
    <br />
    <a href="https://github.com/likhonsdev/v0.dev"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://v0.dev">View Demo</a>
    ·
    <a href="https://github.com/likhonsdev/v0.dev/issues">Report Bug</a>
    ·
    <a href="https://github.com/likhonsdev/v0.dev/issues">Request Feature</a>
  </p>
</div>

<div align="center">
  <img src="https://raw.githubusercontent.com/likhonsdev/v0.dev/refs/heads/main/public/IMG_3056.png" alt="v0.dev Screenshot" width="80%" style="border-radius: 10px; margin: 20px 0;">
</div>

## ✨ Features

- 🤖 **Multiple LLM Providers** - Chat with powerful LLMs from Together AI and Groq
- 🔄 **Model Switching** - Seamlessly switch between different AI models
- 💬 **Real-time Chat** - Interactive chat interface with message history
- 📝 **Version History** - Track all code generations and changes
- 🖥️ **Advanced Code Editor** - Feature-rich editor with syntax highlighting
- 📁 **Project Management** - Organize and manage multiple projects
- 🚀 **One-Click Deployment** - Deploy your applications with ease
- 🌈 **Modern UI** - Beautiful interface built with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works on all devices, from mobile to desktop
- 🔧 **TypeScript Support** - Built with type safety in mind

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+
- npm or yarn
- API keys for Together AI and Groq

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/likhonsdev/v0.dev.git
cd v0.dev
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory and add your API keys:

```env
TOGETHER_API_KEY=your-together-api-key
GROQ_API_KEY=your-groq-api-key
NEXTAUTH_SECRET=your-nextauth-secret
DATABASE_URL=your-database-url
```

You can get these API keys by signing up at:
- [Together AI](https://together.ai)
- [Groq](https://console.groq.com)

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the application.

## 📂 Project Structure

```
v0.dev/
├── app/                   # Next.js app directory
│   ├── api/               # API routes
│   ├── chat/              # Chat page and components
│   ├── components/        # UI components
│   │   └── ui/            # UI components specific to app
│   ├── hooks/             # Custom React hooks
│   ├── project/           # Project pages
│   └── lib/               # Utility functions and helpers
├── components/            # Shared UI components
│   └── ui/                # shadcn/ui components
├── lib/                   # Global utility functions
├── public/                # Static assets
├── styles/                # Global styles
├── types/                 # TypeScript type definitions
└── ...
```

## 📈 Version History

Each time v0 updates a code block from a message, it creates a new version. Non-message actions (such as editing code or modifying files directly) do not generate new versions.

<div align="center">
  <img src="https://raw.githubusercontent.com/likhonsdev/v0.dev/refs/heads/main/public/IMG_8943.png" alt="Version History" width="70%" style="border-radius: 8px; margin: 20px 0;">
</div>

Restoring an old version creates a new, most recent version using the restored code to maintain a linear version history.

When deploying, the latest version of the code is used. If you want to deploy a previous version, you can restore it and then deploy.

## 📁 Projects

Creating a project automatically sets up everything you need to start developing. Projects allow you to:

1. **Organize** your work into separate spaces
2. **Track** version history of your code
3. **Deploy** your applications directly
4. **Share** and collaborate with others

## 🤖 Available Models

### Together AI Models
- **Llama 3.1 8B** (Free)
- **Llama 3.1 70B**
- **Mixtral 8x7B**
- **DeepSeek Coder 33B**

### Groq Models
- **Llama 3 8B**
- **Llama 3 70B**
- **Mixtral 8x7B**
- **Gemma 7B**

## 🚀 Deployment

This application can be deployed on Vercel or any other Next.js compatible hosting service.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flikhonsdev%2Fv0.dev)

<div align="center">
  <img src="https://raw.githubusercontent.com/likhonsdev/v0.dev/refs/heads/main/public/vercel.svg" alt="Vercel Logo" width="120">
</div>

Remember to set up your environment variables on your deployment platform.

## 👥 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Together AI](https://together.ai)
- [Groq](https://groq.com)

<div align="center">
  <p>
    Built with ❤️ by <a href="https://github.com/likhonsdev">likhonsdev</a>
  </p>
</div>
