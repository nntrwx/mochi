import './Hero.css'

function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-container">
        <div className="hero-text-wrapper">
          <span className="hero-category reveal">[ mochi skin ]</span>
          <h1 className="hero-title reveal reveal-delay-1">bouncy skin, soft days.</h1>
          <p className="hero-subtitle reveal reveal-delay-2">
            a jelly-textured skincare ritual for skin that bounces back — dewy, plump, never sticky.
          </p>
        </div>
        
        <div className="hero-actions reveal reveal-delay-3">
          <a href="#shop" className="btn-discover">
            discover the serum
          </a>
          <a href="#quiz" className="hero-quiz-link">
            take the skin quiz &rarr;
          </a>
        </div>
      </div>
    </main>
  )
}

export default Hero
