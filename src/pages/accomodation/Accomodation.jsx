import AccomodationIndex from "./components/AccomodationIndex";
import AvailableRoomsSection from "./components/AvailableRoomsSection";
import BoardroomIntro from "./components/BoardroomIntro";
import ConferenceServicesSection from "./components/ConferenceServicesSection";


export default function Accomodation() {
  return (
    <div>
      <div>
        <AccomodationIndex />
      </div>
      <div>
        <AvailableRoomsSection />
      </div>
      <div>
        <BoardroomIntro />
      </div>
      <div>
        <ConferenceServicesSection />
      </div>
    </div>
  )
}
