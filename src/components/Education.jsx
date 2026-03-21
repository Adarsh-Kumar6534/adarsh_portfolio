import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            degree: 'B.Tech Computer Science Engineering',
            institution: 'Lovely Professional University',
            duration: 'Aug 23 to Present',
            scoreLabel: 'CGPA',
            score: '8.80',
            isCurrent: true
        },
        {
            degree: 'Senior Secondary (12th)',
            institution: 'Gurukul Vidyapeeth',
            duration: '2021',
            scoreLabel: 'Score',
            score: '87.6%',
            isCurrent: false
        },
        {
            degree: 'Secondary (10th)',
            institution: 'Mahnar St Josephs School',
            duration: '2019',
            scoreLabel: 'Score',
            score: '87.2%',
            isCurrent: false
        }
    ];

    return (
        <section className="section education-section" id="education">
            <div className="container">
                <h2 className="section-title reveal" style={{ textAlign: 'left', marginBottom: '40px' }}>Education</h2>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className={`timeline-item reveal ${item.isCurrent ? 'current-node' : 'past-node'}`}
                            style={{ transitionDelay: `${0.2 + (index * 0.1)}s` }}
                        >
                            <div className="timeline-dot"></div>

                            <div className="timeline-content glass-card">
                                <div className="edu-header">
                                    <div className="edu-title-group">
                                        <GraduationCap size={24} className="edu-icon" />
                                        <h3 className="card-title">{item.degree}</h3>
                                    </div>
                                    {item.isCurrent && <span className="current-badge">Current</span>}
                                </div>

                                <h4 className="institution-name">{item.institution}</h4>

                                <div className="edu-details">
                                    <span className="edu-duration">
                                        <Calendar size={14} /> {item.duration}
                                    </span>
                                    <span className="edu-score-badge">
                                        {item.scoreLabel}: <strong>{item.score}</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
