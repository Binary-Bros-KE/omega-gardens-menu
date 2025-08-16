"use client"

import { Sparkles, Music, Clock, Users, Wine } from "lucide-react"

export default function IndoorBarSection() {
  const highlights = [
    { icon: <Music className="w-4 h-4" />, label: "Live Jazz Fridays" },
    { icon: <Clock className="w-4 h-4" />, label: "Open till Late" },
    { icon: <Users className="w-4 h-4" />, label: "Intimate Seating" },
  ]

  const signatures = ["Negroni Classico", "Smoked Old Fashioned", "Velvet Espresso Martini", "Garden Spritz"]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0c0c0f] via-[#101014] to-[#13171b] py-16 md:py-24">
      {/* glow lines */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm">
            <Wine className="w-4 h-4 text-rose-300" />
            <span>Indoor Bar</span>
          </div>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Sophisticated <span className="text-rose-300">Indulgence</span>
          </h2>
          <p className="mt-3 text-white/80 text-lg">
            Ambient lighting, plush seating, and a curated spirits library. Perfect for intimate conversations and slow
            evenings.
          </p>

          {/* Cursive tag line */}
          <p className="mt-4 text-2xl md:text-3xl text-rose-200" style={{ fontFamily: "var(--font-cursive)" }}>
            Nights at Omega, best enjoyed neat.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-3">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-lg px-3 py-2 text-sm"
              >
                <span className="text-rose-300">{h.icon}</span>
                <span className="text-white/85">{h.label}</span>
              </div>
            ))}
          </div>

          {/* Signature list */}
          <div className="mt-8">
            <div className="text-sm uppercase tracking-widest text-white/60">Signature Cocktails</div>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {signatures.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-rose-600 hover:bg-rose-700 text-white transition"
            >
              Reserve a Table
            </a>
            <a
              href="/bar-menu"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-white/70 text-white hover:bg-white hover:text-gray-900 transition"
            >
              View Spirits List
            </a>
          </div>
        </div>

        {/* Collage */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-rose-500/20 blur-2xl" />
          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />

          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/bar-menu/indoor-bar/omega-bar-indoor-2.jpg"
                alt="Backlit bottle wall"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/bar-menu/indoor-bar/omega-bar-indoor-1.jpg"
                  alt="Mixology closeup"
                  className="w-full h-36 md:h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/bar-menu/indoor-bar/bar-banner.jpg"
                  alt="Lounge seating"
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
