"use client"

import { Scissors, Clock, Star, User, Sparkles, Phone } from "lucide-react"
import GallaryComponent from "../../../components/GallaryComponent"

export default function BarbershopSection() {
  const services = [
    {
      name: "Classic Haircut",
      price: "KSh 1,500",
      duration: "45 min",
      description: "Traditional styling with modern techniques",
    },
    {
      name: "Beard Grooming",
      price: "KSh 1,200",
      duration: "30 min",
      description: "Professional beard trimming and shaping",
    },
    {
      name: "Hot Towel Shave",
      price: "KSh 2,000",
      duration: "60 min",
      description: "Luxurious traditional wet shave experience",
    },
    {
      name: "Hair Styling",
      price: "KSh 1,800",
      duration: "40 min",
      description: "Special occasion styling and grooming",
    },
  ]



  const babershopImages = [
    "/gym/barber/barber-4.png",
    "/gym/barbar.jpg",
    "/gym/barber/barber-1.webp",
    "/gym/barber/barber-3.webp",
    "/gym/barber/barber-2.webp",
  ];


  const features = [
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Expert Barbers",
      description: "Skilled professionals with years of experience",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Products",
      description: "High-quality grooming products and tools",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Open daily from 8 AM to 8 PM",
    },
  ]

  return (
    <section className="pt-10 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-fredoka">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Scissors className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium">Professional Grooming</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-amber-600" style={{ fontFamily: "var(--font-cursive)" }}>
              Barbershop
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the art of traditional barbering with modern comfort and style at our premium grooming salon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">The Gentleman's Experience</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step into our classic barbershop where traditional craftsmanship meets contemporary style. Our master
                barbers provide personalized grooming services in a relaxing, sophisticated environment.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-amber-100 text-amber-600 p-2 rounded-lg flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/contact" className="w-fit bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/gym/barbar.jpg"
                alt="Barbershop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-amber-500 fill-current" />
                  <span className="font-semibold text-gray-900">4.9/5</span>
                </div>
                <div className="text-xs text-gray-600 text-center">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <GallaryComponent images={babershopImages} />
        </div>
      </div>
    </section>
  )
}