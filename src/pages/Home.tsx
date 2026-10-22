import React from 'react';
import { Link } from 'react-router-dom';
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
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/Monochrome%20Gothic%20Guildhouse%20Street%20Scene.png"
        imageAlt="Interior of La Famiglia"
        headline="Where History Meets Italian Soul"
        subheading="Fine dining, live music and an evening you won't forget."
        cta1={{ text: 'Reserve a Table', href: '/book-now' }}
        cta2={{ text: 'Explore the Menu', href: '/menu' }}
        cta3={{ text: 'Christmas Party', href: '/christmas-party', highlight: true }}
      />

      {/* Festive Event Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center px-6 py-6 bg-bg border-b border-gold/20">
        <Link
          to="/christmas-party"
          className="bg-[#CE2B37] hover:bg-[#b02530] text-white px-8 py-4 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold text-center"
        >
          🎄 Christmas Day
        </Link>
        <Link
          to="/christmas-party"
          className="bg-gold hover:bg-gold/80 text-bg px-8 py-4 text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] font-semibold text-center"
        >
          🥂 New Year's Eve
        </Link>
      </div>

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

      {/* Photo grid — 3 cols x 3 rows */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%202.png", alt: "La Famiglia Northampton" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/IMG_8222.JPG", alt: "La Famiglia event" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%203.png", alt: "La Famiglia interior" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20Northampton%20Story.png", alt: "La Famiglia story" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/acb8fdd7-e9fe-442a-ba34-8e94c96d1fe3.jpg", alt: "La Famiglia dining" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20Northampton%20Story%203.png", alt: "La Famiglia story 3" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/IMG_9888.JPG", alt: "La Famiglia restaurant" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/Italian%20Restaurant%20La%20Famiglia%20Northampton%20LaFamiglia.png", alt: "La Famiglia branding" },
          { src: "https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/A4.png", alt: "La Famiglia menu" },
        ].map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-[40vw] md:h-[33vw] object-cover"
            loading="lazy"
          />
        ))}
      </div>

      <SplitSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/IMG_8222.JPG"
        imageAlt="Private Dining at La Famiglia"
        eyebrow="Private Dining & Events"
        heading="An Unforgettable Setting for Every Occasion"
        body="Our exquisite venue offers a stunning backdrop for private dinners, birthday celebrations, and wedding events, making every occasion memorable. Reach out to share your event ideas with us and start planning your perfect party."
        cta={{ text: 'Enquire Now', href: '/contact' }}
        imageLeft={false}
      />



      <div className="px-6 lg:px-20 py-12">
        <div className="max-w-[900px] mx-auto rounded-xl overflow-hidden shadow-2xl">
          <video src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/web-video-compressed.mp4" controls playsInline preload="auto" style={{ width: "100%", display: "block" }} />
        </div>
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
