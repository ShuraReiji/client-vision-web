import { Button } from "@/components/ui/button";
import { Phone, Home } from "lucide-react";
import heroImage from "@/assets/hero-pahrump.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful Pahrump Nevada landscape with Spring Mountains and golf course"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase font-medium opacity-90">
            The Ridge Realty Group
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Pahrump Realtor
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Your trusted real estate partner with nearly 3 decades of experience
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-gold text-lg px-8 py-6"
            >
              <a href="tel:(206) 919-6886" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6"
            >
              <a href="#listings" className="flex items-center gap-2">
                <Home className="h-5 w-5" />
                View Listings
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
