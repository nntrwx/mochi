import { Loader2, ShoppingBag } from 'lucide-react'
import cleanseJellyImg from '../assets/cleanse-jelly.png'
import bounceSerumImg from '../assets/bounce-serum.png'
import bounceCreamImg from '../assets/bounce-cream.png'
import './Lineup.css'

function Lineup({ addedItems, handleAddToBag }) {
  return (
    <section id="shop" className="lineup-section">
      <div className="lineup-container">
        <div className="lineup-header">
          <span className="lineup-tag reveal">the lineup</span>
          <h2 className="lineup-title reveal reveal-delay-1">three steps to bounce</h2>
        </div>
        
        <div className="lineup-grid">
          {/* Card 1: Bounce Cleanse Jelly */}
          <div className="lineup-card reveal reveal-delay-2">
            <div className="card-image-container">
              <div className="card-circle circle-peach"></div>
              <img src={cleanseJellyImg} alt="Bounce Cleanse Jelly" className="card-product-image product-jelly" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="product-capacity">150 ml / 5.07 fl. oz.</span>
                <span className="product-ingredients">green tea + bamboo water</span>
              </div>
              <h3 className="card-product-title">bounce cleanse jelly</h3>
              <p className="card-product-desc">
                clean skin without the squeaky-tight feeling. green tea and bamboo water rinse away the day, not your moisture.
              </p>
              <button 
                className={`btn-add-bag ${addedItems['jelly'] ? 'added' : ''}`}
                onClick={() => handleAddToBag('jelly')}
                disabled={addedItems['jelly']}
              >
                {addedItems['jelly'] === 'adding' && <Loader2 size={12} className="icon-spin-bag" />}
                {addedItems['jelly'] === 'added' && <ShoppingBag size={12} className="icon-bag" />}
                {addedItems['jelly'] === 'adding' ? 'adding...' : addedItems['jelly'] === 'added' ? 'added!' : 'add to bag'}
              </button>
            </div>
          </div>

          {/* Card 2: Dew Bounce Serum */}
          <div className="lineup-card reveal reveal-delay-3">
            <div className="card-image-container">
              <div className="card-circle circle-pink"></div>
              <img src={bounceSerumImg} alt="Dew Bounce Serum" className="card-product-image product-serum" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="product-capacity">50 ml / 1.69 fl. oz.</span>
                <span className="product-ingredients">rice ferment + hyaluronic acid</span>
              </div>
              <h3 className="card-product-title">dew bounce serum</h3>
              <p className="card-product-desc">
                rice ferment and hyaluronic acid in a featherlight jelly. skin feels plumper in 7 days.
              </p>
              <button 
                className={`btn-add-bag ${addedItems['serum'] ? 'added' : ''}`}
                onClick={() => handleAddToBag('serum')}
                disabled={addedItems['serum']}
              >
                {addedItems['serum'] === 'adding' && <Loader2 size={12} className="icon-spin-bag" />}
                {addedItems['serum'] === 'added' && <ShoppingBag size={12} className="icon-bag" />}
                {addedItems['serum'] === 'adding' ? 'adding...' : addedItems['serum'] === 'added' ? 'added!' : 'add to bag'}
              </button>
            </div>
          </div>

          {/* Card 3: Cloud Bounce Cream */}
          <div className="lineup-card reveal reveal-delay-4">
            <div className="card-image-container">
              <div className="card-circle circle-lavender"></div>
              <img src={bounceCreamImg} alt="Cloud Bounce Cream" className="card-product-image product-cream" />
            </div>
            <div className="card-content">
              <div className="card-meta">
                <span className="product-capacity">80 ml / 2.70 fl. oz.</span>
                <span className="product-ingredients">ceramides + centella</span>
              </div>
              <h3 className="card-product-title">cloud bounce cream</h3>
              <p className="card-product-desc">
                ceramides and centella lock everything in — cushiony, not heavy.
              </p>
              <button 
                className={`btn-add-bag ${addedItems['cream'] ? 'added' : ''}`}
                onClick={() => handleAddToBag('cream')}
                disabled={addedItems['cream']}
              >
                {addedItems['cream'] === 'adding' && <Loader2 size={12} className="icon-spin-bag" />}
                {addedItems['cream'] === 'added' && <ShoppingBag size={12} className="icon-bag" />}
                {addedItems['cream'] === 'adding' ? 'adding...' : addedItems['cream'] === 'added' ? 'added!' : 'add to bag'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lineup
