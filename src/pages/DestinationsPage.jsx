import BookingBar from '../components/BookingBar.jsx'
import DestinationCard from '../components/DestinationCard.jsx'
import { destinations } from '../data/travelData.js'

function DestinationsPage() {
  return (
    <section className="listing-page section-wrap" id="destinations">
      <div className="page-intro">
        <p className="eyebrow">A CONTINENT OF STORIES</p>
        <h1>One Africa.<br /><em>A thousand ways.</em></h1>
        <p>Find your own rhythm across Kenya and beyond, with people who make every place feel personal.</p>
      </div>
      <div className="page-booking"><BookingBar defaultService="A full trip" /></div>
      <div className="destination-grid all-destinations">
        {destinations.map((destination, index) => (
          <DestinationCard key={destination.name} destination={destination} index={index} />
        ))}
      </div>
    </section>
  )
}

export default DestinationsPage
