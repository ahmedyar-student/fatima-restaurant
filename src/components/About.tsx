"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div ref={textRef} className="w-full lg:w-1/2">
            <span className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              A Legacy of <br/>Culinary Excellence
            </h2>
            <div className="w-20 h-1 bg-amber-600 mb-8"></div>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded in 1998, Fatima Restaurant began with a simple vision: to bring authentic, hearty flavors to our community using only the freshest, locally sourced ingredients.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Over two decades later, our passion for exceptional food and warm hospitality remains unchanged. Every dish tells a story of tradition, crafted by chefs who view cooking not just as a profession, but as an art form.
            </p>

            <div className="flex items-center space-x-6">
               <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center border border-stone-200">
                    <span className="text-2xl font-bold text-amber-700">25+</span>
                  </div>
               </div>
               <div>
                 <h4 className="text-lg font-semibold text-stone-900">Years of Experience</h4>
                 <p className="text-sm text-gray-500">Delivering perfect dining experiences.</p>
               </div>
            </div>
          </div>

          {/* Images */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing food"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-stone-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-pulse"></div>
          </div>

        </div>
      </div>
    </section>
  );
}