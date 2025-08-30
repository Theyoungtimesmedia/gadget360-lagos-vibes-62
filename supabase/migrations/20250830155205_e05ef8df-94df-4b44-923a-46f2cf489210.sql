-- Clear existing products and add new iPhone and Nintendo Switch products
DELETE FROM products;

-- Add new products with uploaded images
INSERT INTO products (name, description, price, category, image_url, stock_quantity) VALUES
(
  'iPhone XR',
  'iOS 16/17/18, 12MP main camera with dual-OIS & quad-LED flash, IP67 water and dust resistant, Single SIM, 7MP TrueDepth Camera with FaceID unlock. Available in multiple colors: Black, White, Blue, Coral, Red, Yellow. Storage options: 64GB, 128GB.',
  390000,
  'Smartphones',
  '/lovable-uploads/dbc899fa-913e-43e3-af4a-e957b17f8e02.png',
  15
),
(
  'iPhone 11',
  'Ships with latest iOS 13, Dual rear cameras incorporating cutting-edge technology, 12MP (Wide) + 12MP (Ultra-Wide), 12MP TrueDepth Camera with FaceID unlock, 6.1" Liquid Retina HD IPS Display, Apple A13 Bionic processor, 4K video capture at 60 fps, Dolby Atmos sound, Apple Pay enabled, Lightning connector, IP68 water and dust resistant. Colors: Black, White, Green, Purple, Red, Yellow. Storage: 64GB, 128GB.',
  470000,
  'Smartphones',
  '/lovable-uploads/4a168828-d741-4691-b67b-376bae120569.png',
  20
),
(
  'iPhone 11 Pro',
  'SIZE: 5.8 inches, 84.4 cm2 (~82.1% screen-to-body ratio), MAIN CAMERA: 12 MP, f/1.8, 26mm (wide), 12 MP, f/2.0, 52mm (telephoto), 12 MP, f/2.4, 13mm (ultrawide), SELFIE CAMERA: 12 MP, f/2.2 TOF 3D camera, BUILD: Front/back glass, stainless steel frame, OS: iOS 13 & upgradable RAM: 4GB ram, Non-removable Li-Ion 3190 mAh battery Fast battery charging 18W. Colors: Space gray, Silver, Gold, Midnight green. Storage: 64GB, 128GB, 256GB.',
  650000,
  'Smartphones',
  '/lovable-uploads/5368b735-a5aa-4fc7-84b5-76efb0a8d16c.png',
  12
),
(
  'iPhone 11 Pro Max',
  'Ships with latest iOS 13, Triple rear cameras incorporating cutting-edge technology, 12MP (Wide) + 12MP (Ultra-Wide) + 12MP (Telephoto), 12MP TrueDepth Camera with FaceID unlock, 6.5" Super Retina XDR Display, Apple A13 Bionic processor, 4K video capture at 60 fps, Dolby Atmos sound, Apple Pay enabled, Lightning connector, IP68 water and dust resistant. Colors: Gold, Midnight green, Silver, Space gray. Storage: 64GB, 128GB, 256GB.',
  750000,
  'Smartphones',
  '/lovable-uploads/5368b735-a5aa-4fc7-84b5-76efb0a8d16c.png',
  10
),
(
  'iPhone 12',
  'SIZE: 6.1 inches, 90.2 cm2, PROTECTION: Scratch-resistant ceramic glass, oleophobic coating, OS: iOS 14.1 upgradable, CHIPSET: Apple A14 Bionic (5 nm), RAM: 4GB, MAIN CAMERA: Dual 12 MP, f/1.6, 26mm (wide), 12 MP, f/2.4, 120˚, 13mm (ultrawide), SELFIE CAMERA: Dual 12 MP, f/2.2, 23mm (wide), Face ID, accelerometer, gyro, proximity, compass, barometer, Fast charging 20W, Dolby Vision. Colors: Black, White, Green, Blue, Red. Storage: 64GB, 128GB.',
  520000,
  'Smartphones',
  '/lovable-uploads/5159f737-15a7-490f-a929-d96857add258.png',
  18
),
(
  'Nintendo Switch 2',
  'Latest Nintendo Switch console with enhanced performance and new features. Perfect for gaming on the go or at home.',
  835000,
  'Gaming',
  '/lovable-uploads/8cb9fceb-1443-48f3-9318-a4fdeaee2d27.png',
  8
),
(
  'iPhone 12 Pro',
  'Size: 6.1 inches, 90.2 cm2, OS: iOS 14.1 upgradable, Chipset: Apple A14 Bionic (5 nm), RAM: 6GB, Main Camera: Quad 12 MP, f/1.6, 26mm (wide), 12 MP, f/2.0, 52mm (telephoto), 12 MP, f/2.4, 120˚, 13mm (ultrawide), TOF 3D LiDAR scanner (depth), Selfie Camera: 12 MP, f/2.2, 23mm (wide), Face ID, accelerometer, gyro, proximity, compass, barometer, Fast charging 20W, HDR 4K. Colors: Silver, Graphite, Gold, Pacific blue. Storage: 128GB, 256GB.',
  680000,
  'Smartphones',
  '/lovable-uploads/74c9b497-8696-4395-8ec8-c9c93b052567.png',
  14
),
(
  'iPhone 12 Pro Max',
  '5G Mobile data connectivity, Triple rear cameras incorporating cutting-edge technology, 12MP (Wide) + 12MP (Ultra-Wide) + 12MP (Telephoto), 12MP TrueDepth Camera with FaceID unlock, 6.7" Super Retina XDR Display, Apple A14 Bionic processor, IP68 water and dust resistant. Colors: Silver, Graphite, Pacific blue, Gold. Storage: 128GB, 256GB, 512GB.',
  780000,
  'Smartphones',
  '/lovable-uploads/15938cc3-5cba-4aa0-ae63-59e65c224e5d.png',
  11
),
(
  'iPhone 13',
  'Ships with latest iOS 15, 6.1-inch Super Retina XDR Display, 128/256/512 GB Storage | 6 GB RAM, Dual 12MP Rear Camera, 12MP TrueDepth Front Camera with FaceID unlock, 5G Mobile data connectivity, Apple A15 Bionic processor, IP68 water and dust resistant. Colors: Red, Starlight, Midnight, Blue, Pink, Green. Storage: 128GB, 256GB, 512GB.',
  620000,
  'Smartphones',
  '/lovable-uploads/e765dca0-9b3b-4686-8f47-1b0bfcb64ec9.png',
  16
),
(
  'iPhone 14',
  'iOS 16, 6.1″ Super Retina XDR display, Dual 12MP Camera System, A15 Bionic chip with 5-Core GPU, IP68 Water Resistance, 5G Connectivity. Colors: Yellow, Red, Starlight, Midnight, Purple. Storage: 128GB, 256GB.',
  720000,
  'Smartphones',
  '/lovable-uploads/a831a871-ba52-4da0-ac77-1cb396f5c2c4.png',
  13
),
(
  'AirPods Pro 2',
  'Brand new AirPods Pro 2 Now With Hearing Aid Feature. Premium wireless earbuds with active noise cancellation and spatial audio.',
  320000,
  'Audio',
  NULL,
  25
);