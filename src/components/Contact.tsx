import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Linkedin, Star } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="
        relative py-24 md:py-36 overflow-hidden
        bg-gradient-to-b from-[#fffdf7] via-white to-[#f9f7f2]
        dark:from-[#0d1a2b] dark:via-[#0e1d33] dark:to-[#14253e]
        transition-colors duration-700
      "
    >
      {/* 🌈 Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-amber-200/30 to-transparent rounded-full blur-3xl top-[-20%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-yellow-300/20 to-transparent rounded-full blur-3xl bottom-[-15%] right-[-5%] animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Call or Visit
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your real estate journey? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* ✉️ Contact Form */}
          <Card
            className="
              p-8 bg-white/80 dark:bg-gray-900/60
              backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl
              transition-all duration-500 animate-fade-in-up
            "
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { id: "name", label: "Name*", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email*", type: "email", placeholder: "your.email@example.com" },
                { id: "phone", label: "Phone", type: "tel", placeholder: "(123) 456-7890" },
              ].map((field, i) => (
                <div
                  key={field.id}
                  className="space-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                >
                  <label htmlFor={field.id} className="text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.label.includes("*")}
                    className="bg-background"
                  />
                </div>
              ))}

              <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your real estate needs..."
                  required
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="
                  w-full mt-4 shadow-md hover:shadow-lg transition-all duration-300
                  bg-gradient-to-r from-amber-400 to-amber-500
                  hover:from-amber-500 hover:to-amber-600 text-white font-semibold
                "
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-2">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </Card>

          {/* 📍 Contact Info Side */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Card className="p-6 bg-white/80 dark:bg-gray-900/60 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Marci Metzger - THE RIDGE REALTY GROUP
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-accent" />,
                    title: "Address",
                    content: (
                      <>
                        3190 HW-160, Suite F<br />
                        Pahrump, Nevada 89048<br />
                        United States
                      </>
                    ),
                  },
                  {
                    icon: <Phone className="h-6 w-6 text-accent" />,
                    title: "Phone",
                    content: (
                      <a
                        href="tel:(206) 919-6886"
                        className="text-accent hover:underline text-lg font-medium"
                      >
                        (206) 919-6886
                      </a>
                    ),
                  },
                  {
                    icon: <Clock className="h-6 w-6 text-accent" />,
                    title: "Office Hours",
                    content: (
                      <>
                        Monday - Sunday<br />
                        8:00 AM - 7:00 PM
                        <p className="text-sm text-muted-foreground mt-2">
                          Appointments outside office hours available upon request.
                        </p>
                      </>
                    ),
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${0.5 + i * 0.1}s` }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className="text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map */}
            <Card className="p-6 overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              <h4 className="font-semibold text-foreground mb-4">Visit Us</h4>
              <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.8!2d-116.0!3d36.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEyJzAwLjAiTiAxMTbCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location - 3190 HW-160, Suite F, Pahrump, Nevada 89048"
                ></iframe>
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, href: "https://www.facebook.com/MarciHomes/", label: "Facebook" },
                  { Icon: Instagram, href: "https://www.instagram.com/marciandlauren_nvrealtors/", label: "Instagram" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/marci-metzger-30642496/", label: "LinkedIn" },
                  { Icon: Star, href: "https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump", label: "Yelp" },
                ].map(({ Icon, href, label }, i) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="
                      flex items-center justify-center w-12 h-12 rounded-full bg-primary
                      hover:bg-accent transition-all transform hover:scale-110 duration-300
                      text-primary-foreground shadow-md
                    "
                    style={{ animationDelay: `${1 + i * 0.1}s` }}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </Card>

            {/* WhatsApp */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="
                w-full border-2 border-accent text-accent hover:bg-accent
                hover:text-accent-foreground transition-all duration-300
                animate-fade-in-up
              "
              style={{ animationDelay: "1.2s" }}
            >
              <a
                href="https://wa.me/14259412560"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Message us on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
