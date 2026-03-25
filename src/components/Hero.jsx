import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section hero-section" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title reveal" style={{ transitionDelay: '0.1s' }}>
                        Adarsh Kumar
                    </h1>
                    <p className="hero-subtitle reveal" style={{ transitionDelay: '0.2s', color: 'var(--accent)', fontWeight: '600', letterSpacing: '0.5px' }}>
                        Data Science and Financial Systems Engineer
                    </p>
                    <p className="body-text reveal" style={{ transitionDelay: '0.3s', maxWidth: '600px' }}>
                        Designing data driven systems for financial analytics, machine learning, and scalable backend infrastructure. Focused on transforming complex data into actionable intelligence.
                    </p>
                    <div className="hero-buttons reveal" style={{ transitionDelay: '0.4s' }}>
                        <a href="#work" className="btn btn-primary glow-btn ripple-effect">View Work</a>
                        <a href="/resources/Adarsh_Kumar_CV.pdf" download className="btn btn-secondary glass-btn ripple-effect">Download CV</a>
                    </div>
                </div>

                <div className="hero-visual reveal" style={{ transitionDelay: '0.5s' }}>
                    <div className="neon-blob blob-1"></div>
                    <div className="neon-blob blob-2"></div>
                    <div className="profile-wrapper">
                        <div className="profile-container">
                            <img src="/resources/profilepic.jpg" alt="Adarsh Kumar" className="profile-img" onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=Profile'; }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
