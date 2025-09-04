import { Phone, Instagram, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">La Arrosseria Coma Casa</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Auténticas paellas y fideuás valencianas elaboradas con 
              los mejores ingredientes y mucho amor por la tradición.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:930312997" className="flex items-center justify-center md:justify-start hover:text-primary-glow transition-smooth">
                <Phone className="w-4 h-4 mr-2" />
                930 312 997
              </a>
              <a 
                href="https://www.instagram.com/larrosseriacomacasa/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-primary-glow transition-smooth"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @larrosseriacomacasa
              </a>
              <a 
                href="https://www.google.com/maps/place/Arrosseria+Com+a+casa/@41.7027474,2.4361444,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4cdcb348d124b:0xedd90c50e195aa5f!8m2!3d41.7027474!4d2.4361444!16s%2Fg%2F11jxc1lb6z?hl=es&entry=ttu&g_ep=EgoyMDI1MDgzMC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start hover:text-primary-glow transition-smooth"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Carretera del Montseny, 7
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div>Mié-Vie: 10:30-15:30</div>
              <div>Sáb-Dom: 10:30-16:00</div>
              <div>Lun-Mar: Cerrado</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center">
            Hecho con <Heart className="w-4 h-4 mx-1 text-red-400" /> para los amantes de la auténtica cocina valenciana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;