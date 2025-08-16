"use client"

import { Sparkles, Star, Wine } from "lucide-react"

/**
 * Wines Feature Section
 * - Uses a background image that you will supply later (leave imageSrc as an empty string or pass your path).
 * - Text sits on the empty side of the image (defaults to left text, image positioned on right).
 * - Accessible overlay ensures good readability.
 *
 * Usage:
 * <WineFeatureSection imageSrc="" align="left" />
 *   - imageSrc: string (path to your background image in public/ or elsewhere)
 *   - align: "left" | "right" (where to keep the text block; defaults to "left")
 */
export default function WineFeatureSection({ imageSrc = "/bar-menu/wines-bg.png", align = "left" }) {
  const isLeft = align === "left"

  return (
    <section
      className="relative min-h-[350px] md:min-h-[560px] flex items-center"
      style={{
        backgroundImage: imageSrc ? `url('${imageSrc}')` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: isLeft ? "right center" : "left center",
      }}
      aria-label="Featured Wines"
    >
      {/* Reference (non-visual) */}
      <figure aria-hidden="true" className="hidden">
        <img src="/reference/wine-feature-reference.jpg" alt="Wine feature background reference" />
      </figure>

      {/* Overlay for readability */}
      <div
        className={`absolute inset-0 ${
          isLeft
            ? "bg-gradient-to-r from-black/70 via-black/40 to-transparent"
            : "bg-gradient-to-l from-black/70 via-black/40 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className={`max-w-7xl mx-auto px-4 py-16 md:py-24 flex ${isLeft ? "justify-start" : "justify-end"}`}>
          <div className={`w-full max-w-xl text-white ${isLeft ? "" : "text-right"}`}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full text-sm">
              <Wine className="w-4 h-4 text-rose-300" />
              <span className="text-white/90">Omega Gardens Cellar</span>
            </div>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Discover Our
              <span className="text-rose-300"> Signature Wines</span>
            </h2>

            <p className="mt-4 text-base md:text-lg text-white/90">
              From crisp whites to bold, aged reds—our curated selection is crafted to elevate every celebration. Enjoy
              by the glass, by the bottle, or book a private tasting with our team.
            </p>


            {/* CTAs */}
            <div className={`mt-8 flex flex-col sm:flex-row gap-3 ${isLeft ? "" : "sm:justify-end"}`}>
              <a
                href="/bar-menu"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-rose-600 hover:bg-rose-700 text-white transition"
              >
                Explore Wine List
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-white/80 text-white hover:bg-white hover:text-gray-900 transition"
              >
                Book Wine Tasting
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
