function DestinationCard({ destination, index }) {
  return (
    <a className={`destination-card destination-${index % 3 + 1}`} href="#booking">
      <img src={destination.image} alt={`${destination.name}, ${destination.country}`} />
      <div className="destination-overlay" />
      <span className="destination-tag">{destination.tag}</span>
      <div className="destination-title">
        <div><h3>{destination.name}</h3><span>{destination.country}</span></div>
        <span className="round-arrow">↗</span>
      </div>
    </a>
  )
}

export default DestinationCard
