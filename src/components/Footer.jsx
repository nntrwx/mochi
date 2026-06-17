import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col reveal">
            <span className="footer-logo">mochi</span>
            <p className="footer-description">
              clean, jelly-textured skincare rituals for skin that bounces back. dewy, plump, never sticky.
            </p>
          </div>

          <div className="footer-links-col reveal reveal-delay-1">
            <h4 className="footer-col-title">explore</h4>
            <nav className="footer-nav">
              <a href="#shop">shop</a>
              <a href="#routine">routine</a>
              <a href="#about">about</a>
              <a href="#quiz">quiz</a>
            </nav>
          </div>

          <div className="footer-links-col reveal reveal-delay-2">
            <h4 className="footer-col-title">connect</h4>
            <nav className="footer-nav">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">tiktok</a>
              <a href="#contact">contact</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom reveal">
          <p className="footer-copyright">&copy; 2026 mochi. all rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">privacy policy</a>
            <a href="#terms">terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
