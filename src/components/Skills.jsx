import React from 'react';
import {
    Terminal, Database, Code, FileJson,
    BrainCircuit, LineChart, Network, Cpu,
    Box, GitBranch, Cloud, Server,
    Activity, Lightbulb, Workflow, PieChart, Layers, Github
} from 'lucide-react';
import './Skills.css';

const IconWrapper = ({ src, alt, LucideIcon }) => {
    if (src) {
        return <img src={src} alt={alt} className="skill-logo" />;
    }
    return LucideIcon ? <LucideIcon size={32} strokeWidth={1.5} /> : null;
};

const Skills = () => {
    const skillGroups = [
        {
            category: 'Programming Languages',
            icon: <Code />,
            skills: [
                { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', tooltip: 'High-performance system and application programming' },
                { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', tooltip: 'Enterprise backend systems and object-oriented design' },
                { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', tooltip: 'Core language for ML pipelines and data analysis' }
            ]
        },
        {
            category: 'Data Science & Machine Learning',
            icon: <BrainCircuit />,
            skills: [
                { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', tooltip: 'Data manipulation and analysis via DataFrames' },
                { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', tooltip: 'Large, multi-dimensional array processing' },
                { name: 'Scikit-learn', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg', tooltip: 'Classical machine learning algorithms' },
                { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', tooltip: 'Deep learning and neural network architectures' }
            ]
        },
        {
            category: 'Databases & Querying',
            icon: <Database />,
            skills: [
                { name: 'SQL', LucideIcon: Database, tooltip: 'Querying and relational data handling' },
                { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', tooltip: 'Relational database management and optimization' }
            ]
        },
        {
            category: 'Tools & Platforms',
            icon: <Server />,
            skills: [
                { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', tooltip: 'Version control and distributed collaboration' },
                { name: 'GitHub', LucideIcon: Github, tooltip: 'CI/CD and repository hosting' },
                { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', tooltip: 'Containerizing monolithic and microservice architectures' },
                { name: 'AWS', LucideIcon: Cloud, tooltip: 'Cloud computing and scalable remote hosting' },
                { name: 'Jira', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg', tooltip: 'Agile project management and issue tracking' }
            ]
        },
        {
            category: 'Core Concepts',
            icon: <Lightbulb />,
            skills: [
                { name: 'Data Visualization', LucideIcon: PieChart, tooltip: 'Translating complex metrics into visual stories' },
                { name: 'Statistical Modeling', LucideIcon: Activity, tooltip: 'Probability frameworks and predictive analytics' },
                { name: 'System Design', LucideIcon: Workflow, tooltip: 'Architecting high-availability scalable systems' },
                { name: 'Quantitative Finance', LucideIcon: LineChart, tooltip: 'Algorithmic trading and financial data modeling' }
            ]
        }
    ];

    return (
        <section className="section-alt skills-section" id="skills">
            <div className="container">

                <div className="skills-header">
                    <h2 className="section-title reveal">Skills</h2>
                </div>

                <div className="skills-category-grid">
                    {skillGroups.map((group, groupIndex) => (
                        <div
                            key={groupIndex}
                            className="skill-category-card glass-card reveal"
                            style={{ transitionDelay: `${0.1 + (groupIndex * 0.1)}s` }}
                        >
                            <div className="category-header">
                                <span className="category-icon">{group.icon}</span>
                                <h3 className="card-title">{group.category}</h3>
                            </div>

                            <div className="skill-icon-grid">
                                {group.skills.map((skill, index) => (
                                    <div key={index} className="skill-icon-item" data-tooltip={skill.tooltip}>
                                        <div className="skill-icon-wrapper">
                                            <IconWrapper src={skill.src} alt={skill.name} LucideIcon={skill.LucideIcon} />
                                        </div>
                                        <span className="skill-label">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
