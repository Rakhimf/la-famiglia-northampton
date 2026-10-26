import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion } from 'motion/react';

export default function BookNow() {
  return (
    <div className="bg-bg text-cream min-h-screen">
      <HeroSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
        imageAlt="Reservations at La Famiglia"
        eyebrow="Reservations"
        headline="Reserve Your Table"
      />

      <section className="py-24 md:py-40 px-6 lg:px-20 max-w-[1000px] mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="font-sans font-light text-base md:text-lg text-muted leading-[1.8] mb-4">
            For parties of more than 10, please contact us on <a href="tel:01604385060" className="text-gold hover:text-cream transition-colors">01604 385060</a> to pre-order from this menu.
          </p>
          <p className="font-sans font-light text-base md:text-lg text-muted leading-[1.8] mb-16">
            Please note that from 7pm on the weekends we play loud live music.
          </p>
        </motion.div>

        {/* Tableo Booking Widget */}
        <div id="tableo-widget" className="w-full">
          <script
            src="https://app.tableo.com/embed.js"
            data-restaurant="la-famiglia-northampton-united-kingdom"
            async
          />
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
