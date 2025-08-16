"use client"

import Slider from "react-slick"
import { Wine, PartyPopper, Truck, PackageCheck, BadgeDollarSign, Clock } from "lucide-react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function LiquorShowcase() {
  const slides = [
    {
      titleTop: "SPECIAL VARIETY",
      title: "WINE TASTING",
      priceLabel: "From Only",
      price: "KSh 2,500",
      cta: "View Selection",
      image: "/bar-menu/wine-bottle-and-glass.jpg",
      href: "/bar-menu",
    },
    {
      titleTop: "SIGNATURE MIXOLOGY",
      title: "COCKTAIL CLASS",
      priceLabel: "From Only",
      price: "KSh 3,200",
      cta: "Our Bar Menu",
      image: "/bar-menu/cocktail-glasses.jpg",
      href: "/bar-menu",
    },
    {
      titleTop: "AGED SELECTION",
      title: "WHISKEY FLIGHT",
      priceLabel: "From Only",
      price: "KSh 3,800",
      cta: "Explore Flights",
      image: "/bar-menu/whisky-glass.webp",
      href: "/bar-menu",
    },
    {
      titleTop: "HOPPY HOURS",
      title: "CRAFT BEERS",
      priceLabel: "From Only",
      price: "KSh 600",
      cta: "See On Tap",
      image: "/bar-menu/beer-cup.jpg",
      href: "/bar-menu",
    },
  ]

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }

  const features = [
    {
      icon: <Truck className="w-6 h-6 text-rose-600" />,
      title: "Event Catering",
      desc: "Bar setups for parties & weddings",
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-rose-600" />,
      title: "Safe Packaging",
      desc: "Takeaway bottles & cocktails",
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-600" />,
      title: "Happy Hours",
      desc: "Daily specials, ask our team",
    },
    {
      icon: <BadgeDollarSign className="w-6 h-6 text-rose-600" />,
      title: "Fair Prices",
      desc: "Premium yet friendly",
    },
  ]

  return (
    <section className="bg-[#faf6f2] py-10 md:py-14">
      {/* Hidden reference image for traceability (will not render visually) */}
      <figure aria-hidden="true" className="hidden">
        <img src="/reference/liquor-hero-reference.png" alt="Reference layout for liquor hero" />
      </figure>

      <div className="max-w-7xl mx-auto px-4">
        {/* Top 3-panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left narrow promo */}
          <div className="lg:col-span-3 h-[420px] md:h-[520px] relative overflow-hidden rounded-2xl">
            <img
              src="/bar-menu/vodka.jpg"
              alt="Curated wine & spirits"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="text-white/90">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-3 py-1 rounded-full text-sm mb-4">
                  <Wine className="w-4 h-4" />
                  <span>Bar Selection</span>
                </div>
                <h3 className="text-3xl font-extrabold leading-tight">
                  Elevate Your
                  <br />
                  Evening
                </h3>
              </div>
              <a href="/bar-menu" className="self-start bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-md font-semibold transition">
                Explore Cellar
              </a>
            </div>
          </div>

          {/* Center wide slider */}
          <div className="lg:col-span-6 h-[420px] md:h-[520px] relative overflow-hidden rounded-2xl bg-white">
            <Slider {...sliderSettings} className="h-full">
              {slides.map((s, idx) => (
                <div key={idx} className="h-[420px] md:h-[520px] relative">
                  <img
                    src={s.image || "/placeholder.svg"}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35"></div>
                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center text-white">
                    <span className="uppercase tracking-widest text-sm md:text-base text-white/80">{s.titleTop}</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mt-2">
                      {s.title.split(" ").slice(0, 1).join(" ")}
                      <br />
                      {s.title.split(" ").slice(1).join(" ")}
                    </h2>
                    <div className="mt-4 text-lg md:text-2xl font-semibold">
                      {s.priceLabel}:{" "}
                      <span className="inline-block text-rose-600 font-extrabold px-2 py-1 rounded">{s.price}</span>
                    </div>
                    <div className="mt-6">
                      <a href={s.href} className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-md font-semibold transition">
                        {s.cta}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right narrow promo */}
          <div className="lg:col-span-3 h-[420px] md:h-[520px] relative overflow-hidden rounded-2xl">
            <img
              src="/bar-menu/whisky.png"
              alt="Party vibes at Omega Gardens"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-emerald-800/50"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <div>
                <span className="uppercase tracking-widest text-white/80 text-sm">Let’s</span>
                <h3 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
                  Begin
                  <br />
                  Party!
                </h3>
              </div>
              <a href="/bar-menu" className="self-start bg-rose-600 hover:bg-rose-700 text-white px-5 py-3 rounded-md font-semibold transition inline-flex items-center gap-2">
                View Whisky Menu
                <PartyPopper className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature strip */}
        <div className="mt-10 md:mt-14 bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 bg-rose-50 rounded-lg p-3">{f.icon}</div>
                <div>
                  <div className="font-semibold text-gray-900">{f.title}</div>
                  <div className="text-sm text-gray-500">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
