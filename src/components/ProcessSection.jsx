const steps = [
    {
        num: 1,
        title: 'Discover & Understand',
        text: 'We map your goals, challenges, market position, and current digital maturity to find the biggest leverage points.',
        icon: 'fa-solid fa-magnifying-glass',
    },
    {
        num: 2,
        title: 'Plan Strategy',
        text: 'We craft a custom roadmap with priorities, channels, timelines, and measurable KPIs tailored to your business.',
        icon: 'fa-solid fa-map',
    },
    {
        num: 3,
        title: 'Execute Precisely',
        text: 'Our specialists launch campaigns and digital systems with disciplined execution and attention to detail.',
        icon: 'fa-solid fa-gears',
    },
    {
        num: 4,
        title: 'Scale & Optimize',
        text: 'We monitor performance, iterate continuously, and scale what works — ensuring compounding results over time.',
        icon: 'fa-solid fa-chart-line',
    },
]

function ProcessSection() {
    return (
        <section>
            <div className="container">
                <div className="section-title reveal">
                    <span className="section-tag" style={{ marginBottom: '16px' }}>
                        <i className="fa-solid fa-diagram-project" />
                        Our Process
                    </span>
                    <h2>How We Work With You</h2>
                    <p>Clear, collaborative, and focused on execution from day one — no fluff, just results.</p>
                </div>

                <div className="process-timeline">
                    {steps.map((step) => (
                        <article key={step.num} className="process-step reveal">
                            <span className="num">{step.num}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection
