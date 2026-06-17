import { useState, useEffect } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Lineup from './components/Lineup'
import Ritual from './components/Ritual'
import Quiz from './components/Quiz'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [addedItems, setAddedItems] = useState({})
  
  // Navigation states
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['about', 'shop', 'routine', 'quiz']
      const scrollPosition = window.scrollY + 160

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleAddToBag = (productId) => {
    if (addedItems[productId]) return
    
    setAddedItems(prev => ({ ...prev, [productId]: 'adding' }))
    
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [productId]: 'added' }))
      
      setTimeout(() => {
        setAddedItems(prev => ({ ...prev, [productId]: null }))
      }, 1500)
    }, 800)
  }

  return (
    <div className="landing-page">
      {/* Announcement Bar (Ticker) */}
      <AnnouncementBar />

      {/* Main Header */}
      <Header 
        scrolled={scrolled} 
        activeSection={activeSection} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      {/* Hero Content Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Lineup / Product Cards Section */}
      <Lineup addedItems={addedItems} handleAddToBag={handleAddToBag} />

      {/* Ritual Section */}
      <Ritual />

      {/* Quiz Section */}
      <Quiz />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
