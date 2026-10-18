import { useState } from 'react'
import { stays } from '../data/travelData.js'

function HotelBookingForm() {
  const [message, setMessage] = useState('')

  function submit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const checkIn = data.get('checkIn')
    const checkOut = data.get('checkOut')

    if (checkOut <= checkIn) {
      setMessage('Check-out must be after check-in.')
      return
    }

    const hotel = stays.find((stay) => stay.name === data.get('hotel'))
    setMessage(`Selected: ${hotel.name}, ${checkIn} to ${checkOut}, ${data.get('guests')}.`)
  }

  return (
    <form className="booking-bar hotel-booking-form" id="booking" onSubmit={submit}>
      <label>
        <span>Choose a stay</span>
        <select name="hotel" defaultValue={stays[0].name}>
          {stays.map((stay) => (
            <option key={stay.name} value={stay.name}>{stay.name} · {stay.place}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Check in</span>
        <input name="checkIn" type="date" required aria-label="Check-in date" />
      </label>
      <label>
        <span>Check out</span>
        <input name="checkOut" type="date" required aria-label="Check-out date" />
      </label>
      <label>
        <span>Guests</span>
        <select name="guests" defaultValue="2 guests">
          <option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5+ guests</option>
        </select>
      </label>
      <button className="search-button" type="submit">Check availability <span>→</span></button>
      {message && <p className="booking-message" role="status">{message}</p>}
    </form>
  )
}

export default HotelBookingForm
