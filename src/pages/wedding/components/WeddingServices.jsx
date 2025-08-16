import { Users, Sparkles } from "lucide-react"

export default function WeddingServices() {
  const services = [
    {
      title: "Garden Ceremony",
      subtitle: "Outdoor Pre-Wedding Decoration",
      description:
        "Exchange vows surrounded by our lush gardens and natural beauty. Our outdoor spaces provide the perfect romantic backdrop for your special moment.",
      image: "/home/wedding.png",
      icon: <Sparkles className="text-white" size={24} />,
      features: ["Natural Garden Setting", "Floral Arrangements", "Romantic Lighting", "Weather Backup Plan"],
    },
    {
      title: "Grand Reception",
      subtitle: "Wedding Reception in the Center",
      description:
        "Celebrate your union in our elegant reception hall, designed to accommodate your guests in style and comfort with world-class catering.",
      image: "/wedding/wedding-hero.jpg",
      icon: <Users className="text-white" size={24} />,
      features: ["Spacious Reception Hall", "Premium Catering", "Professional Service", "Custom Decorations"],
    },
  ]

  return (
    <section className="relative py-16 bg-black bg-[url('/home/wedding.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-green-600/20"></div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-32 h-full rounded-xl object-cover shadow-lg"
                  />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-600 rounded-full p-2 flex-shrink-0">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                      <p className="text-pink-100 text-sm font-medium">{service.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-pink-100">
                        <div className="w-1.5 h-1.5 bg-pink-200 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a href="/contact" className="bg-white text-pink-500 px-4 py-2 rounded-full text-sm font-semibold hover:bg-pink-50 transition-colors duration-300">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
