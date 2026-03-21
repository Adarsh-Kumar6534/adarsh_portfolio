import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const contactLinks = [
        {
            icon: <Mail size={24} />,
            label: 'Email',
            value: 'adarshkumar6561@gmail.com',
            href: 'mailto:adarshkumar6561@gmail.com'
        },
        {
            icon: <Phone size={24} />,
            label: 'Phone',
            value: '+91 8409008777',
            href: 'tel:+918409008777'
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin size={24} />,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/adarsh65/'
        },
        {
            icon: <Github size={24} />,
            label: 'GitHub',
            href: 'https://github.com/Adarsh-Kumar6534'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);

        // Fallback native mailto trigger
        window.location.href = `mailto:adarshkumar6561@gmail.com?subject=${subject}&body=${body}`;
        e.target.reset(); // Optional reset after sending to client
    };

    return (
        <section className="section contact-section" id="contact">
            <div className="container">

                <div className="contact-grid">

                    {/* LEFT: Contact Info */}
                    <div className="contact-left reveal">
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Get In Touch</h2>
                        <p className="contact-subtitle">
                            Open to internship and full time opportunities in software engineering, data science, and analytics.
                        </p>

                        <div className="contact-methods">
                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="contact-card glass-card ripple-effect"
                                >
                                    <div className="contact-icon-wrapper">
                                        {link.icon}
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-label">{link.label}</span>
                                        <span className="contact-value">{link.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon-btn ripple-effect"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Send Message Form */}
                    <div className="contact-right reveal" style={{ transitionDelay: '0.2s' }}>
                        <div className="contact-form-card glass-card">
                            <h3 className="form-title">Send Message</h3>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="input-group">
                                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="input-group">
                                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="input-group">
                                    <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary glow-btn submit-btn ripple-effect">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;
