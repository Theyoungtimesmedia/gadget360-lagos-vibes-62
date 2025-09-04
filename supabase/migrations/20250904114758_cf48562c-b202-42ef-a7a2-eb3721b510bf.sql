-- Standardize product categories to match the filter options
-- Update "Consoles & Games" to "Gaming"
UPDATE public.products 
SET category = 'Gaming' 
WHERE category = 'Consoles & Games';

-- Ensure all product categories are organized properly
-- Apple products should stay as "Apple" category
-- Gaming products are now unified under "Gaming"
-- Audio products (like AirPods) should be in "Audio" category
UPDATE public.products 
SET category = 'Audio' 
WHERE name LIKE '%AirPods%' OR name LIKE '%Audio%' OR name LIKE '%Headphones%' OR name LIKE '%Speaker%';

-- Keep Apple adapters and chargers in Apple category
-- Keep laptops in Laptops category  
-- Keep gaming consoles in Gaming category