import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
    const [activeSection, setActiveSection] = useState('');

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#work' },
        { name: 'Skills', href: '#skills' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Trigger 'active' when a section enters the top quarter of the screen
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section;
                        break;
                    }
                }
            }

            // Clear active section if scrolled to the absolute top (Hero area)
            if (window.scrollY < 100) {
                current = '';
            }

            if (current !== activeSection) {
                setActiveSection(current);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]); // Depend on activeSection to prevent unnecessary infinite re-renders but catch states properly

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const targetId = href.substring(1);

        // Support jumping to top if #home is clicked
        if (targetId === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('');
            return;
        }

        const element = document.getElementById(targetId);
        if (element) {
            // Navbar height offset is 70px to prevent the title clipping behind the glass Navbar
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(targetId);
        }
    };

    return (
        <nav className="glass-navbar">
            <div className="container navbar-container">
                <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
                    Adarsh Kumar<span className="neon-dot">.</span>
                </a>

                <div className="navbar-right">
                    <div className="navbar-links">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
