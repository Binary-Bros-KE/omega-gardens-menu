import BBQSection from "./components/BBQSection";
import CoffeeBreakfastSection from "./components/CoffeeBreakfastSection";
import FoodSpecialsSection from "./components/FoodSpecialsSection";
import HeroSlider from "./components/HeroSlider";
import KidsSection from "../../components/KidsSection";
import PopularDishesSection from "./components/PopularDishesSection";
import ServicesShowcase from "./components/ServicesShowcase";
import WeekendIntro from "./components/WeekendIntro";
import GallaryComponent from "../../components/GallaryComponent";

const images = [
    "/weekend-foods/1.jpg",
    "/weekend-foods/2.jpg",
    "/weekend-foods/3.jpg",
    "/weekend-foods/4.jpg",
    "/weekend-foods/5.jpg",
];

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
      <GallaryComponent images={images}/>
    </div>
  )
}
