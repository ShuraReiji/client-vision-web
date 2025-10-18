import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import marciPhoto from "@/assets/marci-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-accent rounded-lg -z-10"></div>
            <img
              src={marciPhoto}
              alt="Marci Metzger - Professional Real Estate Agent"
              className="w-full rounded-lg shadow-lg object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold rounded-lg px-6 py-4 shadow-gold">
              <p className="font-serif text-2xl md:text-3xl font-bold text-accent-foreground">
                Nearly 3 Decades
              </p>
              <p className="text-sm text-accent-foreground/80">Of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
                Meet Your Realtor
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
                Marci Metzger
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Realtor for Nearly 3 Decades
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                With an unmatched dedication to excellence, Marci Metzger brings nearly 30 years of real estate expertise to The Ridge Realty Group. Her commitment to clients and deep knowledge of the Pahrump market has resulted in exceptional outcomes year after year.
              </p>
              <p>
                In 2021 alone, Marci helped nearly 90 clients achieve their real estate dreams, closing an impressive $28.5 million in sales. Her team works tirelessly to grow, learn, and excel in the market, ensuring every client receives the very best service.
              </p>
              <p className="font-semibold text-primary">
                "Our clients deserve our best, and we want to make sure our best gets better every year."
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="shadow-md hover:shadow-lg transition-all"
            >
              <a href="tel:(206) 919-6886" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                (206) 919-6886
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
