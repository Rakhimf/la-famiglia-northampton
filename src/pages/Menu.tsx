import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ─── TYPES ──────────────────────────────────────────────────────────────────

interface DishItem {
  name: string;
  badges: string[];
  description: string;
  price: string;
}

type WithKey<T> = T & { key?: React.Key };

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
    photo: `${R2}ChatGPT%20Images/starters.jpg`,
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
    id: 'pasta',
    name: 'Pasta & Risotto',
    count: 11,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png`,
    items: [
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
    ],
  },
  {
    id: 'fish',
    name: 'Fish & Seafood',
    count: 4,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_57_42%20PM.png`,
    items: [
      { name: 'Roasted Fillet of Plaice', badges: [], description: 'Delicate fillet of plaice, gently roasted and finished with a lemon, caper and butter sauce, served with seasonal green vegetables.', price: '£22.00' },
      { name: 'Grilled Butterfly Sea Bass', badges: [], description: 'Whole butterfly sea bass grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil and a Mediterranean chopped salsa.', price: '£29.00' },
      { name: 'Grilled Turbot', badges: [], description: '700g–800g, perfect for sharing. Whole turbot, grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil, parsley and a Mediterranean chopped salsa.', price: '£55.00' },
      { name: 'Grilled Octopus', badges: [], description: 'Tender grilled octopus served with roasted vegetables and a marinara sauce.', price: '£32.00' },
    ],
  },
  {
    id: 'grill',
    name: 'Charcoal Grill',
    count: 3,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_58_52%20PM.png`,
    items: [
      { name: 'Rib-eye Steak', badges: [], description: '12oz rib-eye steak served with roasted vegetables and a classic peppercorn sauce.', price: '£31.00' },
      { name: 'Fillet Mignon', badges: [], description: 'Tender fillet steak with garlic and pecorino mashed potatoes, and grilled vegetables.', price: '£32.00' },
      { name: 'Lamb Chops', badges: [], description: 'Rosemary and garlic-marinated grilled lamb chops, accompanied by creamy mashed potatoes and finished with a red wine jus.', price: '£29.50' },
    ],
  },
  {
    id: 'steaks',
    name: 'Premium Steaks',
    count: 4,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_00_19%20PM.png`,
    note: 'Aged a minimum of 35 days — subject to availability. Grilled over charcoal and finished at your table.',
    items: [
      { name: '35oz T-Bone Steak', badges: [], description: 'To share.', price: '£72.00' },
      { name: '24oz Chateaubriand Steak', badges: [], description: 'To share.', price: '£80.00' },
      { name: '42oz Dry-Aged Tomahawk Steak', badges: [], description: '', price: '£120.00' },
      { name: 'Japanese A5 Wagyu Rib-Eye (BMS 12)', badges: [], description: '300g.', price: '£90.00' },
    ],
  },
  {
    id: 'sides',
    name: 'Sides & Sauces',
    count: 11,
    photo: `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_45_42%20PM.png`,
    items: [
      { name: 'Mixed Grilled Vegetables', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Roasted Rosemary Potatoes', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Mashed Potato', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Potato Fries', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Green Salad', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Tomato Salad', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Marinara Sauce', badges: [], description: '', price: '£3.50' },
      { name: 'Peppercorn Sauce', badges: [], description: '', price: '£3.50' },
      { name: 'Gorgonzola Sauce', badges: [], description: '', price: '£3.50' },
      { name: 'Homemade Gravy', badges: [], description: '', price: '£3.50' },
      { name: 'Aioli Sauce', badges: [], description: '', price: '£3.50' },
    ],
  },
  {
    id: 'kids',
    name: "Children's Menu",
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

// ─── ALLERGEN NOTE ────────────────────────────────────────────────────────────

function AllergenNote() {
  return (
    <div
      style={{
        margin: '0 16px',
        padding: '20px',
        backgroundColor: '#141210',
        borderRadius: '10px',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <p
        style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '12px',
          color: '#6B625A',
          lineHeight: 1.7,
          fontWeight: 300,
          textAlign: 'center',
          margin: 0,
        }}
      >
        <strong
          style={{
            color: '#9A7B3C',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.12em',
            fontWeight: 500,
            fontSize: '10px',
            display: 'block',
            marginBottom: '8px',
          }}
        >
          Allergen Information
        </strong>
        Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.
      </p>
    </div>
  );
}

// ─── BADGE COMPONENT ─────────────────────────────────────────────────────────

function Badge({ label }: { label: string; key?: React.Key }) {
  const isVegan = label === 'Vegan';
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: '10px',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: 500,
        letterSpacing: '0.05em',
        padding: '2px 7px',
        borderRadius: '99px',
        backgroundColor: isVegan ? 'rgba(52,168,83,0.18)' : 'rgba(52,168,83,0.14)',
        color: isVegan ? '#4ade80' : '#6ee7a0',
        border: '1px solid rgba(74,222,128,0.25)',
        marginLeft: '6px',
        verticalAlign: 'middle',
        flexShrink: 0,
      }}
    >
      {isVegan ? 'Vegan' : 'V'}
    </span>
  );
}

