import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Gates & Fencing",
      description: "Secure and beautiful entrance gates, boundary fencing, and decorative metalwork for residential and commercial properties.",
      features: ["Electric gates", "Manual swing gates", "Decorative fencing", "Security barriers"]
    },
    {
      title: "Staircases & Railings",
      description: "Elegant and safe staircases with custom railings that combine functionality with stunning design.",
      features: ["Spiral staircases", "Straight staircases", "Balcony railings", "Handrails"]
    },
    {
      title: "Security Doors & Grilles",
      description: "Heavy-duty security solutions including doors, window grilles, and burglar bars for maximum protection.",
      features: ["Security doors", "Window grilles", "Burglar bars", "Safe rooms"]
    },
    {
      title: "Metal Shades & Awnings",
      description: "Durable metal awnings and shade structures that provide weather protection while enhancing your property's appearance.",
      features: ["Car port shades", "Patio awnings", "Commercial canopies", "Walkway covers"]
    },
    {
      title: "Structural Steel Work",
      description: "Professional structural steel fabrication and installation for construction and renovation projects.",
      features: ["Building frames", "Support beams", "Steel columns", "Roof trusses"]
    },
    {
      title: "Repairs & Maintenance",
      description: "Expert repair services for all types of metal structures, welding repairs, and ongoing maintenance programs.",
      features: ["Welding repairs", "Rust treatment", "Paint restoration", "Emergency repairs"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom fabrication to repairs, we provide comprehensive metal engineering services 
            for residential, commercial, and industrial clients across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="xl">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;