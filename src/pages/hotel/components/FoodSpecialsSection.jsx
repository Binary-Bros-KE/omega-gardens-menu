"use client"

import { useRef, useState } from "react"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight, Star, Clock, Award, Flame } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const FoodSpecialsSection = () => {
    const carouselRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    const foodSpecials = [
        {
            id: 1,
            category: "Burgers",
            title: "Omega Signature Burgers",
            subtitle: "Fresh Ingredients & Bold Flavors",
            description:
                "Handcrafted burgers made with premium beef, fresh vegetables, and our secret sauces. Every bite is a journey to flavor paradise.",
            image: "/burgers/ingredient-burger.png",
            badge: "CHEF'S SPECIAL",
            discount: "15%",
            rating: 4.9,
            reviews: 324,
            priceRange: "Starting At Only KSh 600",
            features: ["100% Fresh Beef", "Artisan Buns", "Premium Toppings"],
            popular: "Traditional Beef Burger",
            bgColor: "from-red-600 to-orange-500",
              href: "/restaurant-menu/burgers",
        },
        {
            id: 2,
            category: "Pizzas",
            title: "Wood-Fired Pizzas",
            subtitle: "Authentic Italian Experience",
            description:
                "Crispy thin crust pizzas baked in our traditional wood-fired oven, topped with the finest ingredients and melted mozzarella cheese.",
            image: "/burgers/pizza.png",
            badge: "WOOD FIRED",
            discount: "20%",
            rating: 4.8,
            reviews: 287,
            priceRange: "Starting At Only Ksh 600",
            features: ["Wood-Fired Oven", "Fresh Mozzarella", "Italian Herbs"],
            popular: "Margherita Supreme",
            bgColor: "from-green-600 to-emerald-500",
              href: "/restaurant-menu/pizza",
        },
        {
            id: 3,
            category: "Chicken",
            title: "Golden Crispy Chicken",
            subtitle: "Juicy, Crunchy & Irresistible",
            description:
                "Tender chicken pieces seasoned with our special blend of spices, coated to perfection, and fried until golden crispy. A perfect balance of crunch and flavor in every bite.",
            image: "/burgers/fries.png",
            badge: "CUSTOMER FAVORITE",
            discount: "10%",
            rating: 4.7,
            reviews: 412,
            priceRange: "Starting At Only KSh 500",
            features: ["Special Spice Blend", "Crispy Coating", "Juicy Inside"],
            popular: "Crispy Coated Drumsticks",
            bgColor: "from-yellow-500 to-orange-400",
            href: "/restaurant-menu/chicken",
        },

    ]

    const carouselSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true,
        beforeChange: (current, next) => setCurrentSlide(next),
    }

    return (
        <section className="relative py-10 overflow-hidden">
            {/* Dark Textured Background */}
            <div className="absolute inset-0">
                <img
                    src="/burgers/background.png"
                    alt="Dark Background"
                    className="w-full h-full object-cover"
                />

            </div>


            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <Slider ref={carouselRef} {...carouselSettings}>
                    {foodSpecials.map((special, index) => (
                        <div key={special.id}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-md:gap-5 max-md:text-center items-center min-h-[500px]">
                                {/* Left Side - Content */}
                                <div className="text-white space-y-6 order-2 lg:order-1">

                                    {/* Main Title */}
                                    <div>
                                        <h3 className="text-xl text-green-400 font-bold mb-2">{special.subtitle}</h3>
                                        <h2 className="text-5xl lg:text-6xl text-white font-bold mb-2 max-md:text-3xl">
                                            {special.title}
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-gray-300 leading-relaxed max-w-lg">{special.description}</p>

                                    {/* Price & Popular Item */}
                                    <div className="space-y-2">
                                        <div className="text-2xl font-bold text-[rgb(243,39,76)] ">{special.priceRange}</div>
                                        <div className="text-sm text-gray-400">
                                            Most Popular: <span className="text-white font-medium">{special.popular}</span>
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="relative border-2 border-[rgb(243,39,76)] w-50 h-16 rounded-lg max-md:mx-auto">
                                        <a
                                        href={special.href}
                                            className={`bg-gradient-to-r bg-[rgb(243,39,76)] absolute top-1 -right-5 cursor-pointer hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl`}
                                        >
                                            View Our Menu
                                        </a>
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="relative order-1 lg:order-2">
                                    <div className="relative">
                                        {/* Main Food Image */}
                                        <div className="relative z-10">
                                            <img
                                                src={special.image || "/placeholder.svg"}
                                                alt={special.title}
                                                className="w-full max-w-lg mx-auto h-auto max-h-[500px] object-contain rounded-lg"
                                            />
                                        </div>

                                        {/* Discount Badge */}
                                        <div className="absolute top-8 right-8 z-20">
                                            <div className="relative">
                                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex flex-col items-center justify-center shadow-2xl transform rotate-12">
                                                    <span className="text-xs font-bold text-gray-800">UP TO</span>
                                                    <span className="text-2xl font-black text-gray-800">{special.discount}</span>
                                                    <span className="text-xs font-bold text-gray-800">OFF</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 max-md:-bottom-4">
                    <div className="flex space-x-3">
                        {foodSpecials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    carouselRef.current?.slickGoTo(index)
                                    setCurrentSlide(index)
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white bg-opacity-50 hover:bg-opacity-75"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FoodSpecialsSection
