import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, MessageCircle, Shield, Truck, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductAddToCart from "@/components/ProductAddToCart";
import ProductReviews from "@/components/ProductReviews";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Mock product data - in real app, this would come from API
  const products = [
    {
      id: "ps5-slim",
      name: "Brand New PS5 Slim",
      price: 880000,
      originalPrice: 950000,
      images: [
        "/lovable-uploads/df694e32-c5af-43c0-84b0-7f0fd813286e.png",
        "/placeholder.svg",
        "/placeholder.svg"
      ],
      category: "Consoles & Games",
      rating: 4.9,
      reviewCount: 127,
      inStock: true,
      isNew: true,
      brand: "Sony",
      model: "PlayStation 5 Slim",
      warranty: "1 Year International Warranty",
      specs: {
        "Storage": "1TB SSD",
        "Graphics": "4K Gaming Support",
        "Technology": "Ray Tracing",
        "Resolution": "Up to 8K",
        "Frame Rate": "Up to 120fps",
        "Audio": "3D Audio Technology"
      },
      description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.",
      features: [
        "Ultra-high speed SSD for faster loading",
        "Ray tracing for realistic lighting and reflections", 
        "4K gaming up to 120fps",
        "3D Audio technology",
        "Haptic feedback controllers",
        "Backward compatible with PS4 games"
      ]
    },
    {
      id: "nintendo-switch-2",
      name: "Nintendo Switch 2",
      price: 835000,
      images: [
        "/lovable-uploads/bc6a0b18-9193-4c84-a2a2-8eb498b798b6.png",
        "/placeholder.svg"
      ],
      category: "Consoles & Games",
      rating: 4.9,
      reviewCount: 89,
      inStock: true,
      isNew: true,
      brand: "Nintendo",
      model: "Switch 2",
      warranty: "1 Year Nintendo Warranty",
      specs: {
        "Performance": "Enhanced Gaming",
        "Portability": "Handheld & Docked",
        "Controllers": "Joy-Con Controllers",
        "Display": "Enhanced Screen",
        "Battery": "Extended Battery Life",
        "Storage": "Expandable Storage"
      },
      description: "The next generation Nintendo Switch with enhanced performance and improved gaming experience.",
      features: [
        "Enhanced performance for smoother gameplay",
        "Improved battery life for longer sessions",
        "Better display quality",
        "Backward compatible with Switch games",
        "Portable and docked gaming modes",
        "Joy-Con controllers included"
      ]
    },
    {
      id: "iphone-xr",
      name: "iPhone XR",
      price: 285000,
      originalPrice: 320000,
      images: [
        "/lovable-uploads/3ee9f310-f95f-4a70-8c67-aa811db3ff50.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.6,
      reviewCount: 143,
      inStock: true,
      brand: "Apple",
      model: "iPhone XR",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "64GB/128GB",
        "Display": "6.1-inch Liquid Retina",
        "Camera": "12MP Main Camera",
        "Chip": "A12 Bionic",
        "Authentication": "Face ID",
        "Water Resistance": "IP67"
      },
      description: "iPhone XR features the powerful A12 Bionic chip, advanced camera system, and beautiful 6.1-inch Liquid Retina display with Face ID.",
      features: [
        "iOS 16/17/18 compatible",
        "12MP main camera with dual-OIS & quad-LED flash",
        "IP67 water and dust resistant", 
        "Single SIM",
        "7MP TrueDepth Camera with FaceID unlock",
        "Available in multiple colors"
      ]
    },
    {
      id: "iphone-11",
      name: "iPhone 11",
      price: 365000,
      originalPrice: 410000,
      images: [
        "/lovable-uploads/e2ac9755-8527-4fa7-a66c-5d67d31bcbb0.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.7,
      reviewCount: 189,
      inStock: true,
      brand: "Apple",
      model: "iPhone 11",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "64GB/128GB",
        "Display": "6.1-inch Liquid Retina HD",
        "Camera": "Dual 12MP System",
        "Chip": "A13 Bionic",
        "Authentication": "Face ID",
        "Water Resistance": "IP68"
      },
      description: "iPhone 11 ships with latest iOS 13, dual rear cameras incorporating cutting-edge technology with 12MP (Wide) + 12MP (Ultra-Wide) cameras.",
      features: [
        "Dual rear cameras incorporating cutting-edge technology",
        "12MP (Wide) + 12MP (Ultra-Wide)",
        "12MP TrueDepth Camera with FaceID unlock",
        "6.1\" Liquid Retina HD IPS Display",
        "Apple A13 Bionic processor",
        "4K video capture at 60 fps"
      ]
    },
    {
      id: "iphone-11-pro",
      name: "iPhone 11 Pro",
      price: 485000,
      originalPrice: 540000,
      images: [
        "/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 167,
      inStock: true,
      brand: "Apple",
      model: "iPhone 11 Pro",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "64GB/128GB/256GB",
        "Display": "5.8-inch Super Retina XDR",
        "Camera": "Triple 12MP System",
        "Chip": "A13 Bionic",
        "Battery": "3190 mAh",
        "Build": "Stainless Steel Frame"
      },
      description: "iPhone 11 Pro with 5.8 inches display, triple camera system, and premium build quality with stainless steel frame.",
      features: [
        "Triple rear camera system",
        "12 MP main, telephoto, and ultrawide cameras",
        "12 MP TrueDepth selfie camera",
        "Front/back glass, stainless steel frame",
        "iOS 13 & upgradable, 4GB RAM",
        "Fast battery charging 18W: 50% in 30 min"
      ]
    },
    {
      id: "iphone-11-pro-max",
      name: "iPhone 11 Pro Max",
      price: 525000,
      originalPrice: 580000,
      images: [
        "/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 198,
      inStock: true,
      brand: "Apple",
      model: "iPhone 11 Pro Max",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "64GB/128GB/256GB",
        "Display": "6.5-inch Super Retina XDR",
        "Camera": "Triple 12MP System",
        "Chip": "A13 Bionic",
        "Weight": "226 grams",
        "Water Resistance": "IP68"
      },
      description: "iPhone 11 Pro Max ships with latest iOS 13, triple rear cameras incorporating cutting-edge technology with 12MP (Wide) + 12MP (Ultra-Wide) + 12MP (Telephoto).",
      features: [
        "Triple rear cameras incorporating cutting-edge technology",
        "12MP (Wide) + 12MP (Ultra-Wide) + 12MP (Telephoto)",
        "12MP TrueDepth Camera with FaceID unlock",
        "6.5\" Super Retina XDR Display",
        "Apple A13 Bionic processor",
        "IP68 water and dust resistant"
      ]
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      price: 415000,
      originalPrice: 465000,
      images: [
        "/lovable-uploads/733692da-6bae-4a01-86c0-1ebd84ac65cc.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.7,
      reviewCount: 223,
      inStock: true,
      brand: "Apple",
      model: "iPhone 12",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "64GB/128GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Dual 12MP System",
        "Chip": "A14 Bionic",
        "Connectivity": "5G",
        "RAM": "4GB"
      },
      description: "iPhone 12 with 6.1 inches display, dual 12MP camera system, and powerful A14 Bionic chip with 5G connectivity.",
      features: [
        "6.1 inches, 90.2 cm2 display",
        "Scratch-resistant ceramic glass",
        "iOS 14.1 upgradable",
        "Apple A14 Bionic (5 nm) chipset",
        "Dual 12 MP camera system",
        "Face ID, 5G connectivity"
      ]
    },
    {
      id: "iphone-12-pro",
      name: "iPhone 12 Pro",
      price: 565000,
      originalPrice: 620000,
      images: [
        "/lovable-uploads/d9bf483d-d231-404e-bb25-0e423033b711.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 187,
      inStock: true,
      brand: "Apple",
      model: "iPhone 12 Pro",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "128GB/256GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Quad 12MP System",
        "Chip": "A14 Bionic",
        "RAM": "6GB",
        "LiDAR": "TOF 3D Scanner"
      },
      description: "iPhone 12 Pro with 6.1 inches display, quad camera system including LiDAR scanner, and professional photography capabilities.",
      features: [
        "Quad 12 MP camera system",
        "TOF 3D LiDAR scanner (depth)",
        "12 MP TrueDepth selfie camera",
        "iOS 14.1 upgradable",
        "Apple A14 Bionic (5 nm) chipset",
        "Face ID, fast charging 20W"
      ]
    },
    {
      id: "iphone-12-pro-max",
      name: "iPhone 12 Pro Max",
      price: 625000,
      originalPrice: 680000,
      images: [
        "/lovable-uploads/324f72db-2bf4-494a-b73f-0b8faf06993f.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.9,
      reviewCount: 245,
      inStock: true,
      brand: "Apple",
      model: "iPhone 12 Pro Max",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "128GB/256GB/512GB",
        "Display": "6.7-inch Super Retina XDR",
        "Camera": "Triple 12MP System",
        "Chip": "A14 Bionic",
        "Connectivity": "5G",
        "Water Resistance": "IP68"
      },
      description: "iPhone 12 Pro Max with 5G mobile data connectivity, triple rear cameras incorporating cutting-edge technology, and the largest iPhone display.",
      features: [
        "5G Mobile data connectivity",
        "Triple rear cameras incorporating cutting-edge technology",
        "12MP (Wide) + 12MP (Ultra-Wide) + 12MP (Telephoto)",
        "12MP TrueDepth Camera with FaceID unlock",
        "6.7\" Super Retina XDR Display",
        "Apple A14 Bionic processor"
      ]
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      price: 525000,
      originalPrice: 575000,
      images: [
        "/lovable-uploads/1c5282cd-78ef-4d06-bb92-c7880ee2b9af.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 198,
      inStock: true,
      brand: "Apple",
      model: "iPhone 13",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "128GB/256GB/512GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Dual 12MP System",
        "Chip": "A15 Bionic",
        "RAM": "6GB",
        "Water Resistance": "IP68"
      },
      description: "iPhone 13 ships with latest iOS 15, 6.1-inch Super Retina XDR Display, and powerful A15 Bionic processor with 5G connectivity.",
      features: [
        "Ships with latest iOS 15",
        "6.1-inch Super Retina XDR Display",
        "128/256/512 GB Storage | 6 GB RAM",
        "Dual 12MP Rear Camera",
        "12MP TrueDepth Front Camera with FaceID unlock",
        "5G Mobile data connectivity"
      ]
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      price: 625000,
      originalPrice: 685000,
      images: [
        "/lovable-uploads/0bb67128-8dd5-487b-a971-3259ae739094.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 167,
      inStock: true,
      isNew: true,
      brand: "Apple",
      model: "iPhone 14",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "128GB/256GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Dual 12MP System",
        "Chip": "A15 Bionic with 5-Core GPU",
        "Water Resistance": "IP68",
        "Connectivity": "5G"
      },
      description: "iPhone 14 with iOS 16, 6.1\" Super Retina XDR display, dual 12MP camera system, and A15 Bionic chip with 5-Core GPU.",
      features: [
        "iOS 16",
        "6.1\" Super Retina XDR display",
        "Dual 12MP Camera System",
        "A15 Bionic chip with 5-Core GPU",
        "128GB / 256GB Internal Storage",
        "IP68 Water Resistance"
      ]
    },
    {
      id: "iphone-12-red",
      name: "iPhone 12 - Product Red",
      price: 450000,
      originalPrice: 520000,
      images: [
        "/lovable-uploads/83043459-86ce-4835-9c9f-b726b5b2bc08.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.7,
      reviewCount: 89,
      inStock: true,
      brand: "Apple",
      model: "iPhone 12",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Storage": "128GB",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Dual 12MP System",
        "Chip": "A14 Bionic",
        "Authentication": "Face ID",
        "Color": "Product Red"
      },
      description: "iPhone 12 features the powerful A14 Bionic chip, advanced dual-camera system, and a beautiful 6.1-inch Super Retina XDR display with the Ceramic Shield front cover.",
      features: [
        "A14 Bionic chip for incredible performance",
        "Advanced dual-camera system",
        "6.1-inch Super Retina XDR display",
        "Ceramic Shield front cover",
        "Face ID for secure authentication",
        "5G capable for superfast downloads"
      ]
    },
    {
      id: "samsung-s22",
      name: "Samsung Galaxy S22 Ultra",
      price: 615000,
      images: [
        "/lovable-uploads/47d70b62-65e3-40db-8bfa-7841a58e01b4.png",
        "/placeholder.svg"
      ],
      category: "Phones",
      rating: 4.8,
      reviewCount: 156,
      inStock: true,
      isNew: true,
      brand: "Samsung",
      model: "Galaxy S22 Ultra",
      warranty: "1 Year Samsung Warranty",
      specs: {
        "Storage": "256GB",
        "Display": "6.8-inch Dynamic AMOLED 2X",
        "Camera": "108MP Main + Ultra Wide + Telephoto",
        "S Pen": "Built-in S Pen",
        "Processor": "Snapdragon 8 Gen 1",
        "Battery": "5000mAh"
      },
      description: "The most powerful Galaxy S series yet. With the built-in S Pen, 108MP camera, and all-day battery life, Galaxy S22 Ultra is the ultimate productivity powerhouse.",
      features: [
        "Built-in S Pen for productivity",
        "108MP main camera with Space Zoom",
        "6.8-inch Dynamic AMOLED 2X display",
        "All-day 5000mAh battery",
        "Snapdragon 8 Gen 1 processor",
        "Night mode for stunning low-light photos"
      ]
    },
    {
      id: "airpods-pro-2",
      name: "AirPods Pro 2",
      price: 320000,
      images: [
        "/placeholder.svg"
      ],
      category: "Apple",
      rating: 4.9,
      reviewCount: 124,
      inStock: true,
      isNew: true,
      brand: "Apple",
      model: "AirPods Pro 2nd Generation",
      warranty: "1 Year Apple Warranty",
      specs: {
        "Noise Cancellation": "Active Noise Cancellation",
        "Transparency Mode": "Adaptive Transparency",
        "Hearing Aid": "Hearing Aid Feature",
        "Battery Life": "Up to 6 hours",
        "Charging Case": "MagSafe Compatible",
        "Water Resistance": "IPX4"
      },
      description: "Brand new AirPods Pro 2 now with Hearing Aid Feature for enhanced audio experience and personalized sound.",
      features: [
        "Active Noise Cancellation",
        "Adaptive Transparency mode",
        "Hearing Aid Feature",
        "Personalized Spatial Audio",
        "MagSafe charging case",
        "Up to 6 hours listening time"
      ]
    }
  ];

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering the ${product.name} - ${formatPrice(product.price)}. Product link: ${window.location.href}`;
    window.open(`https://wa.me/2347067894474?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-primary">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-card rounded-2xl overflow-hidden border">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-contain p-8"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-contain p-2" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNew && <Badge variant="secondary">New</Badge>}
                {!product.inStock && <Badge variant="destructive">Out of Stock</Badge>}
                <Badge variant="outline">{product.category}</Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.brand} • {product.model}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-sm text-green-600 font-medium">
                  Save {formatPrice(product.originalPrice - product.price)}
                </p>
              )}
            </div>

            {/* Quick Actions & Add to Cart */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button
                  onClick={handleWhatsAppOrder}
                  variant="outline"
                  className="flex-1"
                  disabled={!product.inStock}
                >
                  <img src="/lovable-uploads/c9fd8577-52ae-4feb-bdf2-503f9e458bdc.png" className="w-5 h-5 mr-2" alt="WhatsApp" />
                  Order on WhatsApp
                </Button>
                <Button variant="outline" size="icon" className="p-6">
                  <Heart size={20} />
                </Button>
                <Button variant="outline" size="icon" className="p-6">
                  <Share2 size={20} />
                </Button>
              </div>
              
              {/* Add to Cart Component */}
              <ProductAddToCart 
                productId={product.id}
                stockQuantity={50}
                className="w-full"
              />
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <Shield className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-muted-foreground">100% Original</p>
              </div>
              <div className="text-center">
                <Truck className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm font-medium">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">Nationwide</p>
              </div>
              <div className="text-center">
                <Award className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm font-medium">Warranty</p>
                <p className="text-xs text-muted-foreground">{product.warranty}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="font-medium">{key}</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
              <TabsContent value="reviews" className="space-y-4">
                <ProductReviews productId={product.id} />
              </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default ProductDetail;