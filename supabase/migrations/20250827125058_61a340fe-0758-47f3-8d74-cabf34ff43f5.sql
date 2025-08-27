-- Insert products with proper UUIDs and details
INSERT INTO public.products (id, name, description, price, category, stock_quantity, image_url) VALUES
-- Consoles & Games
('550e8400-e29b-41d4-a716-446655440001', 'Nintendo Switch Standard', '32GB Storage, Portable Gaming', 390000, 'Consoles & Games', 15, '/lovable-uploads/0bb67128-8dd5-487b-a971-3259ae739094.png'),
('550e8400-e29b-41d4-a716-446655440002', 'PS5 PRO 2TB', '2TB SSD, Enhanced Performance', 1350000, 'Consoles & Games', 8, '/lovable-uploads/0cd8ddce-afe1-47f0-91b5-776628bb7751.png'),
('550e8400-e29b-41d4-a716-446655440003', 'XBox X Series 1TB', '1TB SSD, 4K Gaming, Disc Drive', 1070000, 'Consoles & Games', 12, '/lovable-uploads/1c5282cd-78ef-4d06-bb92-c7880ee2b9af.png'),
('550e8400-e29b-41d4-a716-446655440004', 'XBox S Series 512GB', '512GB SSD, Digital Edition', 470000, 'Consoles & Games', 20, '/lovable-uploads/324f72db-2bf4-494a-b73f-0b8faf06993f.png'),

-- Accessories  
('550e8400-e29b-41d4-a716-446655440005', 'Amazon Fire HD Tablets', '10" Display, Kids Edition Available', 85000, 'Accessories', 25, '/lovable-uploads/335cb308-9043-47a5-9ea4-82bc3bbed7cc.png'),

-- Apple Products
('550e8400-e29b-41d4-a716-446655440006', '20W Power Adapter', 'Fast Charging, USB-C', 40000, 'Apple', 50, '/lovable-uploads/371bdd40-ee61-409b-8a61-603c7a2ef02a.png'),
('550e8400-e29b-41d4-a716-446655440007', 'USB Adapter', 'USB-C to Lightning', 30000, 'Apple', 40, '/lovable-uploads/3ee9f310-f95f-4a70-8c67-aa811db3ff50.png'),
('550e8400-e29b-41d4-a716-446655440008', 'AirPods Pro 2', 'Active Noise Cancellation, Hearing Aid Feature', 320000, 'Apple', 18, '/lovable-uploads/45118d1e-52a5-4fcb-94f5-07961150129b.png'),
('550e8400-e29b-41d4-a716-446655440009', 'Apple Watch Series', 'GPS, Health Monitoring, Water Resistant', 150000, 'Apple', 22, '/lovable-uploads/47d70b62-65e3-40db-8bfa-7841a58e01b4.png'),

-- Laptops
('550e8400-e29b-41d4-a716-446655440010', 'MacBook Pro 2019 13"', 'Intel i5, 8GB RAM, 256GB SSD', 755000, 'Laptops', 6, '/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png'),
('550e8400-e29b-41d4-a716-446655440011', 'HP EliteBook 1030 G3', 'Intel i7, 16GB RAM, 512GB SSD', 580000, 'Laptops', 10, '/lovable-uploads/4b216da9-22ab-450e-acb1-bb3dbc10b238.png');