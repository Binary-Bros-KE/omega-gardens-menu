"use client"

import { useState } from "react"
import { Star, ShoppingCart, Heart, Clock, Award, Utensils } from "lucide-react"

const PopularDishesSection = () => {
  const [favorites, setFavorites] = useState(new Set())

  const popularDishes = [
    {
      id: 1,
      category: "Starters",
      name: "Starters",
      price: 450,
      originalPrice: 500,
      rating: 4.8,
      reviews: 124,
      image: "/menu/starters.jpg",
      isNew: true,
      isPopular: false,
      description: "Salads, Soups, Bittings, Crispy Fish Fingers",
      prepTime: "5 mins",
      href: "/restaurant-menu/starters",
    },
    {
      id: 2,
      category: "Pasta",
      name: "Pasta",
      price: 750,
      originalPrice: 850,
      rating: 4.9,
      reviews: 89,
      image: "/menu/pasta.png",
      isNew: false,
      isPopular: true,
      description: "Spaghetti, Macaroni, Chinese Noodles",
      prepTime: "15 mins",
      href: "/restaurant-menu/pasta",
    },
    {
      id: 3,
      category: "Beef",
      name: "Beef",
      price: 1200,
      originalPrice: 1350,
      rating: 4.7,
      reviews: 156,
      image: "/menu/beef.jpg",
      isNew: false,
      isPopular: true,
      description: "Beef Stew, Fried Beef on Bone, Beef Choma",
      prepTime: "20 mins",
      href: "/restaurant-menu/beef",
    },
    {
      id: 4,
      category: "Chicken",
      name: "Chicken",
      price: 950,
      originalPrice: 1100,
      rating: 4.6,
      reviews: 203,
      image: "/menu/chicken.png",
      isNew: true,
      isPopular: false,
      description: "Chicken Capon, Crispy Coated Drumsticks",
      prepTime: "25 mins",
      href: "/restaurant-menu/chicken",
    },
    {
      id: 5,
      category: "Fish",
      name: "Fish",
      price: 1100,
      originalPrice: 1250,
      rating: 4.8,
      reviews: 78,
      image: "/menu/fish.jpg",
      isNew: false,
      isPopular: true,
      description: "Whole Tilapia, Coconut Whole Fish",
      prepTime: "30 mins",
      href: "/restaurant-menu/fish",
    },
    {
      id: 6,
      category: "Pork",
      name: "Pork",
      price: 1350,
      originalPrice: 1500,
      rating: 4.9,
      reviews: 92,
      image: "/menu/pork.png",
      isNew: true,
      isPopular: true,
      description: "Grilled Pork Spare Ribs, Fried Pork",
      prepTime: "35 mins",
      href: "/restaurant-menu/pork",
    },
    {
      id: 7,
      category: "Mutton",
      name: "Mutton",
      price: 1450,
      originalPrice: 1600,
      rating: 4.7,
      reviews: 67,
      image: "/menu/mutton.png",
      isNew: false,
      isPopular: false,
      description: "Spiced mutton chops with mint sauce",
      prepTime: "40 mins",
      href: "/restaurant-menu/mutton",
    },
    {
      id: 8,
      category: "Vegetarian",
      name: "Vegetable Corner",
      price: 550,
      originalPrice: 650,
      rating: 4.5,
      reviews: 134,
      image: "/menu/vegetables.jpg",
      isNew: false,
      isPopular: false,
      description: "Mixed Vegetable Stew, Fried Moong Dal",
      prepTime: "20 mins",
      href: "/restaurant-menu/vegetarian",
    },
    {
      id: 9,
      category: "Indian",
      name: "Indian Dishes",
      price: 850,
      originalPrice: 950,
      rating: 4.8,
      reviews: 187,
      image: "/menu/indian.jpg",
      isNew: true,
      isPopular: true,
      description: "Chicken Biryani, Chicken Curry, Vegetable Curry",
      prepTime: "45 mins",
      href: "/restaurant-menu/indian",
    },
    {
      id: 10,
      category: "African",
      name: "African Dishes",
      price: 400,
      originalPrice: 450,
      rating: 4.6,
      reviews: 98,
      image: "/menu/african-food.png",
      isNew: false,
      isPopular: false,
      description: "Ugali Managu, Githeri Minji, Plain Matoke, Beef Matoke",
      prepTime: "15 mins",
      href: "/restaurant-menu/african",
    },
  ]

  const toggleFavorite = (dishId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(dishId)) {
        newFavorites.delete(dishId)
      } else {
        newFavorites.add(dishId)
      }
      return newFavorites
    })
  }

  return (
    <section className="py-10 bg-gradient-to-br from-green-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium font-cursive">Chef's Recommendations</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="font-serif italic text-green-700">Popular</span> Dishes
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Discover our most loved dishes from around the world, crafted with passion and served with excellence
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">
          {popularDishes.map((dish) => (
            <a
              key={dish.id}
              href={dish.href}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-2">
                  {dish.isNew && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                  )}
                  {dish.isPopular && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">POPULAR</span>
                  )}
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(dish.id)}
                  className="absolute top-3 right-3 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      favorites.has(dish.id) ? "text-red-500 fill-current" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Prep Time */}
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded-lg text-xs flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{dish.prepTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Category */}

                {/* Name & Description */}
                <div>
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-green-700 transition-colors line-clamp-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{dish.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(dish.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{dish.rating}</span>
                  <span className="text-xs text-gray-500">({dish.reviews})</span>
                </div>

                {/* Price & Add to Cart */}
                <div className="flex items-center justify-between pt-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-sm transition-all duration-300 transform hover:scale-110 shadow-lg">
                    View Dishes
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
                     <Utensils className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="/restaurant-menu" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Complete Menu
          </a>
        </div>
      </div>
    </section>
  )
}

export default PopularDishesSection
