"use client"

import { Sun, Moon, Star, PartyPopper, Wine } from "lucide-react"

export default function RooftopBarSection() {
  const timeline = [
    { time: "5:30 PM", label: "Golden Hour", icon: <Sun className="w-4 h-4 text-amber-300" /> },
    { time: "7:00 PM", label: "Skyline Sips", icon: <Wine className="w-4 h-4 text-rose-300" /> },
    { time: "9:00 PM", label: "Live DJ", icon: <PartyPopper className="w-4 h-4 text-fuchsia-300" /> },
    { time: "11:00 PM", label: "Moonlit Lounge", icon: <Moon className="w-4 h-4 text-indigo-200" /> },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0f1420] via-[#0d0f18] to-[#090b12] py-16 md:py-24">
      {/* stars */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.6) 0, transparent 50%), radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,.5) 0, transparent 50%), radial-gradient(1px 1px at 50% 70%, rgba(255,255,255,.4) 0, transparent 50%)",
        }}
      />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm text-white/90">
            <Star className="w-4 h-4 text-yellow-300" />
            Rooftop Bar
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Skyline <span className="text-sky-300">Sunsets</span> & <span className="text-fuchsia-300">Moonlit</span>{" "}
            Nights
          </h2>
          <p className="mt-3 text-white/80 text-lg max-w-3xl mx-auto">
            Elevated views, chill beats, and a sunset‑to‑midnight cocktail journey above Omega Gardens.
          </p>
          <p className="mt-4 text-2xl text-sky-200" style={{ fontFamily: "var(--font-cursive)" }}>
            Meet us where the sky meets your glass.
          </p>
        </div>

        {/* timeline */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {timeline.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-5 text-white">
              <div className="flex items-center gap-2 text-white/80">
                {t.icon}
                <span className="text-sm">{t.time}</span>
              </div>
              <div className="mt-2 text-xl font-semibold">{t.label}</div>
              <div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 via-rose-300 to-sky-300" />
            </div>
          ))}
        </div>

        {/* ctas */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-sky-600 hover:bg-sky-700 text-white transition"
          >
            Book Sunset Seating
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-white/80 text-white hover:bg-white hover:text-gray-900 transition"
          >
            Rooftop Menu
          </a>
        </div>
      </div>
    </section>
  )
}
