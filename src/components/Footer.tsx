import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/335cb308-9043-47a5-9ea4-82bc3bbed7cc.png" 
              alt="Gadget360.ng" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/80 text-sm">
              Your trusted gadget store in Lagos. Authentic products • Warranty available • Buy • Sell • Swap
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1AFDYyR6RC/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <img src="/lovable-uploads/4b216da9-22ab-450e-acb1-bb3dbc10b238.png" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/gadget360ngbackuppage?igsh=MTBscG91aXV6Z3d4cw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <img src="/lovable-uploads/cbe3d69a-9a8d-4e4c-84f8-857386f55748.png" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" alt="Instagram" />
              </a>
              <a
                href="https://wa.me/2347067894474"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-whatsapp/20 hover:bg-whatsapp/40 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <img src="/lovable-uploads/c9fd8577-52ae-4feb-bdf2-503f9e458bdc.png" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" alt="WhatsApp" />
              </a>
              <a
                href="https://www.threads.net/@gadget360.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-muted/30 hover:bg-primary/20 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              >
                <img src="/lovable-uploads/0cd8ddce-afe1-47f0-91b5-776628bb7751.png" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" alt="Threads" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-accent" />
                <div>
                  <p>24, Adegbola Street</p>
                  <p>(Opposite Railway Line)</p>
                  <p>Ikeja, Lagos State</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                <div>
                  <p>8 Oshitelu Street</p>
                  <p>(Opposite GTBank)</p>
                  <p>Ikeja Computer Village, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="/shop" className="block hover:text-accent transition-colors">All Products</a>
              <a href="/shop?category=Consoles%20%26%20Games" className="block hover:text-accent transition-colors">Gaming Consoles</a>
              <a href="/shop?category=Phones" className="block hover:text-accent transition-colors">Smartphones</a>
              <a href="/shop?category=Laptops" className="block hover:text-accent transition-colors">Laptops</a>
              <a href="/shop?category=Apple" className="block hover:text-accent transition-colors">Apple Products</a>
              <a href="/contact" className="block hover:text-accent transition-colors">Contact Us</a>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="https://wa.me/2348108418727" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 rounded-full shadow-elegant">
                  <img src="/lovable-uploads/c9fd8577-52ae-4feb-bdf2-503f9e458bdc.png" className="w-4 h-4 mr-2 brightness-0 invert" alt="WhatsApp" />
                  WhatsApp Us
                </Button>
              </a>
              
              <div className="space-y-2 text-sm">
                <a 
                  href="tel:+2348108418727" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +234 810 841 8727
                </a>
                <a 
                  href="tel:+2347067894474" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +234 706 789 4474
                </a>
                <a 
                  href="mailto:gadget360ng@gmail.com" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  gadget360ng@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Gadget360.ng. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Returns & Warranty</span>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="mt-6 text-center text-sm text-background/60">
          <p>📍 Store Hours: Monday - Saturday 9:00 AM - 7:00 PM | Sunday: Closed</p>
          <p className="mt-1">🚛 Nationwide delivery available | Free delivery within Lagos</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
