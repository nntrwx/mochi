import { ShieldCheck, Leaf, Droplet } from 'lucide-react'
import problemModelImg from '../assets/problem-model.jpg'
import './About.css'

function About() {
  return (
    <section id="about" className="problem-section">
      <div className="problem-container">
        <div className="problem-left-col">
          <span className="problem-tag reveal">the problem with "glowy"</span>
          <h2 className="problem-title reveal reveal-delay-1">
            most "glow" is just shine.<br />we wanted bounce.
          </h2>
          <p className="problem-description reveal reveal-delay-2">
            dehydrated skin looks tight, dull, and tired by 3pm. mochi is built around one texture goal — skin that springs back when you press it. <span className="highlight-text">soft. plump. alive. not glassy. not greasy. bouncy.</span>
          </p>
          
          <div className="problem-chips-container">
            {/* Chip 1 */}
            <div className="problem-chip chip-dermatologist reveal reveal-delay-3">
              <div className="chip-icon-wrapper">
                <ShieldCheck size={20} className="chip-icon-lucide" />
              </div>
              <span className="chip-text">dermatologist-tested, fragrance-free</span>
            </div>

            {/* Chip 2 */}
            <div className="problem-chip chip-texture reveal reveal-delay-4">
              <div className="chip-icon-wrapper">
                <Leaf size={20} className="chip-icon-lucide" />
              </div>
              <span className="chip-text">featherlight jelly textures</span>
            </div>

            {/* Chip 3 */}
            <div className="problem-chip chip-hydration reveal reveal-delay-5">
              <div className="chip-icon-wrapper">
                <Droplet size={20} className="chip-icon-lucide" />
              </div>
              <span className="chip-text">hydration that lasts</span>
            </div>
          </div>
        </div>
        
        <div className="problem-divider"></div>
        
        <div className="problem-right-col reveal reveal-fade-in">
          <img src={problemModelImg} alt="Healthy hydrated bouncy skin" className="problem-image" />
        </div>
      </div>
    </section>
  )
}

export default About
