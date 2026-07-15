import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    text: "From the moment we stepped into La Famiglia, we felt transported to another world. The restaurant itself has a truly unique ambiance, almost like dining in a castle. The waitress was incredibly attentive and made us feel very welcome. The food was delicious, and we thoroughly enjoyed our meal. To top off the evening, we were treated to live entertainment.",
    author: "Dalia Ancute"
  },
  {
    id: 2,
    text: "Visited La Famiglia for the first time last night. We were blown away with the stunning and unique interior of the restaurant. The food was delicious and well presented and good portion sizes too. Staff were welcoming and nothing is too much trouble, will definitely visit again. Great place for a special occasion for something a little different, just what we need in Northampton.",
    author: "Sonia Lees"
  },
  {
    id: 3,
    text: "I spent a wonderful evening at this place. The food, organization and service was top notch! Bravo! I recommend with confidence!",
    author: "Cristina Pasat"
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-bg py-24 md:py-40 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-20">
          4.8★ on Google · 277+ Reviews
        </p>

        <div className="relative h-[600px] sm:h-[500px] md:h-[400px]">
          <span className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[120px] text-gold leading-none select-none z-0 opacity-50">
            "
          </span>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
            >
              <p className="font-serif italic text-[32px] md:text-[40px] leading-[1.3] text-cream mb-12 max-w-[1000px]">
                {testimonials[currentIndex].text}
              </p>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-muted">
                {testimonials[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8 mb-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-gold w-4' : 'bg-muted/50 hover:bg-muted'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <a 
          href="https://google.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border-b border-gold/50 text-gold hover:text-cream hover:border-cream pb-1 text-xs uppercase tracking-[0.15em] transition-colors duration-300"
        >
          Read More on Google
        </a>
      </div>
    </section>
  );
}
