import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: gallery1, alt: "Luxury home exterior with pool and mountain views" },
    { url: gallery2, alt: "Modern luxury kitchen with granite countertops" },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG",
      alt: "Beautiful living room with modern design",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG",
      alt: "Spacious master bedroom",
    },
    {
      url: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG",
      alt: "Backyard with entertainment area",
    },
  ];

  // Optional: keyboard navigation for modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight")
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
      if (e.key === "ArrowLeft")
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, images.length]);

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="gallery"
      className="
        relative py-24 md:py-36 overflow-hidden
        bg-gradient-to-b from-[#fffdf7] via-white to-[#f9f7f2]
        dark:from-[#0d1a2b] dark:via-[#0e1d33] dark:to-[#14253e]
        transition-colors duration-700
      "
    >
      {/* glowing background lights */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-amber-300/20 to-transparent rounded-full blur-3xl top-[10%] left-[-10%] animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/10 to-transparent rounded-full blur-3xl bottom-[10%] right-[-10%] animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-accent font-semibold text-sm tracking-wider uppercase mb-2">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our featured properties and successful sales
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="
                relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group
                hover:scale-[1.02] transition-transform duration-500
              "
              onClick={() => setSelectedImage(index)}
            >
              <motion.img
                src={image.url}
                alt={image.alt}
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                "
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 100 }}
              />
              <div
                className="
                  absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100 transition-all duration-500
                  flex items-end justify-center
                "
              >
                <p className="text-white text-center mb-6 text-lg font-medium tracking-wide">
                  Click to view
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="
                absolute top-6 right-8 text-white text-5xl font-light
                hover:text-amber-400 transition-all duration-300
              "
              aria-label="Close"
              whileHover={{ scale: 1.2 }}
            >
              ×
            </motion.button>
            <motion.img
              src={images[selectedImage].url}
              alt={images[selectedImage].alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="
                max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl
              "
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
