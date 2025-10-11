-- Add enhanced fields to products table for better product management
ALTER TABLE products
ADD COLUMN IF NOT EXISTS additional_images TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS is_featured BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS meta_title TEXT,
ADD COLUMN IF NOT EXISTS meta_description TEXT,
ADD COLUMN IF NOT EXISTS badge_text TEXT,
ADD COLUMN IF NOT EXISTS badge_color TEXT;

-- Add index for featured products
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured) WHERE is_featured = true;

-- Add index for category filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);