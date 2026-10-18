import HotelBookingForm from '../components/HotelBookingForm.jsx'
import ListingCard from '../components/ListingCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { stays } from '../data/travelData.js'

function StaysPage() {
  return (
    <section className="listing-page section-wrap" id="stays">
      <div className="page-intro">
        <p className="eyebrow">STAY A LITTLE CLOSER</p>
        <h1>Find your place<br />in <em>Africa.</em></h1>
        <p>Sleep under a blanket of stars, wake up to the wild, or unwind where the ocean meets the shore.</p>
      </div>
      <div className="page-booking"><HotelBookingForm /></div>
      <SectionHeading eyebrow="HANDPICKED FOR YOU" title="Stays with a story" note="Independent stays, chosen for their character and the people behind them." />
      <div className="listing-grid">
        {stays.map((stay) => <ListingCard key={stay.name} item={stay} variant="stay" />)}
      </div>
      <div className="inline-booking">
        <div>
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>Ready to wake up here?</h2>
          <p>Tell us where you want to go. We&apos;ll help find the right stay.</p>
        </div>
        <a className="hero-button dark-button" href="#booking">Plan your stay <span>→</span></a>
      </div>
    </section>
  )
}

export default StaysPage
