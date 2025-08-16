"use client"

import { Maximize, Palette, Utensils, Globe, Bed, ArrowRight, CalendarDays } from "lucide-react"

const ConferenceServicesSection = () => {
    const sections = [
        {
            id: 1,
            title: "Choose Your Perfect Space",
            subtitle: "From intimate boardrooms to grand conference halls.",
            description:
                "Whether you're hosting a small executive meeting or a large-scale seminar, Omega Gardens offers versatile spaces designed to meet your specific needs. Each room is equipped with state-of-the-art technology and comfortable seating.",
            image: "/home/boardroom.jpg",
            icon: Maximize,
            options: [
                {
                    name: "Boardroom",
                    capacity: "Up to 20 guests",
                    img: "/accomodations/small-boardroom.jpg"
                },
                {
                    name: "Small Conference",
                    capacity: "Up to 50 guests",
                    img: "/accomodations/boardrooms.jpg",
                },
                {
                    name: "Grand Hall",
                    capacity: "Up to 300 guests",
                    img: "/accomodations/large-boardroom.jpg",
                },
            ],
            bgColor: "bg-green-50",
            textColor: "text-green-800",
        },
        {
            id: 2,
            title: "Tailor Your Event's Theme",
            subtitle: "Customize your hall with a variety of lighting and decor themes.",
            description:
                "Bring your vision to life with our customizable event themes. From vibrant green setups for a fresh, modern feel to elegant reddish tones for a sophisticated ambiance, our team will transform the space to match your brand or occasion.",
            image: "/accomodations/custom-boardroom.jpg",
            icon: Palette,
            themes: [
                {
                    name: "Modern Green",
                    color: "bg-green-600",
                    img: "/accomodations/custom-boardroom.jpg"
                },
                {
                    name: "Elegant Red",
                    color: "bg-red-600",
                    img: "/home/boardroom.jpg"
                },
                {
                    name: "Classic Neutral",
                    color: "bg-gray-600",
                    img: "/accomodations/large-boardroom.jpg",
                },
            ],
            bgColor: "bg-white",
            textColor: "text-gray-800",
            reverse: true,
        },
        {
            id: 3,
            title: "Exceptional Culinary Catering",
            subtitle: "Delight your guests with bespoke menus for any event.",
            description:
                "Elevate your conference with our exquisite catering services. Our chefs can craft custom menus, from energizing coffee breaks and hearty lunch buffets to elegant gala dinners, ensuring a memorable culinary experience for all attendees.",
            image: "/slider/slider-3.jpg",
            icon: Utensils,
            foodOptions: [
                { name: "Coffee Breaks", img: "/menu/tea.jpeg" },
                { name: "Lunch Buffets", img: "/accomodations/buffets.jpg" },
                { name: "Cold Drinks", img: "/accomodations/cold-drinks.jpg" },
            ],
            bgColor: "bg-green-50",
            textColor: "text-green-800",
        },
        {
            id: 4,
            title: "A Welcoming Space for Every Voice",
            subtitle: "Embracing diversity and fostering global connections.",
            description:
                "At Omega Gardens, we pride ourselves on being a truly inclusive venue. Regardless of background, nationality, or culture, every individual is welcomed and respected. Our facilities are designed to ensure comfort and accessibility for all, making us the ideal choice for international and local gatherings alike.",
            image: "/accomodations/everybody.jpg",
            icon: Globe,
            bgColor: "bg-white",
            textColor: "text-gray-800",
            reverse: true,
        },
        {
            id: 5,
            title: "Seamless Extended Stays",
            subtitle: "Luxurious accommodations for multi-day seminars or late meetings.",
            description:
                "Should your meeting run late or your seminar span multiple days, Omega Gardens offers the convenience of on-site luxurious hotel rooms. Ensure your attendees are well-rested and ready for productive sessions, with all amenities just steps away.",
            image: "/accomodations/room-1.jpg",
            icon: Bed,
            bgColor: "bg-green-50",
            textColor: "text-green-800",
        },
    ]

    return (
        <section className="py-20 bg-gray-50 font-fredoka">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
                    <span className="font-serif italic text-green-700">Host Your Next</span> Event at Omega
                </h2>

                {sections.map((section) => (
                    <div
                        key={section.id}
                        className={`mb-20 p-8 rounded-3xl shadow-xl ${section.bgColor} transition-all duration-500`}
                    >
                        <div
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${section.reverse ? "lg:grid-flow-col-dense" : ""
                                }`}
                        >
                            {/* Image Column */}
                            <div className={`${section.reverse ? "lg:col-start-2" : ""}`}>
                                <div className="relative w-full h-130 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={section.image || "/placeholder.svg"}
                                        alt={section.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                                    <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded-full shadow-md">
                                        <section.icon className={`w-6 h-6 ${section.textColor}`} />
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className={`space-y-6 ${section.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                                <h3 className={`text-3xl font-bold ${section.textColor}`}>{section.title}</h3>
                                <p className={`text-xl font-medium ${section.textColor}`}>{section.subtitle}</p>
                                <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>

                                {/* Dynamic Options/Themes/Food */}
                                {section.options && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                        {section.options.map((option, idx) => (
                                            <div
                                                key={idx}
                                                className={`relative flex flex-col min-h-40 items-center text-center p-4 bg-[url('${option.img}')] bg-cover bg-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300`}
                                            >
                                                <img
                                                    src={option.img || "/placeholder.svg"}
                                                    alt={option.name}
                                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                                                <div className="w-full absolute bottom-0 rounded-b-lg text-white text-left pl-2 pb-1">
                                                    <h4 className="font-semibold text-white">{option.name}</h4>
                                                    <p className="text-sm text-white">— {option.capacity}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.themes && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                        {section.themes.map((theme, idx) => (
                                            <div
                                                key={idx}
                                                className="relative min-h-40 flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                                            >
                                                    <img
                                                        src={theme.img || "/placeholder.svg"}
                                                        alt={theme.name}
                                                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                    />
                                                                                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                                                <div className="w-full absolute bottom-0 rounded-b-lg text-white text-left pl-2 pb-1">
                                                    <h4 className="font-semibold text-white">{theme.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {section.foodOptions && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                        {section.foodOptions.map((food, idx) => (
                                            <div
                                                key={idx}
                                                className="min-h-40 relative flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                                            >
                                                <img
                                                    src={food.img || "/placeholder.svg"}
                                                    alt={food.name}
                                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                                                <div className="w-full absolute bottom-0 rounded-b-lg text-white text-left pl-2 pb-1">
                                                    <p className="text-sm text-white">— {food.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <a href="/contact" className="w-fit bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2 shadow-md">
                                    <span>Learn More</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Final Call to Action / Summary */}
                <div className="mt-20 text-center bg-green-700 text-white p-12 rounded-3xl shadow-xl">
                    <h3 className="text-4xl font-bold mb-6">Ready to Host Your Event?</h3>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Contact our dedicated events team today to plan your perfect conference, meeting, or special occasion at
                        Omega Gardens.
                    </p>
                    <a href="/contact" className="w-fit bg-white hover:bg-gray-100 text-green-800 px-10 py-5 rounded-lg font-bold text-xl transition-colors shadow-lg flex items-center justify-center mx-auto space-x-3">
                        <CalendarDays className="w-6 h-6" />
                        <span>Request a Quote</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ConferenceServicesSection
