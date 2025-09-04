import { Card, CardContent } from "@/components/ui/card";
import paellaMixtaImage from "@/assets/paella-mixta.jpg";
import fideuaImage from "@/assets/fideua.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Paella Valenciana",
      description: "La auténtica paella con pollo, conejo, verduras y el mejor azafrán",
      image: paellaMixtaImage,
      alt: "Paella valenciana tradicional"
    },
    {
      name: "Paella Mixta",
      description: "Combinación perfecta de mar y montaña con mariscos y carnes",
      image: paellaMixtaImage,
      alt: "Paella mixta con mariscos y carne"
    },
    {
      name: "Fideuá",
      description: "Deliciosa fideuá con fideos finos, mariscos frescos y sofrito casero",
      image: fideuaImage,
      alt: "Fideuá con mariscos frescos"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elaboradas con los mejores ingredientes y siguiendo las recetas tradicionales valencianas
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden shadow-warm hover:shadow-glow transition-smooth transform hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  className="w-full h-full object-cover transition-smooth transform hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;