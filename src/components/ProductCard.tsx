import { Star, MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import OptimizedImage from "@/components/OptimizedImage";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  inStock?: boolean;
  isNew?: boolean;
  specs?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  rating = 4.5, 
  inStock = true,
  isNew = false,
  specs
}: ProductCardProps) => {
  const formatPrice = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const whatsappMessage = `Hi! I'm interested in the ${name} (₦${price.toLocaleString()}). Please provide more details.`;
  const whatsappUrl = `https://wa.me/2348108418727?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="group overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-accent/50 bg-gradient-card">
      <Link to={`/product/${id}`} className="block">
        <div className="relative overflow-hidden">
          <OptimizedImage 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover p-4 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-card to-muted"
          />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-primary text-primary-foreground shadow-glow">New</Badge>
          )}
          {!inStock && (
            <Badge variant="destructive" className="shadow-lg">Out of Stock</Badge>
          )}
          {originalPrice && (
            <Badge className="bg-accent text-accent-foreground shadow-lg">
              Save ₦{(originalPrice - price).toLocaleString()}
            </Badge>
          )}
        </div>

        {/* Quick WhatsApp button */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
             <Button size="sm" className="bg-whatsapp/90 hover:bg-whatsapp p-3 rounded-full shadow-elegant">
               <img src="/public/social-icons/whatsapp.svg" className="w-4 h-4 brightness-0 invert" alt="WhatsApp" />
             </Button>
          </a>
        </div>
        </div>
      </Link>

      <CardContent className="p-6">
        <Link to={`/product/${id}`} className="block">
          <div className="space-y-4">
            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20 font-medium">{category}</Badge>
            
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors leading-tight">
              {name}
            </h3>
          
          {specs && (
            <p className="text-sm text-muted-foreground line-clamp-1 leading-relaxed">{specs}</p>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={`${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} transition-colors`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground font-medium">({rating})</span>
          </div>

           {/* Price */}
           <div className="space-y-2">
             <div className="flex items-center gap-2 flex-wrap">
               <span className="text-lg md:text-2xl lg:text-3xl font-bold text-primary break-words">
                 {formatPrice(price)}
               </span>
               {originalPrice && (
                 <span className="text-xs md:text-sm text-muted-foreground line-through">
                   {formatPrice(originalPrice)}
                 </span>
               )}
             </div>
           </div>
          </div>
        </Link>
      </CardContent>

      <CardFooter className="p-3 md:p-6 pt-0 space-y-2 md:space-y-3">
        <div className="flex gap-2 md:gap-3 w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1 min-w-0">
            <Button 
              className="w-full bg-whatsapp hover:bg-whatsapp/90 rounded-full shadow-elegant font-medium text-xs md:text-sm px-2 md:px-4 py-2 h-auto min-h-[32px] md:min-h-[40px]" 
              disabled={!inStock}
            >
              <img src="/public/social-icons/whatsapp.svg" className="w-3 h-3 md:w-4 md:h-4 mr-1 brightness-0 invert flex-shrink-0" alt="WhatsApp" />
              <span className="truncate text-xs md:text-sm">WhatsApp</span>
            </Button>
          </a>
          
          <Link to={`/product/${id}`} className="shrink-0">
            <Button 
              variant="outline" 
              size="sm"
              disabled={!inStock}
              className="hover:bg-primary hover:text-primary-foreground rounded-full border-2 hover:shadow-glow transition-all h-8 w-8 md:h-10 md:w-10 p-1 md:p-2"
            >
              <ShoppingCart size={12} className="md:hidden" />
              <ShoppingCart size={16} className="hidden md:block" />
            </Button>
          </Link>
        </div>

        {!inStock && (
          <p className="text-xs md:text-sm text-muted-foreground text-center font-medium">
            WhatsApp us for availability
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;