import { motion } from "framer-motion";
import { FaSwimmer, FaSkating, FaPizzaSlice, FaChild } from "react-icons/fa";
import { GiCastle, GiSoccerField } from "react-icons/gi";
import { Sparkles } from "lucide-react";

export default function KidsActivities() {
  const activities = [
    { title: "Swimming Pool", icon: <FaSwimmer />, img: "/home/swimming.jpg", desc: "Safe, shallow pool just for kids, with floaties and toys." },
    { title: "Skating", icon: <FaSkating />, img: "/kids/skating.jpg", desc: "Smooth skating rink with safety gear provided." },
    { title: "Bouncing Castles", icon: <GiCastle />, img: "/kids/castle.jpg", desc: "Colorful inflatable castles for endless fun." },
    { title: "Trampolines", icon: <GiCastle />, img: "/kids/trampolines.jpg", desc: "High-energy jumping fun in a safe environment." },
    { title: "Kids Playground", icon: <GiSoccerField />, img: "/kids/playground.jpg", desc: "Slides, swings, and climbing adventures." },
    { title: "Kids Menu", icon: <FaPizzaSlice />, img: "/kids/ice-cream.jpg", desc: "Yummy treats made for little tummies." },
  ];


  return (
    <div className="bg-gradient-to-b from-sky-100 via-pink-50 to-yellow-100 font-fredoka">
      {/* Hero Section */}
      <section className="relative text-center py-16 overflow-hidden">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-5xl font-extrabold text-pink-500 drop-shadow-lg "
        >
          Kids Activities at Omega Gardens
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg max-w-xl mx-auto text-gray-700"
        >
          A magical space for kids to swim, jump, skate, and explore — all in a safe, colorful world!
        </motion.p>
        <Sparkles className="absolute top-6 left-6 text-yellow-400 w-10 h-10 animate-pulse" />
        <Sparkles className="absolute bottom-6 right-6 text-pink-400 w-10 h-10 animate-pulse" />
      </section>

      {/* Activities Grid */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img src={a.img} alt={a.title} className="h-48 w-full object-cover" />
              <div className="p-6 text-center">
                <div className="text-4xl text-yellow-500 flex justify-center mb-4">{a.icon}</div>
                <h3 className="text-xl font-bold text-pink-600">{a.title}</h3>
                <p className="text-gray-600 mt-2">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
