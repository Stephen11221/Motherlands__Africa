import BookingBar from '../components/BookingBar.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import StorySection from '../components/StorySection.jsx'
import { destinations } from '../data/travelData.js'

function HomePage({ setPage }) {
  return (
    <>
      <HeroSlideshow onExplore={() => setPage('destinations')} />
      <div className="booking-wrap"><BookingBar /></div>
      <section className="destinations section-wrap" id="destinations">
        <SectionHeading
          eyebrow="A CONTINENT OF STORIES"
          title={<>Where will Africa<br />take you?</>}
          note="From the savannah to the sea, find a place that feels like yours."
          link="All destinations"
          href="#destinations"
        />
        <div className="destination-grid">
          {destinations.slice(0, 3).map((destination, index) => (
            <DestinationCard key={destination.name} destination={destination} index={index} />
          ))}
        </div>
      </section>
      <StorySection />
    </>
  )
}

export default HomePage
