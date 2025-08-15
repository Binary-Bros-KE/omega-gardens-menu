export default function ContactHero() {
    return (
        <section className="relative py-20 bg-[url('/omega/omega.jpeg')] bg-cover bg-center overflow-hidden font-fredoka">
            <div className="absolute inset-0 bg-green-600/20"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Get In Touch
                </h1>
                <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
        </section >
    )
}
