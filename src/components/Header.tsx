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
              href="https://instagram.com/larrosseriacomacasa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-foreground hover:text-primary transition-smooth"
            >
              <Instagram className="w-4 h-4 mr-2" />
              @larrosseriacomacasa
            </a>
            <a 
              href="https://share.google/kte6MINWscNMjr2pk" 
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