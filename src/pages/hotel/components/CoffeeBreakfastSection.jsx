"use client"

import { useRef } from "react"
import Slider from "react-slick"
import { Coffee, ArrowRight, Star, Clock, Leaf, Heart } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CoffeeBreakfastSection = () => {
  const carouselRef = useRef(null)

  // Bundle categories for the right side
  const bundles = [
    {
      name: "Omega Breakfasts",
      description: "Start your day right",
      image: "/breakfast/omega-breakfast.png",
      items: "12+ Items",
      price: "From $8.99",
      color: "from-orange-400 to-red-500",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Sandwiches",
      description: "Fresh & delicious",
      image: "/breakfast/sandwich.png",
      items: "15+ Items",
      price: "From $6.99",
      color: "from-yellow-400 to-orange-500",
      href: "/restaurant-menu/sandwich",
    },
    {
      name: "Snacks & Pastries",
      description: "Freshly baked daily",
      image: "/breakfast/snacks.png",
      items: "18+ Items",
      price: "From $3.99",
      color: "from-pink-400 to-rose-500",
      href: "/restaurant-menu/snacks",
    },
    {
      name: "Desserts",
      description: "Sweet endings",
      image: "/breakfast/desserts.png",
      items: "25+ Items",
      price: "From $5.99",
      color: "from-purple-400 to-pink-500",
      href: "/restaurant-menu/desserts",
    },
  ]

  // Drinks for the carousel
  const drinks = [
    {
      name: "Hot Coffee",
      description: "Freshly brewed perfection",
      image: "/breakfast/hot-coffee.png",
      popular: "Espresso, Cappuccino, Latte",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Cold Coffee",
      description: "Refreshing iced delights",
      image: "/breakfast/cold-coffee.png",
      popular: "Iced Latte, Cold Brew, Frappé",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Hot Beverages",
      description: "Warming comfort drinks",
      image: "/breakfast/hot-beverage.png",
      popular: "Green Tea, Chai, Hot Chocolate",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Cold Tea",
      description: "Cool & refreshing",
      image: "/breakfast/cold-tea.png",
      popular: "Iced Tea, Lemonade, Sodas",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Herbal Tea",
      description: "Relaxing herbal infusions",
      image: "/breakfast/herbal-tea.png",
      popular: "Hibiscus, Camomile, Mint, Ginger",
      href: "/restaurant-menu/tea",
    },
    {
      name: "Smoothies",
      description: "Healthy fruit blends",
      image: "/breakfast/smoothie.png",
      popular: "Banana, Mango, Avocado, Pineapple",
      href: "/restaurant-menu/cocktails",
    },
    {
      name: "Cold Beverages",
      description: "Refreshing chilled drinks",
      image: "/breakfast/cold-beverages.png",
      popular: "Soda, Keringet, Delmonte, Redbull, Monster",
      href: "/restaurant-menu/smoothies",
    },
  ]

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section className="pb-20 bg-gradient-to-br from-green-50 to-emerald-50 pt-50 max-md:pt-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full">
              <Coffee className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium font-cursive">Fresh Daily</span>
            </div>

            <div>
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
                <span className="font-serif italic text-green-700">Omega Morning</span> Delights
              </h2>
              <h3 className="text-xl text-green-600 font-serif italic mb-6">& All-Day Favorites</h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Start your day with our carefully crafted breakfast selections, artisanal coffee blends, and delightful
              treats. From hearty morning meals to afternoon pick-me-ups, we have something special for every moment.
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Served 6 AM - 11 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="w-4 h-4" />
                <span>Organic Options</span>
              </div>
            </div>

            <a href="/restaurant-menu/tea" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 w-fit">
              <span>View Breakfast Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Center - Coffee Cup Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 flex items-center justify-center">
                <img
                  src="/breakfast/coffee.png"
                  alt="Premium Coffee"
                  className="w-80 h-80 object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <Star className="w-6 h-6 text-yellow-500 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <Heart className="w-6 h-6 text-red-500 fill-current" />
              </div>
            </div>
          </div>

          {/* Right Side - Bundle Cards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 font-serif italic">Popular Bundles</h3>
            {bundles.map((bundle, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl  px-4 py-1 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200"
              >
                <a href={bundle.href} className="flex items-center space-x-4">
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${bundle.color} rounded-lg flex items-center justify-center`}
                  >
                    <img
                      src={bundle.image || "/placeholder.svg"}
                      alt={bundle.name}
                      className="absolute w-200 h-200 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                      {bundle.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">{bundle.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-400">{bundle.items}</span>
                      <span className="text-sm font-semibold text-green-600">View Menu</span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks Carousel Section */}
        <div className="mt-20">

          {/* Carousel */}
          <div className="relative">
            <Slider ref={carouselRef} {...carouselSettings}>
              {drinks.map((drink, index) => (
                <a key={index} href={drink.href} className="px-3">
                  <div className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-green-200">
                    {/* Image */}
                    <img
                      src={drink.image || "/placeholder.svg"}
                      alt={drink.name}
                      className="w-32 h-32 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                    />

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors font-serif">
                        {drink.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{drink.description}</p>
                      <p className="text-xs text-gray-500 italic">Popular: {drink.popular}</p>
                      <div className="flex justify-center items-center pt-2">
                        <button className="hover:bg-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center space-x-1">
                          <span>More Info</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </Slider>

            {/* Custom Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => carouselRef.current?.slickPrev()}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5 rotate-180" />
              </button>
              <button
                onClick={() => carouselRef.current?.slickNext()}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoffeeBreakfastSection
