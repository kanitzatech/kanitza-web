const reasons = [
    {
        title: 'Fast Delivery',
        desc: 'Agile sprints and dedicated teams ensure your projects ship on time, every time.',
        iconClass: 'fa-solid fa-rocket',
    },
    {
        title: 'Transparent Pricing',
        desc: 'No hidden fees. Clear, upfront proposals aligned with your budget and goals.',
        iconClass: 'fa-solid fa-wallet',
    },
    {
        title: 'Results Driven',
        desc: 'Every decision is backed by data. We track, measure, and optimize for real ROI.',
        iconClass: 'fa-solid fa-chart-simple',
    },
    {
        title: 'Expert Team',
        desc: 'Seasoned specialists in marketing, tech, strategy, and creative — all under one roof.',
        iconClass: 'fa-solid fa-brain',
    },
]

function WhyChooseSection() {
    return (
        <section>
            <div className="container">
                <div className="section-title reveal">
                    <span className="section-tag" style={{ marginBottom: '16px' }}>
                        <i className="fa-solid fa-star" />
                        Why Us
                    </span>
                    <h2>Why Businesses Choose KanitzaTech</h2>
                    <p>We combine strategy, creativity, and technology to create compounding growth for your business.</p>
                </div>

                <div className="why-grid">
                    {reasons.map((reason) => (
                        <div key={reason.title} className="why-item reveal">
                            <div className="why-icon">
                                <i className={reason.iconClass} />
                            </div>
                            <h3>{reason.title}</h3>
                            <p>{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseSection
