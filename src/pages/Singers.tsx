import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';
import { VideoPlayer } from '@/components/VideoPlayer';

export default function Singers() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png"
        imageAlt="Live music at La Famiglia"
        eyebrow="Live Entertainment"
        headline="Our Singers"
        subheading="Every Friday & Saturday from 20:00 — live music that makes the evening unforgettable."
        cta1={{ text: 'Reserve a Table', href: '/book-now' }}
      />

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4">Live Every Weekend</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream uppercase tracking-widest mb-6">Feel the Music</h2>
          <p className="font-sans text-base text-muted leading-[1.8]">
            La Famiglia comes alive every Friday and Saturday evening with our resident live performers.
            From Italian classics to contemporary hits, our singers bring an electric atmosphere to your dining experience.
            Music starts from 20:00 — book your table and stay for the show.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-16">
          <div className="bg-[#141210] rounded-lg p-8 text-center border border-white/8">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold">♪</span>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-2">Just Juseppe</h3>
            <p className="font-sans text-sm text-gold mb-3">Live at La Famiglia</p>
            <p className="font-sans text-sm text-muted leading-[1.6]">Bringing the soul of Italy to every performance with incredible vocal talent and charisma.</p>
          </div>
          <div className="bg-[#141210] rounded-lg p-8 text-center border border-white/8">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold">♪</span>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-2">Dorell</h3>
            <p className="font-sans text-sm text-gold mb-3">Live at La Famiglia</p>
            <p className="font-sans text-sm text-muted leading-[1.6]">A captivating performer delivering unforgettable evenings of live music and entertainment.</p>
          </div>
          <div className="bg-[#141210] rounded-lg p-8 text-center border border-white/8">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold">♪</span>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-2">Jess</h3>
            <p className="font-sans text-sm text-gold mb-3">Live at La Famiglia</p>
            <p className="font-sans text-sm text-muted leading-[1.6]">Stunning vocal performances that light up the room every Friday and Saturday from 20:00.</p>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-20 py-12">
        <div className="max-w-[900px] mx-auto rounded-xl overflow-hidden shadow-2xl">
          <VideoPlayer src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/RPReplay_Final1713209036.mov" />
        </div>
      </div>

      <BookingCTA />
    </div>
  );
}
