import AfricaMark from './AfricaMark.jsx'

function StorySection() {
  return (
    <section className="story-band">
      <div className="story-image">
        <img src="/images/kenyan-landscape.jpg" alt="A Kenyan landscape beneath a wide African sky" />
      </div>
      <div className="story-copy">
        <p className="eyebrow">MORE THAN A DESTINATION</p>
        <h2>Travel that<br />feels like <em>belonging.</em></h2>
        <p>Meet the people who make a place. Stay a little longer. Take the road that wasn&apos;t on the map. We connect you with local hosts and thoughtful guides who know Africa by heart.</p>
        <a className="text-link" href="#about">Our way of travel <span>↗</span></a>
        <div className="story-note"><AfricaMark /><span>ROOTED HERE.<br />READY TO WELCOME YOU.</span></div>
      </div>
    </section>
  )
}

export default StorySection
