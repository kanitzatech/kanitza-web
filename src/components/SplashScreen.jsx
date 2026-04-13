function SplashScreen({ isFading }) {
    const companyName = 'KANITZA TECH'

    return (
        <div id="splash-screen" className={isFading ? 'fade-out' : ''}>
            <div className="splash-content">
                <div className="splash-loader-wrapper">
                    {companyName.split('').map((char, index) => {
                        if (char === ' ') {
                            return (
                                <span key={`space-${index}`} className="splash-letter-space" aria-hidden="true">
                                    &nbsp;
                                </span>
                            )
                        }

                        return (
                            <span key={`${char}-${index}`} className="splash-letter" style={{ '--i': index }}>
                                {char}
                            </span>
                        )
                    })}
                    <div className="splash-light" />
                </div>
            </div>
        </div>
    )
}

export default SplashScreen
