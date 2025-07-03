import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Kamau",
      location: "Kiambu",
      project: "Custom Gate & Fence",
      rating: 5,
      comment: "KEM Engineering did an outstanding job on our compound gate and fencing. The quality of work is exceptional and the team was very professional. Highly recommended!",
      avatar: "DK"
    },
    {
      name: "Grace Wafula",
      location: "Nairobi",
      project: "Security Doors",
      rating: 5,
      comment: "We needed security doors for our shop and KEM delivered exactly what we wanted. Strong, beautiful, and installed perfectly. Great value for money.",
      avatar: "GW"
    },
    {
      name: "John Ochieng",
      location: "Kisumu",
      project: "Staircase Railings",
      rating: 5,
      comment: "The staircase railings for our home are absolutely beautiful. The craftsmanship is top-notch and they completed the work on time as promised.",
      avatar: "JM"
    },
    {
      name: "Sarah Kapalei",
      location: "Samburu",
      project: "Car Shade",
      rating: 5,
      comment: "Excellent metal car shade installation. Very durable and well-designed. The team was punctual and cleaned up after the work. Will definitely use them again.",
      avatar: "SN"
    }
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about our metal engineering services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "{testimonial.comment}"
                </p>
                
                <p className="text-xs font-medium text-accent">
                  Project: {testimonial.project}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join our satisfied customers?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+254720874066"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Call +254 720 874 066
            </a>
            <a 
              href="https://wa.me/254720874066"
              className="inline-flex items-center justify-center h-12 px-8 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;