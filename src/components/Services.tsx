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
        "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars."
    },
    {
      icon: Lightbulb,
      title: "Rely on Expertise",
      subtitle: "Real Estate Done Right",
      description:
        "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
      highlight: "Comprehensive Support",
      details:
        "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-subtle relative">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
            Our Services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Real Estate Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive real estate services tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 group animate-fade-in border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-gold group-hover:shadow-gold transition-all duration-300">
                    <Icon className="h-7 w-7 text-accent-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent font-semibold text-sm">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-border/50">
                    <p className="font-semibold text-primary mb-2">
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
