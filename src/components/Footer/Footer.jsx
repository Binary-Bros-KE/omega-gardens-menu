"use client"

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Star, TreePine } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 relative overflow-hidden bg-green-100 font-fredoka">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About Omega Gardens */}
          <div className="bg-green-700 text-white p-4 rounded-xl shadow-lg">
            <div className="mb-4">
                <img src="/logo.png" alt="logo" className="bg-white rounded-xl" /> 
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-300" />
                <span>Along Karatina-Nairobi Highway</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-300" />
                <span>+254 795 106 483</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-300" />
                <span>info@omegagardens.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="/" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="/accomodation" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Accommodations</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Reservations</span>
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Menus */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Our Menus</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="/restaurant-menu/tea" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Breakfast & Coffee</span>
                </a>
              </li>
              <li>
                <a href="/restaurant-menu/burgers" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Burgers & Pizzas</span>
                </a>
              </li>
              <li>
                <a href="/restaurant-menu" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Popular Dishes</span>
                </a>
              </li>
              <li>
                <a href="/restaurant-menu/beef" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>BBQ & Steaks</span>
                </a>
              </li>
              <li>
                <a href="/restaurant-menu/cocktails" className="hover:text-green-600 transition-colors flex items-center space-x-2">
                  <span className="text-green-500">&gt;</span> <span>Cocktails & Drinks</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-6">Newsletter</h3>
            <p className="text-gray-600 mb-4">Get recent news and updates from Omega Gardens.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md">
                Subscribe
              </button>
            </form>
 
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 Omega Gardens. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.facebook.com/theomegaleisuregardens" className="hover:text-green-600 transition-colors flex items-center space-x-2">
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/omegagardens_/?hl=en" className="hover:text-green-600 transition-colors flex items-center space-x-2">
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a href="https://www.tiktok.com/tag/omegagardenhotelkaratina" className="hover:text-green-600 transition-colors flex items-center space-x-2">
              <FaTiktok className="w-5 h-5" />
              <span>Tik Tok</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
