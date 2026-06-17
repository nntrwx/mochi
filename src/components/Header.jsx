import './Header.css'

function Header({ scrolled, activeSection, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : ''} ${mobileMenuOpen ? 'header-menu-open' : ''}`}>
        <div className="header-container">
          <div className="logo-container">
            <a href="/" className="logo">mochi</a>
          </div>
          
          <nav className="nav-menu">
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>about</a>
            <a href="#shop" className={`nav-item ${activeSection === 'shop' ? 'active' : ''}`}>shop</a>
            <a href="#routine" className={`nav-item ${activeSection === 'routine' ? 'active' : ''}`}>routine</a>
            <a href="#quiz" className={`nav-item ${activeSection === 'quiz' ? 'active' : ''}`}>quiz</a>
          </nav>
          
          <div className="nav-actions">
            <a href="#shop" className="btn-shop-now">shop now</a>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className={`btn-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="toggle mobile menu"
            >
              <span className="burger-line"></span>
              <span className="burger-line"></span>
              <span className="burger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-menu">
          <a 
            href="#about" 
            className={`mobile-nav-item ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            about
          </a>
          <a 
            href="#shop" 
            className={`mobile-nav-item ${activeSection === 'shop' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            shop
          </a>
          <a 
            href="#routine" 
            className={`mobile-nav-item ${activeSection === 'routine' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            routine
          </a>
          <a 
            href="#quiz" 
            className={`mobile-nav-item ${activeSection === 'quiz' ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            quiz
          </a>
          <a 
            href="#shop" 
            className="btn-mobile-shop"
            onClick={() => setMobileMenuOpen(false)}
          >
            shop now
          </a>
        </nav>
      </div>
    </>
  )
}

export default Header
