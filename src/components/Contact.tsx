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
    <section id="contact" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Call or Visit
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your real estate journey? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 animate-fade-in">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name*
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
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

              <Button type="submit" size="lg" className="w-full shadow-md hover:shadow-lg">
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card className="p-6">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Marci Metzger - THE RIDGE REALTY GROUP
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">
                      3190 HW-160, Suite F<br />
                      Pahrump, Nevada 89048<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a
                      href="tel:(206) 919-6886"
                      className="text-accent hover:underline text-lg font-medium"
                    >
                      (206) 919-6886
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Sunday<br />
                      8:00 AM - 7:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Appointments outside office hours available upon request.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Google Map */}
            <Card className="p-6 overflow-hidden">
              <h4 className="font-semibold text-foreground mb-4">Visit Us</h4>
              <div className="aspect-video rounded-lg overflow-hidden">
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
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/MarciHomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition-colors text-primary-foreground"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/marciandlauren_nvrealtors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition-colors text-primary-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marci-metzger-30642496/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition-colors text-primary-foreground"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-group-pahrump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition-colors text-primary-foreground"
                  aria-label="Yelp"
                >
                  <Star className="h-5 w-5" />
                </a>
              </div>
            </Card>

            {/* WhatsApp Button */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all"
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
