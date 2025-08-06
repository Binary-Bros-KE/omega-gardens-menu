"use client"

import { Play, Waves, Utensils, IceCream, Pizza, Smile, Star, ArrowRight, Drumstick } from "lucide-react"

const KidsActivitiesSection = () => {
  const activities = [
    {
      id: 1,
      title: "Bouncing Castles & Trampolines",
      description:
        "Let your little ones jump, bounce, and play to their heart's content in our vibrant and safe bouncing castles and trampolines. Endless fun guaranteed!",
      image: "/placeholder.svg?height=400&width=600&text=Bouncing+Castle",
      icon: Play,
      bgColor: "bg-green-50",
      reverse: false,
    },
    {
      id: 2,
      title: "Dedicated Kids Playgrounds",
      description:
        "Our specially designed playgrounds offer a variety of swings, slides, and climbing structures, providing a safe and stimulating environment for children of all ages.",
      image: "/placeholder.svg?height=400&width=600&text=Kids+Playground",
      icon: Smile,
      bgColor: "bg-white",
      reverse: true,
    },
  ]

  const kidsMenuHighlights = [
    {
      name: "Omega Kids Basket",
      description: "Mini cheese sandwich, beef sausage with fries & garden salad.",
      image: "/placeholder.svg?height=150&width=150&text=Kids+Basket",
      icon: Utensils,
      price: "KSh 650",
    },
    {
      name: "Cinderella Basket",
      description: "Mini pie/samosa, French fries & mini chicken sandwich with coleslaw.",
      image: "/placeholder.svg?height=150&width=150&text=Cinderella+Basket",
      icon: Pizza,
      price: "KSh 700",
    },
    {
      name: "Beef Noodles",
      description: "Delicious noodles with tender beef cubes, a kid's favorite.",
      image: "/placeholder.svg?height=150&width=150&text=Beef+Noodles",
      icon: Utensils,
      price: "KSh 800",
    },
    {
      name: "Hot Dog Delights",
      description: "Classic hot dog or grilled chicken cutlets with a side.",
      image: "/placeholder.svg?height=150&width=150&text=Hot+Dog",
      icon: Drumstick,
      price: "KSh 550",
    },
    {
      name: "Mini Burgers",
      description: "Perfectly sized mini burgers for little hands, served with fries.",
      image: "/placeholder.svg?height=150&width=150&text=Mini+Burger",
      icon: Utensils,
      price: "KSh 600",
    },
    {
      name: "Ice Cream Treats",
      description: "A variety of delightful ice cream flavors for a sweet ending.",
      image: "/placeholder.svg?height=150&width=150&text=Ice+Cream",
      icon: IceCream,
      price: "KSh 300",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Activities Showcase */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            <span className="font-serif italic text-green-700">Endless</span> Fun for Little Ones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Omega Gardens, we believe in creating joyful memories for the whole family. Explore our exciting range of
            activities and delicious treats designed just for kids!
          </p>
        </div>

        {activities.map((activity) => (
          <div
            key={activity.id}
            className={`mb-20 p-8 rounded-3xl shadow-xl ${activity.bgColor} transition-all duration-500`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                activity.reverse ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image Column */}
              <div className={`${activity.reverse ? "lg:col-start-2" : ""}`}>
                <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-3 rounded-full shadow-md">
                    <activity.icon className={`w-6 h-6 text-green-700`} />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className={`space-y-6 ${activity.reverse ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className={`text-3xl font-bold text-gray-800`}>{activity.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{activity.description}</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2 shadow-md">
                  <span>Discover More</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KidsActivitiesSection
