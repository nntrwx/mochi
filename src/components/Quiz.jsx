import { useState } from 'react'
import { ArrowRight, ArrowLeft, Loader2, RefreshCw } from 'lucide-react'
import './Quiz.css'

const QUIZ_QUESTIONS = [
  {
    question: "what is your main skin concern?",
    options: [
      { text: "tightness & dehydration", concern: "dry" },
      { text: "dullness & tired skin", concern: "dull" },
      { text: "redness & sensitivity", concern: "sensitive" },
      { text: "clogged pores & excess shine", concern: "oily" }
    ]
  },
  {
    question: "how does your skin feel by 3pm?",
    options: [
      { text: "tight and rough", concern: "dry" },
      { text: "dull and greasy in the t-zone", concern: "combination" },
      { text: "shiny all over", concern: "oily" },
      { text: "irritable or itchy", concern: "sensitive" }
    ]
  },
  {
    question: "what is your daily environment like?",
    options: [
      { text: "mostly air-conditioned / dry indoors", concern: "dry" },
      { text: "humid or hot outdoors", concern: "oily" },
      { text: "urban / high pollution cities", concern: "dull" },
      { text: "normal / temperate climate", concern: "normal" }
    ]
  },
  {
    question: "what is your dream texture outcome?",
    options: [
      { text: "bouncy and plump (mochi skin)", concern: "bounce" },
      { text: "glass-like and high shine", concern: "glow" },
      { text: "completely matte and clear", concern: "matte" },
      { text: "velvety and smooth", concern: "smooth" }
    ]
  }
]

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [quizResult, setQuizResult] = useState(null)

  const handleSelectOption = (option) => {
    const newAnswers = [...quizAnswers, option]
    setQuizAnswers(newAnswers)

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsAnalyzing(true)
      setTimeout(() => {
        setIsAnalyzing(false)
        const concerns = newAnswers.map(ans => ans.concern)
        const counts = concerns.reduce((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1
          return acc
        }, {})
        
        let dominantConcern = 'dry'
        let maxCount = 0
        for (const [key, val] of Object.entries(counts)) {
          if (val > maxCount) {
            maxCount = val
            dominantConcern = key
          }
        }

        let recommended = {
          name: "dew bounce serum",
          desc: "rice ferment and hyaluronic acid in a featherlight jelly. it delivers instant bounce and intense plumping, perfect for restoring dehydrated cells by 3pm.",
          code: "BOUNCY10",
          link: "#shop"
        }

        if (dominantConcern === 'dry' || dominantConcern === 'sensitive') {
          recommended = {
            name: "cloud bounce cream",
            desc: "ceramides and centella lock everything in with a cushiony, cloud-like texture. ideal for dry barriers that need protective seal and hydration.",
            code: "CLOUD10",
            link: "#shop"
          }
        } else if (dominantConcern === 'oily') {
          recommended = {
            name: "bounce cleanse jelly",
            desc: "green tea and bamboo water rinse away dirt and excess sebum without stripping the skin's barrier. clean skin with zero dry tightness.",
            code: "JELLY10",
            link: "#shop"
          }
        }

        setQuizResult(recommended)
      }, 1500)
    }
  }

  const handleReset = () => {
    setIsQuizStarted(false)
    setCurrentQuestion(0)
    setQuizAnswers([])
    setQuizResult(null)
  }

  return (
    <section id="quiz" className="quiz-section">
      <div className="quiz-container">
        
        {/* Interactive Skincare Quiz */}
        <div className="quiz-wizard-container">
          {!isQuizStarted && !quizResult && (
            <div className="quiz-intro quiz-fade-in">
              <div className="quiz-header">
                <span className="quiz-tag">not sure where to start?</span>
                <h2 className="quiz-title">find your bounce in 60 seconds</h2>
                <p className="quiz-subtitle">
                  answer 4 quick questions, get a routine built for your skin type.
                </p>
              </div>

              <div className="quiz-action">
                <button onClick={() => setIsQuizStarted(true)} className="btn-take-quiz">
                  take the quiz <ArrowRight size={20} className="icon-right" />
                </button>
              </div>
            </div>
          )}

          {isQuizStarted && !isAnalyzing && !quizResult && (
            <div className="quiz-wizard-card quiz-fade-in">
              <div className="quiz-wizard-progress">
                <div 
                  className="quiz-progress-bar" 
                  style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>
              
              <div className="quiz-wizard-question-container">
                <span className="quiz-question-steps">question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                <h3 className="quiz-wizard-question">{QUIZ_QUESTIONS[currentQuestion].question}</h3>
                
                <div className="quiz-options-grid">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((opt, index) => (
                    <button 
                      key={index} 
                      onClick={() => handleSelectOption(opt)}
                      className="btn-quiz-option"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="quiz-wizard-actions">
                {currentQuestion > 0 && (
                  <button 
                    onClick={() => {
                      setCurrentQuestion(currentQuestion - 1);
                      setQuizAnswers(quizAnswers.slice(0, -1));
                    }} 
                    className="btn-quiz-back"
                  >
                    <ArrowLeft size={16} className="icon-left" /> back
                  </button>
                )}
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="quiz-analyzing-card quiz-fade-in">
              <Loader2 size={40} className="icon-spin icon-analyzing" />
              <p className="analyzing-text">analyzing your skin profile...</p>
            </div>
          )}

          {quizResult && (
            <div className="quiz-result-card quiz-fade-in">
              <span className="result-tag">your recommended product</span>
              <h3 className="result-product-title">{quizResult.name}</h3>
              <p className="result-product-desc">{quizResult.desc}</p>
              
              <div className="result-promo-box">
                <span className="promo-label">use code at checkout for 10% off:</span>
                <span className="promo-code">{quizResult.code}</span>
              </div>

              <div className="result-actions">
                <a href={quizResult.link} className="btn-result-action">
                  shop {quizResult.name} <ArrowRight size={18} className="icon-arrow-btn" />
                </a>
                <button 
                  onClick={handleReset}
                  className="btn-quiz-reset"
                >
                  <RefreshCw size={14} className="icon-reset" /> retake quiz
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Testimonials */}
        <div className="testimonials-list">
          {/* Testimonial 1 */}
          <div className="testimonial-item reveal reveal-delay-1">
            <span className="testimonial-author">jiyoo, 24</span>
            <div className="testimonial-bubble">
              <p className="testimonial-quote">
                my skin actually looks plump by the second week &mdash; not just hydrated, bouncy.
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-item reveal reveal-delay-2">
            <span className="testimonial-author">lena, 29</span>
            <div className="testimonial-bubble">
              <p className="testimonial-quote">
                finally a serum that doesn't feel sticky under makeup.
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-item reveal reveal-delay-3">
            <span className="testimonial-author">mira, 31</span>
            <div className="testimonial-bubble">
              <p className="testimonial-quote">
                the cleanser smells like nothing and that's exactly what i wanted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quiz
