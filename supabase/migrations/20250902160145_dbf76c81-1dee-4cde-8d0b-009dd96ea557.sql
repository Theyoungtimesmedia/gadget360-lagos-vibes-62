-- Update products with the correct new uploaded images
-- iPhone 14 - using the colorful iPhone 14 lineup
UPDATE public.products 
SET image_url = '/lovable-uploads/c53d1933-a524-4e93-bdd9-4bdc7ec89812.png'
WHERE name ILIKE '%iPhone 14%' AND name NOT ILIKE '%Pro%';

-- iPhone 13 - using the iPhone 13 colorful lineup
UPDATE public.products 
SET image_url = '/lovable-uploads/b9a21e84-5c81-42e5-b9ef-05d4030bdb9d.png'
WHERE name ILIKE '%iPhone 13%' AND name NOT ILIKE '%Pro%';

-- iPhone XR - using the colorful iPhone XR lineup
UPDATE public.products 
SET image_url = '/lovable-uploads/de0b0735-8471-4a07-80e9-44ec768dd81c.png'
WHERE name ILIKE '%iPhone XR%';

-- iPhone 11 Pro - using the iPhone 11 Pro multiple colors (NOT iPhone 11 Pro Max)
UPDATE public.products 
SET image_url = '/lovable-uploads/57e757dd-4606-4d8c-a7b8-f96cc9453cee.png'
WHERE name ILIKE '%iPhone 11 Pro%' AND name NOT ILIKE '%Max%';

-- iPhone 12 Pro - using the iPhone 12 Pro multiple colors (NOT iPhone 12 Pro Max)
UPDATE public.products 
SET image_url = '/lovable-uploads/ac2489be-b89f-4b7d-9bd4-45e9a44916e5.png'
WHERE name ILIKE '%iPhone 12 Pro%' AND name NOT ILIKE '%Max%';

-- iPhone 12 - using the iPhone 12 multiple colors (NOT Pro versions)
UPDATE public.products 
SET image_url = '/lovable-uploads/8256705b-bae9-495b-ba23-276ffd8f3291.png'
WHERE name ILIKE '%iPhone 12%' AND name NOT ILIKE '%Pro%';

-- Nintendo Switch 2 - using the Nintendo Switch 2 boxes
UPDATE public.products 
SET image_url = '/lovable-uploads/b5c4df94-ea87-4605-ac5e-2beba97f6ee8.png'
WHERE name ILIKE '%Nintendo Switch 2%' OR name ILIKE '%Switch 2%';

-- iPhone 12 Pro Max - using the iPhone 12 Pro Max multiple colors
UPDATE public.products 
SET image_url = '/lovable-uploads/9b238476-3975-494c-b2c8-324c0bc40df7.png'
WHERE name ILIKE '%iPhone 12 Pro Max%';

-- iPhone 11 - using the iPhone 11 colorful lineup (NOT Pro versions)
UPDATE public.products 
SET image_url = '/lovable-uploads/dbcc84e0-c9e3-444c-b0ee-c1eb864d2dd4.png'
WHERE name ILIKE '%iPhone 11%' AND name NOT ILIKE '%Pro%';

-- iPhone 13 Pro - using the iPhone 13 Pro multiple colors (if any exist)
UPDATE public.products 
SET image_url = '/lovable-uploads/3a32dedd-f992-47a3-82e7-f20cb6ddd8ec.png'
WHERE name ILIKE '%iPhone 13 Pro%' AND name NOT ILIKE '%Max%';

-- iPhone 11 Pro Max - using remaining iPhone 11 Pro image if no specific iPhone 11 Pro Max exists
UPDATE public.products 
SET image_url = '/lovable-uploads/57e757dd-4606-4d8c-a7b8-f96cc9453cee.png'
WHERE name ILIKE '%iPhone 11 Pro Max%';