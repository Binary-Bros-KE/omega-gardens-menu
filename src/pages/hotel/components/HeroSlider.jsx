"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Award, Users, Utensils, Sparkles, Clock, Play, Pause } from "lucide-react"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      title: "Experience Culinary Excellence",
      subtitle: "Farm-to-Table Fresh Ingredients",
      description:
        "Indulge in our carefully crafted dishes made from the finest organic ingredients, sourced directly from local farms. Every bite tells a story of quality, freshness, and culinary passion.",
      image: "/slider/slider-1.jpg",
      features: ["Organic Ingredients", "Master Chef Prepared", "Award-Winning Cuisine"],
      buttonText: "View Our Menu",
      bgColor: "from-green-900 to-green-700",
    },
    {
      id: 2,
      title: "Elegant Dining Atmosphere",
      subtitle: "Where Luxury Meets Comfort",
      description:
        "Step into our beautifully designed restaurant spaces featuring contemporary elegance, ambient lighting, and pristine cleanliness. Every detail is crafted to enhance your dining experience.",
      image: "/slider/slider-2.jpg",
      features: ["Premium Ambiance", "Spotless Environment", "Comfortable Seating"],
      buttonText: "Book a Table",
      bgColor: "from-green-800 to-emerald-600",
    },
    {
      id: 3,
      title: "Meet Our Master Chefs",
      subtitle: "Culinary Artists at Work",
      description:
        "Our internationally trained chefs bring decades of experience and passion to every dish. Watch them create culinary masterpieces in our open kitchen concept restaurant.",
      image: "/slider/slider-3.jpg",
      features: ["International Experience", "Creative Innovation", "Personalized Service"],
      buttonText: "Meet the Team",
      bgColor: "from-emerald-800 to-green-600",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-130">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
              }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-45`}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                {/* Text Content */}
                <div className="text-white space-y-6 text-center flex flex-col items-center justify-center">
                  {/* Badge */}
                  <div className="inline-flex items-center space-x-2 bg-green-500 bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full border border-green-300 border-opacity-30">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">Premium Experience</span>
                  </div>

                  {/* Main Title */}
                  <div>
                    <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">{slide.title}</h1>
                    <h2 className="text-xl lg:text-2xl text-green-200 font-medium font-serif italic">{slide.subtitle}</h2>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {slide.buttonText}
                    </button>
                    <button className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-2 rounded-lg font-semibold text-lg transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 max-md:left-2 top-70 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-600 group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 max-md:right-2 top-70 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-600 group-hover:scale-110 transition-transform" />
      </button>

    </section>
  )
}

export default HeroSlider
