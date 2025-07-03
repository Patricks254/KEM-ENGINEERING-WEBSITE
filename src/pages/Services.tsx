import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Custom Gates & Fencing",
      description: "Secure and beautiful entrance solutions for your property",
      image: "/placeholder.svg",
      features: ["Electric Gates", "Manual Swing Gates", "Sliding Gates", "Decorative Fencing", "Security Barriers", "Boundary Walls"],
      startingPrice: "KSh 25,000",
      duration: "3-7 days"
    },
    {
      title: "Staircases & Railings", 
      description: "Elegant and safe staircase solutions with custom railings",
      image: "/placeholder.svg",
      features: ["Spiral Staircases", "Straight Staircases", "Balcony Railings", "Handrails", "Glass Railings", "Decorative Railings"],
      startingPrice: "KSh 35,000",
      duration: "5-10 days"
    },
    {
      title: "Security Doors & Window Grilles",
      description: "Heavy-duty security solutions for maximum protection",
      image: "/placeholder.svg", 
      features: ["Security Doors", "Window Grilles", "Burglar Bars", "Safe Rooms", "Emergency Exits", "Fire Escape Doors"],
      startingPrice: "KSh 15,000",
      duration: "2-5 days"
    },
    {
      title: "Metal Shades & Awnings",
      description: "Weather protection with style for cars and outdoor spaces",
      image: "/placeholder.svg",
      features: ["Car Port Shades", "Patio Awnings", "Commercial Canopies", "Walkway Covers", "Pool Shades", "Garden Pergolas"],
      startingPrice: "KSh 45,000", 
      duration: "4-8 days"
    },
    {
      title: "Structural Steel Work",
      description: "Professional structural fabrication for construction projects",
      image: "/placeholder.svg",
      features: ["Building Frames", "Support Beams", "Steel Columns", "Roof Trusses", "Mezzanine Floors", "Industrial Platforms"],
      startingPrice: "KSh 80,000",
      duration: "1-3 weeks"
    },
    {
      title: "Repairs & Maintenance",
      description: "Expert repair services and ongoing maintenance programs",
      image: "/placeholder.svg",
      features: ["Welding Repairs", "Rust Treatment", "Paint Restoration", "Emergency Repairs", "Gate Motor Repairs", "Preventive Maintenance"],
      startingPrice: "KSh 5,000",
      duration: "Same day"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive metal engineering solutions for residential, commercial, and industrial clients
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <Badge variant="secondary" className="text-accent">
                      From {service.startingPrice}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                    <span>⏱️ Timeline: {service.duration}</span>
                    <span>📍 Service area: Thika & Nairobi</span>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="cta" className="flex-1">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      View Examples
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose KEM Engineering?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to delivering exceptional quality and service that exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">All our work comes with a comprehensive warranty and quality guarantee</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Most projects completed within the promised timeline with no delays</p>
            </Card>
            
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground">Competitive pricing with no hidden costs or surprise charges</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your metal engineering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="xl">
              Call +254 720 874 066
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
              WhatsApp Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;