import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-accent mb-4">
                KEM ENGINEERING
              </h3>
              <p className="text-sm mb-4">
                Professional metal fabrication and engineering services in
                Kenya. Quality craftsmanship you can trust.
              </p>
              <p className="text-sm">
                Serving Thika, Nairobi, and all areas in Kenya since 2011.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li>Custom Gates & Fencing</li>
                <li>Staircases & Railings</li>
                <li>Security Doors & Grilles</li>
                <li>Metal Shades & Awnings</li>
                <li>Structural Steel Work</li>
                <li>Repairs & Maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2 text-sm">
                <p>Phone: +254 720 874 066</p>
                <p>WhatsApp: +254 720 874 066</p>
                <p>Location: Thika, Kenya</p>
                <p>Mon-Fri: 7AM-6PM</p>
                <p>Sat: 8AM-4PM</p>
              </div>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 KEM Engineering Metal Works. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
