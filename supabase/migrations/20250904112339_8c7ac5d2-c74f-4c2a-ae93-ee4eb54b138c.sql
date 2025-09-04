-- Insert the specific products mentioned by the user with their uploaded images
-- Only insert if they don't already exist to avoid duplicates

-- Apple 20W Power Adapter
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT '20W Power Adapter', 'Fast Charging, USB-C', 40000, 'Apple', 50, '/lovable-uploads/c476ca25-598f-42b1-8de6-cbf643e0e69e.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = '20W Power Adapter'
);

-- Apple USB Adapter
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'USB Adapter', 'USB-C to Lightning', 30000, 'Apple', 75, '/lovable-uploads/80264eaa-7e4a-4fe9-a38a-7862d5d2f2c6.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'USB Adapter'
);

-- Apple AirPods Pro 2
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'AirPods Pro 2', 'Active Noise Cancellation, Hearing Aid Feature', 320000, 'Apple', 30, '/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'AirPods Pro 2'
);

-- MacBook Pro 2019
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'MacBook Pro 2019', 'Intel i5, 8GB RAM, 256GB SSD', 755000, 'Laptops', 15, '/lovable-uploads/371bdd40-ee61-409b-8a61-603c7a2ef02a.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'MacBook Pro 2019'
);

-- XBox X Series 1TB
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'XBox X Series 1TB', '1TB SSD, 4K Gaming, Disc Drive', 1070000, 'Consoles & Games', 20, '/lovable-uploads/578a900c-f54f-4321-8b33-489982e1be95.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'XBox X Series 1TB'
);

-- Nintendo Switch Standard
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'Nintendo Switch Standard', '32GB Storage, Portable Gaming', 390000, 'Consoles & Games', 25, '/lovable-uploads/45118d1e-52a5-4fcb-94f5-07961150129b.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'Nintendo Switch Standard'
);

-- XBox S Series 512GB
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'XBox S Series 512GB', '512GB SSD, Digital Edition', 470000, 'Consoles & Games', 30, '/lovable-uploads/e2ac9755-8527-4fa7-a66c-5d67d31bcbb0.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'XBox S Series 512GB'
);

-- PS5 PRO 2TB
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'PS5 PRO 2TB', '2TB SSD, Enhanced Performance', 1350000, 'Consoles & Games', 10, '/lovable-uploads/9e439c7d-058d-4308-b2e7-0ee6959369de.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'PS5 PRO 2TB'
);

-- Nintendo Switch OLED
INSERT INTO public.products (name, description, price, category, stock_quantity, image_url)
SELECT 'Nintendo Switch OLED', '64GB, OLED Display, Enhanced Audio', 435000, 'Consoles & Games', 20, '/lovable-uploads/748f6b1b-dfd2-4f84-bc33-518f43e050c6.png'
WHERE NOT EXISTS (
    SELECT 1 FROM public.products WHERE name = 'Nintendo Switch OLED'
);