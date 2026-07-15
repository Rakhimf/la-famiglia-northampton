import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FullBleedImage } from '@/components/FullBleedImage';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { BookingCTA } from '@/components/BookingCTA';

export default function Home() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Screenshot%202026-07-14%20at%2020.52.20.png"
        imageAlt="Interior of La Famiglia"
        headline="Where History Meets Italian Soul"
        subheading="Fine dining, live music and an evening you won't forget — in the heart of Northampton."
        cta1={{ text: 'Reserve a Table', href: '/book-now' }}
        cta2={{ text: 'Explore the Menu', href: '/menu' }}
        cta3={{ text: 'Christmas Party', href: '/christmas-party', highlight: true }}
      />

      <div className="py-12 md:py-20">
        <FullBleedImage
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png"
          alt="Food photography"
          heightClass="h-[75vh]"
        />
      </div>

      <EditorialSection
        eyebrow="About the Restaurant"
        heading="Top Northampton Anniversary Venue"
        body="Our food has a habit of becoming your newest addiction, and our live music gets loud after 20:00. Nestled within the historic Taylor Memorial Hall, La Famiglia blends Scottish Baronial architecture with the rustic charm of Italy."
        cta={{ text: 'Our Story', href: '/about' }}
      />

      <div className="py-12 md:py-20">
        <FullBleedImage
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
          alt="Restaurant interior"
          heightClass="h-[70vh]"
        />
      </div>

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_57_42%20PM.png"
        imageAlt="Most popular dishes"
        heading="Most Popular This Week"
        body={
          <div className="space-y-6 mt-10">
            {[
              { name: 'Bucatini alla Carbonara', price: '£21.00', desc: 'Homemade bucatini tossed in a silky egg yolk and Pecorino Romano sauce with crisp guanciale and cracked black pepper.' },
              { name: 'Truffle & Ricotta Ravioloni (v)', price: '£22.50', desc: 'Homemade ravioloni filled with truffle-infused ricotta, served in a truffle cream sauce.' },
              { name: 'Rib-eye Steak', price: '£31.00', desc: '12oz charcoal-grilled rib-eye served with rosemary potatoes, grilled vegetables and a rich peppercorn sauce.' },
              { name: 'Grilled Butterfly Sea Bass', price: '£29.00', desc: 'Whole butterfly sea bass grilled with roasted garlic, cherry tomato confit, extra virgin olive oil and Mediterranean chopped salsa.' }
            ].map((dish, i) => (
              <div key={dish.name} className={i !== 0 ? "pt-6 border-t border-white/5" : ""}>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-serif text-[22px] text-cream">{dish.name}</h3>
                  <span className="font-sans text-base text-gold ml-4">{dish.price}</span>
                </div>
                <p className="font-sans text-sm text-muted">{dish.desc}</p>
              </div>
            ))}
          </div>
        }
        cta={{ text: 'View Full Menu', href: '/menu' }}
        imageLeft={true}
      />

      <div className="py-12 md:py-20">
        <FullBleedImage
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_45_42%20PM.png"
          alt="Atmosphere shot"
          heightClass="h-[65vh]"
        />
      </div>

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_00_19%20PM.png"
        imageAlt="Private Dining at La Famiglia"
        eyebrow="Private Dining & Events"
        heading="An Unforgettable Setting for Every Occasion"
        body="Our exquisite venue offers a stunning backdrop for private dinners, birthday celebrations, and wedding events, making every occasion memorable. Reach out to share your event ideas with us and start planning your perfect party."
        cta={{ text: 'Enquire Now', href: '/contact' }}
        imageLeft={false}
      />

      <div className="py-12 md:py-20">
        <FullBleedImage
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
          alt="Event atmosphere"
          heightClass="h-[70vh]"
        />
      </div>

      <section className="py-24 md:py-40 px-6 lg:px-20 bg-bg">
        <div className="mb-16 max-w-[640px]">
          <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">Every Week at La Famiglia</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-cream uppercase tracking-widest">Live Music, Private Dining & More</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
          {[
            { num: '01', title: 'Live Music Evenings', desc: 'Our resident musicians perform every Friday and Saturday from 20:00. Italian classics, contemporary hits, and performances that make the evening unforgettable.' },
            { num: '02', title: 'Private Dining', desc: 'Exclusive hire of our main hall or private rooms for birthdays, anniversaries, and corporate events. Speak to us about tailoring the evening.' },
            { num: '03', title: 'Anniversary & Date Night', desc: 'Celebrated as Northampton\'s top anniversary venue. Let us know your occasion and we\'ll make it special.' },
            { num: '04', title: 'Sunday Lunch', desc: 'Join us for a relaxed Sunday lunch in our historic dining room. Saturday from 12:00, Sunday from 12:00.' },
          ].map(item => (
            <div key={item.num} className="flex flex-col">
              <span className="font-serif text-3xl text-gold mb-6">{item.num}</span>
              <h3 className="font-serif text-[24px] text-cream mb-4">{item.title}</h3>
              <p className="font-sans text-sm text-muted leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSlider />

      <div className="py-12 md:py-20">
        <FullBleedImage
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_58_52%20PM.png"
          alt="Food preparation"
          heightClass="h-[60vh]"
        />
      </div>

      <EditorialSection
        eyebrow="The Story"
        heading="A Building with a History. A Kitchen with a Soul."
        body="Our restaurant, located within the historic Taylor Memorial Hall, blends Scottish Baronial architecture with the rustic charm of Italy. The grand entrance, flanked by towering turrets, welcomes you into a venue rich in history and elegance."
        cta={{ text: 'Read More', href: '/about' }}
      />

      <BookingCTA />
    </div>
  );
}
