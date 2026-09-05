import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { FullBleedImage } from '@/components/FullBleedImage';
import { EditorialSection } from '@/components/EditorialSection';
import { SplitSection } from '@/components/SplitSection';
import { TestimonialSlider } from '@/components/TestimonialSlider';
import { BookingCTA } from '@/components/BookingCTA';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function Home() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Screenshot%202026-07-14%20at%2020.52.20.png"
        imageAlt="Interior of La Famiglia"
        headline="Where History Meets Italian Soul"
        subheading="Fine dining, live music and an evening you won't forget."
        cta1={{ text: 'Reserve a Table', href: '/book-now' }}
        cta2={{ text: 'Explore the Menu', href: '/menu' }}
        cta3={{ text: 'Christmas Party', href: '/christmas-party', highlight: true }}
      />

      <EditorialSection
        eyebrow="Our Story"
        heading="Born from History. Built on Passion"
        body={
          <>
            <p>Our restaurant, nestled within the historic Taylor Memorial Hall, marries Scottish Baronial architecture with Italy's quaint allure. The majestic entrance, framed by soaring turrets and a moving memorial inscription, invites you into a setting steeped in history and refinement.</p>
            <p>The expansive main hall, once a two-story structure, has been carefully converted into a cozy dining area. Our chefs prepare genuine Italian dishes using fresh, locally-sourced ingredients, offering a dining experience as enriched as the venue's storied past.</p>
            <p>Join us for a meal where architectural splendor meets Italian culinary artistry, all housed within a building that celebrates a significant local legacy. This space, once dedicated to memory, now fosters new, delightful moments as it welcomes diners and celebrants alike.</p>
          </>
        }
        className="pb-8 md:pb-12"
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-3 h-[50vh] md:h-[70vh] gap-1">
        <img
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
          alt="Restaurant dishes"
          className="w-full h-full object-cover"
        />
        <img
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Screenshot%202026-08-19%20at%2013.27.26.png"
          alt="Food presentation"
          className="w-full h-full object-cover hidden md:block"
        />
        <img
          src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
          alt="La Famiglia atmosphere"
          className="w-full h-full object-cover hidden md:block"
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



      <div className="w-full">
        <VideoPlayer src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/RPReplay_Final1713208924.mp4" />
      </div>

      <section className="py-24 md:py-40 px-6 lg:px-20 bg-bg">
        <div className="mb-16 max-w-[640px]">
          <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold mb-6">Every Week at La Famiglia</p>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-cream uppercase tracking-widest">Live Music, Private Dining & More</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-8">
          {[
            { num: '01', title: 'Live Music Evenings', desc: 'Our resident musicians perform every Friday and Saturday from 20:00. Italian classics, contemporary hits, and performances that make the evening unforgettable.' },
            { num: '02', title: 'Private Dining', desc: 'Exclusive hire of our main hall for birthdays, anniversaries, and corporate events. Speak to us about tailoring the evening.' },
            { num: '03', title: 'Anniversary & Date Night', desc: 'Celebrated as Northampton\'s top anniversary venue. Let us know your occasion and we\'ll make it special.' },
            { num: '04', title: 'Sunday Lunch', desc: 'Join us for a relaxed Sunday lunch in our historic dining room.' },
          ].map(item => (
            <div key={item.num} className="flex flex-col">
              <span className="font-serif text-3xl text-gold mb-6">{item.num}</span>
              <h3 className="font-serif text-[24px] text-cream mb-4">{item.title}</h3>
              <p className="font-sans text-base text-muted leading-[1.8]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSlider />

      <BookingCTA />
    </div>
  );
}
