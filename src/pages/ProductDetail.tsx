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
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import OptimizedImage from "@/components/OptimizedImage";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        console.error('Error loading product:', error);
        toast({
          title: "Error",
          description: "Failed to load product details.",
          variant: "destructive",
        });
        navigate('/shop');
        return;
      }

      if (!data) {
        toast({
          title: "Product not found",
          description: "The product you're looking for doesn't exist.",
          variant: "destructive",
        });
        navigate('/shop');
        return;
      }

      setProduct(data);
    } catch (error) {
      console.error('Error loading product:', error);
      toast({
        title: "Error",
        description: "Failed to load product details.",
        variant: "destructive",
      });
      navigate('/shop');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-3/4 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
          </div>
        </div>
        <Footer />
        <LiveChat />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
        <Footer />
        <LiveChat />
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
          <Link to={`/shop?category=${encodeURIComponent(product.category || '')}`} className="hover:text-primary">
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
              <OptimizedImage 
                src={product.image_url || "/placeholder.svg"} 
                alt={product.name}
                className="w-full h-full object-contain p-8"
                priority={true}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{product.category}</Badge>
                {product.stock_quantity > 0 ? (
                  <Badge variant="secondary">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  4.5 (Reviews coming soon)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
              </div>
            </div>

            {/* Quick Actions & Add to Cart */}
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button
                  onClick={handleWhatsAppOrder}
                  variant="outline"
                  className="flex-1"
                  disabled={product.stock_quantity === 0}
                >
                  <img src="/social-icons/whatsapp.png" className="w-5 h-5 mr-2" alt="WhatsApp" />
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
                stockQuantity={product.stock_quantity}
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
                <p className="text-xs text-muted-foreground">1 Year Warranty</p>
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
                
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Category</span>
                    <span className="text-muted-foreground">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Stock Available</span>
                    <span className="text-muted-foreground">{product.stock_quantity} units</span>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Product Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Product Name</span>
                    <span className="text-muted-foreground">{product.name}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Category</span>
                    <span className="text-muted-foreground">{product.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Price</span>
                    <span className="text-muted-foreground">{formatPrice(product.price)}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium">Availability</span>
                    <span className="text-muted-foreground">
                      {product.stock_quantity > 0 ? `${product.stock_quantity} in stock` : 'Out of stock'}
                    </span>
                  </div>
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