"use client"

import { Dumbbell, Heart, Waves, Clock, Users, Star } from "lucide-react"
import WeekendFoods from "../../hotel/components/WeekendFoods"

export default function GymSpaSection() {
    const facilities = [
        {
            icon: <Dumbbell className="w-8 h-8" />,
            title: "Modern Gym",
            description: "State-of-the-art equipment for all fitness levels",
            features: ["Cardio Equipment", "Weight Training", "Personal Trainers", "Group Classes"],
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Luxury Spa",
            description: "Rejuvenating treatments for mind and body",
            features: ["Massage Therapy", "Facial Treatments", "Body Wraps", "Aromatherapy"],
        },
        {
            icon: <Waves className="w-8 h-8" />,
            title: "Wellness Center",
            description: "Holistic approach to health and wellness",
            features: ["Yoga Studio", "Meditation Room", "Sauna & Steam", "Wellness Consultations"],
        },
    ]

    return (
        <section className="pt-10 bg-white font-fredoka">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                        <Dumbbell className="w-5 h-5 text-green-600" />
                        <span className="text-green-700 font-medium">Fitness & Wellness</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Gym &{" "}
                        <span className="text-green-600" style={{ fontFamily: "var(--font-cursive)" }}>
                            Spa
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Maintain your fitness routine and indulge in luxurious spa treatments at our world-class wellness facility.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left - Image */}
                    <div className="relative">
                        <div className="relative h-160 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/home/gym.jpeg"
                                alt="Gym and Spa"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                            {/* Floating Stats */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                                <div className="flex items-center space-x-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">24/7</div>
                                        <div className="text-xs text-gray-600">Access</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">50+</div>
                                        <div className="text-xs text-gray-600">Equipment</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-600">5★</div>
                                        <div className="text-xs text-gray-600">Rating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Wellness Journey Starts Here</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Whether you're looking to maintain your fitness routine or unwind with a relaxing spa treatment, our
                                comprehensive wellness center offers everything you need for a balanced lifestyle.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid gap-4">
                            {facilities.map((facility, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors"
                                >
                                    <div className="bg-green-100 text-green-600 p-2 rounded-lg flex-shrink-0">{facility.icon}</div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-900 mb-1">{facility.title}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{facility.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {facility.features.map((feature, idx) => (
                                                <span key={idx} className="text-xs bg-white px-2 py-1 rounded-full text-gray-600">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center space-x-2">
                            <Clock className="w-5 h-5" />
                            <span>Book Your Session</span>
                        </button>
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                        <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900 mb-2">Expert Trainers</h4>
                        <p className="text-sm text-gray-600">Certified professionals to guide your fitness journey</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                        <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900 mb-2">Premium Equipment</h4>
                        <p className="text-sm text-gray-600">Latest fitness technology and spa equipment</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                        <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900 mb-2">Holistic Wellness</h4>
                        <p className="text-sm text-gray-600">Complete mind, body, and soul rejuvenation</p>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <WeekendFoods />
            </div>
        </section>
    )
}
