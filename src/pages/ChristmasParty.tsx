import { HeroSection } from '@/components/HeroSection';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion } from 'motion/react';

const R2 = 'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/christmas/';

const christmasPhotos = [
  { src: `${R2}2M8A9074.JPG`, alt: "Christmas at La Famiglia" },
  { src: `${R2}54eb56a8-3cd4-4c40-b1b0-9cf427011771.jpg`, alt: "Festive dining at La Famiglia" },
  { src: `${R2}A1%20(3).png`, alt: "Christmas party La Famiglia" },
  { src: `${R2}A2%20(1).png`, alt: "Christmas celebrations" },
  { src: `${R2}A3.png`, alt: "Festive atmosphere" },
  { src: `${R2}A5.png`, alt: "Christmas party Northampton" },
];

export default function ChristmasParty() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc={`${R2}2M8A9074.JPG`}
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

      {/* Christmas Video */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-bg">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <video
              src={`${R2}Christmas%20Party%20Northampton%20LaFamiglia%20Restaurant%20Book%20a%20Party.mp4`}
              controls
              playsInline
              className="w-full rounded-[2px] aspect-video object-cover"
              poster={`${R2}2M8A9074.JPG`}
            />
          </motion.div>
        </div>
      </section>

      {/* Christmas Photo Gallery */}
      <section className="py-16 md:py-24 px-6 lg:px-20 bg-bg">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-4">The Atmosphere</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream uppercase tracking-widest">Christmas at La Famiglia</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {christmasPhotos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Christmas Menu Photos */}
      <section className="py-24 md:py-32 px-6 lg:px-20 bg-bg">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">Festive Menus</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-cream uppercase tracking-widest">Our Christmas Menus</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Christmas Day Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4 text-center">Christmas Day</p>
              <div className="overflow-hidden rounded-[2px] shadow-2xl">
                <img
                  src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Christmas%20party%20menu%20photos/6c7420fc-9e95-4b25-9ee2-3c32bd47713b.jpeg"
                  alt="Christmas Day Menu"
                  className="w-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* New Year's Eve Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4 text-center">New Year's Eve</p>
              <div className="overflow-hidden rounded-[2px] shadow-2xl">
                <img
                  src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Christmas%20party%20menu%20photos/ea6535b2-5a5c-4123-ad0e-55fc82d16eb9.jpeg"
                  alt="New Year's Eve Menu"
                  className="w-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            {/* Christmas Party Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4 text-center">Christmas Party</p>
              <div className="overflow-hidden rounded-[2px] shadow-2xl">
                <img
                  src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Christmas%20party%20menu.png"
                  alt="Christmas Party Menu"
                  className="w-full object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SplitSection
        imageSrc={`${R2}A2%20(1).png`}
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
