function ContactSection() {
    return (
        <section id="contact">
            <div className="container">
                <div className="section-title reveal">
                    <span className="section-tag" style={{ marginBottom: '16px' }}>
                        <i className="fa-solid fa-envelope" />
                        Get In Touch
                    </span>
                    <h2>Let's Start a Conversation</h2>
                    <p>Tell us about your goals and we'll suggest the most effective next step — no obligation.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-card reveal">
                        <h3>Send Us a Message</h3>
                        <form className="input-row" onSubmit={(event) => event.preventDefault()}>
                            <input type="text" name="name" placeholder="Your Full Name" required id="contact-name" />
                            <input type="tel" name="phone" placeholder="Phone Number" required id="contact-phone" />
                            <input type="email" name="email" placeholder="Email Address (optional)" id="contact-email" />
                            <textarea
                                name="message"
                                placeholder="Tell us about your project and goals…"
                                id="contact-message"
                            />
                            <button className="btn btn-primary" type="submit" id="contact-submit">
                                <i className="fa-solid fa-paper-plane" />
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    <aside className="contact-info reveal">
                        <h3>Reach Us Directly</h3>
                        <ul className="contact-list">
                            <li>
                                <i className="fa-solid fa-phone" />
                                <a href="tel:+917604990851">+91 7604990851</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-envelope" />
                                <a href="mailto:kanitzatech@gmail.com">kanitzatech@gmail.com</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot" />
                                <span>Chennai, Tamil Nadu, India</span>
                            </li>
                        </ul>

                        <div className="contact-socials">
                            <a
                                className="btn btn-whatsapp"
                                href="https://wa.me/7604990851"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-whatsapp"
                            >
                                <i className="fa-brands fa-whatsapp" /> Chat on WhatsApp
                            </a>
                            <a
                                className="btn btn-facebook"
                                href="https://www.facebook.com/kanitzatech"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-facebook"
                            >
                                <i className="fa-brands fa-facebook-f" /> Find on Facebook
                            </a>
                            <a
                                className="btn btn-instagram"
                                href="https://www.instagram.com/kanitza_tech?igsh=aWg3ZHQxbGZ6eHA5"
                                target="_blank"
                                rel="noopener noreferrer"
                                id="contact-instagram"
                            >
                                <i className="fa-brands fa-instagram" /> Follow on Instagram
                            </a>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
