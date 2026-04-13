function AboutSection() {
    return (
        <section id="about">
            <div className="container about-grid">
                {/* Left — visual card with stats */}
                <div className="about-visual reveal">
                    <div className="about-visual-glow" aria-hidden="true" />
                    <div className="about-visual-glow-2" aria-hidden="true" />
                    <div className="about-visual-grid">
                        <div className="about-mini-stat">
                            <div className="stat-num"><span>120+</span></div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="about-mini-stat">
                            <div className="stat-num"><span>98%</span></div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="about-mini-stat">
                            <div className="stat-num"><span>4+</span></div>
                            <div className="stat-label">Years in Business</div>
                        </div>
                        <div className="about-mini-stat">
                            <div className="stat-num"><span>6</span></div>
                            <div className="stat-label">Service Verticals</div>
                        </div>
                    </div>
                </div>

                {/* Right — copy */}
                <div className="about-copy reveal">
                    <span className="section-tag">
                        <i className="fa-solid fa-building" />
                        About KanitzaTech
                    </span>
                    <h2>A Modern Growth Company Built for the Digital Age</h2>
                    <p>
                        We are a modern growth company that helps organizations combine digital marketing
                        and technology to unlock real business outcomes — from brand awareness to revenue growth.
                    </p>
                    <p>
                        From strategic planning to full execution, we work as an embedded extension of your team,
                        bringing speed, clarity, and long-term value at every step.
                    </p>
                    <div className="about-mission">
                        <strong>Our Mission:</strong> Build practical digital systems and campaigns that make
                        your business stronger, smarter, and more scalable — so you can focus on what matters most.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
