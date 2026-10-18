import AfricaMark from './AfricaMark.jsx'

function Footer({ setPage }) {
  return (
    <footer className="footer" id="about">
      <div className="footer-top">
        <a className="brand footer-brand" href="#home" onClick={() => setPage('home')}>
          <span className="brand-icon"><AfricaMark /></span>
          <span className="brand-name">motherland<span>africa</span></span>
        </a>
        <p>Go further. Feel closer.<br />Come as you are.</p>
        <a className="footer-contact" href="mailto:hello@motherland.africa">Let&apos;s plan something good <span>↗</span></a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Motherland Africa</span>
        <span>Made with love in Kenya <b>♥</b></span>
        <div>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="mailto:hello@motherland.africa">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
