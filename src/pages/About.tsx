import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    {
      name: "Engineer Godfrey Mugeni",
      role: "Founder & Lead Engineer",
      experience: "15+ years",
      description: "Certified structural engineer with extensive experience in metal fabrication and welding."
    },
    {
      name: "Makos",
      role: "Master Welder",
      experience: "12+ years", 
      description: "Expert in all welding techniques with specialization in decorative metalwork."
    },
    {
      name: "Stano",
      role: "Project Manager",
      experience: "8+ years",
      description: "Ensures all projects are delivered on time and meet our high quality standards."
    }
  ];

  const certifications = [
    "Certified Structural Steel Welding",
    "Safety Management Certification",
    "Quality Assurance ISO Standards",
    "Professional Engineering License"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About KEM Engineering</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building Kenya's future with quality metal engineering since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                 Founded in 2008 by Godfrey Angengo, KEM Metalwork Workshop has established itself as a leader in high-quality metal fabrication and design. KEM Engineering Metal Works was founded with a simple vision: to provide 
                  Kenya with world-class metal fabrication services that combine traditional 
                  craftsmanship with modern engineering techniques.
                </p>
                <p>
                  Starting from a small workshop in Thika, we have grown to become one of the 
                  most trusted names in metal engineering across Central Kenya. Our commitment 
                  to quality, reliability, and customer satisfaction has earned us the loyalty 
                  of hundreds of satisfied clients.
                </p>
                <p>
                  Today, we serve residential, commercial, and industrial clients throughout 
                  Thika, Nairobi, Kiambu, and beyond, delivering projects that stand the test 
                  of time.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                To deliver exceptional metal engineering solutions that exceed our clients' 
                expectations while maintaining the highest standards of quality, safety, and 
                professional service.
              </p>
              <h3 className="text-2xl font-bold text-primary mb-6">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be Kenya's leading metal engineering company, known for innovation, 
                reliability, and creating structures that enhance communities and businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our skilled professionals bring decades of combined experience to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.experience} experience</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Capabilities</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Materials We Work With</h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <span>• Mild Steel</span>
                    <span>• Stainless Steel</span>
                    <span>• Aluminum</span>
                    <span>• Cast Iron</span>
                    <span>• Galvanized Steel</span>
                    <span>• Carbon Steel</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Manufacturing Techniques</h3>
                  <div className="grid grid-cols-2 gap-2 text-muted-foreground">
                    <span>• Arc Welding</span>
                    <span>• MIG Welding</span>
                    <span>• TIG Welding</span>
                    <span>• Plasma Cutting</span>
                    <span>• Metal Bending</span>
                    <span>• CNC Machining</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every project undergoes rigorous quality control checks, from material 
                    selection to final installation. We follow international standards and 
                    provide comprehensive warranties on all our work.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Standards</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-4"></div>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                  <h4 className="font-bold text-accent mb-2">Quality Guarantee</h4>
                  <p className="text-sm text-muted-foreground">
                    All our work comes with a comprehensive warranty. We stand behind 
                    our craftsmanship and will address any issues promptly.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Service Areas</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We proudly serve clients across  Kenya with professional metal engineering services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Thika</h3>
              <p className="text-sm opacity-90">Our home base with full workshop facilities</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Nairobi</h3>
              <p className="text-sm opacity-90">Complete service coverage for the capital</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Kiambu</h3>
              <p className="text-sm opacity-90">Residential and commercial projects</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">All Areas in Kenya</h3>
              <p className="text-sm opacity-90">Central, Eastern, Western, and more</p>
            </div>
          </div>

          <Button variant="secondary" size="xl">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;