import { TrendingUp, Users, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "$28.5M+",
      label: "In Sales 2021",
      description: "Record-breaking sales performance"
    },
    {
      icon: Users,
      value: "90+",
      label: "Happy Clients",
      description: "Satisfied homeowners in 2021"
    },
    {
      icon: Award,
      value: "30 Years",
      label: "Experience",
      description: "Trusted real estate expertise"
    }
  ];

  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center text-primary-foreground space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="font-serif text-5xl md:text-6xl font-bold text-accent">
                  {stat.value}
                </div>
                <div className="text-xl md:text-2xl font-semibold">
                  {stat.label}
                </div>
                <p className="text-sm md:text-base opacity-80 max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
