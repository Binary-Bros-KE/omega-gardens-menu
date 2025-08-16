"use client"

import { Star } from "lucide-react"

// Utility: pick up to N items, one with an image from each category
function pickShowcaseItems(barMenu, limit = 12) {
  if (!barMenu) return []
  const entries = Object.entries(barMenu)
  const picked = []

  for (const [, cat] of entries) {
    if (!cat?.items?.length) continue
    // find the first item that has an image
    const withImage = cat.items.find((it) => it?.image)
    const chosen = withImage || cat.items[0]
    if (chosen) {
      picked.push({
        category: cat.title,
        name: chosen.name,
        price: chosen.price,
        image: chosen.image || cat.image || "/placeholder.svg?height=420&width=320",
      })
    }
    if (picked.length >= limit) break
  }

  // If we still have fewer than limit, cycle again using category image fallbacks
  if (picked.length < limit) {
    for (const [, cat] of entries) {
      if (picked.length >= limit) break
      picked.push({
        category: cat.title,
        name: cat.title,
        price: undefined,
        image: cat.image || "/placeholder.svg?height=420&width=320",
      })
    }
  }

  return picked.slice(0, limit)
}

export default function BarSelectionGrid({ barMenu, title = "Trending today" }) {
  const items = pickShowcaseItems(barMenu, 12)

  return (
    <section className="bg-white py-12 md:py-16 font-fredoka">
      {/* Hidden reference to match layout */}
      <figure aria-hidden="true" className="hidden">
        <img src="/reference/liquor-trending.png" alt="Trending grid reference" />
      </figure>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            <p className="text-sm md:text-base text-gray-600 mt-1">The best selection from Omega Gardens Bar</p>
          </div>
          <a href="/bar-menu" className="text-rose-600 font-semibold hover:underline">
            View All
          </a>
        </div>

        {/* Cards grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 transition-all"
            >
              <div className="w-full h-64 flex items-center justify-center bg-white rounded-xl">
                <img
                  src={it.image || "/placeholder.svg?height=420&width=320&query=liquor%20bottle"}
                  alt={it.name}
                  className="max-h-56 w-auto object-contain"
                />
              </div>

              <div className="mt-6 space-y-2 text-center">
                <div className="text-sm text-gray-500">{it.category}</div>
                <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{it.name}</h3>

                {/* Stars (static for visual parity) */}
                <div className="flex items-center justify-center gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < 4 ? "fill-current" : ""}`} />
                  ))}
                </div>

                <div className="flex items-center flex-col pt-1">
                  <div className="text-sm text-emerald-600">• In Stock</div>
                  <div className="text-xl font-bold text-gray-900">
                    {typeof it.price === "number" ? (
                      `KSh ${it.price.toFixed(2)}`
                    ) : (
                      <span className="text-gray-500">Ask bartender</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-10">
          <a
            href="/bar-menu"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-md font-semibold transition"
          >
            View Bar Menu
          </a>
        </div>
      </div>
    </section>
  )
}
