import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className={`font-serif text-2xl md:text-3xl font-bold transition-colors ${
              isScrolled ? "text-primary" : "text-primary-foreground"
            }`}>
              Marci Metzger
            </h1>
            <span className={`text-xs md:text-sm tracking-wider transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/90"
            }`}>
              THE RIDGE REALTY GROUP
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#home"
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              About
            </a>
            <a
              href="#services"
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Services
            </a>
            <a
              href="#gallery"
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Gallery
            </a>
            <a
              href="#contact"
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              Contact
            </a>
            <Button
              asChild
              variant={isScrolled ? "default" : "secondary"}
              className="shadow-md hover:shadow-lg transition-all"
            >
              <a href="tel:(206) 919-6886" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (206) 919-6886
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg px-4 py-6 space-y-4">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-medium text-foreground hover:text-accent transition-colors py-2"
            >
              Contact
            </a>
            <Button asChild className="w-full shadow-md">
              <a href="tel:(206) 919-6886" className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                (206) 919-6886
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
