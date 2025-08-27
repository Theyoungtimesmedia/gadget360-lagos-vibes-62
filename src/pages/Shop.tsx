import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid, List, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get category from URL params
  const categoryFromUrl = searchParams.get("category");

  useEffect(() => {
    if (categoryFromUrl && !selectedCategories.includes(categoryFromUrl)) {
      setSelectedCategories([categoryFromUrl]);
    }
  }, [categoryFromUrl]);

  const products = [
    // Consoles & Games
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
      id: "nintendo-switch-2",
      name: "Nintendo Switch 2",
      price: 835000,
      image: "/lovable-uploads/bc6a0b18-9193-4c84-a2a2-8eb498b798b6.png",
      category: "Consoles & Games",
      rating: 4.9,
      inStock: true,
      isNew: true,
      specs: "Enhanced Performance, Portable Gaming"
    },
    {
      id: "nintendo-switch",
      name: "Nintendo Switch Standard",
      price: 390000,
      image: "/lovable-uploads/45118d1e-52a5-4fcb-94f5-07961150129b.png",
      category: "Consoles & Games",
      rating: 4.7,
      inStock: true,
      specs: "32GB Storage, Portable Gaming"
    },
    {
      id: "nintendo-switch-oled",
      name: "Nintendo Switch OLED",
      price: 435000,
      image: "/lovable-uploads/fe4e6eac-3515-4676-bfc5-e0ea80a6bdec.png",
      category: "Consoles & Games",
      rating: 4.8,
      inStock: true,
      specs: "64GB, OLED Display, Enhanced Audio"
    },
    {
      id: "ps5-pro",
      name: "PS5 PRO 2TB",
      price: 1350000,
      image: "/lovable-uploads/fa0f68d9-54b3-4ab2-9d35-3e5353c6debf.png",
      category: "Consoles & Games",
      rating: 4.9,
      inStock: true,
      isNew: true,
      specs: "2TB SSD, Enhanced Performance"
    },
    {
      id: "xbox-series-s",
      name: "XBox S Series 512GB",
      price: 470000,
      image: "/lovable-uploads/d14037d3-638a-4753-9280-de01ac5815ee.png",
      category: "Consoles & Games",
      rating: 4.6,
      inStock: true,
      specs: "512GB SSD, Digital Edition"
    },
    {
      id: "xbox-series-x",
      name: "XBox X Series 1TB",
      price: 1070000,
      image: "/lovable-uploads/89b42d5a-342b-483f-bac2-cf4613848847.png",
      category: "Consoles & Games",
      rating: 4.8,
      inStock: true,
      specs: "1TB SSD, 4K Gaming, Disc Drive"
    },

    // Phones
    {
      id: "iphone-xr",
      name: "iPhone XR",
      price: 285000,
      originalPrice: 320000,
      image: "/lovable-uploads/3ee9f310-f95f-4a70-8c67-aa811db3ff50.png",
      category: "Phones",
      rating: 4.6,
      inStock: true,
      specs: "64GB/128GB, 12MP Camera, Face ID, iOS 16/17/18"
    },
    {
      id: "iphone-11",
      name: "iPhone 11",
      price: 365000,
      originalPrice: 410000,
      image: "/lovable-uploads/e2ac9755-8527-4fa7-a66c-5d67d31bcbb0.png",
      category: "Phones",
      rating: 4.7,
      inStock: true,
      specs: "64GB/128GB, Dual Camera, A13 Bionic, iOS 13"
    },
    {
      id: "iphone-11-pro",
      name: "iPhone 11 Pro",
      price: 485000,
      originalPrice: 540000,
      image: "/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      specs: "64GB/128GB/256GB, Triple Camera, 5.8\" Display"
    },
    {
      id: "iphone-11-pro-max",
      name: "iPhone 11 Pro Max",
      price: 525000,
      originalPrice: 580000,
      image: "/lovable-uploads/4ad028ba-f332-4ad4-ac42-e489a52165b8.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      specs: "64GB/128GB/256GB, Triple Camera, 6.5\" Display"
    },
    {
      id: "iphone-12",
      name: "iPhone 12",
      price: 415000,
      originalPrice: 465000,
      image: "/lovable-uploads/733692da-6bae-4a01-86c0-1ebd84ac65cc.png",
      category: "Phones",
      rating: 4.7,
      inStock: true,
      specs: "64GB/128GB, Dual Camera, A14 Bionic, 5G"
    },
    {
      id: "iphone-12-pro",
      name: "iPhone 12 Pro",
      price: 565000,
      originalPrice: 620000,
      image: "/lovable-uploads/d9bf483d-d231-404e-bb25-0e423033b711.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      specs: "128GB/256GB, Pro Camera, LiDAR Scanner"
    },
    {
      id: "iphone-12-pro-max",
      name: "iPhone 12 Pro Max",
      price: 625000,
      originalPrice: 680000,
      image: "/lovable-uploads/324f72db-2bf4-494a-b73f-0b8faf06993f.png",
      category: "Phones",
      rating: 4.9,
      inStock: true,
      specs: "128GB/256GB/512GB, Pro Camera, 6.7\" Display"
    },
    {
      id: "iphone-13",
      name: "iPhone 13",
      price: 525000,
      originalPrice: 575000,
      image: "/lovable-uploads/1c5282cd-78ef-4d06-bb92-c7880ee2b9af.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      specs: "128GB/256GB/512GB, Dual Camera, A15 Bionic"
    },
    {
      id: "iphone-14",
      name: "iPhone 14",
      price: 625000,
      originalPrice: 685000,
      image: "/lovable-uploads/0bb67128-8dd5-487b-a971-3259ae739094.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      isNew: true,
      specs: "128GB/256GB, Dual Camera, A15 Bionic, 5G"
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
      id: "samsung-s22",
      name: "Samsung Galaxy S22 Ultra",
      price: 615000,
      image: "/lovable-uploads/47d70b62-65e3-40db-8bfa-7841a58e01b4.png",
      category: "Phones",
      rating: 4.8,
      inStock: true,
      isNew: true,
      specs: "256GB, S Pen, 108MP Camera"
    },

    // Laptops
    {
      id: "hp-1030-g3",
      name: "HP EliteBook 1030 G3",
      price: 580000,
      image: "/lovable-uploads/c99bd10d-f2ba-4c6f-adaf-538d39fb3233.png",
      category: "Laptops",
      rating: 4.5,
      inStock: true,
      specs: "Intel i7, 16GB RAM, 512GB SSD"
    },
    {
      id: "macbook-pro-2019",
      name: "MacBook Pro 2019 13\"",
      price: 755000,
      image: "/lovable-uploads/c476ca25-598f-42b1-8de6-cbf643e0e69e.png",
      category: "Laptops",
      rating: 4.8,
      inStock: true,
      specs: "Intel i5, 8GB RAM, 256GB SSD"
    },

    // Apple Accessories
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
      id: "airpods-pro-2",
      name: "AirPods Pro 2",
      price: 320000,
      image: "/lovable-uploads/973b15ed-5248-427d-b2f8-d3a044271b21.png",
      category: "Apple",
      rating: 4.9,
      inStock: true,
      isNew: true,
      specs: "Active Noise Cancellation, Hearing Aid Feature"
    },
    {
      id: "usb-adapter",
      name: "USB Adapter",
      price: 30000,
      image: "/lovable-uploads/ae74e052-5121-4cd4-9a9f-cceff25a80c2.png",
      category: "Apple",
      rating: 4.3,
      inStock: true,
      specs: "USB-C to Lightning"
    },
    {
      id: "20w-adapter",
      name: "20W Power Adapter",
      price: 40000,
      image: "/lovable-uploads/748f6b1b-dfd2-4f84-bc33-518f43e050c6.png",
      category: "Apple",
      rating: 4.4,
      inStock: true,
      specs: "Fast Charging, USB-C"
    },

    // Accessories
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
    }
  ];

  const categories = [
    "Consoles & Games",
    "Phones",
    "Laptops",
    "Apple",
    "Accessories",
    "Headphones",
    "Controllers & Cables"
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.specs?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return (b.rating || 0) - (a.rating || 0);
      case "newest":
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 2000000 });
    setSearchQuery("");
    setSearchParams({});
  };

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <label htmlFor={category} className="text-sm cursor-pointer">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          <Input
            type="number"
            placeholder="Min price"
            value={priceRange.min || ""}
            onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value) || 0})}
          />
          <Input
            type="number"
            placeholder="Max price"
            value={priceRange.max || ""}
            onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value) || 2000000})}
          />
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full">
        Clear Filters
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop All Products</h1>
          <p className="text-muted-foreground">
            {categoryFromUrl 
              ? `Browse ${categoryFromUrl} products` 
              : "Discover authentic gadgets with warranty and fast delivery"
            }
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="lg:w-64 hidden lg:block">
            <div className="sticky top-4">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter size={20} />
                  Filters
                </h2>
                <FilterContent />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex gap-2">
                {/* Mobile Filter */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden">
                      <Filter size={16} className="mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <div className="mt-8">
                      <h2 className="font-semibold mb-4">Filters</h2>
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid size={16} />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List size={16} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {sortedProducts.length} of {products.length} products
                {selectedCategories.length > 0 && 
                  ` in ${selectedCategories.join(", ")}`
                }
              </p>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your criteria
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default Shop;