"use client"

import Slider from "react-slick"
import { ArrowRight } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Pulls categories from barMenu and renders a circular-tile carousel
export default function CategoryCarousel({ categories = [] }) {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="md:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mt-8">
          <Slider {...settings}>
            {categories.map((cat, idx) => (
              <div key={idx} className="px-3">
                <div className="group bg-white rounded-2xl text-center transition-all">
                  <div className="mx-auto relative size-40 md:size-44">
                    {/* circular backdrop */}
                    <div
                      className="absolute inset-0 rounded-full bg-gray-300/20"
                    />
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={cat.image || "/placeholder.svg?height=220&width=220&query=liquor%20bottle"}
                        alt={cat.title}
                        className="h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-base md:text-lg font-semibold text-gray-900">{cat.title}</div>
                    <div className="text-sm text-gray-500">{cat.count} items</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
