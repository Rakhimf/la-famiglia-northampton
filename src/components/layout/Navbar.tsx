import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menus', path: '/menu' },
  { name: 'Private Events', path: '/events' },
  { name: 'Christmas Party', path: '/christmas-party' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          scrolled ? 'bg-[#0D0C0A] py-3 shadow-lg' : 'bg-[#0D0C0A]/80 backdrop-blur-md py-4'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Logo / Restaurant Name */}
            <Link to="/" className="flex items-center">
              <span className="font-serif text-2xl md:text-3xl text-cream tracking-wider">
                La Famiglia
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-base font-medium transition-colors duration-200 hover:text-gold',
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-cream'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href="tel:01604385060"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">01604 385060</span>
              </a>
              <Link
                to="/book-now"
                className="bg-white text-bg px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gold transition-colors duration-200 rounded"
              >
                Reserve Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center gap-3">
              <Link
                to="/book-now"
                className="bg-white text-bg px-4 py-2 text-sm font-semibold uppercase tracking-wider rounded"
              >
                Reserve
              </Link>
              <button
                className="text-cream hover:text-gold transition-colors p-2"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-7 h-7" strokeWidth={2} />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-full max-w-[320px] z-50 bg-[#0D0C0A] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-serif text-xl text-cream">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-cream hover:text-gold transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" strokeWidth={2} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-1">
                  {navLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={cn(
                          'block py-3 px-4 text-lg font-medium rounded-lg transition-colors',
                          location.pathname === link.path
                            ? 'bg-gold/10 text-gold'
                            : 'text-cream hover:bg-white/5 hover:text-gold'
                        )}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-[#0D0C0A]">
                <Link
                  to="/book-now"
                  className="block w-full bg-gold text-bg py-4 text-center text-base font-semibold uppercase tracking-wider hover:bg-cream transition-colors rounded"
                >
                  Reserve a Table
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-cream">
                  <Phone className="w-4 h-4" />
                  <a href="tel:01604385060" className="text-sm hover:text-gold transition-colors">
                    01604 385060
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-cream/60">
                    17 Castilian Street, Northampton, NN1 1JS
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
