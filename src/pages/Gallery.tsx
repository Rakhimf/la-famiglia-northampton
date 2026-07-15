import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ["All", "Food", "The Restaurant", "Drink", "Events"];

const galleryData = [
  { id: 1, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_41_54%20PM.png", alt: "Interior seating" },
  { id: 2, category: "Food", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png", alt: "Pasta dish" },
  { id: 3, category: "Food", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_57_42%20PM.png", alt: "Pizza preparation" },
  { id: 4, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_45_42%20PM.png", alt: "Wine glass" },
  { id: 5, category: "Events", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png", alt: "Live music event" },
  { id: 6, category: "The Restaurant", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png", alt: "Dining hall" },
  { id: 7, category: "Food", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_58_52%20PM.png", alt: "Steak dish" },
  { id: 8, category: "Drink", src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_00_19%20PM.png", alt: "Cocktail" },
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
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_41_54%20PM.png"
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
