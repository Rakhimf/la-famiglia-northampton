import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg pt-20 pb-10 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/WhatsApp%20Image%202026-07-14%20at%2020.45.00%20(1).jpeg"
                alt="La Famiglia Logo"
                className="h-14 w-auto"
              />
              <h2 className="font-serif text-3xl text-cream tracking-widest uppercase">La Famiglia</h2>
            </div>
            <p className="text-muted text-base md:text-lg leading-relaxed mb-6 font-light">
              An authentic Italian dining experience nestled in the historic Taylor Memorial Hall. 
              Fresh ingredients, warm ambiance, and family traditions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-cream mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Menu', path: '/menu' },
                { name: 'Events', path: '/events' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Book Now', path: '/book-now' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted hover:text-cream text-base transition-colors uppercase tracking-[0.12em]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-cream mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-muted text-base font-light">
              <li>17 Castilian Street, NN1 1JS,<br />Northampton</li>
              <li>
                <a href="tel:01604385060" className="hover:text-cream transition-colors">01604 385060</a>
              </li>
              <li className="flex flex-col gap-1">
                <a href="mailto:bookings@lafamiglia-restaurant.co.uk" className="hover:text-cream transition-colors">bookings@lafamiglia-restaurant.co.uk</a>
                <a href="mailto:info@lafamiglia-restaurant.co.uk" className="hover:text-cream transition-colors">info@lafamiglia-restaurant.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-serif text-xl text-cream mb-6 tracking-wide">Opening Hours</h3>
            <ul className="space-y-3 text-muted text-base font-light">
              <li className="flex justify-between">
                <span>Mon - Tue</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Wed - Thu</span>
                <span>17:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>16:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted uppercase tracking-widest font-light">
          <p>&copy; {currentYear} La Famiglia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-cream transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-cream transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
