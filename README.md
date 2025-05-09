# v0.dev - AI Chat Generative UI

**v0.dev** is a modern, full-stack, AI-powered chat UI application designed for developers who want seamless integration with powerful LLM providers like **Together AI** and **Groq**. Built with **Next.js**, **TypeScript**, and **Tailwind CSS**, it delivers real-time, responsive chat capabilities with a beautiful and intuitive interface.

---

## 🚀 Features

* 🧠 **LLM Switching** — Toggle between Together AI and Groq models on the fly
* 💬 **Real-Time Chat** — Sleek, reactive message handling and history
* 🎨 **Modern Design** — Built with shadcn/ui + Tailwind CSS for ultimate theming
* 🧩 **Component-Driven** — Modular, reusable code structure
* 🌐 **Multilingual Support** — Smart response localization matching user input
* 🧠 **Chain of Thought (CoT)** — Enhanced reasoning before responding using XML-style encapsulation
* 📱 **Responsive Layout** — Fully optimized for mobile, tablet, and desktop
* 🛠️ **Type-Safe** — Leveraging TypeScript for strong developer confidence
* 🌈 **Enhanced Markdown & MDX** — Rich, dynamic documentation support with special components

---

## 🧰 Tech Stack

* **Next.js 14 (App Router)**
* **TypeScript**
* **Tailwind CSS + shadcn/ui**
* **Together AI SDK**
* **Groq API SDK**

---

## 📦 Getting Started

### Prerequisites

* Node.js 18+
* npm or yarn
* API keys from [Together AI](https://together.ai) and [Groq](https://console.groq.com)

### Installation

```bash
git clone https://github.com/likhonsdev/v0.dev.git
cd v0.dev
npm install  # or yarn install
```

### Environment Variables

Create a `.env` file:

```env
TOGETHER_API_KEY=your-together-api-key
GROQ_API_KEY=your-groq-api-key
```

### Run Dev Server

```bash
npm run dev
# or
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
v0.dev/
├── app/                  # Next.js pages & routing
│   ├── chat/             # Chat UI & server logic
│   ├── components/       # Page-level components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Local utilities
├── components/           # Shared UI elements
│   └── ui/               # shadcn/ui components
├── lib/                  # Global utility functions
├── public/               # Static assets (images, icons)
└── styles/               # Tailwind and custom CSS
```

---

## 🤖 Supported Models

### Together AI

* Llama 3.1 8B (Free Tier)
* Llama 3.1 70B
* Mixtral 8x7B
* DeepSeek Coder 33B

### Groq

* Llama 3 8B
* Llama 3 70B
* Mixtral 8x7B
* Gemma 7B

---

## 🌍 Deployment

Deploy with a single click on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flikhonsdev%2Fv0.dev)

> Ensure your environment variables are set on Vercel for seamless API communication.

---

## 🧠 MDX Features

Leverage extended MDX syntax and custom components:

* `<LinearProcessFlow />` – Ideal for visual walkthroughs
* `<Quiz />` – Interactive learning/testing
* `<math>` – Inline LaTeX-style math rendering
* `<Thinking />` – Encapsulates internal reasoning before output

### Code Block Enhancements

````tsx
```tsx project="v0.dev" file="components/Chat.tsx" type="react"
```
````

Other formats:

* `nodejs`, `html`, `markdown`, `mermaid`, `python`, etc.

---

## 🧪 Advanced Techniques

* **Chain of Thought Reasoning (CoT)**: System processes logic before generating response.
* **Prompt Meta-Tagging**: Enhanced control over rendering & output.
* **Multimodal Input-Awareness**: Supports complex structured queries.

---

## 🤝 Contributing

We welcome PRs! Fork the repo, create a feature branch, and submit your changes.

---

## 📄 License

Licensed under the **MIT License**.

---

## 🎯 Roadmap Ideas

* 🔌 Plugin system for model extensions
* 📊 Analytics dashboard for token usage
* 🗣️ Voice input/output support
* 🧠 Multi-turn memory & RAG
