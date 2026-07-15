import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  headline: string;
  subheading?: string;
  cta1?: { text: string; href: string };
  cta2?: { text: string; href: string };
  cta3?: { text: string; href: string; highlight?: boolean };
}

export function HeroSection({ imageSrc, imageAlt, eyebrow, headline, subheading, cta1, cta2, cta3 }: HeroSectionProps) {
  return (
    <section className="relative h-[100svh] w-full flex items-end justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0D0C0A]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0A] via-[#0D0C0A]/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-20 pb-24 md:pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[700px]"
        >
          {eyebrow && (
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">
              {eyebrow}
            </p>
          )}
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-[80px] leading-[1.05] text-cream mb-10 tracking-widest uppercase">
            {headline}
          </h1>
          
          {subheading && (
            <p className="font-sans font-light text-lg md:text-xl text-cream/90 leading-[1.8] mb-14 max-w-[600px]">
              {subheading}
            </p>
          )}

          {(cta1 || cta2 || cta3) && (
            <div className="flex flex-wrap gap-4 items-center">
              {cta1 && (
                <Link
                  to={cta1.href}
                  className="bg-green-600 hover:bg-green-700 text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                >
                  {cta1.text}
                </Link>
              )}
              {cta2 && (
                <Link
                  to={cta2.href}
                  className="bg-white hover:bg-gray-100 text-bg px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                >
                  {cta2.text}
                </Link>
              )}
              {cta3 && (
                <Link
                  to={cta3.href}
                  className={cta3.highlight
                    ? "bg-red-600 hover:bg-red-700 text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                    : "border border-cream text-cream hover:bg-cream hover:text-bg px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px]"
                  }
                >
                  {cta3.text}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
