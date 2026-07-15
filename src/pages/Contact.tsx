import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "{{WEB3FORMS_KEY}}");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        console.error("Error", data);
        setFormState('error');
      }
    } catch (error) {
      console.error(error);
      setFormState('error');
    }
  };

  return (
    <div className="bg-bg text-cream min-h-screen">
      <HeroSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png"
        imageAlt="Atmosphere at La Famiglia"
        eyebrow="Contact"
        headline="Get in Touch"
      />

      <section className="py-24 md:py-40 px-6 lg:px-20 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Details */}
          <div>
            <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.05] text-cream mb-12 uppercase tracking-widest">Contact Details</h2>
            
            <div className="space-y-10 font-sans font-light text-base md:text-lg text-muted">
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-gold mb-3">Address</h3>
                <p>17 Castilian Street, NN1 1JS,<br />Northampton</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-gold mb-3">Phone & Email</h3>
                <p className="mb-2"><a href="tel:01604385060" className="hover:text-cream transition-colors">01604 385060</a></p>
                <p className="mb-1"><a href="mailto:bookings@lafamiglia-restaurant.co.uk" className="hover:text-cream transition-colors">bookings@lafamiglia-restaurant.co.uk</a> (reservations)</p>
                <p><a href="mailto:info@lafamiglia-restaurant.co.uk" className="hover:text-cream transition-colors">info@lafamiglia-restaurant.co.uk</a> (general)</p>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-gold mb-3">Hours</h3>
                <ul className="space-y-1">
                  <li>Wed–Thu: 17:00–22:00</li>
                  <li>Fri: 16:00–22:00</li>
                  <li>Sat: 12:00–22:00</li>
                  <li>Sun: 12:00–20:00</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] text-gold mb-3">Social</h3>
                <p className="mb-2"><a href="https://instagram.com/la_famiglia_northampton" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Instagram: @la_famiglia_northampton</a></p>
                <p><a href="{{FACEBOOK_URL}}" target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">Facebook</a></p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-serif text-[32px] md:text-[40px] leading-[1.05] text-cream mb-12 uppercase tracking-widest">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-8 font-sans font-light">
              <input type="hidden" name="subject" value="New Contact form submission from Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm uppercase tracking-[0.15em] text-muted mb-3">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-transparent border-b border-gold/30 py-3 text-cream focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm uppercase tracking-[0.15em] text-muted mb-3">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="bg-transparent border-b border-gold/30 py-3 text-cream focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm uppercase tracking-[0.15em] text-muted mb-3">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  className="bg-transparent border-b border-gold/30 py-3 text-cream focus:outline-none focus:border-gold transition-colors placeholder:text-muted/50"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm uppercase tracking-[0.15em] text-muted mb-3">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  className="bg-transparent border-b border-gold/30 py-3 text-cream focus:outline-none focus:border-gold transition-colors resize-none placeholder:text-muted/50"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full md:w-auto border border-gold text-cream hover:bg-gold hover:text-bg px-12 py-[14px] text-xs uppercase tracking-[0.15em] transition-colors duration-300 rounded-[2px] disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-cream"
              >
                {formState === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {formState === 'success' && (
                <p className="text-gold text-sm tracking-wide mt-4">Thank you! Your message has been sent.</p>
              )}
              {formState === 'error' && (
                <p className="text-red-400 text-sm tracking-wide mt-4">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[500px] w-full">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?q=17+Castilian+Street,+Northampton,+NN1+1JS&key={{GOOGLE_MAPS_EMBED_KEY}}`}
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - La Famiglia Location"
        ></iframe>
      </section>
    </div>
  );
}
