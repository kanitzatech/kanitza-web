import { useEffect, useMemo, useState } from 'react'
import SplashScreen from './components/SplashScreen'
import HyperspeedBackdrop from './components/HyperspeedBackdrop'
import './App.css'

const services = [
  {
    title: 'Digital Marketing',
    desc: 'Social media, performance ads, SEO & content strategies that drive measurable growth and brand awareness.',
    color1: '#3b82f6',
    color2: '#8b5cf6',
    tag: 'Growth',
    tagColor: '#3b82f6',
    svgContent: `<circle cx="60" cy="60" r="30" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" stroke-width="1.5"/>
      <circle cx="60" cy="60" r="18" fill="rgba(59,130,246,0.2)"/>
      <text x="60" y="66" font-size="18" text-anchor="middle">📣</text>
      <circle cx="100" cy="35" r="15" fill="rgba(249,115,22,0.15)" stroke="rgba(249,115,22,0.4)" stroke-width="1"/>
      <text x="100" y="41" font-size="12" text-anchor="middle">📸</text>
      <circle cx="105" cy="80" r="12" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.4)" stroke-width="1"/>
      <text x="105" y="86" font-size="10" text-anchor="middle">🐦</text>
      <line x1="78" y1="55" x2="87" y2="42" stroke="rgba(59,130,246,0.3)" stroke-dasharray="3,3"/>
      <line x1="78" y1="65" x2="95" y2="75" stroke="rgba(139,92,246,0.3)" stroke-dasharray="3,3"/>
      <path d="M20 85 Q30 60 45 70 Q55 80 65 50 Q75 20 90 40" fill="none" stroke="url(#sg1)" stroke-width="2"/>
      <defs><linearGradient id="sg1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>`,
  },
  {
    title: 'Digital Transformation',
    desc: 'Modernize operations with smart websites, CRM systems, and end-to-end workflow automation.',
    color1: '#10b981',
    color2: '#3b82f6',
    tag: 'Technology',
    tagColor: '#10b981',
    svgContent: `<rect x="20" y="30" width="80" height="55" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" stroke-width="1.5"/>
      <rect x="28" y="38" width="64" height="38" rx="4" fill="rgba(16,185,129,0.08)"/>
      <line x1="28" y1="46" x2="92" y2="46" stroke="rgba(16,185,129,0.3)" stroke-width="1"/>
      <circle cx="33" cy="42" r="2" fill="rgba(249,115,22,0.8)"/>
      <circle cx="40" cy="42" r="2" fill="rgba(251,191,36,0.8)"/>
      <circle cx="47" cy="42" r="2" fill="rgba(52,211,153,0.8)"/>
      <rect x="32" y="52" width="28" height="4" rx="2" fill="rgba(16,185,129,0.5)"/>
      <rect x="32" y="60" width="20" height="4" rx="2" fill="rgba(59,130,246,0.5)"/>
      <rect x="32" y="68" width="24" height="4" rx="2" fill="rgba(16,185,129,0.3)"/>
      <rect x="110" y="45" width="16" height="12" rx="3" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" stroke-width="1"/>
      <text x="118" y="54" font-size="7" text-anchor="middle" fill="rgba(52,211,153,0.8)">CRM</text>
      <rect x="110" y="65" width="16" height="12" rx="3" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.4)" stroke-width="1"/>
      <text x="118" y="74" font-size="7" text-anchor="middle" fill="rgba(96,165,250,0.8)">API</text>
      <line x1="100" y1="52" x2="110" y2="52" stroke="rgba(16,185,129,0.4)" stroke-dasharray="3,2"/>
      <line x1="100" y1="70" x2="110" y2="70" stroke="rgba(59,130,246,0.4)" stroke-dasharray="3,2"/>`,
  },
  {
    title: 'Web & App Development',
    desc: 'Blazing-fast websites and scalable mobile apps engineered for performance, UX, and long-term growth.',
    color1: '#8b5cf6',
    color2: '#ec4899',
    tag: 'Engineering',
    tagColor: '#8b5cf6',
    svgContent: `<rect x="15" y="25" width="95" height="65" rx="8" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" stroke-width="1.5"/>
      <rect x="23" y="33" width="79" height="48" rx="4" fill="rgba(139,92,246,0.06)"/>
      <text x="35" y="52" font-size="9" fill="rgba(96,165,250,0.9)" font-family="monospace">&lt;div&gt;</text>
      <text x="42" y="62" font-size="8" fill="rgba(52,211,153,0.9)" font-family="monospace">class=</text>
      <text x="42" y="72" font-size="8" fill="rgba(251,191,36,0.9)" font-family="monospace">"hero"</text>
      <text x="35" y="82" font-size="9" fill="rgba(96,165,250,0.9)" font-family="monospace">&lt;/div&gt;</text>
      <rect x="120" y="30" width="26" height="46" rx="4" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.4)" stroke-width="1.5"/>
      <rect x="124" y="36" width="18" height="30" rx="2" fill="rgba(139,92,246,0.08)"/>
      <rect x="127" y="40" width="12" height="3" rx="1.5" fill="rgba(139,92,246,0.4)"/>
      <rect x="127" y="46" width="8" height="2" rx="1" fill="rgba(200,200,255,0.2)"/>
      <rect x="127" y="50" width="10" height="2" rx="1" fill="rgba(200,200,255,0.2)"/>
      <circle cx="133" cy="70" r="3" fill="rgba(139,92,246,0.5)"/>`,
  },
  {
    title: 'Branding & Creative',
    desc: 'Visual identities, brand narratives, and creative systems that make unforgettable first impressions.',
    color1: '#f97316',
    color2: '#ec4899',
    tag: 'Creative',
    tagColor: '#f97316',
    svgContent: `<circle cx="65" cy="60" r="35" fill="none" stroke="url(#sg4)" stroke-width="20" stroke-dasharray="10 4" opacity="0.4"/>
      <circle cx="65" cy="60" r="20" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.4)" stroke-width="1.5"/>
      <circle cx="65" cy="60" r="10" fill="rgba(249,115,22,0.2)"/>
      <text x="65" y="65" font-size="12" text-anchor="middle">🎨</text>
      <rect x="10" y="10" width="18" height="18" rx="5" fill="#3b82f6" opacity="0.8"/>
      <rect x="32" y="10" width="18" height="18" rx="5" fill="#8b5cf6" opacity="0.8"/>
      <rect x="10" y="32" width="18" height="18" rx="5" fill="#f97316" opacity="0.8"/>
      <rect x="32" y="32" width="18" height="18" rx="5" fill="#10b981" opacity="0.8"/>
      <defs><linearGradient id="sg4" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#f97316"/><stop offset="50%" stop-color="#ec4899"/><stop offset="100%" stop-color="#8b5cf6"/></linearGradient></defs>`,
  },
  {
    title: 'Digital Political Management',
    desc: 'Data-powered campaign strategy, voter outreach, and digital presence management for modern political leaders.',
    color1: '#3b82f6',
    color2: '#10b981',
    tag: 'Politics',
    tagColor: '#3b82f6',
    svgContent: `<rect x="30" y="20" width="80" height="75" rx="6" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.3)" stroke-width="1.5"/>
      <rect x="38" y="30" width="64" height="8" rx="3" fill="rgba(59,130,246,0.3)"/>
      <rect x="38" y="44" width="50" height="5" rx="2" fill="rgba(59,130,246,0.1)"/>
      <rect x="38" y="44" width="38" height="5" rx="2" fill="rgba(59,130,246,0.5)"/>
      <rect x="38" y="55" width="50" height="5" rx="2" fill="rgba(16,185,129,0.1)"/>
      <rect x="38" y="55" width="22" height="5" rx="2" fill="rgba(16,185,129,0.5)"/>
      <rect x="38" y="66" width="50" height="5" rx="2" fill="rgba(249,115,22,0.1)"/>
      <rect x="38" y="66" width="42" height="5" rx="2" fill="rgba(249,115,22,0.5)"/>
      <circle cx="120" cy="40" r="8" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.5)" stroke-width="1"/>
      <text x="120" y="44" font-size="8" text-anchor="middle">📍</text>
      <circle cx="115" cy="58" r="6" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.5)" stroke-width="1"/>
      <text x="115" y="62" font-size="6" text-anchor="middle">📍</text>`,
  },
  {
    title: 'Startup & Venture Development',
    desc: 'From idea to funded entity - strategy, MVP development, pitch decks, and investor-readiness programs.',
    color1: '#10b981',
    color2: '#8b5cf6',
    tag: 'Ventures',
    tagColor: '#10b981',
    svgContent: `<path d="M65 90 L65 90 Q65 40 65 25 Q65 15 80 10 Q95 10 95 25 L95 40 Q95 55 80 60 Z" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" stroke-width="1.5"/>
      <circle cx="78" cy="35" r="7" fill="rgba(96,165,250,0.7)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
      <path d="M60 55 L45 75 L65 65 Z" fill="rgba(16,185,129,0.6)"/>
      <path d="M95 55 L110 75 L90 65 Z" fill="rgba(16,185,129,0.6)"/>
      <ellipse cx="78" cy="88" rx="10" ry="6" fill="rgba(249,115,22,0.5)" opacity="0.7"/>
      <ellipse cx="78" cy="88" rx="6" ry="4" fill="rgba(251,191,36,0.7)"/>
      <text x="25" y="30" font-size="10">✦</text>
      <text x="120" y="25" font-size="8">✦</text>
      <text x="15" y="70" font-size="6">✦</text>
      <text x="130" y="65" font-size="7">✦</text>`,
  },
]

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true)
  const [isSplashFading, setIsSplashFading] = useState(false)
  const [current, setCurrent] = useState(0)
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 })
  const [progress, setProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [floatTick, setFloatTick] = useState(0)
  const [brandsServed, setBrandsServed] = useState(0)
  const totalServices = services.length

  const navClose = () => setIsMenuOpen(false)
  const goTo = (idx) => {
    const normalized = ((idx % totalServices) + totalServices) % totalServices
    setCurrent(normalized)
  }

  const onCardMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const rx = ((event.clientY - cy) / (rect.height / 2)) * -8
    const ry = ((event.clientX - cx) / (rect.width / 2)) * 8
    setTilt({ rx, ry })
  }

  const statNum = useMemo(() => `${brandsServed}+`, [brandsServed])

  useEffect(() => {
    document.body.classList.add('splash-active')
    let removeTimer

    const fadeTimer = window.setTimeout(() => {
      setIsSplashFading(true)
      document.body.classList.remove('splash-active')

      removeTimer = window.setTimeout(() => {
        setIsSplashVisible(false)
      }, 700)
    }, 1900)

    return () => {
      window.clearTimeout(fadeTimer)
      if (removeTimer) {
        window.clearTimeout(removeTimer)
      }
      document.body.classList.remove('splash-active')
    }
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalServices)
    }, 2400)

    return () => window.clearInterval(timer)
  }, [totalServices])

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (scrolled / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      setParallax({ x, y })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    let rafId
    const animate = () => {
      setFloatTick((prev) => prev + 0.02)
      rafId = window.requestAnimationFrame(animate)
    }
    rafId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.revealDelay || 0
            entry.target.style.transitionDelay = `${delay}ms`
            entry.target.classList.add('visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealElements.forEach((el, index) => {
      el.dataset.revealDelay = String((index % 6) * 70)
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const statEl = document.querySelector('[data-target="200"]')
    if (!statEl) {
      return undefined
    }

    let hasAnimated = false
    let frameId

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || hasAnimated) {
            return
          }

          hasAnimated = true
          const target = 200
          const duration = 1600
          const start = performance.now()

          const tick = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - (1 - progress) ** 3
            setBrandsServed(Math.round(target * eased))

            if (progress < 1) {
              frameId = window.requestAnimationFrame(tick)
            }
          }

          frameId = window.requestAnimationFrame(tick)
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(statEl)

    return () => {
      observer.disconnect()
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return (
    <>
      {isSplashVisible ? <SplashScreen isFading={isSplashFading} /> : null}

      <div id="progress" style={{ width: `${progress}%` }} />

      <nav>
        <div className="logo">KANITZA TECH</div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="#services" onClick={navClose}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={navClose}>
              About
            </a>
          </li>
          <li>
            <a href="#why" onClick={navClose}>
              Why Us
            </a>
          </li>
          <li>
            <a href="#cta" className="nav-cta" onClick={navClose}>
              Get Started
            </a>
          </li>
        </ul>
        <button className="hamburger" type="button" aria-label="Toggle menu" onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <section className="hero">
        <HyperspeedBackdrop />
        <div className="blob blob-1" style={{ transform: `translate(${parallax.x * 8}px, ${parallax.y * 8}px)` }} />
        <div className="blob blob-2" style={{ transform: `translate(${parallax.x * 12}px, ${parallax.y * 12}px)` }} />
        <div className="blob blob-3" style={{ transform: `translate(${parallax.x * 16}px, ${parallax.y * 16}px)` }} />

        <div className="hero-badge">
          ✦ <span>Trusted by 200+ Brands</span> across 15 Countries
        </div>

        <h1>
          We Grow Your Business
          <br />
          <span className="grad">Digitally</span>
        </h1>
        <p className="hero-sub">
          From bold brand strategy to full-stack tech solutions - we build digital ecosystems that scale, convert, and
          inspire.
        </p>

        <div className="hero-actions">
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a href="#cta" className="btn-ghost">
            Book a Call -&gt;
          </a>
        </div>

        <div className="hero-scene" id="heroScene">
          <div
            className="float-el laptop-wrap"
            style={{
              transform: `translate(-50%,-50%) translateY(${Math.sin(floatTick + 0) * 10}px) translateX(${parallax.x * 4}px)`,
            }}
          >
            <svg className="laptop-svg" viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
              <rect x="40" y="210" width="340" height="14" rx="4" fill="url(#lgBase)" opacity="0.9" />
              <rect x="60" y="30" width="300" height="185" rx="12" fill="url(#lgScreen)" />
              <rect x="60" y="30" width="300" height="2" rx="1" fill="rgba(255,255,255,0.15)" />
              <rect x="55" y="210" width="310" height="5" rx="2" fill="rgba(255,255,255,0.06)" />
              <rect x="68" y="38" width="284" height="168" rx="8" fill="url(#lgInner)" />
              <rect x="76" y="45" width="268" height="14" rx="4" fill="rgba(59,130,246,0.3)" />
              <rect x="76" y="67" width="60" height="130" rx="6" fill="rgba(255,255,255,0.04)" />
              <rect x="82" y="73" width="40" height="6" rx="3" fill="rgba(59,130,246,0.6)" />
              <rect x="82" y="85" width="35" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
              <rect x="82" y="96" width="38" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
              <rect x="82" y="107" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
              <rect x="142" y="67" width="202" height="55" rx="6" fill="rgba(255,255,255,0.04)" />
              <rect x="152" y="90" width="16" height="24" rx="3" fill="url(#bBlue)" opacity="0.7" />
              <rect x="174" y="82" width="16" height="32" rx="3" fill="url(#bPurple)" opacity="0.8" />
              <rect x="196" y="75" width="16" height="39" rx="3" fill="url(#bBlue)" opacity="0.9" />
              <rect x="218" y="80" width="16" height="34" rx="3" fill="url(#bGreen)" opacity="0.8" />
              <rect x="240" y="70" width="16" height="44" rx="3" fill="url(#bPurple)" opacity="0.9" />
              <rect x="262" y="85" width="16" height="29" rx="3" fill="url(#bOrange)" opacity="0.8" />
              <rect x="284" y="77" width="16" height="37" rx="3" fill="url(#bBlue)" opacity="0.85" />
              <rect x="142" y="128" width="202" height="60" rx="6" fill="rgba(255,255,255,0.04)" />
              <polyline
                points="152,168 170,152 192,158 215,142 240,148 265,135 290,140 320,130 335,138"
                fill="none"
                stroke="url(#lineGrad)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="335" cy="138" r="3" fill="var(--blue-bright)" />
              <rect x="76" y="202" width="60" height="22" rx="6" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
              <rect x="142" y="202" width="60" height="22" rx="6" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
              <rect x="208" y="202" width="60" height="22" rx="6" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <rect x="274" y="202" width="68" height="22" rx="6" fill="rgba(249,115,22,0.12)" stroke="rgba(249,115,22,0.3)" strokeWidth="1" />

              <defs>
                <linearGradient id="lgBase" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1e2840" />
                  <stop offset="100%" stopColor="#0c1225" />
                </linearGradient>
                <linearGradient id="lgScreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a2035" />
                  <stop offset="100%" stopColor="#0d1524" />
                </linearGradient>
                <linearGradient id="lgInner" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0a1020" />
                  <stop offset="100%" stopColor="#080d18" />
                </linearGradient>
                <linearGradient id="bBlue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="bPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="bGreen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
                <linearGradient id="bOrange" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className="float-el chart-card"
            style={{ transform: `translateY(${Math.sin(floatTick + 1.2) * 10}px) translateX(${parallax.x * 8}px)` }}
          >
            <div className="chart-card-inner">
              <h4>Revenue Growth</h4>
              <p>+142%</p>
              <div className="mini-bars">
                <div className="mini-bar" style={{ height: '55%', animationDelay: '0s' }} />
                <div className="mini-bar" style={{ height: '70%', animationDelay: '0.2s' }} />
                <div className="mini-bar" style={{ height: '45%', animationDelay: '0.4s' }} />
                <div className="mini-bar" style={{ height: '90%', animationDelay: '0.6s' }} />
                <div className="mini-bar" style={{ height: '65%', animationDelay: '0.8s' }} />
                <div
                  className="mini-bar"
                  style={{
                    height: '100%',
                    animationDelay: '1s',
                    background: 'linear-gradient(180deg,var(--green-bright),var(--green))',
                  }}
                />
              </div>
            </div>
          </div>

          <div
            className="float-el rocket-wrap"
            style={{ transform: `translateY(${Math.sin(floatTick + 2.4) * 10}px) translateX(${parallax.x * 10}px)` }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              xmlns="http://www.w3.org/2000/svg"
              filter="drop-shadow(0 0 20px rgba(249,115,22,0.6))"
            >
              <g transform="translate(40,40) rotate(-30)">
                <ellipse cx="0" cy="-10" rx="10" ry="22" fill="url(#rGrad)" />
                <path d="M -10,-10 Q0,-38 10,-10" fill="url(#rNose)" />
                <path d="M -10,5 L-20,22 L-6,14 Z" fill="rgba(249,115,22,0.7)" />
                <path d="M 10,5 L20,22 L6,14 Z" fill="rgba(249,115,22,0.7)" />
                <circle cx="0" cy="-8" r="5" fill="rgba(96,165,250,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <ellipse cx="0" cy="16" rx="5" ry="9" fill="url(#flame1)" opacity="0.9" />
                <ellipse cx="0" cy="16" rx="3" ry="6" fill="url(#flame2)" />
              </g>
              <defs>
                <linearGradient id="rGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
                <linearGradient id="rNose" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="flame1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fb923c" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="flame2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#fde68a" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div
            className="float-el social-badge badge-ig"
            style={{ transform: `translateY(${Math.sin(floatTick + 3.6) * 10}px) translateX(${parallax.x * 4}px)` }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="url(#igG)">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#igG)" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
              <defs>
                <linearGradient id="igG" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fd5949" />
                  <stop offset="50%" stopColor="#d6249f" />
                  <stop offset="100%" stopColor="#285AEB" />
                </linearGradient>
              </defs>
            </svg>
            <span style={{ color: '#fff' }}>Instagram</span>
            <span style={{ color: 'var(--green-bright)', fontSize: '0.65rem' }}>+38%</span>
          </div>

          <div
            className="float-el social-badge badge-tw"
            style={{ transform: `translateY(${Math.sin(floatTick + 4.8) * 10}px) translateX(${parallax.x * 6}px)` }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DA1F2">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9 9 0 0 1-2.88 1.1A4.52 4.52 0 0 0 11.58 8a12.81 12.81 0 0 1-9.3-4.71 4.52 4.52 0 0 0 1.4 6A4.49 4.49 0 0 1 1.64 9v.06a4.52 4.52 0 0 0 3.62 4.43 4.52 4.52 0 0 1-2 .08A4.52 4.52 0 0 0 7.48 17a9.05 9.05 0 0 1-5.6 1.93A9.19 9.19 0 0 1 1 18.84 12.77 12.77 0 0 0 7.92 21c8.3 0 12.84-6.88 12.84-12.85 0-.2 0-.4-.01-.58A9.17 9.17 0 0 0 23 5.05z" />
            </svg>
            <span style={{ color: '#fff' }}>X (Twitter)</span>
            <span style={{ color: 'var(--blue-bright)', fontSize: '0.65rem' }}>+24K</span>
          </div>

          <div
            className="float-el social-badge badge-li"
            style={{ transform: `translateY(${Math.sin(floatTick + 6) * 10}px) translateX(${parallax.x * 7}px)` }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span style={{ color: '#fff' }}>LinkedIn</span>
            <span style={{ color: 'var(--purple-bright)', fontSize: '0.65rem' }}>12K</span>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat-item reveal">
          <div className="stat-num" data-target="200">
            {statNum}
          </div>
          <div className="stat-label">Brands Served</div>
        </div>
        <div className="stat-item reveal reveal-delay-1">
          <div className="stat-num">15+</div>
          <div className="stat-label">Countries</div>
        </div>
        <div className="stat-item reveal reveal-delay-2">
          <div className="stat-num">98%</div>
          <div className="stat-label">Client Retention</div>
        </div>
        <div className="stat-item reveal reveal-delay-3">
          <div className="stat-num">8yr</div>
          <div className="stat-label">In the Industry</div>
        </div>
      </div>

      <section id="services">
        <div className="section-label reveal">What We Do</div>
        <h2 className="section-title reveal reveal-delay-1">
          Six Ways We Drive <span className="services-grad">Growth</span>
        </h2>
        <p className="section-sub reveal reveal-delay-2">
          Every service is a precision tool in your digital arsenal - built for modern markets and ambitious outcomes.
        </p>

        <div className="carousel-wrap" id="carousel">
          {services.map((service, index) => {
            const offset = ((index - current + totalServices) % totalServices)
            const normalizedOffset = offset > totalServices / 2 ? offset - totalServices : offset
            const absOff = Math.abs(normalizedOffset)
            const scale = absOff === 0 ? 1 : absOff === 1 ? 0.82 : 0.68
            const tx = normalizedOffset * 200
            const tz = absOff === 0 ? 0 : absOff === 1 ? -80 : -160
            const opacity = absOff === 0 ? 1 : absOff === 1 ? 0.55 : 0.25
            const zIndex = totalServices - absOff
            const ry = normalizedOffset < 0 ? 15 : normalizedOffset > 0 ? -15 : 0
            const activeTransform = `translate(-50%,-50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`
            const tiltTransform =
              absOff === 0
                ? `translate(-50%,-50%) translateX(0px) translateZ(0px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(1)`
                : activeTransform

            return (
              <div
                key={service.title}
                className="service-card"
                onClick={() => goTo(index)}
                onMouseMove={absOff === 0 ? onCardMouseMove : undefined}
                onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
                style={{
                  transform: tiltTransform,
                  opacity,
                  zIndex,
                  boxShadow:
                    absOff === 0
                      ? `0 30px 80px rgba(0,0,0,0.5), 0 0 60px ${service.color1}25`
                      : undefined,
                }}
              >
                <div className="card-illo" style={{ background: `linear-gradient(135deg,${service.color1}15,${service.color2}20)` }}>
                  <svg
                    width="150"
                    height="110"
                    viewBox="0 0 150 110"
                    xmlns="http://www.w3.org/2000/svg"
                    dangerouslySetInnerHTML={{ __html: service.svgContent }}
                  />
                </div>
                <div className="card-body">
                  <div
                    className="card-tag"
                    style={{
                      color: service.tagColor,
                      borderColor: `${service.tagColor}40`,
                      background: `${service.tagColor}10`,
                    }}
                  >
                    {service.tag}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="carousel-dots" id="dots">
          {services.map((service, index) => (
            <button
              key={service.tag}
              type="button"
              className={`dot ${index === current ? 'active' : ''}`}
              aria-label={`Go to ${service.title}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </section>

      <section id="about" style={{ display: 'grid' }}>
        <div className="about-visual reveal">
          <div className="about-card about-main-card">
            <svg width="260" height="200" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="100" r="35" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
              <circle cx="80" cy="85" r="14" fill="url(#p1)" />
              <ellipse cx="80" cy="115" rx="20" ry="10" fill="url(#p1)" opacity="0.7" />
              <circle cx="180" cy="100" r="35" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
              <circle cx="180" cy="85" r="14" fill="url(#p2)" />
              <ellipse cx="180" cy="115" rx="20" ry="10" fill="url(#p2)" opacity="0.7" />
              <circle cx="130" cy="70" r="35" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
              <circle cx="130" cy="55" r="14" fill="url(#p3)" />
              <ellipse cx="130" cy="85" rx="20" ry="10" fill="url(#p3)" opacity="0.7" />
              <line x1="80" y1="100" x2="130" y2="70" stroke="rgba(59,130,246,0.3)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="180" y1="100" x2="130" y2="70" stroke="rgba(139,92,246,0.3)" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="80" y1="100" x2="180" y2="100" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="4,4" />
              <text x="80" y="148" fontFamily="sans-serif" fontSize="9" fill="rgba(200,210,255,0.6)" textAnchor="middle">
                Strategy
              </text>
              <text x="180" y="148" fontFamily="sans-serif" fontSize="9" fill="rgba(200,210,255,0.6)" textAnchor="middle">
                Technology
              </text>
              <text x="130" y="30" fontFamily="sans-serif" fontSize="9" fill="rgba(200,210,255,0.6)" textAnchor="middle">
                Creative
              </text>
              <defs>
                <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="p2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="p3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#34d399" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="about-card about-float-card">
            <div className="afc-num">8+</div>
            <div className="afc-label">Years of Digital Excellence</div>
          </div>
        </div>

        <div className="about-text">
          <div className="section-label reveal">Our Story</div>
          <h2 className="section-title reveal reveal-delay-1">
            Built by Builders,
            <br />
            for the Bold
          </h2>
          <p className="section-sub reveal reveal-delay-2 about-copy">
            KANITZA TECH was founded with one belief: great digital work changes the trajectory of businesses. We combine
            sharp strategy, creative mastery, and engineering precision to deliver outcomes - not just deliverables.
          </p>
          <p className="section-sub reveal reveal-delay-3">
            From nimble startups to enterprise brands, we&apos;ve helped organizations transform how they show up online -
            and how they grow from it.
          </p>
          <div className="about-actions reveal reveal-delay-4">
            <a href="#cta" className="btn-primary">
              Work with Us
            </a>
            <a href="#services" className="btn-ghost">
              See Services
            </a>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="section-label reveal">Our Edge</div>
        <h2 className="section-title reveal reveal-delay-1 why-title">
          Why Brands Choose <span className="why-grad">KANITZA TECH</span>
        </h2>

        <div className="why-grid">
          <div className="why-card reveal" style={{ '--accent': 'rgba(59,130,246,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(59,130,246,0.12)', animationDelay: '0s' }}>
              📊
            </div>
            <h4>Data-Led Decisions</h4>
            <p>Every strategy is rooted in analytics, market signals, and performance benchmarks - not guesswork.</p>
          </div>
          <div className="why-card reveal reveal-delay-1" style={{ '--accent': 'rgba(139,92,246,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(139,92,246,0.12)', animationDelay: '0.5s' }}>
              ⚡
            </div>
            <h4>Speed to Market</h4>
            <p>Agile processes and pre-built frameworks mean faster launches without compromising quality.</p>
          </div>
          <div className="why-card reveal reveal-delay-2" style={{ '--accent': 'rgba(16,185,129,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(16,185,129,0.12)', animationDelay: '1s' }}>
              🎯
            </div>
            <h4>Full-Funnel Thinking</h4>
            <p>We don&apos;t just drive traffic - we engineer customer journeys that convert and retain.</p>
          </div>
          <div className="why-card reveal reveal-delay-3" style={{ '--accent': 'rgba(249,115,22,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(249,115,22,0.12)', animationDelay: '1.5s' }}>
              🌐
            </div>
            <h4>Global Perspective</h4>
            <p>Operating across 15 countries, we bring international insight with local precision.</p>
          </div>
          <div className="why-card reveal reveal-delay-1" style={{ '--accent': 'rgba(59,130,246,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(59,130,246,0.12)', animationDelay: '2s' }}>
              🔒
            </div>
            <h4>Transparent Reporting</h4>
            <p>Real-time dashboards and weekly insights keep you in complete control of your investment.</p>
          </div>
          <div className="why-card reveal reveal-delay-2" style={{ '--accent': 'rgba(139,92,246,0.08)' }}>
            <div className="why-icon" style={{ background: 'rgba(139,92,246,0.12)', animationDelay: '2.5s' }}>
              🤝
            </div>
            <h4>Long-Term Partnership</h4>
            <p>98% of our clients renew. We build relationships, not just campaigns.</p>
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-box reveal">
          <h2>
            Ready to Scale
            <br />
            <span className="cta-grad">Your Digital Presence?</span>
          </h2>
          <p>
            Let&apos;s build something extraordinary together. Book a free strategy session and see what KANITZA TECH can unlock
            for your brand.
          </p>
          <a href="mailto:hello@kanitzatech.com" className="btn-glow">
            Start Your Journey -&gt;
          </a>
          <p className="cta-small">No commitment required - Response within 24h - Free audit included</p>
        </div>
      </section>

      <footer>
        <div className="logo">KANITZA TECH</div>
        <p>© 2025 Kanitza Tech Digital Agency. Crafted with ambition.</p>
        <p className="footer-contact">hello@kanitzatech.com</p>
      </footer>
    </>
  )
}

export default App
