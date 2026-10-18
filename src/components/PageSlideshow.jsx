import { useEffect, useState } from 'react'

function PageSlideshow({ slides, variant, actionLabel }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const slide = slides[activeSlide]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [slides])

  function moveSlide(direction) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <section className={`page-slideshow page-slideshow--${variant}`} aria-label={`${variant} highlights`}>
      <div className="page-slideshow-images" aria-live="polite">
        {slides.map((item, index) => (
          <img
            key={item.image}
            className={`page-slideshow-image ${index === activeSlide ? 'is-visible' : ''}`}
            src={item.image}
            alt={item.alt}
            aria-hidden={index !== activeSlide}
          />
        ))}
      </div>
      <div className="page-slideshow-shade" />
      <div className="page-slideshow-content" key={activeSlide}>
        <p className="page-slideshow-kicker">MOTHERLAND AFRICA <span>·</span> {variant.toUpperCase()}</p>
        <h1>{slide.titleFirst}<br /><em>{slide.titleSecond}</em></h1>
        <p className="page-slideshow-copy">{slide.copy}</p>
        <a className="page-slideshow-action" href="#booking">{actionLabel} <span>→</span></a>
      </div>
      <div className="page-slideshow-location">
        <span>{slide.location}</span>
        <span className="page-slideshow-separator" />
        <span>0{activeSlide + 1} / 0{slides.length}</span>
      </div>
      <div className="page-slideshow-signature"><span>{slide.signature}</span><b>MOTHERLAND AFRICA</b></div>
      <div className="page-slideshow-controls" aria-label="Slideshow controls">
        <button type="button" aria-label="Previous slide" onClick={() => moveSlide(-1)}>←</button>
        <div className="page-slideshow-dots">
          {slides.map((item, index) => (
            <button
              key={item.location}
              type="button"
              className={index === activeSlide ? 'current' : ''}
              aria-label={`Show slide ${index + 1}: ${item.location}`}
              aria-pressed={index === activeSlide}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
        <button type="button" aria-label="Next slide" onClick={() => moveSlide(1)}>→</button>
      </div>
    </section>
  )
}

export default PageSlideshow
