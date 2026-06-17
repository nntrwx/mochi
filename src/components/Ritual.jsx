import './Ritual.css'

function Ritual() {
  return (
    <section id="routine" className="ritual-section">
      <div className="ritual-container">
        <div className="ritual-header">
          <span className="ritual-tag reveal">the ritual</span>
          <h2 className="ritual-title reveal reveal-delay-1">3 steps, 90 seconds, every day</h2>
        </div>

        <div className="ritual-grid">
          {/* Card 1: Cleanse */}
          <div className="ritual-card ritual-card-cleanse reveal reveal-delay-2">
            <div className="ritual-card-overlay"></div>
            <div className="ritual-card-content">
              <h3 className="ritual-card-title">cleanse</h3>
              <p className="ritual-card-desc">
                massage bounce cleanse jelly onto dry skin, add water, rinse.
              </p>
            </div>
          </div>

          {/* Card 2: Hydrate */}
          <div className="ritual-card ritual-card-hydrate reveal reveal-delay-3">
            <div className="ritual-card-overlay"></div>
            <div className="ritual-card-content">
              <h3 className="ritual-card-title">hydrate</h3>
              <p className="ritual-card-desc">
                pat 3–4 drops of dew bounce serum into damp skin.
              </p>
            </div>
          </div>

          {/* Card 3: Seal */}
          <div className="ritual-card ritual-card-seal reveal reveal-delay-4">
            <div className="ritual-card-overlay"></div>
            <div className="ritual-card-content">
              <h3 className="ritual-card-title">seal</h3>
              <p className="ritual-card-desc">
                press cloud bounce cream in upward motions until it disappears.
              </p>
            </div>
          </div>
        </div>

        <div className="ritual-footer">
          <p className="ritual-tagline reveal reveal-delay-1">that’s it. no 10-step guilt trip.</p>
        </div>
      </div>
    </section>
  )
}

export default Ritual
