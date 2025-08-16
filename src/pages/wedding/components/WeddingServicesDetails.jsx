import { Heart, Utensils, Bed, MapPin, Sparkles } from "lucide-react"

export default function WeddingServicesDetails() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-pink-500" />,
      title: "Choose Your Theme",
      description:
        "From romantic garden parties to elegant ballroom affairs, we help you select the perfect theme that reflects your love story.",
      features: ["Rustic Garden", "Classic Elegance", "Modern Chic", "Traditional Ceremony"],
    },
    {
      icon: <Utensils className="w-8 h-8 text-pink-500" />,
      title: "Exquisite Catering",
      description:
        "Our world-class chefs create memorable dining experiences with customized menus for your special day.",
      features: ["International Cuisine", "Local Delicacies", "Dietary Accommodations", "Wedding Cake Design"],
    },
    {
      icon: <Bed className="w-8 h-8 text-pink-500" />,
      title: "Guest Accommodation",
      description:
        "Comfortable lodging for your guests when celebrations run late, ensuring everyone enjoys your special day worry-free.",
      features: ["Luxury Suites", "Family Rooms", "Group Bookings", "Special Rates"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-pink-500" />,
      title: "Flexible Venues",
      description:
        "Multiple venue options to accommodate intimate gatherings or grand celebrations, all within our beautiful grounds.",
      features: ["Intimate (50-100)", "Medium (100-300)", "Grand (300-500)", "Outdoor Gardens"],
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need for Your
            <span className="text-pink-500 block" style={{ fontFamily: "var(--font-cursive)" }}>
              Perfect Wedding
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Omega Gardens, we take care of every detail so you can focus on what matters most - celebrating your
            love.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 border border-gray-100">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 rounded-full p-3 mr-4 group-hover:bg-pink-200 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Heart className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Planning?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our wedding specialists are here to help you create the perfect celebration. Let's discuss your vision and
              make it a reality.
            </p>
            <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
