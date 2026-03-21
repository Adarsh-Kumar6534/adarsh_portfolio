import React, { useState, useEffect, useRef } from 'react';
import { Code2, Trophy, FileText, CheckSquare, ExternalLink } from 'lucide-react';
import './Achievements.css';

const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);

    useEffect(() => {
        if (end === 0 || typeof end !== 'number') return;

        let observer;
        let currentCount = 0;

        const handleIntersect = (entries) => {
            if (entries[0].isIntersecting) {
                const timer = setInterval(() => {
                    currentCount += Math.ceil(end / 40); // 40 steps
                    if (currentCount >= end) {
                        setCount(end);
                        clearInterval(timer);
                    } else {
                        setCount(currentCount);
                    }
                }, 40);
                observer.disconnect();
            }
        };

        observer = new IntersectionObserver(handleIntersect, { threshold: 0.5 });
        if (elementRef.current) observer.observe(elementRef.current);

        return () => observer && observer.disconnect();
    }, [end, duration]);

    return { count, elementRef };
};

const AchievementCard = ({ icon: Icon, value, label, link, isCounter, suffix = '', tooltip, isTextValue, delay }) => {
    const { count, elementRef } = useCounter(isCounter ? value : 0);

    const cardContent = (
        <>
            <div className="achievement-icon-wrapper">
                <Icon size={40} className="achievement-icon" />
                {link && <ExternalLink size={14} className="link-icon" />}
            </div>
            <div className="achievement-number">
                {isTextValue ? value : `${count}${suffix}`}
            </div>
            <p className="achievement-title">{label}</p>
        </>
    );

    const className = "achievement-card glass-card reveal";
    const style = { transitionDelay: delay };

    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} clickable-card`}
                style={style}
                ref={elementRef}
                data-tooltip={tooltip}
            >
                {cardContent}
            </a>
        );
    }

    return (
        <div className={className} style={style} ref={elementRef} data-tooltip={tooltip}>
            {cardContent}
        </div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            icon: Code2,
            value: 1555,
            isCounter: true,
            label: 'LeetCode Peak Rating',
            link: 'https://leetcode.com/u/adarsh65/'
        },
        {
            icon: Trophy,
            value: 1453,
            isCounter: true,
            label: 'Codeforces Rating',
            link: 'https://codeforces.com/profile/adarshsingh6534'
        },
        {
            icon: FileText,
            value: 'Patent Published',
            isTextValue: true,
            label: 'AI Driven Deadlock Detection in Distributed Systems'
        },
        {
            icon: CheckSquare,
            value: 300,
            isCounter: true,
            suffix: '+',
            label: 'Problems Solved Across Platforms',
            tooltip: 'LeetCode: 254 | GeeksforGeeks: 35+ | Codeforces: 20+'
        }
    ];

    return (
        <section className="section achievements-section" id="achievements">
            <div className="container">
                <h2 className="section-title reveal" style={{ textAlign: 'left', marginBottom: '40px' }}>Milestones</h2>
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            {...achievement}
                            delay={`${0.1 + (index * 0.1)}s`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
