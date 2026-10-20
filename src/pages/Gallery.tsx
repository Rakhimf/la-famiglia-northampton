import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Food", "The Restaurant", "Drink", "Events"];

const galleryData = [
  { id: 1, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%202.png", alt: "La Famiglia Northampton" },
  { id: 2, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%203.png", alt: "La Famiglia interior" },
  { id: 3, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20Northampton%20Story.png", alt: "La Famiglia story" },
  { id: 4, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20Northampton%20Story%203.png", alt: "La Famiglia story 3" },
  { id: 5, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%20LaFamiglia.png", alt: "La Famiglia branding" },
  { id: 6, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/acb8fdd7-e9fe-442a-ba34-8e94c96d1fe3.jpg", alt: "La Famiglia dining" },
  { id: 7, category: "Events", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/IMG_8222.JPG", alt: "La Famiglia event" },
  { id: 8, category: "Events", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/IMG_9888.JPG", alt: "La Famiglia restaurant" },
  { id: 9, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/2M8A9120.JPG", alt: "Drinks at La Famiglia" },
  { id: 10, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/IMG_8273.JPG", alt: "Bar drinks" },
  { id: 11, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/IMG_8276.JPG", alt: "Drinks" },
  { id: 12, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/IMG_8277.JPG", alt: "Cocktail selection" },
  { id: 13, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/IMG_8947.PNG", alt: "Signature drinks" },
  { id: 14, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Drinks/IMG_9635.JPG", alt: "La Famiglia bar" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  return (
    <div className="bg-bg text-cream min-h-screen">
      <HeroSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%202.png"
        imageAlt="Gallery Hero"
        eyebrow="Gallery"
        headline="See La Famiglia"
      />

      <section className="py-24 md:py-40 px-6 lg:px-20 w-full">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 pb-1 border-b",
                activeCategory === category 
                  ? "text-gold border-gold" 
                  : "text-muted border-transparent hover:text-cream"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid Simulation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={image.id}
                className="relative overflow-hidden cursor-pointer group break-inside-avoid"
                onClick={() => setSelectedImage(image.id)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-500 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 font-sans text-xs uppercase tracking-[0.2em] text-cream transition-opacity duration-500 delay-100">
                    View Image
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/98 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-muted hover:text-cream transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-6 text-muted hover:text-cream transition-colors z-50"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full h-full flex items-center justify-center pointer-events-none"
            >
              <img 
                src={galleryData.find(i => i.id === selectedImage)?.src} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain pointer-events-auto"
              />
            </motion.div>

            <button 
              className="absolute right-6 text-muted hover:text-cream transition-colors z-50"
              onClick={handleNext}
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />
    </div>
  );
}
