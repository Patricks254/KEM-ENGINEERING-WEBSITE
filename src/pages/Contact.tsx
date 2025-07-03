import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to discuss your metal engineering project? Get in touch for a free consultation
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <Phone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Call Us Now</h3>
                <p className="text-muted-foreground mb-4">For immediate assistance and quotes</p>
                <a 
                  href="tel:+254757122461"
                  className="text-2xl font-bold text-accent hover:underline"
                >
                  +254757122461
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <MessageCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-muted-foreground mb-4">Send photos and get instant responses</p>
                <a 
                  href="https://wa.me/254720874066"
                  className="text-2xl font-bold text-accent hover:underline"
                >
                  Chat With Us
                </a>
              </CardContent>
            </Card>

            <Card className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <Mail className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Detailed project discussions</p>
                <a 
                  href="godfreyangengo76@gmail.com"
                  className="text-lg font-bold text-accent hover:underline"
                >
                  godfreyangengo76@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      {/* Location & Hours */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Workshop Location */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-accent mr-4" />
                <h2 className="text-2xl font-bold text-primary">Visit Our Workshop</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <p className="text-lg font-semibold">KEM Engineering Metal Works</p>
                <p className="text-muted-foreground">
                  Industrial Area, Thika<br />
                  Kiambu County, Kenya
                </p>
                <p className="text-sm text-muted-foreground">
                  Located in the heart of Thika's industrial area, our workshop is easily 
                  accessible from Nairobi via Thika Road. We welcome site visits to discuss 
                  your projects and see our work firsthand.
                </p>
              </div>

              <Button variant="outline" className="w-full">
                Get Directions
              </Button>
            </Card>

            {/* Business Hours & Emergency */}
            <div className="space-y-6">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-accent mr-4" />
                  <h2 className="text-2xl font-bold text-primary">Business Hours</h2>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Emergency repairs only</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-accent/10 border-accent">
                <h3 className="text-xl font-bold text-accent mb-4">Emergency Services</h3>
                <p className="text-muted-foreground mb-4">
                  Need urgent repairs? We offer 24/7 emergency services for critical 
                  situations including gate repairs, security door issues, and structural 
                  concerns.
                </p>
                <Button variant="default" className="w-full">
                  Call Emergency Line
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Service Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide professional metal engineering services across Central Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { area: "Thika", distance: "Workshop Location", description: "Full services available" },
              { area: "Nairobi", distance: "45 km", description: "Complete service coverage" },
              { area: "Kiambu", distance: "25 km", description: "Residential & commercial" },
              { area: "Ruiru", distance: "20 km", description: "All services available" },
              { area: "Juja", distance: "30 km", description: "Industrial & residential" },
              { area: "Kikuyu", distance: "55 km", description: "Full services available" },
              { area: "Limuru", distance: "40 km", description: "Residential projects" },
              
            ].map((location, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="text-lg font-bold text-primary mb-2">{location.area}</h3>
                  <p className="text-sm text-accent font-medium mb-2">{location.distance}</p>
                  <p className="text-xs text-muted-foreground">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-lg text-muted-foreground mb-4">
              Don't see your area listed? Contact us! We may still be able to serve you.
            </p>
            <Button variant="cta">
              Check Service Availability
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;