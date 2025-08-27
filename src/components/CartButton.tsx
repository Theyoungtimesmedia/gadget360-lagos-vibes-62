import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const [cartCount, setCartCount] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      loadCartCount();
    } else {
      setCartCount(0);
    }
  }, [user]);

  const loadCartCount = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select('quantity')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error loading cart count:', error);
        return;
      }

      const items = (data as { quantity: number }[] | null) ?? [];
      const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
      setCartCount(totalItems);
    } catch (error) {
      console.error('Error loading cart count:', error);
    }
  };

  const handleCartClick = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    navigate("/cart");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={handleCartClick}
    >
      <ShoppingCart className="h-4 w-4" />
      {cartCount > 0 && (
        <Badge 
          variant="destructive" 
          className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
        >
          {cartCount > 99 ? "99+" : cartCount}
        </Badge>
      )}
    </Button>
  );
};

export default CartButton;