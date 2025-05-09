import { useState } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatOptions {
  model?: string;
  temperature?: number;
  max_tokens?: number;
}

interface UseChatProps {
  initialMessages?: Message[];
  options?: ChatOptions;
}

export function useChat({
  initialMessages = [],
  options = {}
}: UseChatProps = {}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addMessage = (message: Omit<Message, 'id'>) => {
    const id = crypto.randomUUID();
    const newMessage = { id, ...message };
    setMessages((prev) => [...prev, newMessage]);
    return newMessage;
  };

  const sendMessage = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Add user message to the state
      addMessage({ role: 'user', content });

      // Prepare messages for API call
      const chatMessages = messages.map(({ role, content }) => ({ role, content }));
      chatMessages.push({ role: 'user', content });

      // Make API call
      const response = await fetch('/chat/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: chatMessages,
          ...options
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      const data = await response.json();

      // Add assistant response to the state
      addMessage({
        role: 'assistant',
        content: data.response,
      });

      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error sending message:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const resetMessages = () => {
    setMessages([]);
    setError(null);
  };

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    addMessage,
    resetMessages,
  };
} 