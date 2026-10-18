import { useState } from 'react'

function BookingBar({ defaultService = 'A stay' }) {
  const [message, setMessage] = useState('')

  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const service = data.get('service').toLowerCase()
    setMessage(`Lovely choice. We’ll help you plan ${service} in ${data.get('destination')} for ${data.get('travelers')}.`)
  }

  return (
    <form className="booking-bar" id="booking" onSubmit={submit}>
      <label>
        <span>Plan</span>
        <select name="service" defaultValue={defaultService}>
          <option>A stay</option><option>A vehicle</option><option>A full trip</option>
        </select>
      </label>
      <label>
        <span>Where to?</span>
        <select name="destination" defaultValue="Maasai Mara, Kenya">
          <option>Maasai Mara, Kenya</option><option>Diani Beach, Kenya</option><option>Amboseli, Kenya</option><option>Serengeti, Tanzania</option><option>Somewhere else in Africa</option>
        </select>
      </label>
      <label>
        <span>When?</span>
        <input name="date" type="date" aria-label="Travel date" />
      </label>
      <label>
        <span>Travelers</span>
        <select name="travelers" defaultValue="2 travelers">
          <option>1 traveler</option><option>2 travelers</option><option>3 travelers</option><option>4 travelers</option><option>5+ travelers</option>
        </select>
      </label>
      <button className="search-button" type="submit"><span>⌕</span> Find your trip</button>
      {message && <p className="booking-message" role="status">{message}</p>}
    </form>
  )
}

export default BookingBar
