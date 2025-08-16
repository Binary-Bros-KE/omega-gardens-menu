"use client"

import { Bed, Maximize, Users, Star, MapPin } from "lucide-react"

const AvailableRoomsSection = () => {
  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      location: "Main Building, 3rd Floor",
      price: 3500,
      beds: 1,
      guests: 2,
      size: 300,
      image: "/accomodations/room-1.jpg",
      status: "Available",
      isFeatured: false,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Deluxe Room",
      location: "Main Building, 5th Floor",
      price: 6350,
      beds: 1,
      guests: 2,
      size: 400,
      image: "/accomodations/room-2.jpg",
      status: "Available",
      isFeatured: true,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Executive Suite",
      location: "Executive Wing, 2nd Floor",
      price: 2550,
      beds: 2,
      guests: 4,
      size: 700,
      image: "/accomodations/room-3.jpg",
      status: "Available",
      isFeatured: true,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Family Suite",
      location: "Family Wing, 1st Floor",
      price: 5650,
      beds: 3,
      guests: 6,
      size: 900,
      image: "/accomodations/room-4.jpg",
      status: "Available",
      isFeatured: false,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Presidential Suite",
      location: "Penthouse Level",
      price: 3200,
      beds: 2,
      guests: 4,
      size: 1500,
      image: "/accomodations/room-5.jpg",
      status: "Available",
      isFeatured: true,
      rating: 5.0,
    },
    {
      id: 6,
      name: "Garden View Room",
      location: "Garden Wing, Ground Floor",
      price: 2280,
      beds: 1,
      guests: 2,
      size: 320,
      image: "/accomodations/room-6.jpg",
      status: "Available",
      isFeatured: false,
      rating: 4.4,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-16">
          <span className="font-serif italic text-green-700">Our</span> Available Rooms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {room.isFeatured && (
                  <span className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </span>
                )}
                <span className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {room.status.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-700 transition-colors">
                  {room.name}
                </h3>
                <div className="flex items-center text-gray-500 text-sm space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{room.location}</span>
                </div>

                <div className="flex items-center justify-between text-gray-700">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Bed className="w-5 h-5 text-green-500" />
                      <span>{room.beds} Bed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-5 h-5 text-green-500" />
                      <span>{room.guests} Guests</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Maximize className="w-5 h-5 text-green-500" />
                      <span>{room.size} sq ft</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <div className="text-2xl font-bold text-green-600">KSh {room.price} / night</div>
                  <div className="flex items-center space-x-1 text-sm text-gray-700">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>
                      {room.rating} ({room.rating * 10} reviews)
                    </span>{" "}
                    {/* Placeholder for review count */}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md mt-4">
                  <a href="/contact">
                    Book Room
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AvailableRoomsSection
