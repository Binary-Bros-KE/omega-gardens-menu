"use client"

import { useRef } from "react"
import Slider from "react-slick"
import {
  ChevronLeft,
  ChevronRight,
  Bed,
  Users,
  Building,
  Scissors,
  Heart,
  Waves,
  Dumbbell,
  Baby,
  Wine,
  TreePine,
} from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ServicesShowcase = () => {
  const carouselRef = useRef(null)

  const services = [
    {
      name: "Accommodations",
      icon: Bed,
      description: "Luxury rooms and suites",
      image: "/home/accomodations.jpg",
      href: '/accomodation',
    },
    {
      name: "Conference Hall",
      icon: Users,
      description: "Professional meeting spaces",
      image: "/home/conference.jpg",
      href: '/accomodation#boardroom',
    },
    {
      name: "Boardroom",
      icon: Building,
      description: "Executive meeting rooms",
      image: "/home/boardroom.jpg",
      href: '/accomodation#boardroom',
    },
    {
      name: "Barbershop",
      icon: Scissors,
      description: "Professional grooming services",
      image: "/home/barbershop.jpg",
      href: '/gym-and-spa#barbershop',
    },
    {
      name: "Wedding Grounds",
      icon: Heart,
      description: "Beautiful ceremony venues",
      image: "/home/wedding.png",
      href: '/wedding-grounds',
    },
    {
      name: "Team Building",
      icon: Users,
      description: "Corporate activities",
      image: "/home/team-building.jpg",
      href: '/gym-and-spa#team-building',
    },
    {
      name: "Swimming Pool",
      icon: Waves,
      description: "Refreshing pool experience",
      image: "/home/swimming.jpg",
      href: '/children-activities',
    },
    {
      name: "Gym & Spa",
      icon: Dumbbell,
      description: "Fitness and wellness center",
      image: "/home/gym.jpeg",
      href: '/gym-and-spa',
    },
    {
      name: "Children Playground",
      icon: Baby,
      description: "Safe play area for kids",
      image: "/home/children.jpg",
      href: '/children-activities',
    },
    {
      name: "Rooftop Bar",
      icon: Wine,
      description: "Scenic dining experience",
      image: "/home/bar.jpeg",
      href: '/bar',
    },
  ]

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <section className="absolute w-full overflow-hidden  transform -translate-y-22 max-md:translate-y-1">
      <div className=" max-w-5xl  bg-[rgb(46,39,35)] rounded-xl py-2 mx-auto max-md:mx-5">
        {/* Background Image with Overlay */}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-md:gap-5">
            {/* Left Side - Text Content */}
            <div className="text-white space-y-6">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 lg:pl-8 max-md:text-center">
                  What are you looking for?
                </h2>
              </div>
            </div>

            {/* Right Side - Services Carousel */}
            <div className="relative">
              <Slider ref={carouselRef} {...carouselSettings}>
                {services.map((service, index) => (
                  <div key={index} className="px-2">
                    <a href={service.href} className="group cursor-pointer">
                      {/* Service Card */}
                      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={service.image || "/placeholder.svg"}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                          {/* Icon Overlay */}
                          <div className="absolute top-4 right-4 bg-green-500 bg-opacity-80 backdrop-blur-sm p-2 rounded-full">
                            <service.icon className="w-5 h-5 text-white" />
                          </div>

                          <h3 className="absolute w-full bottom-1 pl-2 left-0 text-sm font-bold text-white mb-2 group-hover:text-green-300 transition-colors">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>

              {/* Custom Navigation Arrows */}
              <button
                onClick={() => carouselRef.current?.slickPrev()}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-600 cursor-pointer group-hover:scale-110 transition-transform" />
              </button>

              <button
                onClick={() => carouselRef.current?.slickNext()}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm p-3 rounded-full transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 max-md:w-4 max-md:h-4 text-gray-600 cursor-pointer group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcase
