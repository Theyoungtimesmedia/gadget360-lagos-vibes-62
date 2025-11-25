import { useState } from "react";
import { Search, ShoppingCart, Menu, Phone, MessageCircle, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import CartButton from "@/components/CartButton";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const categories = [
    "Consoles & Games",
    "Phones",
    "Laptops", 
    "Accessories",
    "Apple",
    "Headphones",
    "Controllers & Cables"
  ];

  return (
    <>
      {/* Top bar - Mobile hidden for cleaner look */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📍 24 Adegbola Street, Ikeja, Lagos</span>
            <span>⏰ Mon-Sat 9AM-7PM</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+2347067894474" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+234 706 789 4474</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
              <img 
                src="/lovable-uploads/335cb308-9043-47a5-9ea4-82bc3bbed7cc.png" 
                alt="Gadget360.ng Logo" 
                className="h-10 w-auto md:h-12"
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">Gadget360.ng</h1>
                <p className="text-xs text-muted-foreground">Your Tech Store</p>
              </div>
            </Link>

            {/* Search bar - desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                <Input 
                  placeholder="Search for gadgets, phones, laptops..." 
                  className="pl-12 pr-24 h-12 rounded-full border-2 border-border focus:border-primary transition-colors"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 rounded-full bg-primary hover:bg-primary/90">
                  Search
                </Button>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-2">
              {/* Social Media Icons - Mobile */}
              <div className="flex items-center gap-2 md:hidden">
                <a 
                  href="https://wa.me/2347067894474" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-whatsapp/20 hover:bg-whatsapp/40 transition-all duration-300 hover:scale-110"
                >
                  <img src="/lovable-uploads/c9fd8577-52ae-4feb-bdf2-503f9e458bdc.png" className="w-4 h-4 opacity-80" alt="WhatsApp" />
                </a>
                <a 
                  href="https://www.facebook.com/share/1AFDYyR6RC/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <img src="/lovable-uploads/4b216da9-22ab-450e-acb1-bb3dbc10b238.png" className="w-4 h-4 opacity-80" alt="Facebook" />
                </a>
                <a 
                  href="https://www.instagram.com/gadget360ngbackuppage?igsh=MTBscG91aXV6Z3d4cw%3D%3D&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <img src="/lovable-uploads/cbe3d69a-9a8d-4e4c-84f8-857386f55748.png" className="w-4 h-4 opacity-80" alt="Instagram" />
                </a>
              </div>

              <a 
                href="https://wa.me/2347067894474" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:block"
              >
                <Button className="bg-whatsapp hover:bg-whatsapp/90 rounded-full shadow-elegant">
                  <img src="/lovable-uploads/c9fd8577-52ae-4feb-bdf2-503f9e458bdc.png" className="w-4 h-4 mr-2 brightness-0 invert" alt="WhatsApp" />
                  WhatsApp Order
                </Button>
              </a>
              
              {/* Cart Button */}
              <CartButton />

              {/* User Menu */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <User className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button variant="outline" onClick={() => navigate("/auth")}>
                  Sign In
                </Button>
              )}

              {/* Mobile menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden">
                    <Menu size={20} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-bold">Menu</h2>
                      <ThemeToggle />
                    </div>
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Home
                    </Link>
                    <Link to="/shop" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Shop
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium">
                      Contact
                    </Link>
                    <hr />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-primary">Categories</h3>
                      {categories.map((category) => (
                        <Link 
                          key={category}
                          to={`/shop?category=${encodeURIComponent(category)}`}
                          onClick={() => setIsOpen(false)}
                          className="block py-2 text-sm hover:text-primary"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Search gadgets..." 
                className="pl-10 h-10 rounded-full bg-muted border-0 focus:bg-background focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:block border-t bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-6">
                {categories.map((category) => (
                  <Link 
                    key={category}
                    to={`/shop?category=${encodeURIComponent(category)}`}
                    className="text-sm font-medium hover:text-primary transition-colors relative group px-2 py-1 rounded-md hover:bg-primary/10"
                  >
                    {category}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-6 text-sm">
                <Link to="/shop" className="hover:text-primary font-medium transition-colors">All Products</Link>
                <Link to="/contact" className="hover:text-primary font-medium transition-colors">Contact</Link>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
