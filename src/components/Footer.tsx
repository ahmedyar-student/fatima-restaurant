export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold tracking-tighter text-amber-500 mb-6">
              FATIMA <span className="text-white font-light">RESTAURANT</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the authentic taste of tradition mixed with modern culinary artistry. A dining experience you will never forget.
            </p>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-amber-500 transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact & Reservations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Thu:</span> <span>11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Fri - Sat:</span> <span>11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2 text-amber-500">
                <span>Sunday:</span> <span>12:00 PM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900 border border-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:border-amber-500 text-sm"
              />
              <button
                type="submit"
                className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Fatima Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}