import { useEffect, useRef, useState } from 'react'
import digitalMarketingIcon from '../assets/icon.png'

const services = [
    {
        title: 'Digital Marketing',
        iconType: 'image',
        image: digitalMarketingIcon,
        imageAlt: 'Digital Marketing',
        points: [
            'Digital ad campaigns (Google & Meta)',
            'SEO and content growth strategy',
            'Social media management',
            'Conversion rate optimization',
        ],
    },
    {
        title: 'Digital Transformation',
        iconClass: 'fa-solid fa-arrows-rotate',
        points: [
            'Business process automation',
            'CRM and system integration',
            'Data-driven operations',
            'Workflow modernization',
        ],
    },
    {
        title: 'Web & App Development',
        iconClass: 'fa-solid fa-code',
        points: [
            'Responsive, high-performance websites',
            'Custom web applications',
            'Mobile app experiences',
            'Maintenance and ongoing support',
        ],
    },
    {
        title: 'Branding & Creative',
        iconClass: 'fa-solid fa-palette',
        points: [
            'Brand identity and visual strategy',
            'Creative campaign design',
            'Visual storytelling assets',
            'Brand guidelines and consistency',
        ],
    },
    {
        title: 'Political Management',
        iconClass: 'fa-solid fa-landmark-flag',
        points: [
            'Campaign communication strategy',
            'Digital community engagement',
            'Data-backed voter outreach',
            'Reputation and media support',
        ],
    },
    {
        title: 'Startup Services',
        iconClass: 'fa-solid fa-rocket',
        points: [
            'Go-to-market acceleration',
            'MVP planning and launch',
            'Investor-ready brand presence',
            'Growth advisory support',
        ],
    },
]

function ServicesSection() {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const touchStartX = useRef(0)

    useEffect(() => {
        if (isPaused) return undefined

        const interval = window.setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % services.length)
        }, 2800)

        return () => window.clearInterval(interval)
    }, [isPaused])

    const getCardClass = (index) => {
        const n = services.length

        if (index === currentIdx) return 'card-active'
        if (index === (currentIdx - 1 + n) % n) return 'card-prev'
        if (index === (currentIdx + 1) % n) return 'card-next'
        if (index === (currentIdx - 2 + n) % n) return 'card-prev-2'
        if (index === (currentIdx + 2) % n) return 'card-next-2'
        return ''
    }

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX
    }

    const handleTouchEnd = (event) => {
        const touchEnd = event.changedTouches[0].clientX
        if (touchStartX.current - touchEnd > 50) {
            setCurrentIdx((prev) => (prev + 1) % services.length)
        }
        if (touchEnd - touchStartX.current > 50) {
            setCurrentIdx((prev) => (prev - 1 + services.length) % services.length)
        }
    }

    return (
        <section id="services">
            <div className="container">
                <div className="section-title reveal">
                    <span className="section-tag" style={{ marginBottom: '16px' }}>
                        <i className="fa-solid fa-layer-group" />
                        What We Do
                    </span>
                    <h2>Our Services</h2>
                    <p>
                        Integrated solutions built to help you acquire customers, optimize operations,
                        and scale confidently — all under one roof.
                    </p>
                </div>

                <div className="services-carousel-wrapper reveal">
                    <div
                        className="services-carousel"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        role="region"
                        aria-label="Services carousel"
                    >
                        {services.map((service, index) => (
                            <article
                                className={`service-card ${getCardClass(index)}`}
                                key={service.title}
                                onClick={() => setCurrentIdx(index)}
                                aria-hidden={index !== currentIdx}
                            >
                                <div className="service-icon" aria-hidden="true">
                                    {service.iconType === 'image' ? (
                                        <img src={service.image} alt={service.imageAlt} />
                                    ) : (
                                        <i className={service.iconClass} />
                                    )}
                                </div>
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.points.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="carousel-indicator-dots" role="tablist" aria-label="Service navigation">
                        {services.map((service, index) => (
                            <button
                                key={`${service.title}-dot`}
                                type="button"
                                role="tab"
                                className={`dot ${index === currentIdx ? 'active' : ''}`}
                                onClick={() => setCurrentIdx(index)}
                                aria-label={`Go to ${service.title}`}
                                aria-selected={index === currentIdx}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection
