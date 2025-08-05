"use client"

import { useRef } from "react"
import Slider from "react-slick"
import { Play, Utensils, Waves, IceCream, Sandwich, Pizza, Drumstick, ChevronLeft, ChevronRight } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const KidsSection = () => {
    const carouselRef = useRef(null)

    const kidsCategories = [
        {
            name: "Omega Kids Basket",
            image: "/kids/basket.png",
            dishesCount: "Cheese Sandwich, Sausage & Fries",
            icon: Sandwich,
        },
        {
            name: "Cinderella Basket",
            image: "/kids/cinderella.jpg",
            dishesCount: "Mini Pie, Fries & Chicken Sandwich",
            icon: Pizza,
        },
        {
            name: "Beef Noodles",
            image: "/kids/noodles.png",
            dishesCount: "Noodles with Beef Cubes",
            icon: Utensils,
        },
        {
            name: "Hot Dog Delights",
            image: "/kids/hotdogs.jpg",
            dishesCount: "Classic Hot Dogs & Grilled Chicken",
            icon: Drumstick,
        },
        {
            name: "Mini Burgers",
            image: "/menu/kids.jpg",
            dishesCount: "Perfectly Sized for Little Hands",
            icon: Sandwich,
        },
        {
            name: "Ice Cream Treats",
            image: "/kids/ice-cream-large.jpg",
            dishesCount: "Sweet Endings for Kids",
            icon: IceCream,
        },
    ]

    const carouselSettings = {
        dots: true,
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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Section: Kids Activities & Food Highlights */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-3 font-fredoka flex items-center justify-center gap-2">
                        <img src="/graphics/curve-line.png" className="h-8 transform scale-x-[-1]" />
                        FOR OUR YOUNGEST GUESTS
                        <img src="/graphics/curve-line.png" className="h-8" />
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 mb-12 font-cursive">
                        <span className="text-yellow-400">Bring Your Kids </span> to Omega Gardens
                    </h2>

                    <div className="flex items-center justify-center gap-10">
                        <div className="flex gap-6 lg:gap-8">
                            {/* Left Image */}
                            <img
                                src="/home/swimming.jpg"
                                alt="Kids Playing at Omega Gardens"
                                className="w-60 h-80 object-cover rounded-full"
                            />

                            {/* Middle Content & Image */}
                            <img
                                src="/kids/castle.jpg"
                                alt="Kids Menu on Phone"
                                className="w-40 h-80 object-cover rounded-full"
                            />
                            <img
                                src="/kids/ice-cream.jpg"
                                alt="Kids Menu on Phone"
                                className="w-40 h-80 object-cover rounded-full"
                            />
                        </div>
                        {/* Right Features */}
                        <div className="space-y-8 lg:text-left text-center">
                            <div className="flex items-center lg:justify-start justify-center space-x-4">
                                <div className="w-16 h-16 border-2 border-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Play className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 font-fredoka">Exciting Playgrounds</h3>
                                    <p className="text-gray-600 font-fredoka">Safe and fun areas for kids to explore and play.</p>
                                </div>
                            </div>
                            <div className="flex items-center lg:justify-start justify-center space-x-4">
                                <div className="w-16 h-16 border-2 border-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Waves className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 font-fredoka">Refreshing Swimming Pool</h3>
                                    <p className="text-gray-600 font-fredoka">A dedicated pool area for kids to splash and enjoy.</p>
                                </div>
                            </div>
                            <div className="flex items-center lg:justify-start justify-center space-x-4">
                                <div className="w-16 h-16 border-2 border-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Utensils className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 font-fredoka">Delicious Kids Menu</h3>
                                    <p className="text-gray-600 font-fredoka">Nutritious and tasty meals loved by children.</p>
                                </div>
                            </div>

                            <a href="" className="bg-green-600  py-2 px-8 rounded-lg text-white font-fredoka hover:bg-green-700 transition-colors text-xl">
                            
                                View Kids Menu
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Kids Menu & Activities Carousel */}
                <div className="mt-20">
                    {/* Carousel */}
                    <div className="relative">
                        <Slider ref={carouselRef} {...carouselSettings}>
                            {kidsCategories.map((category, index) => (
                                <div key={index} className="px-3">
                                    <div className="group cursor-pointer">
                                        <div className="bg-white rounded-2xl transition-all duration-300 overflow-hidden">
                                            {/* Image */}
                                            <div className="relative h-30 overflow-hidden">
                                                <img
                                                    src={category.image || "/placeholder.svg"}
                                                    alt={category.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full"
                                                />
                                                <div className="h-[90%] w-[90%] border-2 border-orange-600 absolute top-50 left-50 rounded-full"></div>
                                                <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full">
                                                    <category.icon className="w-5 h-5" />
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-4 text-center">
                                                <h4 className="text-xl font-bold text-gray-800 group-hover:text-green-700 transition-colors mb-2 font-fredoka">
                                                    {category.name}
                                                </h4>
                                                <p className="text-sm text-green-600 line-clamp-2">{category.dishesCount}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        {/* Custom Navigation Arrows */}
                        {/* <button
                            onClick={() => carouselRef.current?.slickPrev()}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors hidden md:block"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => carouselRef.current?.slickNext()}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors hidden md:block"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KidsSection
