import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        bg-gradient-to-t from-gray-100 to-white 
        dark:from-[#0b1623] dark:to-[#15223b]
        text-gray-800 dark:text-gray-200
        border-t border-gray-200 dark:border-gray-700
        transition-colors duration-300
        py-12
      "
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              Marci Metzger
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              THE RIDGE REALTY GROUP
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              {
                href: "https://www.facebook.com/MarciHomes/",
                label: "Facebook",
                Icon: Facebook,
              },
              {
                href: "https://www.instagram.com/marciandlauren_nvrealtors/",
                label: "Instagram",
                Icon: Instagram,
              },
              {
                href: "https://www.linkedin.com/in/marci-metzger-30642496/",
                label: "LinkedIn",
                Icon: Linkedin,
              },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  flex items-center justify-center w-10 h-10 rounded-full
                  bg-gray-200/50 dark:bg-white/10
                  hover:bg-accent hover:text-white
                  transition-all duration-300
                "
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + Bottom Text */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            Copyright © {currentYear} Marci Metzger Homes — All Rights Reserved
          </p>
          <p className="mt-2">
            3190 HW-160, Suite F, Pahrump, Nevada 89048 |
            <a
              href="tel:(206) 919-6886"
              className="hover:text-accent ml-1 transition-colors"
            >
              (206) 919-6886
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
