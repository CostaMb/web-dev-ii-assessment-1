
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="site-header">
      <img
        src={logo}
        alt="Erased Tapes Records"
        className="site-logo"
      />

      <nav className="site-navigation" aria-label="Main navigation">
        <a href="#blog">Our Blog</a>
        <a href="#artists">Our Artists</a>
        <a href="#story">Our Story</a>
      </nav>
    </header>
  )
}

export default Header
