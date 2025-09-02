-- Update products with the new uploaded images
-- iPhone 14 - using the colorful iPhone 14 image
UPDATE public.products 
SET image_url = '/lovable-uploads/decd49a9-a317-4c13-abc7-43444ac56605.png'
WHERE name ILIKE '%iPhone 14%' AND name NOT ILIKE '%Pro%';

-- iPhone 13 - using the iPhone 13 multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/1f93166c-3cd2-4a77-929e-a603f11d06cd.png'
WHERE name ILIKE '%iPhone 13%' AND name NOT ILIKE '%Pro%';

-- iPhone XR - using the colorful iPhone XR image
UPDATE public.products 
SET image_url = '/lovable-uploads/069382b5-a615-4df1-82d9-d31d57540c2d.png'
WHERE name ILIKE '%iPhone XR%';

-- iPhone 11 Pro - using the iPhone 11 Pro multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/48c24d65-7739-48f3-bcff-31f266b4ebcf.png'
WHERE name ILIKE '%iPhone 11 Pro%' AND name NOT ILIKE '%Max%';

-- iPhone 12 Pro - using the iPhone 12 Pro multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/462ceebb-3522-4b93-a27f-622ccae6381e.png'
WHERE name ILIKE '%iPhone 12 Pro%' AND name NOT ILIKE '%Max%';

-- iPhone 12 - using the iPhone 12 multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/c32b3528-56d2-449f-9315-ba3e3a2c6562.png'
WHERE name ILIKE '%iPhone 12%' AND name NOT ILIKE '%Pro%';

-- Nintendo Switch 2 - using the Nintendo Switch 2 box image
UPDATE public.products 
SET image_url = '/lovable-uploads/affb1f88-309e-43f3-9beb-4d4d67c16ffe.png'
WHERE name ILIKE '%Nintendo Switch 2%';

-- iPhone 12 Pro Max - using the iPhone 12 Pro Max multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/554e6a70-0f57-4c3a-8a25-317d498a32e6.png'
WHERE name ILIKE '%iPhone 12 Pro Max%';

-- iPhone 11 - using the iPhone 11 multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/95c94ce0-7b51-434e-ab03-ccfe4feac034.png'
WHERE name ILIKE '%iPhone 11%' AND name NOT ILIKE '%Pro%';

-- iPhone 11 Pro Max - using remaining image if exists
UPDATE public.products 
SET image_url = '/lovable-uploads/a2c44501-c237-4413-a5a4-9082d036c6e4.png'
WHERE name ILIKE '%iPhone 11 Pro Max%';