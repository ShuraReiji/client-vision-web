import { Card } from "@/components/ui/card";
import { TrendingUp, Home, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Get It Sold",
      subtitle: "Top Residential Sales Last 5 Years",
      description:
        "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
      highlight: "Don't Just List it... Get it SOLD!",
      details:
        "We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
    },
    {
      icon: Home,
      title: "Guide to Buyers",
      subtitle: "Find Your Perfect Home",
      description:
        "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
      highlight: "Commercial & Residential",
      details:
        "Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars."
    },
    {
      icon: Lightbulb,
      title: "Rely on Expertise",
      subtitle: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell, looking at investments, or just curious about the market, our team ensures you get the best experience possible!",
      highlight: "Comprehensive Support",
      details:
        "If you have questions about affordability, credit, or loans, trust us to connect you with the right people. We make sure you feel confident every step of the way."
    }
  ];

  return (
    <section
      id="services"
      className="
        relative py-24 md:py-36 overflow-hidden
        bg-gradient-to-b from-[#fffaf3] via-white to-[#f7f5f0]
        dark:from-[#0b1623] dark:via-[#0e1d33] dark:to-[#14253e]
        transition-colors duration-700
      "
    >
      {/* ✨ Animated gradient beams for subtle motion in light mode */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-amber-200/40 to-transparent rounded-full blur-3xl top-[-10%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-yellow-300/30 to-transparent rounded-full blur-3xl bottom-[-10%] right-[-10%] animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Real Estate Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive real estate services tailored to your unique needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="
                  relative p-8 border border-border/40
                  bg-white/80 dark:bg-gray-900/60
                  backdrop-blur-md
                  shadow-sm hover:shadow-lg hover:shadow-amber-200/30
                  hover:-translate-y-2
                  transition-all duration-500 group rounded-2xl
                "
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow overlay */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-amber-100/40 via-transparent to-transparent transition-opacity duration-500"></div>

                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent font-semibold text-sm">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed dark:text-gray-300">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-border/40">
                    <p className="font-semibold text-primary dark:text-accent mb-2">
                      {service.highlight}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {service.details}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
