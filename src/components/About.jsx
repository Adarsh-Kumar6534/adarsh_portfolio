import React from 'react';
import { Brain, Network, PieChart, Server } from 'lucide-react';
import './About.css';

const About = () => {
    const cards = [
        {
            title: 'Data Science',
            description: 'Building predictive models, feature engineering, and extracting insights from real world datasets.',
            icon: <Brain size={32} />
        },
        {
            title: 'Machine Learning',
            description: 'Working with supervised models, evaluation techniques, and optimization to improve prediction accuracy.',
            icon: <Network size={32} />
        },
        {
            title: 'Financial Analytics',
            description: 'Designing systems to analyze transactions, risks, and performance metrics in financial environments.',
            icon: <PieChart size={32} />
        },
        {
            title: 'Backend Systems',
            description: 'Developing scalable APIs, database systems, and data pipelines for high performance applications.',
            icon: <Server size={32} />
        }
    ];

    return (
        <section className="section about-section" id="about">
            <div className="container about-container">

                <div className="about-content">
                    <h2 className="section-title reveal" style={{ transitionDelay: '0.1s' }}>About Me</h2>
                    <div className="about-text-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
                        <p className="body-text">
                            I am a Computer Science student specializing in Data Science with a strong interest in financial systems and analytics. I focus on building intelligent solutions using machine learning, structured data processing, and backend engineering.
                        </p>
                        <p className="body-text">
                            My work combines data analysis, system design, and problem solving to create scalable and impactful applications. From predictive modeling to building full data pipelines, I aim to solve real world problems with clarity and precision.
                        </p>
                    </div>
                </div>

                <div className="about-cards-grid">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="about-card glass-card reveal"
                            style={{ transitionDelay: `${0.3 + (index * 0.15)}s` }}
                        >
                            <div className="about-icon-wrapper">
                                {card.icon}
                            </div>
                            <h3 className="card-title">{card.title}</h3>
                            <p className="small-text">{card.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
