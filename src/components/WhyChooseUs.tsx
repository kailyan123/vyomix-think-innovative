import { 
  DollarSign, 
  Shield, 
  TrendingUp, 
  Lightbulb 
} from "lucide-react";

const WhyChooseUs = () => {
  const highlights = [
    {
      icon: DollarSign,
      title: "Affordable",
      description: "Premium solutions at competitive prices",
      color: "from-accent to-neon-cyan"
    },
    {
      icon: Shield,
      title: "Reliable",
      description: "Dependable service with 99.9% uptime guarantee",
      color: "from-primary to-secondary"
    },
    {
      icon: TrendingUp,
      title: "Scalable",
      description: "Solutions that grow with your business",
      color: "from-secondary to-neon-purple"
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "Latest technology and creative problem-solving",
      color: "from-neon-purple to-neon-pink"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Why Choose Vyomix?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of innovation, reliability, and affordability 
            that sets us apart in the technology landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-all duration-500`} />
              
              <div className="relative card-futuristic text-center">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${highlight.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                  <highlight.icon className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;