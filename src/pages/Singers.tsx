import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';

const portraitVideos = [
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.43.08.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.46.11.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.46.38.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.49.31.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.50.57.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.53.39.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.56.05.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2008.07.13.mp4',
  'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2008.06.03.mp4',
];

export default function Singers() {
  return (
    <div className="bg-bg text-cream">
      <HeroSection
        videoSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Our%20singers/WhatsApp%20Video%202026-10-17%20at%2007.43.08.mp4"
        imageAlt="Live music at La Famiglia"
        eyebrow="Live Entertainment"
        headline="Our Singers"
        subheading="Every Friday and Saturday from 20:00 - live music that makes the evening unforgettable."
        cta1={{ text: "Reserve a Table", href: "/book-now" }}
      />

      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-[640px] mx-auto text-center mb-16">
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-gold mb-4">Live Every Weekend</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream uppercase tracking-widest mb-6">Feel the Music</h2>
          <p className="font-sans text-base text-muted leading-[1.8]">
            La Famiglia comes alive every Friday and Saturday evening with our resident live performers.
            From Italian classics to contemporary hits, our singers bring an electric atmosphere to your dining experience.
            Music starts from 20:00 - book your table and stay for the show.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {portraitVideos.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-xl bg-black" style={{ aspectRatio: '9/16' }}>
              <video
                src={src}
                controls
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </section>

      <BookingCTA />
    </div>
  );
}
