import { HeroSection } from '@/components/HeroSection';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion } from 'motion/react';

export default function ChristmasParty() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
        imageAlt="Christmas at La Famiglia"
        eyebrow="Festive Season"
        headline="Christmas Party at La Famiglia"
      />

      <EditorialSection
        heading="Celebrate Christmas with Us"
        body={
          <>
            <p>
              Make this Christmas unforgettable at La Famiglia. Our stunning historic venue, combined with authentic Italian cuisine and festive atmosphere, creates the perfect setting for your Christmas celebration.
            </p>
            <p>
              Whether you're planning an intimate dinner with loved ones or a larger corporate Christmas party, we'll make your festive gathering truly special.
            </p>
          </>
        }
      />

      {/* Christmas Menu Preview */}
      <section className="py-24 md:py-32 px-6 lg:px-20 bg-bg">
        <div className="max-w-[1000px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">Festive Menu</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-cream uppercase tracking-widest">Christmas Party Menu</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Appetizers */}
            <div>
              <h3 className="font-serif text-2xl text-gold mb-8 uppercase tracking-widest">Appetizers</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-serif text-lg text-cream">Italian Antipasti</p>
                  <p className="font-sans text-sm text-muted">A selection of Italian cured meats and cheeses, served with olives, nuts, fruits, pickles and bread.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Arancini al Ragù</p>
                  <p className="font-sans text-sm text-muted">Crispy Sicilian risotto balls filled with rich beef ragù, served with marinara sauce and finished with a sprinkle of Parmesan.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Tiger Prawns</p>
                  <p className="font-sans text-sm text-muted">Tiger prawns sautéed in garlic and chilli butter, finished with fresh herbs and served with toasted sourdough.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Festive Camembert <span className="text-xs">(V)</span></p>
                  <p className="font-sans text-sm text-muted">Whole Camembert baked until warm and creamy with pistachios, dried fruit and caramelised onions.</p>
                </div>
              </div>
            </div>

            {/* Mains */}
            <div>
              <h3 className="font-serif text-2xl text-gold mb-8 uppercase tracking-widest">Main Dishes</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-serif text-lg text-cream">Festive Turkey</p>
                  <p className="font-sans text-sm text-muted">Roast turkey served with sweet potato mash, seasonal vegetables and cranberry sauce.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Chicken Supreme</p>
                  <p className="font-sans text-sm text-muted">Grilled chicken supreme served with creamy mushroom orzo.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Stuffed Salmon</p>
                  <p className="font-sans text-sm text-muted">Oven-baked salmon fillet filled with creamy spinach, served with buttery mashed potatoes, tender asparagus and cranberry sauce.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Rib-eye Steak</p>
                  <p className="font-sans text-sm text-muted">12oz, 35-day dry-aged rib-eye steak with roasted bone marrow, seasonal roasted vegetables and classic peppercorn sauce.</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Truffle & Ricotta Ravioloni <span className="text-xs">(V)</span></p>
                  <p className="font-sans text-sm text-muted">Homemade ravioloni filled with truffle-infused ricotta, served in a truffle cream sauce.</p>
                </div>
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="font-serif text-2xl text-gold mb-8 uppercase tracking-widest">Desserts</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-serif text-lg text-cream">Italian Tiramisu</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Cheesecake</p>
                </div>
                <div>
                  <p className="font-serif text-lg text-cream">Fruit Sorbet</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="font-sans text-xs text-muted text-center leading-relaxed">Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.</p>
          </div>
        </div>
      </section>

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
        imageAlt="Private dining for Christmas"
        eyebrow="Private Hire"
        heading="Exclusive Christmas Events"
        body="Book our stunning venue exclusively for your Christmas party. We cater for groups of all sizes, from intimate gatherings to large corporate events. Our team will work with you to create a bespoke Christmas experience."
        cta={{ text: 'Enquire Now', href: '/contact' }}
        imageLeft={true}
      />

      {/* Key Info */}
      <section className="py-24 md:py-32 px-6 lg:px-20 bg-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="font-serif text-4xl text-gold mb-4">10+</p>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-cream mb-2">Guests Minimum</p>
              <p className="font-sans text-sm text-muted">For group bookings</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="font-serif text-4xl text-gold mb-4">Live Music</p>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-cream mb-2">Friday & Saturday</p>
              <p className="font-sans text-sm text-muted">From 8pm onwards</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="font-serif text-4xl text-gold mb-4">Deposit</p>
              <p className="font-sans text-sm uppercase tracking-[0.15em] text-cream mb-2">Required</p>
              <p className="font-sans text-sm text-muted">To secure your booking</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 md:py-32 px-6 lg:px-20 bg-bg border-t border-gold/20">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">Book Your Christmas Party</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.05] text-cream uppercase tracking-widest mb-8">Get in Touch</h2>
            <p className="font-sans font-light text-base md:text-lg text-muted leading-[1.8] mb-8">
              Contact us on <a href="tel:01604385060" className="text-gold hover:text-cream transition-colors">01604 385060</a> or email <a href="mailto:bookings@lafamiglia-restaurant.co.uk" className="text-gold hover:text-cream transition-colors">bookings@lafamiglia-restaurant.co.uk</a> to discuss your Christmas party requirements.
            </p>
            <a
              href="/contact"
              className="inline-block border border-gold text-cream hover:bg-gold hover:text-bg px-12 py-4 text-sm uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px]"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
