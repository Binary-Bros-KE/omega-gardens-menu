import BBQSection from "./components/BBQSection";
import CoffeeBreakfastSection from "./components/CoffeeBreakfastSection";
import FoodSpecialsSection from "./components/FoodSpecialsSection";
import HeroSlider from "./components/HeroSlider";
import KidsSection from "../../components/KidsSection";
import PopularDishesSection from "./components/PopularDishesSection";
import ServicesShowcase from "./components/ServicesShowcase";
import WeekendFoods from "./components/WeekendFoods";
import WeekendIntro from "./components/WeekendIntro";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <HeroSlider />
      </div>
      <ServicesShowcase />
      <div>
        <CoffeeBreakfastSection />
      </div>

      <div>
        <FoodSpecialsSection />
      </div>

      <div>
        <PopularDishesSection />
      </div>

      <div>
        <KidsSection />
      </div>

      <div>
        <WeekendIntro />
      </div>

      <div>
        <BBQSection />
      </div>
      <WeekendFoods />
    </div>
  )
}