// ─── DISH CARD ────────────────────────────────────────────────────────────────

function DishCard({ item }: { item: DishItem; key?: React.Key }) {
  return (
    <div
      style={{
        backgroundColor: '#141210',
        borderRadius: '12px',
        padding: '16px 18px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
            <span
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '18px',
                fontWeight: 400,
                color: '#F5F0E8',
                lineHeight: 1.3,
              }}
            >
              {item.name}
            </span>
            {item.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
          {item.description && (
            <p
              style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontSize: '13px',
                color: '#8A8178',
                marginTop: '7px',
                lineHeight: 1.65,
                fontWeight: 300,
                margin: '7px 0 0',
              }}
            >
              {item.description}
            </p>
          )}
        </div>
        <span
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '15px',
            color: '#C4A55A',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            paddingTop: '2px',
            flexShrink: 0,
          }}
        >
          {item.price}
        </span>
      </div>
    </div>
  );
}

// ─── CATEGORY TILE ────────────────────────────────────────────────────────────

function CategoryTile({ category, onClick }: { category: MenuCategoryData; onClick: () => void; key?: React.Key }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackPhoto = `${R2}ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png`;

  return (
    <button
      id={`category-tile-${category.id}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(200px, 22vw, 260px)',
        overflow: 'hidden',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        display: 'block',
        padding: 0,
        backgroundColor: '#1a1814',
      }}
    >
      <img
        src={imgError ? fallbackPhoto : category.photo}
        alt={category.name}
        onError={() => setImgError(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          transition: 'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.65) 100%)'
            : 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 100%)',
          transition: 'background 0.4s ease',
        }}
      />
      {/* Gold accent line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          backgroundColor: '#C4A55A',
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
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
          padding: '20px',
        }}
      >
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: 400,
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            textAlign: 'center',
            lineHeight: 1.1,
            margin: 0,
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
            transition: 'transform 0.35s ease',
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          {category.name}
        </h2>
        <span
          style={{
            marginTop: '12px',
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            backgroundColor: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '99px',
            padding: '4px 12px',
            letterSpacing: '0.06em',
            transition: 'opacity 0.3s ease, transform 0.35s ease',
            opacity: hovered ? 1 : 0.7,
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          }}
        >
          {category.count} {category.count === 1 ? 'dish' : 'dishes'}
        </span>
      </div>
    </button>
  );
}

// ─── DETAIL VIEW ─────────────────────────────────────────────────────────────

function DetailView({ initialCategoryId, onBack }: { initialCategoryId: string; onBack: () => void }) {
  const [activeSectionId, setActiveSectionId] = useState(initialCategoryId);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll to initial category on mount
  useEffect(() => {
    const el = sectionRefs.current[initialCategoryId];
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [initialCategoryId]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    menuData.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSectionId(cat.id);
          });
        },
        { threshold: 0.2, rootMargin: '-80px 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Auto-scroll jump nav to active pill
  useEffect(() => {
    const navEl = navRef.current;
    const activeEl = navEl?.querySelector(`[data-nav-id="${activeSectionId}"]`) as HTMLElement | null;
    if (navEl && activeEl) {
      const scrollLeft =
        navEl.scrollLeft + activeEl.getBoundingClientRect().left - navEl.getBoundingClientRect().left - navEl.offsetWidth / 2 + activeEl.offsetWidth / 2;
      navEl.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  }, [activeSectionId]);

  const jumpTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh' }}>
      {/* Sticky header + jump nav */}
      <div
        style={{
          position: 'sticky',
          top: '89px',
          zIndex: 50,
          backgroundColor: '#0D0C0A',
          borderBottom: '1px solid rgba(196,165,90,0.15)',
        }}
      >
        {/* Back row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            padding: '14px 16px',
          }}
        >
          <button
            id="menu-back-button"
            onClick={onBack}
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#C4A55A',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '13px',
              padding: '4px 0',
            }}
          >
            <span style={{ fontSize: '20px', lineHeight: 1 }}>←</span>
          </button>
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#F5F0E8',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Our Menu
          </span>
        </div>

        {/* Category jump nav */}
        <div
          ref={navRef}
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            display: 'flex',
            gap: '8px',
            padding: '10px 16px 12px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          {menuData.map((cat) => {
            const isActive = cat.id === activeSectionId;
            return (
              <button
                key={cat.id}
                data-nav-id={cat.id}
                id={`menu-nav-${cat.id}`}
                onClick={() => jumpTo(cat.id)}
                style={{
                  flexShrink: 0,
                  padding: '7px 14px',
                  borderRadius: '99px',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '12px',
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.22s ease',
                  backgroundColor: isActive ? '#C4A55A' : 'transparent',
                  color: isActive ? '#0D0C0A' : '#D4C4A8',
                  border: isActive ? '1px solid #C4A55A' : '1px solid rgba(196,165,90,0.35)',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Dish sections */}
      <div style={{ paddingBottom: '80px' }}>
        {menuData.map((cat) => (
          <section
            key={cat.id}
            id={`section-${cat.id}`}
            ref={(el) => { sectionRefs.current[cat.id] = el; }}
            style={{ scrollMarginTop: '170px', paddingBottom: '24px' }}
          >
            {/* Section heading */}
            <div style={{ padding: '36px 16px 0' }}>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(24px, 4vw, 30px)',
                  fontWeight: 400,
                  color: '#C4A55A',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                {cat.name}
              </h2>
              {cat.note && (
                <p
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontSize: '12px',
                    color: '#8A8178',
                    fontWeight: 300,
                    marginTop: '6px',
                    fontStyle: 'italic',
                  }}
                >
                  {cat.note}
                </p>
              )}
              <div style={{ height: '1px', backgroundColor: 'rgba(196,165,90,0.2)', marginTop: '14px' }} />
            </div>

            {/* Dish cards */}
            <div style={{ padding: '12px 16px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.items.map((item, idx) => (
                <DishCard key={`${cat.id}-${idx}`} item={item} />
              ))}
            </div>
          </section>
        ))}

        {/* Reserve a Table */}
        <div style={{ textAlign: 'center', padding: '48px 20px 28px' }}>
          <Link
            to="/book-now"
            id="menu-reserve-table-btn"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#0D0C0A',
              backgroundColor: '#C4A55A',
              padding: '14px 40px',
              borderRadius: '2px',
              textDecoration: 'none',
            }}
          >
            Reserve a Table
          </Link>
        </div>

        {/* Allergen note */}
        <AllergenNote />
        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}

// ─── LANDING VIEW ─────────────────────────────────────────────────────────────

function LandingView({ onSelectCategory }: { onSelectCategory: (id: string) => void }) {
  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh' }}>
      {/* Header */}
      <div
        style={{
          padding: 'clamp(36px, 6vw, 64px) 20px 28px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(196,165,90,0.1)',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.28em',
            color: '#C4A55A',
            marginBottom: '14px',
            fontWeight: 400,
          }}
        >
          La Famiglia
        </p>
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(34px, 6vw, 54px)',
            fontWeight: 300,
            color: '#F5F0E8',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            margin: 0,
            lineHeight: 1.05,
          }}
        >
          The Menu
        </h1>
        <p
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '13px',
            color: '#6B625A',
            marginTop: '16px',
            fontWeight: 300,
            letterSpacing: '0.04em',
          }}
        >
          Select a section to explore
        </p>
      </div>

      {/* Category tiles */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))',
          gap: '1px',
          backgroundColor: 'rgba(196,165,90,0.08)',
        }}
      >
        {menuData.map((cat) => (
          <CategoryTile key={cat.id} category={cat} onClick={() => onSelectCategory(cat.id)} />
        ))}
      </div>

      {/* Allergen note */}
      <div style={{ padding: '48px 16px' }}>
        <AllergenNote />
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSelectCategory = (id: string) => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveCategory(id);
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setActiveCategory(null);
  };

  if (activeCategory !== null) {
    return <DetailView initialCategoryId={activeCategory} onBack={handleBack} />;
  }

  return <LandingView onSelectCategory={handleSelectCategory} />;
}
