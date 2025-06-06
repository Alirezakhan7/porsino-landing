/*
  # Create chatbot support tables

  1. New Tables
    - `chat_sessions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      - `status` (text) - open/closed
    
    - `chat_messages`
      - `id` (uuid, primary key)
      - `session_id` (uuid, references chat_sessions)
      - `content` (text)
      - `is_bot` (boolean)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to:
      - Create and read their own chat sessions
      - Create and read messages in their sessions
*/

-- Create chat_sessions table
CREATE TABLE IF NOT EXISTS chat_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  status text DEFAULT 'open' CHECK (status IN ('open', 'closed')),
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES auth.users (id)
);

-- Create chat_messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES chat_sessions NOT NULL,
  content text NOT NULL,
  is_bot boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  CONSTRAINT fk_session FOREIGN KEY (session_id) REFERENCES chat_sessions (id)
);

-- Enable Row Level Security
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Policies for chat_sessions
CREATE POLICY "Users can create their own chat sessions"
  ON chat_sessions
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own chat sessions"
  ON chat_sessions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policies for chat_messages
CREATE POLICY "Users can create messages in their sessions"
  ON chat_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM chat_sessions
      WHERE id = chat_messages.session_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can view messages from their sessions"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM chat_sessions
      WHERE id = chat_messages.session_id
      AND user_id = auth.uid()
    )
  );