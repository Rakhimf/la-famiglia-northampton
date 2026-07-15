import { HeroSection } from '@/components/HeroSection';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { BookingCTA } from '@/components/BookingCTA';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Events() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
        imageAlt="Events at La Famiglia"
        eyebrow="Special Events"
        headline="Celebrate in Style"
      />

      <EditorialSection 
        heading="Festive Dining at La Famiglia"
        body={
          <>
            <p>
              Whether it's an intimate Christmas dinner, a New Year celebration or a seasonal gathering with friends and family, La Famiglia sets the perfect scene. Our festive menus bring together the warmth of Italian tradition and the grandeur of our historic venue.
            </p>
            <div className="mt-14 mb-8">
              <p className="font-serif italic text-2xl text-gold mb-4">Festive Menu coming soon...</p>
              <p className="font-sans text-sm text-muted">Please contact us directly for our current seasonal offerings and pricing.</p>
            </div>
          </>
        }
      />

      {/* Notice Block */}
      <section className="bg-bg pb-24 md:pb-40 px-6 lg:px-20">
        <div className="max-w-[640px]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-sans font-light text-base md:text-lg text-cream leading-[1.8] mb-4">
              For parties of more than 10, please contact us on <a href="tel:01604385060" className="text-gold hover:text-cream transition-colors">01604 385060</a> to pre-order from this menu.
            </p>
            <p className="font-sans font-light text-base md:text-lg text-cream leading-[1.8]">
              Please note that from 7pm on the weekends we play loud live music.
            </p>
          </motion.div>
        </div>
      </section>

      <SplitSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
        imageAlt="Private hire for events"
        heading="Private Hire for Your Festive Event"
        body="Host your festive party in our stunning dining hall. We offer bespoke packages to ensure your event is truly special, combining exquisite Italian food, fine wines, and exceptional service."
        cta={{ text: 'Get in Touch', href: '/contact' }}
        imageLeft={true}
      />

      <BookingCTA />
    </div>
  );
}
