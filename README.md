# v0.dev

This project uses Next.js 15 and is optimized for deployment on Vercel.

## Getting Started

First, set up your environment variables:

1. Create a `.env.local` file with the required API keys (see .env.example)

Then, run the development server:

```bash
npm install
npm run dev
```
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository
2. Import the project to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_APP_URL`: Your application URL
- `TOGETHER_API_KEY`: Your Together AI API key
- `GROQ_API_KEY`: Your Groq API key

## Features

- Modern UI with React and Tailwind CSS
- AI component generation
- Optimized for performance

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
