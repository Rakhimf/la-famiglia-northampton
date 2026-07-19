import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SplitSectionProps {
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  heading: string;
  body: React.ReactNode;
  cta?: { text: string; href: string };
  imageLeft?: boolean;
}

export function SplitSection({ imageSrc, imageAlt, eyebrow, heading, body, cta, imageLeft = true }: SplitSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={sectionRef} className="bg-bg flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
      {/* Image Half */}
      <motion.div
        className={cn(
          "w-full lg:w-[60%] h-[50vh] lg:h-auto relative order-1 overflow-hidden",
          imageLeft ? "lg:order-1" : "lg:order-2"
        )}
        initial={{ opacity: 0, x: imageLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="absolute inset-0 w-full h-[110%] -top-[5%]"
          style={{ y: imageY, scale: imageScale }}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Image overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Content Half */}
      <div className={cn(
        "w-full lg:w-[40%] flex items-center justify-center p-8 md:p-16 lg:px-20 py-24 md:py-40 order-2",
        imageLeft ? "lg:order-2" : "lg:order-1"
      )}>
        <motion.div
          className="max-w-[560px] w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {eyebrow && (
            <motion.p
              className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h2
            className="font-serif text-4xl md:text-5xl leading-[1.05] text-cream mb-10 uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {heading}
          </motion.h2>

          <motion.div
            className="font-sans font-light text-lg md:text-xl text-muted leading-[1.8] mb-14 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {body}
          </motion.div>

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to={cta.href}
                className="inline-block border border-gold text-cream hover:bg-gold hover:text-bg px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px]"
              >
                {cta.text}
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
