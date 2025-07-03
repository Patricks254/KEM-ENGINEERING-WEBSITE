import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "residential", name: "Residential" },
    { id: "commercial", name: "Commercial" },
    { id: "security", name: "Security" },
    { id: "decorative", name: "Decorative" }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Compound Gate",
      category: "residential",
      location: "Thika, Kenya",
      description: "Custom electric sliding gate with decorative elements and intercom system",
      image: "/placeholder.svg",
      tags: ["Electric Gate", "Sliding", "Intercom"],
      completionTime: "5 days"
    },
    {
      id: 2,
      title: "Spiral Staircase",
      category: "decorative", 
      location: "Nairobi, Kenya",
      description: "Elegant spiral staircase with glass railings for modern home",
      image: "/placeholder.svg",
      tags: ["Spiral", "Glass Railings", "Modern"],
      completionTime: "8 days"
    },
    {
      id: 3,
      title: "Security Window Grilles",
      category: "security",
      location: "Ruiru, Kenya", 
      description: "Heavy-duty security grilles for shop windows with decorative patterns",
      image: "/placeholder.svg",
      tags: ["Security", "Windows", "Commercial"],
      completionTime: "3 days"
    },
    {
      id: 4,
      title: "Car Port Shade",
      category: "commercial",
      location: "Kiambu, Kenya",
      description: "Large metal car port shade for office complex parking area",
      image: "/placeholder.svg", 
      tags: ["Car Port", "Commercial", "Large Scale"],
      completionTime: "6 days"
    },
    {
      id: 5,
      title: "Decorative Fence",
      category: "decorative",
      location: "Thika, Kenya",
      description: "Ornate metal fencing with custom design patterns for luxury home",
      image: "/placeholder.svg",
      tags: ["Decorative", "Custom Design", "Luxury"],
      completionTime: "10 days"
    },
    {
      id: 6,
      title: "Industrial Platform",
      category: "commercial", 
      location: "Nairobi, Kenya",
      description: "Structural steel platform for factory machinery installation",
      image: "/placeholder.svg",
      tags: ["Industrial", "Structural", "Heavy Duty"],
      completionTime: "12 days"
    },
    {
      id: 7,
      title: "Security Doors Set",
      category: "security",
      location: "Juja, Kenya",
      description: "Complete set of security doors for residential property",
      image: "/placeholder.svg",
      tags: ["Security Doors", "Residential", "Full Set"],
      completionTime: "4 days"
    },
    {
      id: 8,
      title: "Office Building Railings",
      category: "commercial",
      location: "Nairobi, Kenya",
      description: "Modern railings for multi-story office building stairwells",
      image: "/placeholder.svg",
      tags: ["Office", "Multi-story", "Modern"],
      completionTime: "14 days"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Showcasing our finest metal engineering projects across Kenya
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className="transition-all duration-200"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {project.completionTime}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-primary mb-1">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.location}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Ready to Create Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. 
            Get your free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Start Your Project
            </Button>
            <Button variant="outline" size="xl">
              Download Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;