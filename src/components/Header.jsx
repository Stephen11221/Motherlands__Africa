import AfricaMark from './AfricaMark.jsx'

const links = [
  ['home', 'Home'],
  ['stays', 'Stays'],
  ['vehicles', 'Vehicles'],
  ['destinations', 'Destinations'],
]

function Header({ page, setPage }) {
  return (
    <header className={`header ${page === 'home' ? 'header--overlay' : ''}`}>
      <a className="brand" href="#home" onClick={() => setPage('home')}>
        <span className="brand-icon"><AfricaMark /></span>
        <span className="brand-name">motherland<span>africa</span></span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(([id, label]) => (
          <a key={id} className={page === id ? 'selected' : ''} href={`#${id}`} onClick={() => setPage(id)}>
            {label}
          </a>
        ))}
      </nav>
      <a href="#booking" className="nav-cta" onClick={() => setPage('home')}>
        Plan your trip <span>↗</span>
      </a>
    </header>
  )
}

export default Header
