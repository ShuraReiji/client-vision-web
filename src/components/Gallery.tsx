import { useState } from "react";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      url: gallery1,
      alt: "Luxury home exterior with pool and mountain views"
    },
    {
      url: gallery2,
      alt: "Modern luxury kitchen with granite countertops"
    },
    {
      url: gallery3,
      alt: "Real estate keys symbolizing your dream home"
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG",
      alt: "Beautiful living room with modern design"
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG",
      alt: "Spacious master bedroom"
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG",
      alt: "Backyard with entertainment area"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our featured properties and successful sales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-primary-foreground text-center px-4 font-medium">
                  Click to view
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-primary-foreground text-4xl hover:text-accent transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
