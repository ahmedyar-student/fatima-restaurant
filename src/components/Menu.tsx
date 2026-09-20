"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  {
    category: "Starters",
    items: [
      { name: "Crispy Calamari", description: "Served with house-made tartar sauce and lemon wedge", price: "$14" },
      { name: "Bruschetta Classico", description: "Toasted sourdough, heirloom tomatoes, garlic, fresh basil, balsamic glaze", price: "$12" },
      { name: "Stuffed Mushrooms", description: "Cremini mushrooms stuffed with herbs, garlic, and parmesan cheese", price: "$11" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Grilled Ribeye Steak", description: "12oz grass-fed ribeye, garlic herb butter, roasted asparagus, truffle mash", price: "$42" },
      { name: "Pan-Seared Salmon", description: "Wild-caught salmon, lemon dill sauce, wild rice pilaf, seasonal vegetables", price: "$32" },
      { name: "Truffle Mushroom Risotto", description: "Arborio rice, wild mushrooms, white wine, parmesan, truffle oil", price: "$26" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Classic Tiramisu", description: "Espresso soaked ladyfingers, mascarpone cream, cocoa powder", price: "$10" },
      { name: "Molten Lava Cake", description: "Warm chocolate cake with a gooey center, vanilla bean ice cream", price: "$12" }
    ]
  }
];

export default function Menu() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".menu-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.utils.toArray(".menu-category").forEach((category: any, i) => {
        gsap.fromTo(
          category,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 menu-header">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Discover</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">Our Menu</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((category, index) => (
            <div key={index} className="menu-category">
              <h3 className="text-2xl font-semibold text-stone-800 mb-6 border-b-2 border-amber-200 pb-2 inline-block">
                {category.category}
              </h3>
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-lg font-medium text-stone-900 group-hover:text-amber-700 transition-colors">{item.name}</h4>
                      <span className="text-lg font-semibold text-amber-700">{item.price}</span>
                    </div>
                    <div className="border-b border-dotted border-gray-300 w-full my-1"></div>
                    <p className="text-sm text-gray-500 italic mt-1 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#" className="inline-block border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            Download Full Menu (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}