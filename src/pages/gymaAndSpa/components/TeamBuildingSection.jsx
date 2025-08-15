"use client"

import { Users, Target, Trophy, Lightbulb, MapPin, Calendar } from "lucide-react"
import WeekendFoods from "../../hotel/components/WeekendFoods"

export default function TeamBuildingSection() {
    const activities = [
        {
            title: "Outdoor Adventures",
            description: "Challenge your team with exciting outdoor activities",
            image: "/gym/teambulding-2.jpg",
            activities: ["Treasure Hunts", "Obstacle Courses", "Team Challenges", "Nature Walks"],
        },
        {
            title: "Problem Solving",
            description: "Enhance collaboration through strategic challenges",
            image: "/gym/teambulding-3.jpg",
            activities: ["Escape Rooms", "Strategy Games", "Puzzle Challenges", "Brain Teasers"],
        },
        {
            title: "Creative Workshops",
            description: "Foster innovation and creativity in your team",
            image: "/gym/teambulding-4.jpg",
            activities: ["Art Sessions", "Cooking Classes", "Music Activities", "Craft Projects"],
        },
    ]

    return (
        <section className="pt-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 font-fredoka">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="text-blue-700 font-medium">Corporate Activities</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Team{" "}
                        <span className="text-blue-600" style={{ fontFamily: "var(--font-cursive)" }}>
                            Building
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Strengthen bonds, improve communication, and boost morale with our expertly designed team building programs.
                    </p>
                </div>

                {/* Main Hero */}
                <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
                    <img
                        src="/gym/teambulding.jpg"
                        alt="Team Building"
                        className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-2xl mx-auto px-8 text-white">
                            <h3 className="text-4xl font-bold mb-4">Build Stronger Teams</h3>
                            <p className="text-xl mb-6 text-blue-100">
                                Our professional facilitators create engaging experiences that bring teams together and drive results.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <Target className="w-4 h-4" />
                                    <span className="text-sm">Goal-Oriented</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <Trophy className="w-4 h-4" />
                                    <span className="text-sm">Results-Driven</span>
                                </div>
                                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                    <Lightbulb className="w-4 h-4" />
                                    <span className="text-sm">Innovative</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {activities.map((activity, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h4>
                                <p className="text-gray-600 mb-4">{activity.description}</p>
                                <div className="space-y-2">
                                    {activity.activities.map((item, idx) => (
                                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Strengthen Your Team?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Our team building experts will work with you to design the perfect program for your organization's needs and
                        goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                            <Calendar className="w-5 h-5" />
                            <span>Schedule Program</span>
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2">
                            <MapPin className="w-5 h-5" />
                            <span>View Facilities</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <WeekendFoods />
            </div>
        </section>
    )
}
