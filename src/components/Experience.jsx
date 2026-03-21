import React from 'react';
import { Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section className="section experience-section" id="experience">
            <div className="container">
                <h2 className="section-title reveal">Experience</h2>

                <div className="timeline single-node">
                    <div className="timeline-item reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="timeline-dot pulse-glow"></div>
                        <div className="timeline-content glass-card">

                            <div className="exp-header">
                                <div className="exp-title-group">
                                    <Award size={24} className="exp-icon" />
                                    <h3 className="card-title">Summer Trainee</h3>
                                </div>
                                <span className="exp-badge">Training Experience</span>
                            </div>

                            <h4 className="org-name">Cipher Schools</h4>
                            <span className="duration">Jun 25 to Jul 25</span>

                            <div className="exp-description">
                                <p>Completed intensive training in mobile application development and modern software practices. Built a cross platform learning management system with real time data handling and secure authentication.</p>
                                <p>Worked on designing responsive user interfaces, integrating REST APIs, and implementing scalable backend solutions. Gained hands on experience in application architecture, state management, and performance optimization.</p>
                            </div>

                            <div className="tech-stack-line">
                                <strong>Tech Stack:</strong> Flutter, Dart, Firebase, REST APIs, State Management
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
