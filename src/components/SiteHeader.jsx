const navItems = [
    { label: 'Home', href: '#home', sectionKey: 'home' },
    { label: 'Services', href: '#services', sectionKey: 'services' },
    { label: 'About', href: '#about', sectionKey: 'about' },
    { label: 'Contact', href: '#contact', sectionKey: 'contact' },
]

function SiteHeader({ isScrolled, isMenuOpen, activeSection, onToggleMenu, onNavClick }) {
    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
            <div className="container nav-wrap">
                <a href="#home" className="logo" aria-label="KanitzaTech home" onClick={onNavClick}>
                    <span className="logo-badge">
                        <i className="fa-solid fa-bolt" />
                    </span>
                    KanitzaTech
                </a>

                <nav aria-label="Main navigation">
                    <button
                        className="menu-toggle"
                        onClick={onToggleMenu}
                        aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
                        aria-expanded={isMenuOpen}
                        type="button"
                    >
                        <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} />
                    </button>

                    <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                        {navItems.map((item) => (
                            <li key={item.sectionKey}>
                                <a
                                    href={item.href}
                                    className={activeSection === item.sectionKey ? 'active' : ''}
                                    onClick={onNavClick}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" className="btn btn-primary" onClick={onNavClick}>
                                Get a Quote
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default SiteHeader
