import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { BookingCTA } from '@/components/BookingCTA';
import { motion } from 'motion/react';

interface MenuItemProps {
  name: string;
  price: string;
  desc?: string;
}

function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="py-6 border-b border-white/10 last:border-b-0">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="font-serif text-[22px] text-cream pr-4">{name}</h3>
        <span className="font-sans font-normal text-base text-gold shrink-0">{price}</span>
      </div>
      {desc && (
        <p className="font-sans font-light text-[14px] text-muted leading-[1.8]">
          {desc}
        </p>
      )}
    </div>
  );
}

function MenuCategory({ id, title, children }: { id: string, title: string, children: React.ReactNode }) {
  return (
    <section id={id} className="pt-24 md:pt-32 scroll-mt-24">
      <div className="border-t border-gold/20 mb-12"></div>
      <h2 className="font-serif text-[40px] leading-[1.05] text-cream mb-12 tracking-widest uppercase">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
        {children}
      </div>
    </section>
  );
}

export default function Menu() {
  const jumpLinks = [
    { name: 'Starters', href: '#starters' },
    { name: 'Pasta & Risotto', href: '#pasta' },
    { name: 'Fish & Seafood', href: '#fish' },
    { name: 'Charcoal Grill', href: '#grill' },
    { name: 'Dry-Aged Steaks', href: '#steaks' },
    { name: 'Sides & Sauces', href: '#sides' },
    { name: "Children's", href: '#childrens' },
    { name: 'Desserts', href: '#desserts' },
  ];

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-bg text-cream">
      <HeroSection 
        imageSrc="https://pub-b509435e3be84148b1a1fbe99675973b.r2.dev/La-Famiglia/Photos%20on%20website/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_28%20PM.png"
        imageAlt="Fresh Italian dishes"
        eyebrow="The Menu"
        headline="Fresh from Our Kitchen to Your Table"
      />

      {/* Sticky Jump Nav */}
      <div className="sticky top-[89px] z-40 bg-bg/95 backdrop-blur-md border-b border-gold/20 overflow-x-auto no-scrollbar">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <ul className="flex items-center gap-8 whitespace-nowrap">
            {jumpLinks.map((link, idx) => (
              <li key={link.href} className="flex items-center">
                <a 
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="font-sans text-xs uppercase tracking-[0.15em] text-muted hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
                {idx < jumpLinks.length - 1 && (
                  <span className="text-gold/30 mx-8">·</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-32">
        
        <MenuCategory id="starters" title="Starters">
          <MenuItem name="Pizza Garlic Bread with Mozzarella (V)" price="£11.50" />
          <MenuItem name="Buratta Pizza with Seasoned Tomatoes (V)" price="£12.50" />
          <MenuItem name="Bruschetta Trio" price="£12.90" desc="Classic Tomato and Basil (V) / Tuscan Chicken Liver Pâté with Caramelised Onion / Prosciutto and Stracchino" />
          <MenuItem name="Homemade Meatballs" price="£13.50" desc="Beef meatballs served in a rich tomato basil sauce and finished with Parmesan." />
          <MenuItem name="Arancini with Spinach and Mozzarella (V)" price="£12.50" desc="Sicilian crispy risotto balls filled with mozzarella and spinach, served in a Parmesan cheese sauce." />
          <MenuItem name="Melon, Prosciutto and Bocconcini Salad" price="£12.50" desc="Juicy melon paired with thinly sliced prosciutto and fresh mozzarella balls, lightly dressed with olive oil and balsamic glaze." />
          <MenuItem name="King Prawns" price="£14.50" desc="Sautéed in a garlic and chilli butter sauce, served with toasted sourdough bread." />
          <MenuItem name="Calamari Fritti" price="£13.50" desc="Crispy fried calamari served with spicy marinara sauce." />
          <MenuItem name="Antipasti Sharing Plate (For Two)" price="£23.00" desc="A selection of Italian cured meats and cheeses, served with olives and bread." />
        </MenuCategory>

        <MenuCategory id="pasta" title="Pasta & Risotto">
          <MenuItem name="Bucatini alla Carbonara" price="£21.00" desc="Homemade bucatini tossed in a silky egg yolk and Pecorino Romano sauce with crisp guanciale and cracked black pepper." />
          <MenuItem name="Bucatini con Polpette" price="£21.00" desc="Homemade bucatini with beef meatballs in a rich tomato sauce, finished with Parmesan." />
          <MenuItem name="Seafood Tagliatelle" price="£23.00" desc="Artisanal tagliatelle with fresh seafood, sautéed in white wine, garlic, extra virgin olive oil and aromatic herbs." />
          <MenuItem name="Tuscan Salmon Tagliatelle" price="£22.00" desc="Tagliatelle with fresh salmon, sautéed with garlic, sun-dried tomatoes and spinach, finished in a light creamy sauce." />
          <MenuItem name="Tuscan Chicken Tagliatelle" price="£22.00" desc="Handmade tagliatelle with chicken, sautéed with garlic, sun-dried tomatoes and spinach, finished in a light cream sauce." />
          <MenuItem name="Truffle & Ricotta Ravioloni (V)" price="£22.50" desc="Homemade ravioloni filled with truffle-infused ricotta, served in a truffle cream sauce." />
          <MenuItem name="Pumpkin & Sage Ravioloni (Vegan)" price="£20.00" desc="Homemade pumpkin and sage ravioloni, gently tossed with olive oil, garlic, and fresh sage." />
          <MenuItem name="Spinach & Ricotta Cannelloni (V)" price="£19.00" desc="Baked cannelloni filled with spinach and ricotta, topped with homemade tomato and basil sauce and gratinated cheese." />
          <MenuItem name="Aberdeen Angus Beef Lasagna" price="£23.00" desc="Pasta layered with Aberdeen Angus beef ragù, topped with béchamel." />
          <MenuItem name="Jumbo Prawn & 'Nduja Risotto" price="£22.00" desc="Creamy risotto with juicy jumbo prawns and spicy Calabrian 'nduja sausage, finished with a touch of Parmesan." />
          <MenuItem name="Mushroom Risotto (V)" price="£21.00" desc="Creamy risotto with earthy mushrooms, slow-cooked to a rich texture and finished with aged Parmesan." />
        </MenuCategory>

        <MenuCategory id="fish" title="Fish & Seafood">
          <MenuItem name="Roasted Fillet of Plaice" price="£22.00" desc="Delicate fillet of plaice, gently roasted and finished with a lemon, caper and butter sauce, served with seasonal green vegetables." />
          <MenuItem name="Grilled Butterfly Sea Bass" price="£29.00" desc="Whole butterfly sea bass grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil and a Mediterranean chopped salsa." />
          <MenuItem name="Grilled Turbot (700g-800g)" price="£55.00" desc="Perfect for sharing. Whole turbot, grilled and served with roasted garlic and cherry tomato confit, extra virgin olive oil, parsley and a Mediterranean chopped salsa." />
          <MenuItem name="Grilled Octopus" price="£32.00" desc="Tender grilled octopus served with roasted vegetables and a marinara sauce." />
        </MenuCategory>

        <MenuCategory id="grill" title="From Our Charcoal Grill">
          <MenuItem name="Rib-eye Steak" price="£31.00" desc="12oz rib-eye steak served with roasted vegetables and a classic peppercorn sauce." />
          <MenuItem name="Fillet Mignon" price="£32.00" desc="Tender fillet steak with garlic and pecorino mashed potatoes, and grilled vegetables." />
          <MenuItem name="Lamb Chops" price="£29.50" desc="Rosemary and garlic-marinated grilled lamb chops, accompanied by creamy mashed potatoes and finished with a red wine jus." />
        </MenuCategory>

        <MenuCategory id="steaks" title="Premium Dry-Aged Steaks">
          <div className="col-span-full mb-8">
            <p className="font-sans font-light text-muted text-[15px]">Aged min 35 days, subject to availability — charcoal grilled, finished at your table.</p>
          </div>
          <MenuItem name="35oz T-Bone Steak (to share)" price="£72.00" />
          <MenuItem name="24oz Chateaubriand Steak (to share)" price="£80.00" />
          <MenuItem name="42oz Dry-Aged Tomahawk Steak" price="£120.00" />
          <MenuItem name="Japanese A5 Wagyu Rib-Eye (BMS 12) 300g" price="£90.00" />
        </MenuCategory>

        <MenuCategory id="sides" title="Sides & Sauces">
          <div>
            <h3 className="font-sans text-sm text-gold uppercase tracking-[0.15em] mb-6">Sides — £6.50 each</h3>
            <MenuItem name="Mixed Grilled Vegetables (V)" price="" />
            <MenuItem name="Roasted Rosemary Potatoes (V)" price="" />
            <MenuItem name="Mashed Potato (V)" price="" />
            <MenuItem name="Potato Fries (V)" price="" />
            <MenuItem name="Green Salad (V)" price="" />
            <MenuItem name="Tomato Salad (V)" price="" />
          </div>
          <div>
            <h3 className="font-sans text-sm text-gold uppercase tracking-[0.15em] mb-6">Sauces — £3.50 each</h3>
            <MenuItem name="Marinara" price="" />
            <MenuItem name="Peppercorn" price="" />
            <MenuItem name="Gorgonzola" price="" />
            <MenuItem name="Homemade Gravy" price="" />
            <MenuItem name="Aioli" price="" />
          </div>
        </MenuCategory>

        <MenuCategory id="childrens" title="Children's Menu">
          <div className="col-span-full mb-8">
            <p className="font-sans font-light text-muted text-[15px]">Up to 12 years — £9.50</p>
          </div>
          <MenuItem name="Spaghetti al Pomodoro (V)" price="" />
          <MenuItem name="Little Cheesy Pasta (V)" price="" />
          <MenuItem name="Homemade Chicken Nuggets" price="" desc="Served with a side" />
          <MenuItem name="Pizza Margherita (V) / Pepperoni / Prosciutto" price="" />
        </MenuCategory>

        <MenuCategory id="desserts" title="Desserts">
          <MenuItem name="Classic Tiramisu" price="£8.10" desc="Coffee-flavoured Italian dessert." />
          <MenuItem name="Chocolate Profiteroles" price="£8.50" />
          <MenuItem name="Raspberry Cheesecake" price="£8.10" />
          <MenuItem name="Ice Cream (served with fruits)" price="£6.95" />
          <MenuItem name="Fruit Sorbet" price="£6.50" />
        </MenuCategory>

        {/* Allergen Note */}
        <div className="mt-32 max-w-[800px] mx-auto text-center">
          <p className="font-sans font-light text-sm text-muted leading-relaxed">
            <strong className="text-gold uppercase tracking-widest font-normal mr-2">Allergen Note:</strong>
            Our menu contains allergens. If you suffer from a food allergy or intolerance, please let a member of the restaurant team know upon placing your order, however we cannot fully guarantee that the food in these premises will be free from allergens.
          </p>
        </div>

      </div>

      <BookingCTA />
    </div>
  );
}
