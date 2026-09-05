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
            <div className="mt-8">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-8">Festive Menu 2026</p>

              <div className="mb-10">
                <h3 className="font-serif text-2xl text-gold uppercase tracking-widest mb-6 pb-2 border-b border-gold/30">Appetizers</h3>
                <div className="space-y-6">
                  <div><p className="font-serif text-lg text-cream">Italian Antipasti</p><p className="font-sans text-sm text-muted mt-1">A selection of Italian cured meats and cheeses, served with olives, nuts, fruits, pickles and bread.</p></div>
                  <div><p className="font-serif text-lg text-cream">Arancini al Ragù</p><p className="font-sans text-sm text-muted mt-1">Crispy Sicilian risotto balls filled with rich beef ragù, served with marinara sauce and finished with a sprinkle of Parmesan.</p></div>
                  <div><p className="font-serif text-lg text-cream">Tiger Prawns</p><p className="font-sans text-sm text-muted mt-1">Tiger prawns sautéed in garlic and chilli butter, finished with fresh herbs and served with toasted sourdough.</p></div>
                  <div><p className="font-serif text-lg text-cream">Festive Camembert <span className="text-sm text-gold">(V)</span></p><p className="font-sans text-sm text-muted mt-1">Whole Camembert baked until warm and creamy with pistachios, dried fruit and caramelised onions.</p></div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-2xl text-gold uppercase tracking-widest mb-6 pb-2 border-b border-gold/30">Main Dishes</h3>
                <div className="space-y-6">
                  <div><p className="font-serif text-lg text-cream">Festive Turkey</p><p className="font-sans text-sm text-muted mt-1">Roast turkey served with sweet potato mash, seasonal vegetables and cranberry sauce.</p></div>
                  <div><p className="font-serif text-lg text-cream">Chicken Supreme</p><p className="font-sans text-sm text-muted mt-1">Grilled chicken supreme served with creamy mushroom orzo.</p></div>
                  <div><p className="font-serif text-lg text-cream">Stuffed Salmon</p><p className="font-sans text-sm text-muted mt-1">Oven-baked salmon fillet filled with creamy spinach, served with buttery mashed potatoes, tender asparagus and cranberry sauce.</p></div>
                  <div><p className="font-serif text-lg text-cream">Rib-eye Steak</p><p className="font-sans text-sm text-muted mt-1">12oz, 35-day dry-aged rib-eye steak with roasted bone marrow, seasonal roasted vegetables and classic peppercorn sauce.</p></div>
                  <div><p className="font-serif text-lg text-cream">Truffle & Ricotta Ravioloni <span className="text-sm text-gold">(V)</span></p><p className="font-sans text-sm text-muted mt-1">Homemade ravioloni filled with truffle-infused ricotta, served in a truffle cream sauce.</p></div>
                </div>
              </div>

              <div className="mb-10">
                <h3 className="font-serif text-2xl text-gold uppercase tracking-widest mb-6 pb-2 border-b border-gold/30">Desserts</h3>
                <div className="space-y-4">
                  <div><p className="font-serif text-lg text-cream">Italian Tiramisu</p></div>
                  <div><p className="font-serif text-lg text-cream">Cheesecake</p></div>
                  <div><p className="font-serif text-lg text-cream">Fruit Sorbet</p></div>
                </div>
              </div>

              <p className="font-sans text-xs text-muted italic border-t border-white/10 pt-6">Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.</p>
            </div>
          </>
        }
      />

      {/* Notice Block */}
      <section className="bg-bg py-10 px-6 lg:px-20">
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

      <div className="w-full">
        <VideoPlayer src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/RPReplay_Final1718698905.mp4" />
      </div>

      <BookingCTA />
    </div>
  );
}
