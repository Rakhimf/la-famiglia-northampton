import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const R2 = 'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/';
const HP = 'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/';

const menuData: MenuCategoryData[] = [
  {
    id: 'starters',
    name: 'Starters',
    count: 9,
    photo: 'https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Home%20page/acb8fdd7-e9fe-442a-ba34-8e94c96d1fe3.jpg',
    items: [
      { name: 'Garlic Bread with Mozzarella', badges: ['V'], description: '', price: '£12' },
      { name: 'Burrata Bruschetta', badges: ['V'], description: '', price: '£13' },
      { name: 'Chicken Caesar Salad', badges: [], description: '', price: '£14' },
      { name: 'Mushroom & Truffle Arancini', badges: ['V'], description: '', price: '£12.50' },
      { name: 'Salmon Carpaccio', badges: [], description: '', price: '£15' },
      { name: 'Funghi alla Crema', badges: ['V'], description: '', price: '£12' },
      { name: 'Tiger Prawns', badges: [], description: '', price: '£15.50' },
      { name: 'Calamari Fritti', badges: [], description: '', price: '£14.50' },
      { name: 'Italian Antipasti Board', badges: [], description: '', price: '£13' },
    ],
  },
  {
    id: 'mains',
    name: 'Main Courses',
    count: 13,
    photo: `${HP}IMG_8080.JPG`,
    items: [
      { name: 'Spaghetti alla Carbonara', badges: [], description: '', price: '£22' },
      { name: 'Spaghetti Bolognese', badges: [], description: '', price: '£24.50' },
      { name: 'Beef Stroganoff Tagliatelle', badges: [], description: '', price: '£25' },
      { name: 'Rigatoni alla Melanzana', badges: ['V'], description: '', price: '£22' },
      { name: 'Wild Mushroom Risotto', badges: ['V'], description: '', price: '£22' },
      { name: 'Prawn & Scallop Risotto', badges: [], description: '', price: '£25' },
      { name: 'Roasted Chicken Supreme', badges: [], description: '', price: '£25' },
      { name: 'Lamb Chops', badges: [], description: '', price: '£30' },
      { name: 'Sea Bass', badges: [], description: '', price: '£24' },
      { name: 'Salmon', badges: [], description: '', price: '£25.50' },
      { name: 'Lobster Linguine', badges: [], description: '', price: '£35' },
      { name: 'Truffle & Ricotta Ravioloni', badges: ['V'], description: '', price: '£22.50' },
      { name: 'Dry-Aged Beef Lasagna', badges: [], description: '', price: '£23' },
    ],
  },
  {
    id: 'steaks',
    name: 'Premium Steaks',
    count: 6,
    photo: `${HP}IMG_8096.JPG`,
    note: 'Premium dry-aged cuts cooked in our Josper Charcoal Grill Oven. Add a Lobster Tail +£18.',
    items: [
      { name: 'Rib-eye Steak', badges: [], description: '', price: '£35' },
      { name: 'New York Strip', badges: [], description: '', price: '£49' },
      { name: 'Fillet Mignon', badges: [], description: '', price: '£37' },
      { name: 'T-Bone Steak', badges: [], description: '', price: '£55' },
      { name: 'Japanese A5 Wagyu Rib-Eye', badges: [], description: '300g · BMS 12', price: '£115' },
      { name: '42oz Dry-Aged Tomahawk Steak', badges: [], description: '', price: '£120' },
    ],
  },
  {
    id: 'sides',
    name: 'Sides & Sauces',
    count: 8,
    photo: `${HP}Italian%20Restaurant%20La%20Famiglia%20Northampton%202.png`,
    note: 'All sides and sauces £6.50 each.',
    items: [
      { name: 'Mixed Grilled Vegetables', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Crispy Mushrooms', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Potato Fries', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Tomato & Rocket Salad', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Marinara Sauce', badges: ['V'], description: '', price: '£6.50' },
      { name: 'Peppercorn Sauce', badges: [], description: '', price: '£6.50' },
      { name: 'Homemade Gravy', badges: [], description: '', price: '£6.50' },
      { name: 'Aioli', badges: [], description: '', price: '£6.50' },
    ],
  },
  {
    id: 'sunday',
    name: 'Sunday Roast',
    count: 3,
    photo: `${HP}A4.png`,
    note: 'Available Sundays 12:00\u201317:00.',
    items: [
      { name: 'The All-In Roast Feast', badges: [], description: 'Unlimited trimmings. Minimum 2 guests.', price: '£32 pp' },
      { name: '55-Day Dry-Aged Beef Sirloin', badges: [], description: 'Individual roast.', price: '£24' },
      { name: 'Lemon & Thyme Corn-Fed Chicken Supreme', badges: [], description: 'Individual roast.', price: '£22' },
    ],
  },
  {
    id: 'kids',
    name: "Children's Menu",
    count: 4,
    photo: `${HP}Italian%20Restaurant%20La%20Famiglia%20Northampton%20LaFamiglia.png`,
    note: 'Available for children up to 12 years of age.',
    items: [
      { name: 'Spaghetti al Pomodoro', badges: ['V'], description: '', price: '£9.50' },
      { name: 'Cheesy Pasta', badges: ['V'], description: '', price: '£9.50' },
      { name: 'Homemade Chicken Nuggets', badges: [], description: 'Served with a side.', price: '£9.50' },
      { name: 'Pizza', badges: [], description: 'Margherita (V) · Pepperoni · Prosciutto', price: '£9.50' },
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    count: 5,
    photo: `${HP}IMG_4666.JPG`,
    items: [
      { name: 'Classic Tiramisu', badges: [], description: '', price: '£8.10' },
      { name: 'Affogato', badges: [], description: '', price: '£6.95' },
      { name: 'Signature Dessert of the Day', badges: [], description: '', price: '£8.50' },
      { name: 'Ice Cream', badges: [], description: 'Served with fruits.', price: '£6.95' },
      { name: 'Fruit Sorbet', badges: [], description: '', price: '£6.50' },
    ],
  },
];

const FALLBACK = `${HP}acb8fdd7-e9fe-442a-ba34-8e94c96d1fe3.jpg`;

function CategoryTile({ cat, onClick }: { cat: MenuCategoryData; onClick: () => void; key?: React.Key }) {
  const [imgError, setImgError] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <button id={`tile-${cat.id}`} onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ position: 'relative', width: '100%', height: '220px', display: 'block', overflow: 'hidden', border: 'none', padding: 0, cursor: 'pointer', backgroundColor: '#1a1814', flexShrink: 0 }}>
      <img src={imgError ? FALLBACK : cat.photo} alt={cat.name} onError={() => setImgError(true)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.5s ease', transform: hover ? 'scale(1.04)' : 'scale(1)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundColor: hover ? 'rgba(0,0,0,0.30)' : 'rgba(0,0,0,0.38)', transition: 'background-color 0.3s ease' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
        <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '30px', fontWeight: 400, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.15em', lineHeight: 1, textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>{cat.name}</span>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.88)', backgroundColor: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '99px', padding: '3px 11px', letterSpacing: '0.04em', backdropFilter: 'blur(4px)' }}>{cat.count} {cat.count === 1 ? 'dish' : 'dishes'}</span>
      </div>
    </button>
  );
}

