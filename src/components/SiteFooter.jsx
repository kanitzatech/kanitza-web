function SiteFooter() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand column */}
                    <div className="footer-brand">
                        <a href="#home" className="logo" aria-label="KanitzaTech home">
                            <span className="logo-badge">
                                <i className="fa-solid fa-bolt" />
                            </span>
                            KanitzaTech
                        </a>
                        <p>
                            A modern digital growth partner for ambitious startups, leaders,
                            and businesses ready to scale in the digital era.
                        </p>
                        <div className="socials">
                            <a
                                href="https://www.facebook.com/kanitzatech"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                            <a
                                href="https://www.instagram.com/kanitza_tech?igsh=aWg3ZHQxbGZ6eHA5"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <i className="fa-brands fa-instagram" />
                            </a>
                            <a
                                href="https://wa.me/7604990851"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                            >
                                <i className="fa-brands fa-whatsapp" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Digital Marketing</a></li>
                            <li><a href="#services">Digital Transformation</a></li>
                            <li><a href="#services">Web &amp; App Development</a></li>
                            <li><a href="#services">Branding &amp; Creative</a></li>
                            <li><a href="#services">Startup Services</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li>
                                <a href="tel:+917604990851">
                                    <i className="fa-solid fa-phone" /> +91 7604990851
                                </a>
                            </li>
                            <li>
                                <a href="mailto:kanitzatech@gmail.com">
                                    <i className="fa-solid fa-envelope" /> kanitzatech@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/7604990851" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-whatsapp" /> WhatsApp Us
                                </a>
                            </li>
                            <li>
                                <span style={{ color: 'var(--text-dim)', display:'inline-flex', gap:'6px', alignItems:'center' }}>
                                    <i className="fa-solid fa-location-dot" /> Chennai, India
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>© {currentYear} KanitzaTech. All rights reserved.</span>
                    <span>Built with <i className="fa-solid fa-heart" style={{ color: 'var(--accent2)' }} /> in Chennai</span>
                </div>
            </div>
        </footer>
    )
}

export default SiteFooter
