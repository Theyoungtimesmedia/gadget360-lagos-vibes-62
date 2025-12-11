-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES public.chat_sessions(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('user', 'bot')),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Add customer_name column to chat_sessions
ALTER TABLE public.chat_sessions ADD COLUMN IF NOT EXISTS customer_name TEXT;

-- Make user_id nullable in chat_sessions for anonymous users
ALTER TABLE public.chat_sessions ALTER COLUMN user_id DROP NOT NULL;

-- Enable RLS on chat_messages
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS policies for chat_messages - allow anyone to insert/select for chat widget
CREATE POLICY "Anyone can insert chat messages" ON public.chat_messages
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view chat messages" ON public.chat_messages
FOR SELECT USING (true);

-- Update chat_sessions RLS to allow anonymous users
DROP POLICY IF EXISTS "Users can insert their own chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can view their own chat sessions" ON public.chat_sessions;
DROP POLICY IF EXISTS "Users can update their own chat sessions" ON public.chat_sessions;

CREATE POLICY "Anyone can create chat sessions" ON public.chat_sessions
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view chat sessions" ON public.chat_sessions
FOR SELECT USING (true);

CREATE POLICY "Anyone can update chat sessions" ON public.chat_sessions
FOR UPDATE USING (true);