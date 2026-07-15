import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface EditorialSectionProps {
  eyebrow?: string;
  heading: string;
  body: string | React.ReactNode;
  cta?: { text: string; href: string };
  align?: 'left' | 'center';
}

export function EditorialSection({ eyebrow, heading, body, cta, align = 'left' }: EditorialSectionProps) {
  return (
    <section className="py-24 md:py-40 px-6 lg:px-20 bg-bg">
      <div className={cn(
        "max-w-[640px]",
        align === 'center' ? "text-center mx-auto" : "text-left ml-0"
      )}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {eyebrow && (
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">
              {eyebrow}
            </p>
          )}
          
          <h2 className={cn(
            "font-serif text-4xl md:text-5xl leading-[1.05] text-cream mb-10 uppercase tracking-widest",
            align === 'center' ? "mx-auto" : ""
          )}>
            {heading}
          </h2>
          
          <div className="font-sans font-light text-base md:text-lg text-muted leading-[1.8] mb-14 space-y-6">
            {typeof body === 'string' ? <p>{body}</p> : body}
          </div>

          {cta && (
            <Link 
              to={cta.href}
              className="inline-block border border-gold text-cream hover:bg-gold hover:text-bg px-9 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px]"
            >
              {cta.text}
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
