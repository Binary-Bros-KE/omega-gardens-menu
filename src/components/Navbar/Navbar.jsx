"use client"

import { useState } from "react"
import {
  MapPin,
  Mail,
  Clock,
  Phone,
  ChevronDown,
  Search,
  ShoppingCart,
  User,
  Utensils,
  Coffee,
  Wine,
  Cake,
  Salad,
  Bed,
  Users,
  Scissors,
  Building,
  Dumbbell,
  Waves,
  TreePine,
  Baby,
  Heart,
  Menu,
  X,
  CookingPot,
} from "lucide-react"
import { href } from "react-router-dom"
import { MdOutlineHotel } from "react-icons/md"
import { SiWhatsapp } from "react-icons/si"
import { FaInstagram } from "react-icons/fa"
import { RiTiktokLine } from "react-icons/ri"
import { TbBrandFacebook } from "react-icons/tb"

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFoodsOpen, setIsFoodsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  const services = [
    { name: "Accommodations", icon: Bed, description: "Luxury rooms and suites", href: "/accomodation" },
    { name: "Conference Hall", icon: Users, description: "Professional meeting spaces", href: "/accomodation#boardroom" },
    { name: "Boardroom", icon: Building, description: "Executive meeting rooms", href: "/accomodation#boardroom" },
    { name: "Barbershop", icon: Scissors, description: "Professional grooming services", href: "/gym-and-spa#barbershop" },
    { name: "Wedding Grounds", icon: Heart, description: "Beautiful ceremony venues", href: "/wedding-grounds" },
    { name: "Team Building", icon: Users, description: "Corporate activities", href: "/gym-and-spa#team-building" },
    { name: "Swimming Pool", icon: Waves, description: "Refreshing pool experience", href: "/children-activities" },
    { name: "Gym & Spa", icon: Dumbbell, description: "Fitness and wellness center", href: "/gym-and-spa" },
    { name: "Children Playground", icon: Baby, description: "Safe play area for kids", href: "/children-activities" },
    { name: "Omega Gardens Bar", icon: Wine, description: "From Beers to Wines", href: "/bar" },
  ]

  const foodCategories = [
    { name: "Breakfast Menu", icon: Coffee, image: "/menu/tea.jpeg", href: "/restaurant-menu/tea" },
    { name: "Starters", icon: Utensils, image: "/menu/starters.jpg", href: "/restaurant-menu/starters" },
    { name: "Snacks & Pastries", icon: Cake, image: "/menu/snacks.png", href: "/restaurant-menu/snacks" },
    { name: "Lunch Menu", icon: CookingPot, image: "/menu/fish.jpg", href: "/restaurant-menu/starters" },
    { name: "Healthy Options", icon: Salad, image: "/menu/vegetables.jpg", href: "/restaurant-menu/vegetarian" },
    { name: "Bar Menu", icon: Wine, image: "/bar-menu/rum.png", href: "/bar-menu" },
  ]

  return (
    <header className="w-full font-fredoka">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-6 max-md:w-full">
            <div className="flex items-center space-x-2 max-md:w-full max-md:justify-between">
              <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">Along Karatina-Nairobi Highway</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              </div>
            </div>
            <div className="flex items-center space-x-2 max-md:hidden">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">info@omegagardens.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 max-md:hidden">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm">Opening Hours: Monday to Sunday - 6 AM to 11 PM</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white py-3 sm:py-4 px-4 border-b border-green-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-3">
              <img src="/logo.png" className="h-20" alt="" />
            </div>
          </a>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services, rooms, dining..."
                className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-green-500" />
            </div>
          </div>

          {/* Contact & CTA */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden sm:block text-right">
              <p className="text-xs text-gray-600">For any Inquiries/Booking</p>
              <p className="text-sm sm:text-lg font-bold text-green-800 flex items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
               +254 795 106483
              </p>
            </div>
            <a href="/contact" className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Book Now
            </a>
          </div>
        </div>

        {isMobileSearchOpen && (
          <div className="lg:hidden mt-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for services, rooms, dining..."
                className="w-full px-4 py-2 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-green-500" />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-gray-600 font-bold">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden lg:flex items-center">
            {/* Our Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-6 py-1 flex items-center space-x-2 transition-colors cursor-pointer"
              >
                <div className="bg-green-800 hover:bg-green-900 rounded-md px-6 py-2 flex items-center space-x-2 transition-colors text-white">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">OUR SERVICES</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </div>
              </button>

              {/* Services Mega Dropdown */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl z-50 rounded-b-lg">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-green-800 mb-6">Our Premium Services</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {services.map((service, index) => (
                        <a
                          href={service.href || "#"}
                          key={index}
                          className="group cursor-pointer p-4 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <service.icon className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                            <h4 className="font-semibold text-gray-800 group-hover:text-green-800">{service.name}</h4>
                          </div>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Navigation Links */}
            <div className="flex items-center space-x-1 ml-4">
              <a href="/" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
                <Coffee className="w-4 h-4" />
                <span>HOME</span>
              </a>

              {/* Foods Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsFoodsOpen(!isFoodsOpen)}
                  className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 cursor-pointer transition-colors"
                >
                  <Utensils className="w-4 h-4" />
                  <span>FOODS</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isFoodsOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Foods Mega Dropdown */}
                {isFoodsOpen && (
                  <div className="absolute top-full -left-90 w-screen max-w-6xl bg-white shadow-2xl z-50 rounded-b-lg">
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-8">
                        <h3 className="text-3xl font-bold text-green-800">Our Culinary Experience</h3>
                        <a href="/restaurant-menu" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          View Full Menu
                        </a>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {foodCategories.map((category, index) => (
                          <a key={index} href={category.href} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-4">
                              <img
                                src={category.image || "/placeholder.svg"}
                                alt={category.name}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <category.icon className="w-5 h-5 text-green-600" />
                              <h4 className="font-semibold text-gray-800 group-hover:text-green-800 transition-colors">
                                {category.name}
                              </h4>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="/bar" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
                <Wine className="w-4 h-4" />
                <span>BAR</span>
              </a>

              <a href="/accomodation" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
                <MdOutlineHotel className="w-4 h-4" />
                <span>ACCOMODATION</span>
              </a>

              <a href="/contact" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>CONTACT</span>
              </a>
            </div>
          </div>

          <div className="lg:hidden flex items-center justify-between w-full px-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-green-600 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="flex items-center space-x-2">
              <a
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 hover:bg-green-600 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </a>
              <a href="whatsapp://send?phone=+254700549496" className="p-2 hover:bg-green-600 rounded-full transition-colors relative">
                <SiWhatsapp className="w-5 h-5" />
              </a>
              <a className="p-2 hover:bg-green-600 rounded-full transition-colors">
                <User className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Desktop Right Side Icons */}
          <div className="hidden lg:flex items-center space-x-4 px-4">
            <a href="whatsapp://send?phone=+254700549496" className="p-2 hover:bg-green-600 hover:text-white cursor-pointer rounded-full transition-colors">
              <SiWhatsapp className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/theomegaleisuregardens" className="p-2 hover:bg-green-600 hover:text-white cursor-pointer rounded-full transition-colors relative">
              <TbBrandFacebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/omegagardens_/?hl=en" className="p-2 hover:bg-green-600 hover:text-white cursor-pointer rounded-full transition-colors relative">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/tag/omegagardenhotelkaratina" className="p-2 hover:bg-green-600 hover:text-white cursor-pointer rounded-full transition-colors">
              <RiTiktokLine className="w-5 h-5" />
            </a>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-green-800 text-white border-t border-green-600">
            <div className="px-4 py-2 space-y-1">
              {/* Our Services Mobile */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">OUR SERVICES</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {services.map((service, index) => (
                      <a
                        key={index}
                        href={service.href || "#"}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-green-700 rounded-lg transition-colors"
                      >
                        <service.icon className="w-4 h-4" />
                        <span className="text-sm">{service.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Links */}
              <a
                href="/"
                className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
              >
                <Coffee className="w-5 h-5" />
                <span>HOME</span>
              </a>

              {/* Foods Mobile */}
              <div>
                <button
                  onClick={() => setIsFoodsOpen(!isFoodsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Utensils className="w-5 h-5" />
                    <span>FOODS</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isFoodsOpen ? "rotate-180" : ""}`} />
                </button>

                {isFoodsOpen && (
                  <div className="ml-4 mt-2 space-y-1">
                    {foodCategories.map((category, index) => (
                      <a
                        key={index}
                        href={category.href}
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-green-700 rounded-lg transition-colors"
                      >
                        <category.icon className="w-4 h-4" />
                        <span className="text-sm">{category.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="/bar"
                className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
              >
                <Wine className="w-5 h-5" />
                <span>BAR</span>
              </a>

              <a
                href="/accomodation"
                className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
              >
                <MdOutlineHotel className="w-4 h-4" />
                <span>ACCOMODATION</span>
              </a>

              <a
                href="/contact"
                className="flex items-center space-x-3 px-4 py-3 hover:bg-green-700 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>CONTACT</span>
              </a>

              {/* Mobile Contact Info */}
              <div className="px-4 py-3 border-t border-green-600 mt-4">
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+254 795 106483</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>info@omegaleisuregardens.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for dropdowns */}
      {(isServicesOpen || isFoodsOpen) && !isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 bg-opacity-20 z-40"
          onClick={() => {
            setIsServicesOpen(false)
            setIsFoodsOpen(false)
          }}
        ></div>
      )}
    </header>
  )
}

export default Navbar
