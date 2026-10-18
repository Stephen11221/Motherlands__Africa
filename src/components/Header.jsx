import { useState } from 'react'
import AfricaMark from './AfricaMark.jsx'

const links = [
  ['home', 'Home'],
  ['stays', 'Stays'],
  ['vehicles', 'Vehicles'],
  ['destinations', 'Destinations'],
]

function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`header ${page === 'home' ? 'header--overlay' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <a className="brand" href="#home" onClick={() => { setPage('home'); setMenuOpen(false) }}>
        <span className="brand-icon"><AfricaMark /></span>
        <span className="brand-name">motherland<span>africa</span></span>
      </a>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="primary-navigation" aria-label="Main navigation">
        {links.map(([id, label]) => (
          <a key={id} className={page === id ? 'selected' : ''} href={`#${id}`} onClick={() => { setPage(id); setMenuOpen(false) }}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#booking" className="nav-cta" onClick={() => { setPage('home'); setMenuOpen(false) }}>
        Plan your trip <span>↗</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Header
