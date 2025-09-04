import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const scheduleItems = [
    { days: "Miércoles a Viernes", hours: "10:30 - 15:30" },
    { days: "Sábados, Domingos y Festivos", hours: "10:30 - 16:00" },
    { days: "Lunes y Martes", hours: "Cerrado" }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contacto y Horarios
          </h2>
          <p className="text-xl text-muted-foreground">
            Estamos aquí para servirte las mejores paellas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="shadow-warm hover:shadow-glow transition-smooth">
            <CardContent className="p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">Horarios</h3>
              <div className="space-y-2 text-sm">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="border-b border-border last:border-b-0 pb-2 last:pb-0">
                    <div className="font-medium text-foreground">{item.days}</div>
                    <div className="text-muted-foreground">{item.hours}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-warm hover:shadow-glow transition-smooth">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">Teléfono</h3>
              <p className="text-muted-foreground mb-4">Llámanos para hacer tu pedido</p>
              <a href="tel:930312997">
                <Button variant="warm" size="sm" className="w-full">
                  930 312 997
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-warm hover:shadow-glow transition-smooth">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">Ubicación</h3>
              <p className="text-muted-foreground mb-4">Visítanos o consulta como llegar</p>
              <a 
                href="https://share.google/kte6MINWscNMjr2pk" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="warm" size="sm" className="w-full">
                  Ver en Maps
                </Button>
              </a>
            </CardContent>
          </Card>
          
          <Card className="shadow-warm hover:shadow-glow transition-smooth">
            <CardContent className="p-6 text-center">
              <Instagram className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4 text-primary">Instagram</h3>
              <p className="text-muted-foreground mb-4">Síguenos para ver nuestras creaciones</p>
              <a 
                href="https://instagram.com/larrosseriacomacasa" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="warm" size="sm" className="w-full">
                  @larrosseriacomacasa
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;