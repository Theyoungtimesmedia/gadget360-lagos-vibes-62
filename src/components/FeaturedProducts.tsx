import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from '@/integrations/supabase/client';

const FeaturedProducts = () => {
  const [currentCategory, setCurrentCategory] = useState("Featured");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .limit(8);

        if (error) throw error;

        if (data) {
          // Transform the data to match ProductCard format
          const transformedProducts = data.map(product => ({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image_url,
            category: product.category || 'Uncategorized',
            rating: 4.8, // Default rating since we don't have reviews yet
            inStock: product.stock_quantity > 0,
            specs: product.description?.substring(0, 50) + '...' || '',
            isFeatured: product.is_featured || false,
            badgeText: product.badge_text || undefined,
            badgeColor: product.badge_color || undefined
          }));
          setProducts(transformedProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories from products
  const categories = ["Featured", ...Array.from(new Set(products.map(p => p.category)))];

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
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-card rounded-lg p-4 animate-pulse">
                <div className="bg-muted rounded-lg aspect-square mb-3"></div>
                <div className="bg-muted rounded h-4 mb-2"></div>
                <div className="bg-muted rounded h-4 w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-8">
            {filteredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

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