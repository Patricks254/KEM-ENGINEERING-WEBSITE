import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Custom Gates & Fencing",
      imageSrc: "/src/assets/1.jpg",
      features: [
        "Electric gates",
        "Manual swing gates",
        "Decorative fencing",
        "Security barriers",
      ],
      price: "From KSh 25,000",
    },
    {
      title: "Staircases & Railings",
      imageSrc: "/public/a.jpg",
      features: [
        "Spiral staircases",
        "Straight staircases",
        "Balcony railings",
        "Handrails",
      ],
      price: "From KSh 35,000",
    },
    {
      title: "Security Doors & Grilles",
      imageSrc: "/public/Secwindow.jpg",
      features: [
        "Security doors",
        "Window grilles",
        "Burglar bars",
        "Safe rooms",
      ],
      price: "From KSh 15,000",
    },
    {
      title: "Metal Shades & Awnings",
      imageSrc: "/public/Shade.jpg",
      features: [
        "Car port shades",
        "Patio awnings",
        "Commercial canopies",
        "Walkway covers",
      ],
      price: "From KSh 45,000",
    },
    {
      title: "Structural Steel Work",
      imageSrc: "/public/Roof.jpg",
      features: [
        "Building frames",
        "Support beams",
        "Steel columns",
        "Roof trusses",
      ],
      price: "From KSh 80,000",
    },
    {
      title: "Repairs & Maintenance",
      imageSrc: "/public/repair.jpg",
      features: [
        "Welding repairs",
        "Rust treatment",
        "Paint restoration",
        "Emergency repairs",
      ],
      price: "From KSh 5,000",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 leading-tight">
            Our Services
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium">
            <span className="bg-blue-100 px-5 py-2 rounded-full text-blue-800 font-bold text-xl">
              From custom fabrication
            </span>{" "}
            to repairs, we provide comprehensive metal engineering services for
            residential, commercial, and industrial clients across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white border-0 shadow-xl overflow-hidden h-[600px] rounded-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={service.imageSrc}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-6 right-6">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    Popular
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <div className="text-4xl font-black text-orange-400">
                    {service.price}
                  </div>
                </div>
              </div>

              <CardContent className="p-8">
                <ul className="space-y-4 mb-8">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-lg text-gray-700 font-medium"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-4 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-lg text-gray-500 italic font-medium">
                      +{service.features.length - 4} more services
                    </li>
                  )}
                </ul>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 text-lg font-semibold py-3"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold py-3"
                  >
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-4xl font-black text-gray-800 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-gray-600 mb-10 font-medium">
              Get a free consultation and custom quote for your metal
              engineering needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl"
              >
                Request Custom Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-orange-500 text-orange-600 hover:bg-orange-50 px-12 py-4 text-xl font-bold transition-all duration-300 rounded-xl"
              >
                📞 Call +254 720 874 066
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
