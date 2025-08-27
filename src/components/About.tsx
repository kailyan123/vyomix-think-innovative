import { Target, Zap, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Determined Excellence",
      description: "We pursue perfection in every project, delivering solutions that exceed expectations."
    },
    {
      icon: Zap,
      title: "Smart Innovation",
      description: "Cutting-edge technology meets practical solutions for real-world challenges."
    },
    {
      icon: Shield,
      title: "Reliable Partnership",
      description: "Affordable, dependable services that grow with your business needs."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">About Vyomix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are driven by determination, focused on perfection, and committed to providing 
            affordable, reliable solutions that empower businesses and individuals to thrive 
            in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-futuristic text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center group-hover:glow-primary transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;