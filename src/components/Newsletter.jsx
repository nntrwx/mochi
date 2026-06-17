import { useState } from 'react'
import { Check, Mail } from 'lucide-react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
    }
  }

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header reveal">
          <span className="newsletter-tag">stay bouncy</span>
          <h2 className="newsletter-title">get 10% off your first bounce</h2>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubscribe} className="newsletter-form reveal reveal-delay-1">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn-subscribe">
                subscribe
              </button>
            </div>
          </form>
        ) : (
          <div className="newsletter-success reveal reveal-delay-1">
            <div className="success-icon-wrapper">
              <Check className="success-check-icon" size={24} />
              <Mail className="success-mail-icon" size={48} />
            </div>
            <p className="success-message">you're on the list! check your inbox for 10% off.</p>
          </div>
        )}

        <p className="newsletter-tagline reveal reveal-delay-2">no spam. just skin tips and early drops.</p>
      </div>
    </section>
  )
}

export default Newsletter
