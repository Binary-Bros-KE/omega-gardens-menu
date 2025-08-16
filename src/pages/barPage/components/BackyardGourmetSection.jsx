"use client"

import Slider from "react-slick"
import { Leaf, Sun, Flame, FlameIcon as Grill, PartyPopper, Utensils } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function BackyardGourmetSection() {
  const images = [
    "/bar-menu/backyard/backyard.jpg",
    "/bar-menu/backyard/backyard-2.jpg",
    "/bar-menu/backyard/backyard-3.jpg",
  ]

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4200,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const chips = [
    { icon: <Flame className="w-4 h-4" />, label: "Wood‑Fired Grill" },
    { icon: <Sun className="w-4 h-4" />, label: "Open‑Air Vibes" },
    { icon: <Leaf className="w-4 h-4" />, label: "Garden Fresh" },
    { icon: <PartyPopper className="w-4 h-4" />, label: "Family Friendly" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-lime-50 to-amber-50 py-16 md:py-24">
      {/* soft waves */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-48 bg-gradient-to-b from-emerald-200/40 to-transparent blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
            <Grill className="w-4 h-4" />
            <span>Omega Backyard Gourmet</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Open‑Air <span className="text-emerald-700">Garden Bar</span>
          </h2>
          <p className="mt-3 text-gray-700 text-lg">
            Golden hour cocktails, sizzling grills, and leafy surroundings. Where weekend vibes meet gourmet plates.
          </p>

          <p className="mt-4 text-2xl text-emerald-700/90" style={{ fontFamily: "var(--font-cursive)" }}>
            Sunshine, smoke, and sips.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {chips.map((c, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white rounded-full border border-emerald-200 px-3 py-2 text-sm text-emerald-800"
              >
                {c.icon}
                {c.label}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/bar-menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition"
            >
              View BBQ & Drinks
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-emerald-700 text-emerald-800 hover:bg-emerald-700 hover:text-white transition"
            >
              Book Outdoor Table
            </a>
          </div>
        </div>

        {/* Right slider */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-emerald-200/30 blur-xl" />
          <div className="relative rounded-3xl overflow-hidden border border-emerald-200 shadow-xl h-full">
            <Slider {...settings}>
              {images.map((src, i) => (
                <div key={i}>
                  <img src={src || "/placeholder.svg"} alt="Backyard Gourmet" className="w-full h-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* curved bottom */}
      <div className="mt-14 mx-auto max-w-7xl px-4">
        <div className="rounded-3xl bg-white p-5 md:p-6 shadow-sm border border-emerald-100">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700 ">
            <Utensils className="w-4 h-4 text-emerald-700" />
            Grill platters • Garden salads • Seasonal fruits • Craft mocktails & cocktails
          </div>
        </div>
      </div>
    </section>
  )
}
