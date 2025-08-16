import { MessageCircle, Mail, Phone, Instagram, Facebook } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function ContactMethods() {
    const contactMethods = [
        {
            icon: <FaWhatsapp className="w-8 h-8" />,
            title: "WhatsApp",
            description: "Quick responses for urgent inquiries",
            contact: "+254 795 106 483",
            action: "Chat Now",
            bgColor: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            href: "whatsapp://send?phone=+254700549496",
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email",
            description: "Detailed inquiries and bookings",
            contact: "info@omegaleisuregardens.com",
            action: "Send Email",
            bgColor: "bg-blue-500",
            hoverColor: "hover:bg-blue-600",
            href: "mailto:info@omegaleisuregardens.com",
        },
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Call Us",
            description: "Speak directly with our team",
            contact: "+254 795 106483",
            action: "Call Now",
            bgColor: "bg-green-600",
            hoverColor: "hover:bg-green-700",
            href: "tel:+254795106483",
        },
        {
            icon: <Instagram className="w-8 h-8" />,
            title: "Instagram",
            description: "Follow our latest updates",
            contact: "@omegagardens",
            action: "Follow Us",
            bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
            hoverColor: "hover:from-purple-600 hover:to-pink-600",
            href: "https://www.instagram.com/omegagardens",
        },
        {
            icon: <Facebook className="w-8 h-8" />,
            title: "Facebook",
            description: "Join our community",
            contact: "Omega Gardens Hotel",
            action: "Visit Page",
            bgColor: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            href: "https://www.facebook.com/theomegaleisuregardens",
        },
        {
            icon: <FaTiktok className="w-8 h-8"/>,
            title: "Tik Tok",
            description: "Catch us on TikTok",
            contact: "Omega Gardens Hotel",
            action: "Visit Page",
            bgColor: "bg-black",
            hoverColor: "hover:bg-blue-700",
            href: "https://www.tiktok.com/tag/omegagardenhotelkaratina",
        },
    ]

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                    className={`${method.bgColor} ${method.hoverColor} rounded-full p-4 w-16 h-16 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform mx-auto`}
                                >
                                    {method.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                                    <p className="text-gray-800 font-semibold mb-4 text-sm">{method.contact}</p>

                                    {/* Action Button */}
                                    <div
                                        className={`${method.bgColor} ${method.hoverColor} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block transition-colors`}
                                    >
                                        {method.action}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    )
}
