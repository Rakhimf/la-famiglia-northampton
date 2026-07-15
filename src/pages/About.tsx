import { HeroSection } from '@/components/HeroSection';
import { FullBleedImage } from '@/components/FullBleedImage';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_45_42%20PM.png"
        imageAlt="Interior of La Famiglia"
        eyebrow="Our Story"
        headline="Born from History. Built on Passion."
      />

      <EditorialSection 
        heading="The Story"
        body={
          <>
            <p>
              Our restaurant, nestled within the historic Taylor Memorial Hall, marries Scottish Baronial architecture with Italy's quaint allure. The majestic entrance, framed by soaring turrets and a moving memorial inscription, invites you into a setting steeped in history and refinement. The expansive main hall, once a two-story structure, has been carefully converted into a cozy dining area.
            </p>
            <p>
              Our chefs prepare genuine Italian dishes using fresh, locally-sourced ingredients, offering a dining experience as enriched as the venue's storied past.
            </p>
            <p>
              Join us for a meal where architectural splendor meets Italian culinary artistry, all housed within a building that celebrates a significant local legacy. This space, once dedicated to memory, now fosters new, delightful moments as it welcomes diners and celebrants alike.
            </p>
          </>
        }
      />

      <FullBleedImage
        src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
        alt="Interior architecture"
        heightClass="h-[60vh]"
      />

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_58_52%20PM.png"
        imageAlt="Fresh ingredients in the kitchen"
        eyebrow="Our Kitchen"
        heading="Crafted with Care"
        body="At our restaurant, we pride ourselves on using only the freshest and highest quality ingredients. Each dish is crafted with care to ensure that every bite is a testament to the flavors. Every dish begins with hand-selected, fresh ingredients to ensure the most vibrant flavors in every meal we serve."
        imageLeft={false}
      />

      {/* Quote Block */}
      <section className="bg-bg py-32 md:py-48 px-6 lg:px-20">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-[32px] md:text-[40px] leading-[1.3] text-cream"
          >
            "Italian cuisine is a story told by the chefs who treat their ingredients with respect. To eat Italian is to be spoiled by the delicacies of tradition and innovation intertwined." <br /><br />
            <span className="font-sans text-sm md:text-base not-italic uppercase tracking-[0.15em] text-muted">— Massimo Bottura</span>
          </motion.p>
        </div>
      </section>

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_00_19%20PM.png"
        imageAlt="Restaurant Atmosphere"
        heading="Our Commitment"
        body={
          <>
            <p>
              At our restaurant, we create unforgettable experiences that you'll cherish, whether you're dining with friends or enjoying a romantic evening with your partner. Indulge in our mouth-watering dishes and refreshing beverages, crafted to delight and satisfy.
            </p>
            <p>
              At La Famiglia, our commitment goes beyond merely serving meals; we deliver an authentic dining experience rooted in family traditions. Each dish is prepared with a dedication to culinary excellence, using only the freshest ingredients. We cherish the bonds formed around the dinner table, striving to create a warm, inviting atmosphere where every guest feels part of our extended family.
            </p>
            <p>
              From the heart of our kitchen to your table, we promise not only a meal but an occasion to gather, celebrate, and create memories with loved ones. Experience the joy and passion of Italian cuisine at La Famiglia, where every visit feels like coming home.
            </p>
          </>
        }
        imageLeft={true}
      />

      {/* Stats Row */}
      <section className="bg-bg py-24 md:py-32 px-6 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-gold/20">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p className="font-serif text-5xl md:text-6xl text-gold mb-4">15+</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Years Experience</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="font-serif text-5xl md:text-6xl text-gold mb-4">10+</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Expert Chefs</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <p className="font-serif text-5xl md:text-6xl text-gold mb-4">98%</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Happy Customers</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <p className="font-serif text-5xl md:text-6xl text-gold mb-4">4.8★</p>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Google Rating</p>
            </motion.div>
          </div>
        </div>
      </section>

      <FullBleedImage
        src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
        alt="Live music and atmosphere"
        heightClass="h-[65vh]"
      />

      <BookingCTA />
    </div>
  );
}
