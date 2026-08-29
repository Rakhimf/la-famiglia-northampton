import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface DishItem {
  name: string;
  badges: string[];
  description: string;
  price: string;
}

interface MenuCategoryData {
  id: string;
  name: string;
  count: number;
  photo: string;
  note?: string;
  items: DishItem[];
}

// ─── MENU DATA ───────────────────────────────────────────────────────────────

const R2 = 'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/';

const menuData: MenuCategoryData[] = [
  {
    id: 'starters',
    name: 'Starters',
    count: 9,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png`,
    items: [
      { name: 'Pizza Garlic Bread with Mozzarella', badges: ['V'], description: '', price: '£11.50' },
      { name: 'Buratta Pizza with Seasoned Tomatoes', badges: ['V'], description: '', price: '£12.50' },
      { name: 'Bruschetta Trio', badges: [], description: 'Classic Tomato and Basil (V) / Tuscan Chicken Liver Pâté with Caramelised Onion / Prosciutto and Stracchino', price: '£12.90' },
      { name: 'Homemade Meatballs', badges: [], description: 'Beef meatballs served in a rich tomato basil sauce and finished with Parmesan.', price: '£13.50' },
      { name: 'Arancini with Spinach and Mozzarella', badges: ['V'], description: 'Sicilian crispy risotto balls filled with mozzarella and spinach, served in a Parmesan cheese sauce.', price: '£12.50' },
      { name: 'Melon, Prosciutto and Bocconcini Salad', badges: [], description: 'Juicy melon paired with thinly sliced prosciutto and fresh mozzarella balls, lightly dressed with olive oil and balsamic glaze.', price: '£12.50' },
      { name: 'King Prawns', badges: [], description: 'Sautéed in a garlic and chilli butter sauce, served with toasted sourdough bread.', price: '£14.50' },
      { name: 'Calamari Fritti', badges: [], description: 'Crispy fried calamari served with spicy marinara sauce.', price: '£13.50' },
      { name: 'Antipasti Sharing Plate (For Two)', badges: [], description: 'A selection of Italian cured meats and cheeses, served with olives and bread.', price: '£23.00' },
    ],
  },
  {
    id: 'mains',
    name: 'Mains',
    count: 22,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_57_42%20PM.png`,
    items: [
      // Pasta & Risotto
      { name: 'Bucatini alla Carbonara', badges: [], description: 'Homemade bucatini tossed in a silky egg yolk and Pecorino Romano sauce with crisp guanciale and cracked black pepper.', price: '£21.00' },
      { name: 'Bucatini con Polpette', badges: [], description: 'Homemade bucatini with beef meatballs in a rich tomato sauce, finished with Parmesan.', price: '£21.00' },
      { name: 'Seafood Tagliatelle', badges: [], description: 'Artisanal tagliatelle with fresh seafood, sautéed in white wine, garlic, extra virgin olive oil and aromatic herbs.', price: '£23.00' },
      { name: 'Tuscan Salmon Tagliatelle', badges: [], description: 'Tagliatelle with fresh salmon, sautéed with garlic, sun-dried tomatoes and spinach, finished in a light creamy sauce.', price: '£22.00' },
      { name: 'Tuscan Chicken Tagliatelle', badges: [], description: 'Handmade tagliatelle with chicken, sautéed with garlic, sun-dried tomatoes and spinach, finished in a light cream sauce.', price: '£22.00' },
      { name: 'Truffle & Ricotta Ravioloni', badges: ['V'], description: 'Homemade ravioloni filled with truffle-infused ricotta, served in a truffle cream sauce.', price: '£22.50' },
      { name: 'Pumpkin & Sage Ravioloni', badges: ['Vegan'], description: 'Homemade pumpkin and sage ravioloni, gently tossed with olive oil, garlic, and fresh sage.', price: '£20.00' },
      { name: 'Spinach & Ricotta Cannelloni', badges: ['V'], description: 'Baked cannelloni filled with spinach and ricotta, topped with homemade tomato and basil sauce and gratinated cheese.', price: '£19.00' },
      { name: 'Aberdeen Angus Beef Lasagna', badges: [], description: 'Pasta layered with Aberdeen Angus beef ragù, topped with béchamel.', price: '£23.00' },
      { name: "Jumbo Prawn & 'Nduja Risotto", badges: [], description: "Creamy risotto with juicy jumbo prawns and spicy Calabrian 'nduja sausage, finished with a touch of Parmesan.", price: '£22.00' },
      { name: 'Mushroom Risotto', badges: ['V'], description: 'Creamy risotto with earthy mushrooms, slow-cooked to a rich texture and finished with aged Parmesan.', price: '£21.00' },
      // Fish & Seafood
      { name: 'Roasted Fillet of Plaice', badges: [], description: 'Delicate fillet of plaice, gently roasted and finished with a lemon, caper and butter sauce, served with seasonal green vegetables.', price: '£22.00' },
      { name: 'Grilled Butterfly Sea Bass', badges: [], description: 'Whole butterfly sea bass grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil and a Mediterranean chopped salsa.', price: '£29.00' },
      { name: 'Grilled Turbot', badges: [], description: '700g–800g, perfect for sharing. Whole turbot, grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil, parsley and a Mediterranean chopped salsa.', price: '£55.00' },
      { name: 'Grilled Octopus', badges: [], description: 'Tender grilled octopus served with roasted vegetables and a marinara sauce.', price: '£32.00' },
      // Charcoal Grill
      { name: 'Rib-eye Steak', badges: [], description: '12oz rib-eye steak served with roasted vegetables and a classic peppercorn sauce.', price: '£31.00' },
      { name: 'Fillet Mignon', badges: [], description: 'Tender fillet steak with garlic and pecorino mashed potatoes, and grilled vegetables.', price: '£32.00' },
      { name: 'Lamb Chops', badges: [], description: 'Rosemary and garlic-marinated grilled lamb chops, accompanied by creamy mashed potatoes and finished with a red wine jus.', price: '£29.50' },
      // Premium Steaks
      { name: '35oz T-Bone Steak', badges: [], description: 'Aged 35 days. To share.', price: '£72.00' },
      { name: '24oz Chateaubriand Steak', badges: [], description: 'Aged 35 days. To share.', price: '£80.00' },
      { name: '42oz Dry-Aged Tomahawk Steak', badges: [], description: 'Aged 35 days.', price: '£120.00' },
      { name: 'Japanese A5 Wagyu Rib-Eye (BMS 12)', badges: [], description: '300g.', price: '£90.00' },
    ],
  },
  {
    id: 'kids',
    name: 'Kids',
    count: 4,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_51_55%20PM.png`,
    note: 'Available for children up to 12 years of age. £9.50 per dish.',
    items: [
      { name: 'Spaghetti al Pomodoro', badges: ['V'], description: '', price: '£9.50' },
      { name: 'Little Cheesy Pasta', badges: ['V'], description: '', price: '£9.50' },
      { name: 'Homemade Chicken Nuggets', badges: [], description: 'Served with a side.', price: '£9.50' },
      { name: 'Pizza Margherita / Pepperoni / Prosciutto', badges: ['V'], description: '', price: '£9.50' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    count: 5,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_50_31%20PM.png`,
    items: [
      { name: 'Classic Tiramisu', badges: [], description: 'Coffee-flavoured Italian dessert.', price: '£8.10' },
      { name: 'Chocolate Profiteroles', badges: [], description: '', price: '£8.50' },
      { name: 'Raspberry Cheesecake', badges: [], description: '', price: '£8.10' },
      { name: 'Ice Cream', badges: [], description: 'Served with fruits.', price: '£6.95' },
      { name: 'Fruit Sorbet', badges: [], description: '', price: '£6.50' },
    ],
  },
];

