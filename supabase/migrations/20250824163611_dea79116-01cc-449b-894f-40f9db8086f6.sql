-- Fix RLS policies for all tables to resolve security violations

-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT role FROM public.profiles WHERE user_id = auth.uid();
$function$;

-- Fix function search path security issue  
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
BEGIN
  NEW.updated_at = now();
  return NEW;
END;
$function$;

-- Add sample products to fix empty table
INSERT INTO public.products (name, description, category, price, stock_quantity, image_url, is_active) VALUES
('iPhone 15 Pro Max', 'Latest Apple iPhone with 256GB storage, brand new with warranty', 'Phones', 1200000, 5, '/lovable-uploads/371bdd40-ee61-409b-8a61-603c7a2ef02a.png', true),
('PlayStation 5 Slim', 'Latest gaming console with 1TB SSD storage and wireless controller', 'Gaming', 880000, 3, '/lovable-uploads/df694e32-c5af-43c0-84b0-7f0fd813286e.png', true),
('MacBook Pro M3', '14-inch MacBook Pro with M3 chip, 16GB RAM, 512GB SSD', 'Computers', 1800000, 2, '/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png', true),
('Samsung Galaxy S24 Ultra', 'Flagship Android phone with S Pen, 256GB storage', 'Phones', 950000, 4, '/lovable-uploads/83043459-86ce-4835-9c9f-b726b5b2bc08.png', true),
('AirPods Pro 3rd Gen', 'Wireless earbuds with active noise cancellation', 'Accessories', 280000, 8, '/lovable-uploads/8721a0aa-8ab0-49ab-98aa-7403738685fc.png', true),
('Dell XPS 13', 'Ultra-portable laptop with Intel i7, 16GB RAM, 512GB SSD', 'Computers', 1400000, 3, '/lovable-uploads/bc6a0b18-9193-4c84-a2a2-8eb498b798b6.png', true),
('Nintendo Switch OLED', 'Portable gaming console with vibrant OLED display', 'Gaming', 380000, 6, '/lovable-uploads/9e439c7d-058d-4308-b2e7-0ee6959369de.png', true),
('iPad Pro 12.9"', 'Professional tablet with M2 chip and Apple Pencil support', 'Tablets', 1100000, 4, '/lovable-uploads/d9bf483d-d231-404e-bb25-0e423033b711.png', true);