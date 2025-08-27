import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-accent rounded-full animate-glow" />
      <div className="absolute top-40 right-32 w-6 h-6 bg-primary rounded-full animate-float" />
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-secondary rounded-full animate-glow" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-gradient-hero">Vyomix</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium">
            Infinite Solutions, Smart Tech
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in animation-delay-200">
          Affordable. Reliable. Future-ready solutions for businesses and individuals.
        </p>
        
        <div className="animate-fade-in animation-delay-400">
          <Button 
            asChild
            className="btn-hero"
          >
            <a 
              href="https://wa.me/9101169295" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Get in Touch on WhatsApp
            </a>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;