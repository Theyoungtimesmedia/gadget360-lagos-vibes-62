-- Add avatar_url column to profiles table
ALTER TABLE public.profiles 
ADD COLUMN avatar_url TEXT;

-- Create product_reviews table
CREATE TABLE public.product_reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, product_id)
);

-- Enable RLS for product_reviews
ALTER TABLE public.product_reviews ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for product_reviews
CREATE POLICY "Reviews are publicly viewable" ON public.product_reviews
  FOR SELECT USING (true);

CREATE POLICY "Users can create their own reviews" ON public.product_reviews
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON public.product_reviews
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews" ON public.product_reviews
  FOR DELETE USING (auth.uid() = user_id);

-- Add trigger for automatic timestamp updates on reviews
CREATE TRIGGER update_product_reviews_updated_at
  BEFORE UPDATE ON public.product_reviews
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_product_reviews_user_id ON public.product_reviews(user_id);
CREATE INDEX idx_product_reviews_product_id ON public.product_reviews(product_id);