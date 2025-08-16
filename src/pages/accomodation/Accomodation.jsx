import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccomodationIndex from "./components/AccomodationIndex";
import AvailableRoomsSection from "./components/AvailableRoomsSection";
import BoardroomIntro from "./components/BoardroomIntro";
import ConferenceServicesSection from "./components/ConferenceServicesSection";
import GallaryComponent from "../../components/GallaryComponent";

export default function Accomodation() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const images = [
    "/accomodations/custom-boardroom.jpg",
    "/accomodations/large-boardroom.jpg",
    "/accomodations/boardrooms.jpg",
    "/accomodations/buffets.jpg",
    "/accomodations/room-1.jpg",
    "/accomodations/room-2.jpg",
    "/accomodations/room-3.jpg",
    "/accomodations/room-4.jpg",
    "/accomodations/room-5.jpg",
    "/accomodations/room-6.jpg",
  ];

  return (
    <div>
      <div id="accomodation-index">
        <AccomodationIndex />
      </div>
      <div id="available-rooms">
        <AvailableRoomsSection />
      </div>
      <div id="boardroom">
        <BoardroomIntro />
      </div>
      <div id="conference-services">
        <ConferenceServicesSection />
      </div>
      <div>
        <GallaryComponent images={images} />
      </div>
    </div>
  );
}
