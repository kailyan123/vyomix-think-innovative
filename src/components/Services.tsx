import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Palette, 
  BarChart3 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored applications built with cutting-edge technology"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that drive results"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions"
    },
    {
      icon: Database,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that users love"
    },
    {
      icon: BarChart3,
      title: "Digital Transformation",
      description: "Modernize your business with smart technology"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-space-blue/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Our Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to propel your business 
            into the future with innovation, efficiency, and reliability.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-futuristic group cursor-pointer"
            >
              <div className="w-12 h-12 mb-4 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center group-hover:glow-accent transition-all duration-300">
                <service.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;