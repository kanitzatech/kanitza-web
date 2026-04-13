import { useEffect, useRef } from 'react'

function HeroSection() {
    const heroVisualRef = useRef(null)

    useEffect(() => {
        const heroVisual = heroVisualRef.current
        if (!heroVisual) return undefined

        const handleMouseMove = (event) => {
            const rect = heroVisual.getBoundingClientRect()
            const x = (event.clientX - rect.left) / rect.width - 0.5
            const y = (event.clientY - rect.top) / rect.height - 0.5
            const mockup = heroVisual.querySelector('.mockup')
            if (mockup) {
                mockup.style.transform = `translateY(-4px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`
            }
        }

        const handleMouseLeave = () => {
            const mockup = heroVisual.querySelector('.mockup')
            if (mockup) mockup.style.transform = ''
        }

        heroVisual.addEventListener('mousemove', handleMouseMove)
        heroVisual.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            heroVisual.removeEventListener('mousemove', handleMouseMove)
            heroVisual.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <section className="hero" id="home">
            <div className="container hero-grid">
                {/* Left — copy */}
                <div className="reveal">
                    <div className="hero-kicker">
                        <i className="fa-solid fa-bolt" />
                        Tech + Marketing Growth Partner
                    </div>

                    <h1>
                        We Build <span className="gradient-text">Digital Engines</span> for Growing Businesses
                    </h1>

                    <p>
                        Driving growth for startups, businesses, and leaders through digital marketing,
                        political management, and MSME digital transformation.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">
                            <i className="fa-solid fa-rocket" />
                            Get Free Consultation
                        </a>
                        <a
                            href="https://wa.me/7604990851"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            <i className="fa-brands fa-whatsapp" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="hero-trust">
                        <div className="hero-trust-item">
                            <i className="fa-solid fa-circle-check" />
                            <span>120+ Projects Delivered</span>
                        </div>
                        <div className="hero-trust-item">
                            <i className="fa-solid fa-circle-check" />
                            <span>Performance Focused</span>
                        </div>
                        <div className="hero-trust-item">
                            <i className="fa-solid fa-circle-check" />
                            <span>Results-Driven Teams</span>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-num">120+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-num">98%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-num">4+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>

                {/* Right — mockup */}
                <div
                    className="hero-visual reveal"
                    aria-label="Digital growth dashboard illustration"
                    ref={heroVisualRef}
                >
                    <span className="hero-blob one" />
                    <span className="hero-blob two" />
                    <div className="mockup">
                        <div className="mockup-head">
                            <span className="mockup-dot" />
                            <span className="mockup-dot" />
                            <span className="mockup-dot" />
                            <div className="mockup-title-bar" />
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-chart-label">
                                <span>Revenue Growth</span>
                                <strong>+47.2%</strong>
                            </div>
                            <div className="chart">
                                <div className="chart-line" />
                            </div>
                            <div className="bars">
                                <div className="bar" />
                                <div className="bar" />
                                <div className="bar" />
                                <div className="bar" />
                                <div className="bar" />
                            </div>
                            <div className="mockup-row">
                                <div className="mockup-mini-card green">
                                    <div className="mini-label">Conversions</div>
                                    <div className="mini-value">↑ 3.2k</div>
                                </div>
                                <div className="mockup-mini-card purple">
                                    <div className="mini-label">Campaigns</div>
                                    <div className="mini-value">24 Live</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
