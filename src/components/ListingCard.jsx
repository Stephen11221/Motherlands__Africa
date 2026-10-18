function ListingCard({ item, variant }) {
  const isVehicle = variant === 'vehicle'

  return (
    <article className={`stay-card ${isVehicle ? 'vehicle-card' : ''}`}>
      <div className="listing-image">
        <img src={item.image} alt={item.name} />
        <span className="image-label">{item.type}</span>
        {!isVehicle && <button className="favorite" aria-label={`Save ${item.name}`}>♡</button>}
      </div>
      <div className="listing-info">
        <div className="listing-title">
          <div><h3>{item.name}</h3><p>{item.place}</p></div>
          {!isVehicle && <span className="rating">★ {item.rating}</span>}
        </div>
        <div className="listing-bottom">
          <span><strong>{item.price}</strong> <small>{item.priceNote}</small></span>
          <a className="small-button" href="#booking">{isVehicle ? 'Book vehicle' : 'Book stay'}</a>
        </div>
      </div>
    </article>
  )
}

export default ListingCard
