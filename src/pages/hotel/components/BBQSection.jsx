"use client"

import { Utensils, Coffee, Beef, BeefIcon as Burger } from "lucide-react"

const BBQSection = () => {
  const topFeatures = [
    {
      name: "Nyama Choma",
      image: "/weekend-foods/meat.png",
      description: "Finest cuts grilled to perfection",
    },
    {
      name: "Cold Drinks",
      image: "/weekend-foods/cold-cola.jpeg",
      description: "Refreshing beverages for all",
    },
    {
      name: "Wines & Alcohol",
      image: "/weekend-foods/gordon.jpg",
      description: "Curated selection of spirits",
    },
  ]

  const beefBBQItems = [
    {
      name: "Beef Fillet Steak",
      price: 800,
      description: "250g Fillet Tenderized served in a Creamy Pepper sauce",
    },
    {
      name: "Fried Beef on Bone",
      price: 1000,
      description: "500g Beef on Bone done to your specification",
    },
    {
      name: "Beef Choma",
      price: 1000,
      description: "500g of tender beef marinated and grilled to your specification",
    },
    {
      name: "Beef Pepper Chops",
      price: 1100,
      description: "500g beef chops well marinated, served with light pepper sauce",
    },
  ]

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}

        {/* Top Features */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-10 gap-8">
          {topFeatures.map((feature, index) => (
            <div
              key={index}
              className={`${index == 1 ? "transform translate-y-10" : ""} h-100 w-80 bg-red-600 relative bg-black bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer border-2 border-transparent transition-all duration-300`}
            >
              <img
                src={feature.image || "/placeholder.svg"}
                alt={feature.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div> */}
              <div className="absolute bottom-1 left-4 right-0 text-white bg-yellow-500 w-fit px-6 py-1 z-10 rounded-full min-w-[90%]">
                <h3 className="text-2xl font-bold mb-1 font-fredoka text-center">{feature.name}</h3>
              </div>
              <div className="absolute bg-black/10 inset-0 flex items-center justify-center p-4">
                <div className="h-full w-full border-2 border-yellow-500 rounded-xl"></div>
              </div>
            </div>
          ))}
        </div>


        {/* BBQ Menu Section */}
        <div className="relative min-h-150 rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Left: BBQ Image with Animation */}
          <div className="absolute flex justify-center z-10">
            <div className="relative w-full max-w-md">
              <img
                src="/weekend-foods/BBG.png"
                alt="BBQ Plate"
                className="w-full h-auto object-contain animate-spin-slow"
              />
              <style jsx>{`
                @keyframes spin-slow {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                .animate-spin-slow {
                  animation: spin-slow 80s linear infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Right: BBQ Menu List */}
          <div className="absolute w-[70%] space-y-6 bg-green-100/80 right-5 pl-40 pr-25 rounded-full py-6 font-fredoka">
            <h3 className="text-3xl font-bold text-gray-800">Omega BBQ Delights</h3>
            {beefBBQItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start pb-1 border-b border-gray-100 last:border-b-0"
              >
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
                <span className="text-lg font-bold text-green-600 flex-shrink-0 ml-4">KSh {item.price}</span>
              </div>
            ))}
            <div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-2 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                View Full BBQ Menu
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
            <img
              src="/weekend-foods/bbq.png"
              alt="Steaks & BBQ"
              className="w-full h-72 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Steaks & BBQ</h3>
              <p className="text-gray-300">Experience our premium grilled selections.</p>
            </div>

            <div className="absolute bottom-5 left-5 mt-4 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
              From KSh 1200
            </div>
          </div>

          <div className="relative bg-gray-900 rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
            <img
              src="/weekend-foods/cocktails.png"
              alt="Cocktails"
              className="w-full h-72 object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-0 left-0 right-0 p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">Cocktails</h3>
              <p className="text-gray-300">Sip on our expertly crafted signature drinks.</p>
            </div>
                     <div className="absolute bottom-5 left-5 mt-4 inline-block bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm">
              From KSh 1200
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BBQSection
