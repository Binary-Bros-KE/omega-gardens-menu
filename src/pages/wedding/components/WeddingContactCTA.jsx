import { MessageCircle, Mail, Phone, Instagram, Facebook } from "lucide-react"

export default function WeddingContactCTA() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp",
      description: "Quick responses for urgent questions",
      contact: "+254 795 106 483",
      action: "Chat Now",
      bgColor: "bg-green-500",
      hoverColor: "hover:bg-green-600",
      href: "https://wa.me/254795106483",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "Detailed planning discussions",
      contact: "weddings@omegagardens.com",
      action: "Send Email",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      href: "mailto:weddings@omegagardens.com",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+254 795 106 483",
      action: "Call Now",
      bgColor: "bg-pink-500",
      hoverColor: "hover:bg-pink-600",
      href: "tel:+254795106483",
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram",
      description: "See our latest wedding photos",
      contact: "@omegagardens",
      action: "Follow Us",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
      href: "https://instagram.com/omegagardens",
    },
    {
      icon: <Facebook className="w-8 h-8" />,
      title: "Facebook",
      description: "Join our wedding community",
      contact: "Omega Gardens Hotel",
      action: "Visit Page",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
      href: "https://facebook.com/omegagardens",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Do You Have Any Plan?</h2>
          <p className="text-2xl text-gray-700 mb-6" style={{ fontFamily: "var(--font-cursive)" }}>
            Let's talk with us
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start planning your dream wedding? Our team is here to help you every step of the way. Choose your
            preferred way to connect with us.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : "_self"}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : ""}
              className="group block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <div
                  className={`${method.bgColor} ${method.hoverColor} rounded-full p-4 w-16 h-16 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                <p className="text-gray-800 font-semibold mb-4">{method.contact}</p>

                {/* Action Button */}
                <div
                  className={`${method.bgColor} ${method.hoverColor} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block transition-colors`}
                >
                  {method.action}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Venue</h3>
            <p className="text-gray-600 mb-4">
              <strong>Address:</strong> Along Karatina-Nairobi Highway, Karatina, Kenya
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Opening Hours:</strong> Monday to Sunday - 6 AM to 11 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Schedule Site Visit
              </button>
              <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
