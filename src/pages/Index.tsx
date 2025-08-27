import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import GeminiChat from "@/components/GeminiChat";
import MobileNavigation from "@/components/MobileNavigation";
import ResourcePreloader from "@/components/ResourcePreloader";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ResourcePreloader />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
      <GeminiChat />
      <MobileNavigation />
    </div>
  );
};

export default Index;
