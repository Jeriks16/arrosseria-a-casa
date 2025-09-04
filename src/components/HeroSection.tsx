import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/e849750a-699d-48b1-bcba-3bb0bfd4f80c.png" 
          alt="Deliciosa paella de mariscos de La Arrosseria Com a Casa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40"></div>
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
            href="https://www.google.com/maps/place/Arrosseria+Com+a+casa/@41.7027474,2.4361444,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4cdcb348d124b:0xedd90c50e195aa5f!8m2!3d41.7027474!4d2.4361444!16s%2Fg%2F11jxc1lb6z?hl=es&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D" 
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