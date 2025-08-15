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
} from "lucide-react"

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFoodsOpen, setIsFoodsOpen] = useState(false)

  const services = [
    { name: "Accommodations", icon: Bed, description: "Luxury rooms and suites" },
    { name: "Conference Hall", icon: Users, description: "Professional meeting spaces" },
    { name: "Boardroom", icon: Building, description: "Executive meeting rooms" },
    { name: "Barbershop", icon: Scissors, description: "Professional grooming services" },
    { name: "Wedding Grounds", icon: Heart, description: "Beautiful ceremony venues" },
    { name: "Team Building", icon: Users, description: "Corporate activities" },
    { name: "Swimming Pool", icon: Waves, description: "Refreshing pool experience" },
    { name: "Gym & Spa", icon: Dumbbell, description: "Fitness and wellness center" },
    { name: "Children Playground", icon: Baby, description: "Safe play area for kids" },
    { name: "Rooftop Bar", icon: Wine, description: "Scenic dining experience" },
  ]

  const foodCategories = [
    { name: "Breakfast Menu", icon: Coffee, image: "/placeholder.svg?height=200&width=300&text=Breakfast" },
    { name: "Fine Dining", icon: Utensils, image: "/placeholder.svg?height=200&width=300&text=Fine+Dining" },
    { name: "Bar Menu", icon: Wine, image: "/placeholder.svg?height=200&width=300&text=Bar+Menu" },
    { name: "Banquet Menu", icon: Cake, image: "/placeholder.svg?height=200&width=300&text=Banquet" },
    { name: "Healthy Options", icon: Salad, image: "/placeholder.svg?height=200&width=300&text=Healthy+Food" },
    { name: "Reception Coffee", icon: Coffee, image: "/placeholder.svg?height=200&width=300&text=Coffee" },
  ]

  return (
    <header className="w-full font-fredoka">
      {/* Top Bar */}
      <div className="bg-green-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Along Karatina-Nairobi Highway</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@omegagardens.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>Opening Hours: Monday to Sunday - 6 AM to 11 PM</span>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white py-4 px-4 border-b border-green-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" className="h-20" alt="" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
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
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">For any Inquiries/Booking</p>
              <p className="text-lg font-bold text-green-800 flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                +254 795 106 483
              </p>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white font-bold text-gray-600 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center">
          {/* Our Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="bg-green-800 text-white hover:bg-green-900 mx-2 my-2 px-6 py-2 rounded-sm flex items-center space-x-2 transition-colors"
            >
              <Menu className="w-5 h-5" />
              <span className="font-semibold">OUR SERVICES</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Services Mega Dropdown */}
            {isServicesOpen && (
              <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-2xl z-50 rounded-b-lg">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-green-800 mb-6">Our Premium Services</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer p-4 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <service.icon className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                          <h4 className="font-semibold text-gray-800 group-hover:text-green-800">{service.name}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Main Navigation Links */}
          <div className="flex items-center space-x-1 ml-4">
            <a href="#" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
              <Coffee className="w-4 h-4" />
              <span>HOME</span>
            </a>

            {/* Foods Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsFoodsOpen(!isFoodsOpen)}
                className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors"
              >
                <Utensils className="w-4 h-4" />
                <span>FOODS</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isFoodsOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Foods Mega Dropdown */}
              {isFoodsOpen && (
                <div className="absolute top-full -left-80 w-screen max-w-6xl bg-white shadow-2xl z-50 rounded-b-lg">
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-3xl font-bold text-green-800">Our Culinary Experience</h3>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        View Full Menu
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {foodCategories.map((category, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-lg mb-4">
                            <img
                              src={category.image || "/placeholder.svg"}
                              alt={category.name}
                              className="w-full h-35 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <category.icon className="w-5 h-5 text-green-600" />
                            <h4 className="font-semibold text-gray-800 group-hover:text-green-800 transition-colors">
                              {category.name}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
              <Wine className="w-4 h-4" />
              <span>BAR</span>
            </a>

            <a href="#" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
              <Cake className="w-4 h-4" />
              <span>EVENTS</span>
            </a>

            <a href="#" className="flex items-center space-x-2 px-4 py-4 hover:text-green-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>CONTACT</span>
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="ml-auto flex items-center space-x-4 px-4">
            <button className="p-2 hover:bg-green-600 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-green-600 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <button className="p-2 hover:bg-green-600 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay for dropdowns */}
      {(isServicesOpen || isFoodsOpen) && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
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
