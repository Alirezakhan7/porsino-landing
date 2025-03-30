'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createChatSession, sendMessage, getSessionMessages, type ChatMessage } from '@/lib/supabase';
import { cn } from '@/lib/utils';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const initializeChat = async () => {
    try {
      const session = await createChatSession();
      setSessionId(session.id);
      
      // Add welcome message
      const welcomeMessage = await sendMessage(
        session.id,
        'سلام! به پشتیبانی پرسینو خوش آمدید. چطور می‌توانم کمکتان کنم؟',
        true
      );
      setMessages([welcomeMessage]);
    } catch (error) {
      console.error('Error initializing chat:', error);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (!sessionId) {
      initializeChat();
    }
  };

  const handleSend = async () => {
    if (!input.trim() || !sessionId) return;

    setIsLoading(true);
    try {
      // Send user message
      const userMessage = await sendMessage(sessionId, input, false);
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      // Simulate bot response
      setTimeout(async () => {
        const botResponse = await sendMessage(
          sessionId,
          'ممنون از پیام شما. همکاران ما در اسرع وقت پاسخگوی شما خواهند بود.',
          true
        );
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed left-4 bottom-4 z-50"
      >
        <Button
          onClick={handleOpen}
          className="w-12 h-12 rounded-full bg-[#46988F] hover:bg-[#5AB5AC] text-white shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed left-4 bottom-20 z-50 w-[350px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            dir="rtl"
          >
            {/* Header */}
            <div className="bg-[#46988F] p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3 space-x-reverse text-white">
                <MessageSquare className="h-6 w-6" />
                <h3 className="font-semibold">پشتیبانی پرسینو</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    'max-w-[80%] rounded-2xl p-3',
                    message.is_bot
                      ? 'bg-gray-100 mr-0 ml-auto'
                      : 'bg-[#46988F] text-white ml-0 mr-auto'
                  )}
                >
                  {message.content}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t p-4">
              <div className="flex space-x-2 space-x-reverse">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="پیام خود را بنویسید..."
                  className="text-right"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-[#46988F] hover:bg-[#5AB5AC] text-white"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}