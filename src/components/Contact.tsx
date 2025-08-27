import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-space-blue/20 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Ready to Get Started?</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's discuss how Vyomix can transform your ideas into reality. 
          Reach out to us today and discover the future of smart technology solutions.
        </p>
        
        <div className="space-y-6">
          {/* Primary CTA */}
          <div>
            <Button 
              asChild
              className="btn-hero text-2xl px-12 py-6"
            >
              <a 
                href="https://wa.me/9101169295" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4"
              >
                <MessageCircle className="w-8 h-8" />
                Connect on WhatsApp
              </a>
            </Button>
          </div>
          
          {/* Alternative Contact Options */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="outline" 
              className="btn-neon"
              asChild
            >
              <a 
                href="tel:+919101169295"
                className="inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-neon"
              asChild
            >
              <a 
                href="mailto:contact@vyomix.com"
                className="inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </Button>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="mt-16 p-8 card-futuristic max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Get in Touch
          </h3>
          <p className="text-muted-foreground mb-4">
            We're here to help you every step of the way. Connect with us through 
            your preferred channel and let's start building something amazing together.
          </p>
          <div className="text-accent font-medium">
            📱 +91 91011 69295
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;