import { Link } from 'react-router-dom';

export function BookingCTA() {
  return (
    <section className="bg-bg-alt py-24 md:py-32 px-6 lg:px-20">
      <div className="w-full max-w-[800px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-serif text-[40px] leading-[1.05] text-cream mb-6 uppercase tracking-widest">
          Join Us at the Table
        </h2>
        <p className="font-sans font-light text-muted text-base md:text-lg mb-10 leading-[1.8]">
          Reserve your table or enquire about private dining.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            to="/book-now"
            className="inline-block border border-gold text-cream hover:bg-gold hover:text-bg px-10 py-4 text-xs md:text-base uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] whitespace-nowrap"
          >
            Reserve a Table
          </Link>
          <Link 
            to="/contact"
            className="inline-block text-cream hover:text-gold px-10 py-4 text-xs md:text-base uppercase tracking-[0.15em] transition-colors duration-300 whitespace-nowrap"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
