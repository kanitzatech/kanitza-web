function CtaSection() {
    return (
        <section className="cta-wrapper">
            <div className="container reveal">
                <div className="cta">
                    <div className="cta-inner">
                        <span
                            className="section-tag"
                            style={{ margin: '0 auto 18px', display: 'inline-flex' }}
                        >
                            <i className="fa-solid fa-stars" />
                            Ready to Scale?
                        </span>
                        <h2>Let's Grow Your Business Together</h2>
                        <p>
                            Partner with a team that blends strategy, creativity, and technology for real,
                            measurable progress. Your first consultation is completely free.
                        </p>
                        <div className="cta-actions">
                            <a href="#contact" className="btn btn-primary" id="cta-primary-btn">
                                <i className="fa-solid fa-calendar-check" />
                                Book Free Consultation
                            </a>
                            <a
                                href="https://wa.me/7604990851"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                                id="cta-whatsapp-btn"
                            >
                                <i className="fa-brands fa-whatsapp" />
                                Chat With Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection
