import { useEffect, useState } from 'react'
import { heroSlides } from '../data/travelData.js'
import AfricaMark from './AfricaMark.jsx'

function HeroSlideshow({ onExplore }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = heroSlides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [])

  function moveSlide(direction) {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-photos" aria-live="polite">
        {heroSlides.map((item, index) => (
          <img key={item.image} className={`hero-photo ${index === activeSlide ? 'is-visible' : ''}`} src={item.image} alt={item.alt} aria-hidden={index !== activeSlide} />
        ))}
      </div>
      <div className="hero-shade" />
      <div className="hero-content" key={activeSlide}>
        <p className="hero-kicker"><span /> YOUR AFRICA, YOUR WAY</p>
        <h1>{slide.titleFirst}<br /><em>{slide.titleSecond}</em></h1>
        <p className="hero-copy">{slide.copy}</p>
        <a className="hero-button" href="#destinations" onClick={onExplore}>Explore Africa <span>→</span></a>
      </div>
      <div className="hero-caption" aria-live="polite">
        <span>0{activeSlide + 1} / 0{heroSlides.length}</span><span className="caption-rule" /><span>{slide.location}</span>
      </div>
      <div className="slide-controls" aria-label="Slideshow controls">
        <button type="button" aria-label="Previous slide" onClick={() => moveSlide(-1)}>←</button>
        <div className="slide-dots">
          {heroSlides.map((item, index) => (
            <button key={item.location} type="button" className={index === activeSlide ? 'current' : ''} aria-label={`Show slide ${index + 1}: ${item.location}`} aria-pressed={index === activeSlide} onClick={() => setActiveSlide(index)} />
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => moveSlide(1)}>→</button>
      </div>
      <div className="hero-stamp"><AfricaMark /><span>MADE FOR<br />THE JOURNEY</span></div>
    </section>
  )
}

export default HeroSlideshow
