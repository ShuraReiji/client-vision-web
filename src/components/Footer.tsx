import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2">Marci Metzger</h3>
            <p className="text-sm opacity-80">THE RIDGE REALTY GROUP</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/MarciHomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-all"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/marciandlauren_nvrealtors/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/marci-metzger-30642496/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>
            Copyright © {currentYear} Marci Metzger Homes - All Rights Reserved
          </p>
          <p className="mt-2">
            3190 HW-160, Suite F, Pahrump, Nevada 89048 | 
            <a href="tel:(206) 919-6886" className="hover:text-accent ml-1">
              (206) 919-6886
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
