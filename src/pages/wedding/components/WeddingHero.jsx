import { Heart, Sparkles, Calendar, Users } from "lucide-react"

export default function WeddingHero() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-pink-300 animate-bounce">
        <Sparkles size={24} />
      </div>
      <div className="absolute top-32 right-20 text-rose-300 animate-pulse">
        <Heart size={20} />
      </div>
      <div className="absolute bottom-32 left-16 text-pink-400 animate-bounce delay-300">
        <Sparkles size={16} />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-pink-500">
                <Sparkles size={20} />
                <span className="text-sm font-medium tracking-wide uppercase">Dream Wedding Planning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let's Plan for{" "}
                <span className="relative">
                  Your Dream
                  <Heart className="absolute -top-2 -right-8 text-red-500 animate-pulse" size={32} />
                </span>
                <br />
                <span className="text-pink-500" style={{ fontFamily: "var(--font-cursive)" }}>
                  Wedding
                </span>
                <span className="text-pink-400 ml-2">💍</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                At Omega Gardens Hotel & Spa, we transform your special day into an unforgettable celebration. From
                intimate ceremonies to grand receptions, our expert team will bring your vision to life with elegance
                and attention to every detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300">
                View Packages
              </button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main circular image */}
              <div className="w-80 h-80 md:w-96 md:h-150 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                <img
                  src="/wedding/wedding-hero.jpg"
                  alt="Beautiful wedding couple"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring around image */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-pink-300 animate-spin-slow"></div>

              {/* Small floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <Calendar className="text-pink-500" size={24} />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-bounce delay-500">
                <Users className="text-pink-500" size={24} />
              </div>

              {/* Wedding planning text curve */}
              <div className="absolute top-8 right-8 text-pink-400 text-sm font-medium transform rotate-12">
                Wedding Planning
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
