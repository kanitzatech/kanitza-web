import { useMemo } from 'react'

function HyperspeedBackdrop() {
    const streaks = useMemo(
        () =>
            Array.from({ length: 34 }, (_, index) => {
                const angle = -26 + (index % 7) * 8
                const left = 48 + ((index * 13) % 42) - 21
                const top = 20 + ((index * 17) % 66)
                const duration = 1.9 + (index % 6) * 0.35
                const delay = -(index * 0.18)
                const length = 18 + (index % 5) * 8
                return { angle, left, top, duration, delay, length }
            }),
        [],
    )

    return (
        <div className="hyperspeed" aria-hidden="true">
            <div className="hyperspeed-core" />
            <div className="hyperspeed-glow hyperspeed-glow-left" />
            <div className="hyperspeed-glow hyperspeed-glow-right" />
            <div className="hyperspeed-glow hyperspeed-glow-bottom" />
            <div className="hyperspeed-rings">
                <span />
                <span />
                <span />
            </div>
            <div className="hyperspeed-streams">
                {streaks.map((streak, index) => (
                    <span
                        key={`${streak.angle}-${index}`}
                        className="hyperspeed-streak"
                        style={{
                            '--angle': `${streak.angle}deg`,
                            '--left': `${streak.left}%`,
                            '--top': `${streak.top}%`,
                            '--duration': `${streak.duration}s`,
                            '--delay': `${streak.delay}s`,
                            '--length': `${streak.length}px`,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default HyperspeedBackdrop