// ─── FALLBACK PHOTO ──────────────────────────────────────────────────────────
const FALLBACK = `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png`;

// ─── VIEW 1 — CATEGORY LANDING ───────────────────────────────────────────────

function CategoryTile({
  cat,
  onClick,
}: {
  cat: MenuCategoryData;
  onClick: () => void;
  key?: React.Key;
}) {
  const [imgError, setImgError] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <button
      id={`tile-${cat.id}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: '220px',
        display: 'block',
        overflow: 'hidden',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        backgroundColor: '#1a1814',
        flexShrink: 0,
      }}
    >
      {/* Photo */}
      <img
        src={imgError ? FALLBACK : cat.photo}
        alt={cat.name}
        onError={() => setImgError(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.5s ease',
          transform: hover ? 'scale(1.04)' : 'scale(1)',
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: hover ? 'rgba(0,0,0,0.30)' : 'rgba(0,0,0,0.38)',
          transition: 'background-color 0.3s ease',
        }}
      />
      {/* Text */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '30px',
            fontWeight: 400,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            lineHeight: 1,
            textShadow: '0 1px 12px rgba(0,0,0,0.5)',
          }}
        >
          {cat.name}
        </span>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.88)',
            backgroundColor: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '99px',
            padding: '3px 11px',
            letterSpacing: '0.04em',
            backdropFilter: 'blur(4px)',
          }}
        >
          {cat.count} {cat.count === 1 ? 'dish' : 'dishes'}
        </span>
      </div>
    </button>
  );
}

function LandingView({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh' }}>
      {/* Tiles stacked with 3px gap */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {menuData.map((cat) => (
          <CategoryTile key={cat.id} cat={cat} onClick={() => onSelect(cat.id)} />
        ))}
      </div>

      {/* Allergen note */}
      <div style={{ padding: '40px 20px 48px' }}>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11.5px',
            color: '#5A5450',
            lineHeight: 1.75,
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto',
          }}
        >
          <span
            style={{
              display: 'block',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontSize: '10px',
              color: '#8A7B5C',
              marginBottom: '8px',
            }}
          >
            Allergen Information
          </span>
          Our menu contains allergens. If you suffer from a food allergy or intolerance, please let
          a member of the restaurant team know upon placing your order, however we cannot fully
          guarantee that the food in these premises will be free from allergens.
        </p>
      </div>
    </div>
  );
}

// ─── VIEW 2 — DISH LIST ──────────────────────────────────────────────────────

function Badge({ label }: { label: string; key?: React.Key }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '10px',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 500,
        padding: '1px 6px',
        borderRadius: '99px',
        backgroundColor: 'rgba(52,168,83,0.15)',
        color: '#6ee7a0',
        border: '1px solid rgba(74,222,128,0.22)',
        marginLeft: '6px',
        verticalAlign: 'middle',
        letterSpacing: '0.03em',
      }}
    >
      {label === 'Vegan' ? 'Vegan' : 'V'}
    </span>
  );
}

function DishRow({ item, last }: { item: DishItem; last: boolean; key?: React.Key }) {
  return (
    <div
      style={{
        paddingTop: '14px',
        paddingBottom: '14px',
        borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Name + price row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '17px',
            fontWeight: 400,
            color: '#F0EDE6',
            lineHeight: 1.35,
            flex: 1,
          }}
        >
          {item.name}
          {item.badges.map((b) => (
            <Badge key={b} label={b} />
          ))}
        </span>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            color: '#C4A55A',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            paddingTop: '2px',
          }}
        >
          {item.price}
        </span>
      </div>
      {/* Description */}
      {item.description && (
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '12.5px',
            color: '#6B635A',
            marginTop: '5px',
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          {item.description}
        </p>
      )}
    </div>
  );
}

function DetailView({
  initialId,
  onBack,
}: {
  initialId: string;
  onBack: () => void;
}) {
  const [activeId, setActiveId] = useState(initialId);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll to section on mount
  useEffect(() => {
    const el = sectionRefs.current[initialId];
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }, [initialId]);

  // IntersectionObserver — track active section as user scrolls
  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    menuData.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const o = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { if (e.isIntersecting) setActiveId(cat.id); });
        },
        { threshold: 0.15, rootMargin: '-72px 0px -60% 0px' }
      );
      o.observe(el);
      obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  // Keep active pill scrolled into view in nav bar
  useEffect(() => {
    const nav = navRef.current;
    const pill = nav?.querySelector(`[data-id="${activeId}"]`) as HTMLElement | null;
    if (nav && pill) {
      const offset =
        nav.scrollLeft + pill.getBoundingClientRect().left - nav.getBoundingClientRect().left
        - nav.offsetWidth / 2 + pill.offsetWidth / 2;
      nav.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeId]);

  const jumpTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Sticky header height: ~44px back bar + ~46px nav = ~90px
  const STICKY_H = 90;

  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh' }}>

      {/* ── Sticky top bar ── */}
      <div
        style={{
          position: 'sticky',
          top: '89px', // below site Navbar
          zIndex: 50,
          backgroundColor: '#0D0C0A',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Back row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 16px',
            height: '44px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <button
            id="menu-back-btn"
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#C4A55A',
              fontSize: '22px',
              lineHeight: 1,
              padding: '0 12px 0 0',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            ←
          </button>
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '18px',
              color: '#F0EDE6',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Menu
          </span>
        </div>

        {/* Category pill nav */}
        <div
          ref={navRef}
          style={{
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            padding: '9px 16px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          } as React.CSSProperties}
        >
          {menuData.map((cat) => {
            const active = cat.id === activeId;
            return (
              <button
                key={cat.id}
                data-id={cat.id}
                id={`nav-${cat.id}`}
                onClick={() => jumpTo(cat.id)}
                style={{
                  flexShrink: 0,
                  padding: '5px 13px',
                  borderRadius: '99px',
                  fontSize: '11.5px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: active ? 500 : 400,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  border: active ? '1px solid #C4A55A' : '1px solid rgba(196,165,90,0.3)',
                  backgroundColor: active ? '#C4A55A' : 'transparent',
                  color: active ? '#0D0C0A' : '#C8BAA0',
                  transition: 'all 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Dish sections ── */}
      <div style={{ paddingBottom: '72px' }}>
        {menuData.map((cat) => (
          <section
            key={cat.id}
            id={`sec-${cat.id}`}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            style={{ scrollMarginTop: `${89 + STICKY_H + 16}px` }}
          >
            {/* Section title */}
            <div
              style={{
                padding: '32px 20px 0',
                borderTop: '1px solid rgba(196,165,90,0.12)',
              }}
            >
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: '#C4A55A',
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  margin: 0,
                }}
              >
                {cat.name}
              </h2>
              {cat.note && (
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '11.5px',
                    color: '#6B635A',
                    fontStyle: 'italic',
                    marginTop: '5px',
                    fontWeight: 300,
                  }}
                >
                  {cat.note}
                </p>
              )}
            </div>

            {/* Dish rows — no cards, bare text */}
            <div style={{ padding: '4px 20px 0' }}>
              {cat.items.map((item, i) => (
                <DishRow
                  key={`${cat.id}-${i}`}
                  item={item}
                  last={i === cat.items.length - 1}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Reserve CTA */}
        <div style={{ textAlign: 'center', padding: '48px 20px 28px' }}>
          <Link
            to="/book-now"
            id="menu-reserve-btn"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0D0C0A',
              backgroundColor: '#C4A55A',
              padding: '13px 40px',
              borderRadius: '2px',
              textDecoration: 'none',
            }}
          >
            Reserve a Table
          </Link>
        </div>

        {/* Allergen note */}
        <div style={{ padding: '0 20px 40px' }}>
          <p
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '11.5px',
              color: '#5A5450',
              lineHeight: 1.75,
              textAlign: 'center',
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            <span
              style={{
                display: 'block',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                fontSize: '10px',
                color: '#8A7B5C',
                marginBottom: '8px',
              }}
            >
              Allergen Information
            </span>
            Our menu contains allergens. If you suffer from a food allergy or intolerance, please
            let a member of the restaurant team know upon placing your order, however we cannot
            fully guarantee that the food in these premises will be free from allergens.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── ROOT ────────────────────────────────────────────────────────────────────

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveCategory(id);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveCategory(null);
  };

  if (activeCategory !== null) {
    return <DetailView initialId={activeCategory} onBack={handleBack} />;
  }

  return <LandingView onSelect={handleSelect} />;
}
