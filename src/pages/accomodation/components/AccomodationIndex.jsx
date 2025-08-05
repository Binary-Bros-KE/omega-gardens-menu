"use client"

import { useState } from "react"
import { CalendarDays, Users, BabyIcon as Child, Hotel, Search } from "lucide-react"

const AccommodationsPage = () => {
    const [checkInDate, setCheckInDate] = useState("")
    const [checkOutDate, setCheckOutDate] = useState("")
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [roomType, setRoomType] = useState("Standard Room")

    const handleSearchRooms = (e) => {
        e.preventDefault()
        // In a real application, you would send this data to a booking API
        console.log({
            checkInDate,
            checkOutDate,
            adults,
            children,
            roomType,
        })
        alert("Searching for rooms with your criteria! (This is a demo)")
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-fredoka">
            <main className="flex-1 py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Section: Title and Booking Form */}
                        <div className="space-y-8">
                            <div className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                                YOUR COMFORT, OUR COMMITMENT
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Your <span className="text-green-700 font-serif italic">Stay</span>, Our Priority.
                            </h1>
                            <p className="text-lg text-gray-600 max-w-lg">
                                Experience unparalleled comfort and luxury at Omega Gardens. Find the perfect room for your next
                                unforgettable getaway.
                            </p>

                            {/* Booking Form */}
                            <form onSubmit={handleSearchRooms} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Your Room</h3>

                                {/* Check-in & Check-out Dates */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-2">
                                            Check-in Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                id="check-in"
                                                value={checkInDate}
                                                onChange={(e) => setCheckInDate(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                                                required
                                            />
                                            <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-2">
                                            Check-out Date
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="date"
                                                id="check-out"
                                                value={checkOutDate}
                                                onChange={(e) => setCheckOutDate(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                                                required
                                            />
                                            <CalendarDays className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Guests & Room Type */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div>
                                        <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-2">
                                            Adults
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="adults"
                                                min="1"
                                                value={adults}
                                                onChange={(e) => setAdults(Number.parseInt(e.target.value))}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                                                required
                                            />
                                            <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-2">
                                            Children
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="children"
                                                min="0"
                                                value={children}
                                                onChange={(e) => setChildren(Number.parseInt(e.target.value))}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                                            />
                                            <Child className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="room-type" className="block text-sm font-medium text-gray-700 mb-2">
                                            Room Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="room-type"
                                                value={roomType}
                                                onChange={(e) => setRoomType(e.target.value)}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none pr-10"
                                            >
                                                <option>Standard Room</option>
                                                <option>Deluxe Room</option>
                                                <option>Executive Suite</option>
                                                <option>Family Suite</option>
                                                <option>Presidential Suite</option>
                                            </select>
                                            <Hotel className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2 shadow-md"
                                >
                                    <Search className="w-5 h-5" />
                                    <span>Search Rooms</span>
                                </button>
                            </form>
                        </div>

                        {/* Right Section: Image Collage */}
                        <div className="relative h-[600px] hidden lg:block">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-green-100 rounded-3xl shadow-xl"></div>
                            <div className="absolute top-0 left-0 w-[60%] h-[50%] rounded-3xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <img
                                    src="/accomodations/room-1.png"
                                    alt="Luxury Suite"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AccommodationsPage
