import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, X } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certifications = [
        {
            title: 'Oracle Certified Professional – Data Science',
            issuer: 'Oracle',
            image: '/resources/oracledata.png',
            link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=965CE5D01B9A1A808D34BEF4817270853C0A9F54F4E88A73BF2B6765C0406C0E'
        },
        {
            title: 'Oracle Certified Associate – AI Foundations',
            issuer: 'Oracle',
            image: '/resources/oracleai.png',
            link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=35A960CB0A513818CB1E6C47283828C5A1CC2C9865010EA6B930BBCBEC90ABD7'
        },
        {
            title: 'Machine Learning',
            issuer: 'IIT Madras',
            image: '/resources/nptelml.png',
            link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs46/Course/NPTEL25CS46S34750068404384251.pdf'
        },
        {
            title: 'Fundamentals of Network Communication',
            issuer: 'University of Colorado',
            image: '/resources/fundamentals.png',
            link: 'https://coursera.org/verify/Y9WMIU4CKR18'
        },
        {
            title: 'Hardware & Operating Systems',
            issuer: 'IBM',
            image: '/resources/IBM.png',
            link: 'https://www.coursera.org/account/accomplishments/verify/RM10LUK00FEA'
        },
        {
            title: 'Mobile Application Development',
            issuer: 'Cipher Schools',
            image: '/resources/flutter.png',
            link: 'https://www.cipherschools.com/certificate/preview?id=687e14027efd6d5090703c09'
        }
    ];

    const closeModal = () => setSelectedCert(null);

    // Prevent background scrolling when modal is active
    React.useEffect(() => {
        if (selectedCert) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedCert]);

    return (
        <section className="section-alt certifications-section" id="certifications">
            <div className="container">
                <h2 className="section-title reveal" style={{ textAlign: 'left', marginBottom: '40px' }}>Certifications</h2>

                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="cert-card glass-card reveal"
                            style={{ transitionDelay: `${0.1 + (index * 0.1)}s` }}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="cert-thumbnail">
                                <img src={cert.image} alt={cert.title} />
                                <div className="cert-verified-badge">
                                    <CheckCircle size={14} /> Verified
                                </div>
                                <div className="cert-overlay">
                                    <span className="btn btn-primary glow-btn view-cert-btn">View Certificate</span>
                                </div>
                            </div>
                            <div className="cert-info">
                                <Award size={24} className="cert-icon" />
                                <div className="cert-text-group">
                                    <h3 className="card-title">{cert.title}</h3>
                                    <p className="small-text">{cert.issuer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <div className={`modal-backdrop ${selectedCert ? 'active' : ''}`} onClick={closeModal}>
                <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
                    <button className="modal-close" onClick={closeModal}>
                        <X size={24} />
                    </button>

                    {selectedCert && (
                        <div className="modal-body">
                            <div className="modal-image-wrapper">
                                <img src={selectedCert.image} alt={selectedCert.title} />
                                <div className="modal-verified-ribbon"><CheckCircle size={16} /> Official Certificate</div>
                            </div>
                            <div className="modal-details">
                                <div className="modal-text">
                                    <h2 className="modal-title">{selectedCert.title}</h2>
                                    <p className="modal-issuer">Powered by <strong>{selectedCert.issuer}</strong></p>
                                </div>
                                <a
                                    href={selectedCert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary glow-btn verify-btn"
                                >
                                    Verify Certificate <ExternalLink size={18} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
