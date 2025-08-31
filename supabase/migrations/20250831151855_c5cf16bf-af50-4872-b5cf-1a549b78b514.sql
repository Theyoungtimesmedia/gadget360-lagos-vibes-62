-- Update products with correct image URLs
-- iPhone 14
UPDATE public.products 
SET image_url = '/lovable-uploads/ad694c5b-8e7f-4a24-9ebd-42513e5083c8.png'
WHERE name = 'iPhone 14';

-- iPhone 13  
UPDATE public.products 
SET image_url = '/lovable-uploads/9f937d3c-ed97-439a-b47c-0838b3dc1aae.png'
WHERE name = 'iPhone 13';

-- iPhone XR
UPDATE public.products 
SET image_url = '/lovable-uploads/edc3f7ca-21de-4d5e-8620-a2572dd70d2c.png'
WHERE name = 'iPhone XR';

-- iPhone 12 Pro Max
UPDATE public.products 
SET image_url = '/lovable-uploads/64051fa0-7718-4c8f-a814-ec0f96fee646.png'
WHERE name = 'iPhone 12 Pro Max';

-- iPhone 12
UPDATE public.products 
SET image_url = '/lovable-uploads/0f57611f-454c-419a-8218-ab4c97095d2d.png'
WHERE name = 'iPhone 12';

-- Nintendo Switch 2
UPDATE public.products 
SET image_url = '/lovable-uploads/b60f1cdc-ff71-45e3-b32d-dc95867b7c50.png'
WHERE name = 'Nintendo Switch 2';

-- iPhone 12 Pro
UPDATE public.products 
SET image_url = '/lovable-uploads/44c20c40-1163-4e6d-bd84-d9c92c14da96.png'
WHERE name = 'iPhone 12 Pro';

-- iPhone 11 
UPDATE public.products 
SET image_url = '/lovable-uploads/919a30b9-0909-4dc7-8c35-566c0d822ce5.png'
WHERE name = 'iPhone 11';

-- iPhone 11 Pro
UPDATE public.products 
SET image_url = '/lovable-uploads/a848bf64-72ed-4f93-a11c-cbc97b059b82.png'
WHERE name = 'iPhone 11 Pro';

-- iPhone 11 Pro Max (using iPhone 11 Pro image as they're similar)
UPDATE public.products 
SET image_url = '/lovable-uploads/a848bf64-72ed-4f93-a11c-cbc97b059b82.png'
WHERE name = 'iPhone 11 Pro Max';