function LandingView({ onSelect }: { onSelect: (id: string) => void }) {
  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh', paddingTop: '90px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
        {menuData.map((cat) => (<CategoryTile key={cat.id} cat={cat} onClick={() => onSelect(cat.id)} />))}
      </div>
      <div style={{ padding: '40px 20px 48px' }}>
        <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11.5px', color: '#5A5450', lineHeight: 1.75, textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <span style={{ display: 'block', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '10px', color: '#8A7B5C', marginBottom: '8px' }}>Allergen Information</span>
          Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.
        </p>
      </div>
    </div>
  );
}

function Badge({ label }: { label: string; key?: React.Key }) {
  return (
    <span style={{ display: 'inline-block', fontSize: '10px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, padding: '1px 6px', borderRadius: '99px', backgroundColor: 'rgba(52,168,83,0.15)', color: '#6ee7a0', border: '1px solid rgba(74,222,128,0.22)', marginLeft: '6px', verticalAlign: 'middle', letterSpacing: '0.03em' }}>
      {label === 'Vegan' ? 'Vegan' : 'V'}
    </span>
  );
}

function DishRow({ item, last }: { item: DishItem; last: boolean; key?: React.Key }) {
  return (
    <div style={{ paddingTop: '14px', paddingBottom: '14px', borderBottom: last ? 'none' : '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
        <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '17px', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.35, flex: 1 }}>
          {item.name}{item.badges.map((b) => (<Badge key={b} label={b} />))}
        </span>
        <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '14px', fontWeight: 500, color: '#C4A55A', whiteSpace: 'nowrap', flexShrink: 0, paddingTop: '2px' }}>{item.price}</span>
      </div>
      {item.description && (<p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12.5px', color: '#6B635A', marginTop: '5px', lineHeight: 1.6, fontWeight: 300 }}>{item.description}</p>)}
    </div>
  );
}

function DetailView({ initialId, onBack }: { initialId: string; onBack: () => void }) {
  const [activeId, setActiveId] = useState(initialId);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRefs.current[initialId];
    if (el) { setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80); }
  }, [initialId]);

  useEffect(() => {
    const obs: IntersectionObserver[] = [];
    menuData.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;
      const o = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveId(cat.id); }); }, { threshold: 0.15, rootMargin: '-72px 0px -60% 0px' });
      o.observe(el); obs.push(o);
    });
    return () => obs.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const pill = nav?.querySelector(`[data-id="${activeId}"]`) as HTMLElement | null;
    if (nav && pill) {
      const offset = nav.scrollLeft + pill.getBoundingClientRect().left - nav.getBoundingClientRect().left - nav.offsetWidth / 2 + pill.offsetWidth / 2;
      nav.scrollTo({ left: offset, behavior: 'smooth' });
    }
  }, [activeId]);

  const jumpTo = (id: string) => { sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
  const STICKY_H = 90;

  return (
    <div style={{ backgroundColor: '#0D0C0A', minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: '89px', zIndex: 50, backgroundColor: '#0D0C0A', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px', height: '44px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <button id="menu-back-btn" onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C4A55A', fontSize: '22px', lineHeight: 1, padding: '0 12px 0 0', display: 'flex', alignItems: 'center' }}>←</button>
          <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '18px', color: '#F0EDE6', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Menu</span>
        </div>
        <div ref={navRef} style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '9px 16px', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}>
          {menuData.map((cat) => {
            const active = cat.id === activeId;
            return (
              <button key={cat.id} data-id={cat.id} id={`nav-${cat.id}`} onClick={() => jumpTo(cat.id)}
                style={{ flexShrink: 0, padding: '5px 13px', borderRadius: '99px', fontSize: '11.5px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: active ? 500 : 400, letterSpacing: '0.04em', cursor: 'pointer', border: active ? '1px solid #C4A55A' : '1px solid rgba(196,165,90,0.3)', backgroundColor: active ? '#C4A55A' : 'transparent', color: active ? '#0D0C0A' : '#C8BAA0', transition: 'all 0.18s ease', whiteSpace: 'nowrap' }}>
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ paddingBottom: '72px' }}>
        {menuData.map((cat) => (
          <section key={cat.id} id={`sec-${cat.id}`} ref={(el) => { sectionRefs.current[cat.id] = el; }} style={{ scrollMarginTop: `${89 + STICKY_H + 16}px` }}>
            <div style={{ padding: '32px 20px 0', borderTop: '1px solid rgba(196,165,90,0.12)' }}>
              <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '22px', fontWeight: 400, color: '#C4A55A', textTransform: 'uppercase', letterSpacing: '0.14em', margin: 0 }}>{cat.name}</h2>
              {cat.note && (<p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11.5px', color: '#6B635A', fontStyle: 'italic', marginTop: '5px', fontWeight: 300 }}>{cat.note}</p>)}
            </div>
            <div style={{ padding: '4px 20px 0' }}>
              {cat.items.map((item, i) => (<DishRow key={`${cat.id}-${i}`} item={item} last={i === cat.items.length - 1} />))}
            </div>
          </section>
        ))}
        <div style={{ textAlign: 'center', padding: '48px 20px 28px' }}>
          <Link to="/book-now" id="menu-reserve-btn" style={{ display: 'inline-block', fontFamily: 'Inter, system-ui, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#0D0C0A', backgroundColor: '#C4A55A', padding: '13px 40px', borderRadius: '2px', textDecoration: 'none' }}>Reserve a Table</Link>
        </div>
        <div style={{ padding: '0 20px 40px' }}>
          <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '11.5px', color: '#5A5450', lineHeight: 1.75, textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
            <span style={{ display: 'block', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.12em', fontSize: '10px', color: '#8A7B5C', marginBottom: '8px' }}>Allergen Information</span>
            Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const handleSelect = (id: string) => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); setActiveCategory(id); };
  const handleBack = () => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); setActiveCategory(null); };
  if (activeCategory !== null) { return <DetailView initialId={activeCategory} onBack={handleBack} />; }
  return <LandingView onSelect={handleSelect} />;
}
