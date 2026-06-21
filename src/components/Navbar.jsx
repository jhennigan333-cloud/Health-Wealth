import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Health & Wealth
      </Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
        <li><Link to="/mission">Our Mission</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to="/newsletter" className="navbar-cta">Newsletter</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
