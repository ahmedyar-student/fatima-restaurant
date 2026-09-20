"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        infoRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="text-amber-600 font-medium tracking-widest uppercase text-sm">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mt-2 mb-4">Contact & Reservations</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Information */}
          <div ref={infoRef} className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-2xl font-semibold text-stone-900 mb-8">Information</h3>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full">
                  <MapPin className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-stone-900">Location</h4>
                  <p className="mt-1 text-gray-600">123 Culinary Avenue, Food District<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full">
                  <Phone className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-stone-900">Phone</h4>
                  <p className="mt-1 text-gray-600">+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full">
                  <Mail className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-stone-900">Email</h4>
                  <p className="mt-1 text-gray-600">reservations@fatimarestaurant.com<br/>info@fatimarestaurant.com</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-50 p-3 rounded-full">
                  <Clock className="text-amber-700" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-stone-900">Opening Hours</h4>
                  <p className="mt-1 text-gray-600">Mon - Thu: 11:00 AM - 10:00 PM<br/>Fri - Sat: 11:00 AM - 11:30 PM<br/>Sun: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div ref={formRef} className="bg-stone-900 p-10 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-semibold mb-2">Book a Table</h3>
            <p className="text-gray-400 mb-8 text-sm">Reserve your spot and enjoy a wonderful dining experience.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                  <input type="date" id="date" className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">Time</label>
                  <input type="time" id="time" className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                  <select id="guests" className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Special Requests (Optional)</label>
                <textarea id="message" rows={3} className="w-full bg-stone-800 border border-stone-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors" placeholder="Any dietary requirements or special occasions?"></textarea>
              </div>

              <button type="button" className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medium py-4 rounded-md transition-colors text-lg">
                Confirm Reservation
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}