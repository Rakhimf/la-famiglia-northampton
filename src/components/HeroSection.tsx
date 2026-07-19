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
    <section className="relative w-full">
      <div className="relative w-full">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="absolute inset-0 z-10 flex items-start pt-[25%] md:pt-[20%] px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[800px]"
        >
          {eyebrow && (
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-[80px] leading-[1.05] text-white mb-10 tracking-widest uppercase [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%),_-1px_-1px_4px_rgb(0_0_0_/_60%)]">
            {headline}
          </h1>

          {subheading && (
            <p className="font-sans font-bold text-xl md:text-2xl lg:text-3xl text-white leading-[1.6] mb-14 max-w-[700px] [text-shadow:_1px_1px_6px_rgb(0_0_0_/_80%),_-1px_-1px_3px_rgb(0_0_0_/_60%)]">
              {subheading}
            </p>
          )}

          {(cta1 || cta2 || cta3) && (
            <div className="flex flex-wrap gap-4 items-center">
              {cta1 && (
                <Link
                  to={cta1.href}
                  className="bg-gold hover:bg-gold/90 text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                >
                  {cta1.text}
                </Link>
              )}
              {cta2 && (
                <Link
                  to={cta2.href}
                  className="bg-dark hover:bg-dark/90 text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                >
                  {cta2.text}
                </Link>
              )}
              {cta3 && (
                <Link
                  to={cta3.href}
                  className={cta3.highlight
                    ? "bg-red-600 hover:bg-red-700 text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold"
                    : "border border-dark text-dark hover:bg-dark hover:text-white px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px]"
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
