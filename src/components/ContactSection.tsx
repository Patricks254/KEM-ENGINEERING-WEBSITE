import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us for a free consultation and detailed quote. 
            We serve Thika, Nairobi, Mombasa, Kisumu, Nyeri, Busia, Marsabit and all areas in Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                  <Input placeholder="+254720 874 066" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email Address</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Service Needed *</label>
                <select className="w-full p-3 border rounded-md bg-background">
                  <option>Select a service</option>
                  <option>Custom Gates & Fencing</option>
                  <option>Staircases & Railings</option>
                  <option>Security Doors & Grilles</option>
                  <option>Metal Shades & Awnings</option>
                  <option>Structural Steel Work</option>
                  <option>Repairs & Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Project Details *</label>
                <Textarea 
                  placeholder="Please describe your project, including size, materials, timeline, and any specific requirements..."
                  rows={5}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Project Location</label>
                <Input placeholder="Thika, Nairobi, etc." />
              </div>

              <Button variant="cta" size="lg" className="w-full">
                Send Quote Request
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us Directly</h3>
                    <p className="text-muted-foreground mb-2">
                      For immediate quotes and urgent repairs
                    </p>
                    <a href="tel:+254720874066" className="text-xl font-semibold text-primary hover:underline">
                      +254720874066
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">WhatsApp Us</h3>
                    <p className="text-muted-foreground mb-2">
                      Send photos and get instant responses
                    </p>
                    <a href="https://wa.me/+254720874066" className="text-lg font-semibold text-primary hover:underline">
                      +254 720 874 066
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Workshop</h3>
                    <p className="text-muted-foreground">
                      Visit us to see our work and discuss your project
                    </p>
                    <p className="text-lg font-semibold text-primary mt-2">
                      Thika, Kenya
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="h-8 w-8 text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Emergency repairs only</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-accent/10 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2 text-accent">Service Areas</h3>
              <p className="text-muted-foreground">
                We proudly serve Thika, Nairobi, Kiambu, Ruiru, Juja, Machakos and surrounding areas. 
                Contact us for projects within and outside these areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;