-- Fix RLS policies for products table to allow admin operations
-- Add policies for INSERT, UPDATE, DELETE operations

-- Allow anyone to insert products (you can make this more restrictive later)
CREATE POLICY "Anyone can insert products" ON public.products
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to update products (you can make this more restrictive later)  
CREATE POLICY "Anyone can update products" ON public.products
FOR UPDATE 
USING (true);

-- Allow anyone to delete products (you can make this more restrictive later)
CREATE POLICY "Anyone can delete products" ON public.products
FOR DELETE 
USING (true);

-- Update chat_sessions to remove customer_name requirement and use user profiles
ALTER TABLE public.chat_sessions DROP COLUMN IF EXISTS customer_name;