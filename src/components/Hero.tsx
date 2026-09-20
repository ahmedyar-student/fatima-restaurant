"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 }
      )
      .fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
        "-=0.8"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900 pt-20">
      {/* Background Image with Overlay */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto" ref={textRef}>
        <span className="hero-text block text-amber-500 font-medium tracking-widest uppercase mb-4 text-sm md:text-base">
          Welcome to
        </span>
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          FATIMA <br/> <span className="font-light italic text-gray-200">RESTAURANT</span>
        </h1>
        <p className="hero-text text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Where culinary passion meets tradition. Experience extraordinary flavors in an atmosphere of refined elegance.
        </p>
        <div className="hero-text flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#menu" className="w-full sm:w-auto bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300">
            View Menu
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-transparent border border-white text-white hover:bg-white hover:text-stone-900 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-300">
            Book a Table
          </a>
        </div>
      </div>
    </section>
  );
}