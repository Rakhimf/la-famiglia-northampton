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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto mb-16">
          <div className="bg-[#141210] rounded-lg p-8 text-center border border-white/8">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold">♪</span>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-2">Coming Soon</h3>
            <p className="font-sans text-sm text-gold mb-3">Friday Nights</p>
            <p className="font-sans text-sm text-muted leading-[1.6]">Singer details coming soon.</p>
          </div>
          <div className="bg-[#141210] rounded-lg p-8 text-center border border-white/8">
            <div className="w-24 h-24 rounded-full bg-gold/20 mx-auto mb-4 flex items-center justify-center">
              <span className="font-serif text-3xl text-gold">♪</span>
            </div>
            <h3 className="font-serif text-2xl text-cream mb-2">Coming Soon</h3>
            <p className="font-sans text-sm text-gold mb-3">Saturday Nights</p>
            <p className="font-sans text-sm text-muted leading-[1.6]">Singer details coming soon.</p>
          </div>
        </div>
      </section>

      <div className="w-full">
        <VideoPlayer src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/RPReplay_Final1713209036.mov" />
      </div>

      <BookingCTA />
    </div>
  );
}
