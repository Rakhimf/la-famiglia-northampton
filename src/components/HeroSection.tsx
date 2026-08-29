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
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-[800px]"
        >
          {eyebrow && (
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {eyebrow}
            </p>
          )}

          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-[80px] leading-[1.05] text-white mb-4 tracking-widest uppercase [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
            {headline}
          </h1>

          {subheading && (
            <p className="font-sans font-bold text-xl md:text-3xl text-white leading-[1.6] mb-6 max-w-[600px] [text-shadow:_1px_1px_6px_rgb(0_0_0_/_80%)]">
              {subheading}
            </p>
          )}

          {(cta1 || cta2 || cta3) && (
            <div className="flex flex-row flex-wrap gap-3 items-center">
              {cta1 && (
                <Link
                  to={cta1.href}
                  className="bg-gold hover:bg-gold/90 text-white px-5 py-3 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold whitespace-nowrap"
                >
                  {cta1.text}
                </Link>
              )}
              {cta2 && (
                <Link
                  to={cta2.href}
                  className="bg-white hover:bg-white/90 text-black px-5 py-3 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold whitespace-nowrap"
                >
                  {cta2.text}
                </Link>
              )}
              {cta3 && (
                <Link
                  to={cta3.href}
                  className="bg-[#CE2B37] hover:bg-[#b02530] text-white px-5 py-3 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold whitespace-nowrap"
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
