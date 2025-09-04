import { Phone, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card shadow-warm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            La Arrosseria Coma Casa
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:930312997" className="flex items-center text-foreground hover:text-primary transition-smooth">
              <Phone className="w-4 h-4 mr-2" />
              930 312 997
            </a>
            <a 
              href="https://www.instagram.com/larrosseriacomacasa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-4 h-4 mr-2" />
              @larrosseriacomacasa
            </a>
            <a 
              href="https://www.google.com/maps/place/Arrosseria+Com+a+casa/@41.7027474,2.4361444,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4cdcb348d124b:0xedd90c50e195aa5f!8m2!3d41.7027474!4d2.4361444!16s%2Fg%2F11jxc1lb6z?hl=es&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="warm" size="sm">
                <MapPin className="w-4 h-4 mr-2" />
                Ubicación
              </Button>
            </a>
          </div>
          
          <div className="md:hidden">
            <a href="tel:930312997">
              <Button variant="contact" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                Llamar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;