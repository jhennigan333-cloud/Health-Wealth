import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={close}>
        Health & Wealth
      </Link>

      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={close}>Home</Link></li>
        <li><Link to="/articles" onClick={close}>Articles</Link></li>
        <li><Link to="/glossary" onClick={close}>Glossary</Link></li>
        <li><Link to="/mission" onClick={close}>Our Mission</Link></li>
        <li><Link to="/help" onClick={close}>Help</Link></li>
        <li><Link to="/newsletter" className="navbar-cta" onClick={close}>Newsletter</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
