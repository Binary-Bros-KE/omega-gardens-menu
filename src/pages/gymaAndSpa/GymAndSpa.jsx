import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BarbershopSection from "./components/BarbershopSection";
import GymSpaSection from "./components/GymSpaSection";
import TeamBuildingSection from "./components/TeamBuildingSection";


export default function GymAndSpa() {
    useEffect(() => {
      if (location.hash) {
        const targetId = location.hash.replace("#", "");
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);


  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative py-20 bg-[url('/gym/gym-1.webp')] bg-cover bg-center overflow-hidden font-fredoka">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Omega{" "}
            <span className="text-green-300" style={{ fontFamily: "var(--font-cursive)" }}>
              Auxiliary Services
            </span>
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Discover our world-class amenities designed to enhance your stay. From fitness and wellness to professional
            grooming and team building activities.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>
      </section>
      <div id="gym-and-spa">
        <GymSpaSection />
      </div>
      <div id="team-building">
        <TeamBuildingSection />
      </div>
      <div id="barbershop">
        <BarbershopSection />
      </div>
    </div>
  )
}
