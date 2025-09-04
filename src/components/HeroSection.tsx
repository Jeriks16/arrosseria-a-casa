import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-paella.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Deliciosa paella tradicional valenciana"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/60"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-32 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
          La Arrosseria Coma Casa
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
          Auténticas paellas y fideuás valencianas para llevar. 
          Tradición, sabor y calidad en cada plato.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:930312997">
            <Button variant="warm" size="lg" className="text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Hacer Pedido: 930 312 997
            </Button>
          </a>
          <a 
            href="https://share.google/kte6MINWscNMjr2pk" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <MapPin className="w-5 h-5 mr-2" />
              Cómo Llegar
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;