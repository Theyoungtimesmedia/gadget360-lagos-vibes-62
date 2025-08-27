import { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const [currentCategory, setCurrentCategory] = useState("Featured");

  const products = [
    {
      id: "ps5-slim",
      name: "Brand New PS5 Slim",
      price: 880000,
      originalPrice: 950000,
      image: "/lovable-uploads/df694e32-c5af-43c0-84b0-7f0fd813286e.png",
      category: "Consoles & Games",
      rating: 4.9,
      inStock: true,
      isNew: true,
      specs: "1TB SSD, 4K Gaming, Ray Tracing"
    },
    {
      id: "iphone-12-red",
      name: "iPhone 12 - Product Red",
      price: 450000,
      originalPrice: 520000,
      image: "/lovable-uploads/83043459-86ce-4835-9c9f-b726b5b2bc08.png", 
      category: "Phones",
      rating: 4.7,
      inStock: true,
      specs: "128GB, Dual Camera, Face ID"
    },
    {
      id: "macbook-pro",
      name: "MacBook Pro 2019 13\"",
      price: 755000,
      image: "/lovable-uploads/c99bd10d-f2ba-4c6f-adaf-538d39fb3233.png",
      category: "Laptops",
      rating: 4.8,
      inStock: true,
      specs: "Intel i5, 8GB RAM, 256GB SSD"
    },
    {
      id: "apple-watches",
      name: "Apple Watch Series",
      price: 150000,
      originalPrice: 180000,
      image: "/lovable-uploads/371bdd40-ee61-409b-8a61-603c7a2ef02a.png",
      category: "Apple",
      rating: 4.6,
      inStock: true,
      specs: "GPS, Health Monitoring, Water Resistant"
    },
    {
      id: "fire-tablets",
      name: "Amazon Fire HD Tablets",
      price: 85000,
      originalPrice: 95000,
      image: "/lovable-uploads/e866b10c-e10b-4e61-afc5-440564e9c602.png",
      category: "Accessories",
      rating: 4.4,
      inStock: true,
      specs: "10\" Display, Kids Edition Available"
    },
    {
      id: "samsung-s22",
      name: "Samsung Galaxy S22 Ultra",
      price: 615000,
      image: "/lovable-uploads/47d70b62-65e3-40db-8bfa-7841a58e01b4.png",
      category: "Phones", 
      rating: 4.8,
      inStock: true,
      isNew: true,
      specs: "256GB, S Pen, 108MP Camera"
    }
  ];

  const categories = ["Featured", "Consoles & Games", "Phones", "Laptops", "Apple", "Accessories"];

  const filteredProducts = currentCategory === "Featured" 
    ? products 
    : products.filter(p => p.category === currentCategory);

  return (
    <section className="py-12 pb-20 md:pb-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured Products</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our best-selling gadgets with warranty and fast delivery
          </p>
        </div>

        {/* Category Filter - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Button
              key={category}
              variant={currentCategory === category ? "default" : "outline"}
              onClick={() => setCurrentCategory(category)}
              className="rounded-full whitespace-nowrap flex-shrink-0 text-sm"
              size="sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid - 2 columns on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View All Products */}
        <div className="text-center">
          <Link to="/shop">
            <Button size="lg" variant="outline" className="px-8">
              View All Products
              <ChevronRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;