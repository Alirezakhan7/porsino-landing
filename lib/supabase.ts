import { createClient } from '@supabase/supabase-js';

// For development, we'll use anonymous authentication
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key'
);

// Chat Types
export interface ChatSession {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'open' | 'closed';
}

export interface ChatMessage {
  id: string;
  session_id: string;
  content: string;
  is_bot: boolean;
  created_at: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  author: string;
  published_at: string;
  reading_time: string;
  category: string;
  created_at: string;
  updated_at: string;
}

// Chat Functions
export async function createChatSession(): Promise<ChatSession> {
  // For development, we'll create a simple session without authentication
  return {
    id: Math.random().toString(36).substring(7),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    status: 'open'
  };
}

export async function sendMessage(sessionId: string, content: string, isBot: boolean = false): Promise<ChatMessage> {
  // For development, we'll return a mock message
  return {
    id: Math.random().toString(36).substring(7),
    session_id: sessionId,
    content,
    is_bot: isBot,
    created_at: new Date().toISOString()
  };
}

export async function getSessionMessages(sessionId: string): Promise<ChatMessage[]> {
  // For development, we'll return an empty array
  return [];
}

// Blog Functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('published_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) throw error;
  return data;
}