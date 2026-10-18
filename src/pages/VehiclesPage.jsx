import BookingBar from '../components/BookingBar.jsx'
import ListingCard from '../components/ListingCard.jsx'
import PageSlideshow from '../components/PageSlideshow.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { vehicleSlides, vehicles } from '../data/travelData.js'

function VehiclesPage() {
  return (
    <>
      <PageSlideshow slides={vehicleSlides} variant="vehicles" actionLabel="Find a vehicle" />
    <section className="listing-page section-wrap" id="vehicles">
      <div className="page-intro">
        <p className="eyebrow">TAKE THE SCENIC ROUTE</p>
        <h2>The road is<br />part of the <em>story.</em></h2>
        <p>Find a ride for every kind of adventure, from open-roof game drives to easy coastal miles.</p>
      </div>
      <div className="page-booking"><BookingBar defaultService="A vehicle" /></div>
      <SectionHeading eyebrow="GO YOUR OWN WAY" title="Vehicles for the journey" note="Reliable local rentals, with the right wheels for wherever the road leads." />
      <div className="listing-grid vehicle-grid">
        {vehicles.map((vehicle) => <ListingCard key={vehicle.name} item={vehicle} variant="vehicle" />)}
      </div>
      <div className="vehicle-note">
        <span className="note-icon">✳</span>
        <p><strong>Every journey, thoughtfully covered.</strong><br />Ask us about drivers, park fees, child seats, and one-way drop-offs when you plan your trip.</p>
        <a className="text-link" href="#booking">Ask a local <span>↗</span></a>
      </div>
    </section>
    </>
  )
}

export default VehiclesPage
