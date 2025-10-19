import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import marciPhoto from "@/assets/marci-photo.jpg";

const About = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for fade-in/out on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // 20% visible triggers fade-in
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`
        py-20 md:py-32 relative overflow-hidden
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        bg-gradient-to-b from-gray-50 via-white to-gray-100
        dark:from-[#0b1623] dark:via-[#0e1d33] dark:to-[#14253e]
      `}
    >
      {/* subtle accent glow in background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,184,76,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(255,184,76,0.1)_0%,transparent_80%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div
            className={`
              relative transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
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
          <div
            className={`
              space-y-6 transition-all duration-700 ease-out delay-150
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
            `}
          >
            <div>
              <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
                Meet Your Realtor
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
                Marci Metzger
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Realtor for Nearly 3 Decades
              </p>
            </div>

            <div className="space-y-4 text-foreground/80 leading-relaxed dark:text-gray-300">
              <p>
                With an unmatched dedication to excellence, Marci Metzger brings nearly 30 years of real estate expertise to The Ridge Realty Group. Her commitment to clients and deep knowledge of the Pahrump market has resulted in exceptional outcomes year after year.
              </p>
              <p>
                In 2021 alone, Marci helped nearly 90 clients achieve their real estate dreams, closing an impressive $28.5 million in sales. Her team works tirelessly to grow, learn, and excel in the market, ensuring every client receives the very best service.
              </p>
              <p className="font-semibold text-primary dark:text-accent">
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
