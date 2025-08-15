import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AccomodationIndex from "./components/AccomodationIndex";
import AvailableRoomsSection from "./components/AvailableRoomsSection";
import BoardroomIntro from "./components/BoardroomIntro";
import ConferenceServicesSection from "./components/ConferenceServicesSection";

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
    </div>
  );
}
