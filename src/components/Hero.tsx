import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Get Authentic Gadgets",
      subtitle: "Bringing the future to your hands",
      description: "We sell, buy and swap phones, computers, accessories & consoles with warranty",
      image: "/hero-gadgets.png",
      cta: "WhatsApp to Order",
      offer: "Free delivery in Lagos"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      {/* Main Hero Section */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-background via-card to-secondary">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/hero-gadgets.png')"
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"></div>
        <div className="container mx-auto px-4 h-full relative">
          <div className="grid md:grid-cols-2 gap-8 items-center h-full">
            {/* Content */}
            <div className="text-foreground space-y-6 z-10">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 absolute"
                  }`}
                >
                  <div className="space-y-4">
                    <p className="text-primary text-lg font-semibold tracking-wide">{slide.subtitle}</p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a 
                      href="https://wa.me/2347067894474" 
                      target="_blank" 
                      rel="noopener noreferrer"
                     >
                       <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-lg px-8 rounded-full shadow-elegant">
                         <img src="/lovable-uploads/324f72db-2bf4-494a-b73f-0b8faf06993f.png" className="mr-2 w-5 h-5 brightness-0 invert" alt="WhatsApp" />
                         {slide.cta}
                       </Button>
                    </a>
                    <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Browse Products
                    </Button>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-xl p-4 inline-block mt-4">
                    <p className="text-primary font-bold text-lg">{slide.offer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Single Hero Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
              <img 
                src="/hero-gadgets.png" 
                alt="Gadget360.ng Tech Store"
                className="relative w-full h-auto max-h-96 object-contain drop-shadow-2xl rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-3 rounded-full backdrop-blur-sm border border-border shadow-lg transition-all hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card/80 hover:bg-card text-foreground p-3 rounded-full backdrop-blur-sm border border-border shadow-lg transition-all hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-muted-foreground hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Trust indicators */}
      <div className="bg-background border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold mb-1">Authentic Products</h3>
              <p className="text-sm text-muted-foreground">100% genuine gadgets</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Truck className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold mb-1">Nationwide Delivery</h3>
              <p className="text-sm text-muted-foreground">Fast & secure shipping</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="mx-auto mb-3 text-primary" size={32} />
              <h3 className="font-semibold mb-1">Warranty Available</h3>
              <p className="text-sm text-muted-foreground">Protection for your purchase</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <MessageCircle className="mx-auto mb-3 text-whatsapp" size={32} />
              <h3 className="font-semibold mb-1">Fast WhatsApp Response</h3>
              <p className="text-sm text-muted-foreground">Quick customer support</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;