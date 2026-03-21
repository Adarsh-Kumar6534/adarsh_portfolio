import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Work.css';

const featuredProjects = [
    {
        title: 'FinSight – Banking Operations & Risk Intelligence Platform',
        image: '/resources/finsight.png',
        liveUrl: 'https://finsight-alpha-liart.vercel.app/',
        githubUrl: 'https://github.com/Adarsh-Kumar6534/finsight',
        problem: 'Real time tracking of transactions and risk metrics lacked unified analytics visibility.',
        solution: [
            'Built full stack analytics platform using FastAPI and PostgreSQL.',
            'Designed SQL driven KPI dashboards for real time insights.'
        ],
        learning: 'SQL analytics, backend systems, API design, data pipelines',
        tags: ['FastAPI', 'PostgreSQL', 'SQL', 'React', 'Analytics']
    },
    {
        title: 'Food Price AI',
        image: '/resources/FoodPriceAI.png',
        liveUrl: 'https://global-food-price-analytics.vercel.app/',
        githubUrl: 'https://github.com/Adarsh-Kumar6534/Global-Food-Price-Analytics',
        problem: 'Complex food price patterns require analysis of large scale market and household data.',
        solution: [
            'Developed ML models on 18000 records with feature engineering.',
            'Optimized performance using RMSE, MAE, and R squared metrics.'
        ],
        learning: 'machine learning, feature engineering, model evaluation, data preprocessing',
        tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Analytics']
    },
    {
        title: 'Friends LMS',
        image: '/resources/frndLms.png',
        liveUrl: 'https://friends-lms.vercel.app/',
        githubUrl: 'https://github.com/Adarsh-Kumar6534/friends_lms',
        problem: 'Lack of centralized platform for learning, communication, and real time interaction.',
        solution: [
            'Built cross platform LMS using Flutter and Firebase.',
            'Implemented authentication, real time sync, and responsive UI.'
        ],
        learning: 'flutter, firebase, mobile development, API integration',
        tags: ['Flutter', 'Dart', 'Firebase', 'Real-time']
    }
];

const otherProjects = [
    {
        title: 'Fire Intelligence Dashboard',
        image: '/resources/firedash.png',
        githubUrl: 'https://github.com/Adarsh-Kumar6534/Fire-Intelligence-Dashboard-',
        problem: 'Fire incident data lacked structured visualization for pattern analysis.',
        solution: [
            'Developed Power BI dashboard with interactive filters.',
            'Visualized trends, severity, and geographic distribution.'
        ],
        learning: 'data visualization, power bi, dashboard design, analytics',
        tags: ['Power BI', 'Data Visualization', 'Analytics']
    },
    {
        title: 'QuakeScope (Python Toolbox)',
        image: '/resources/newplot.png',
        githubUrl: 'https://github.com/Adarsh-Kumar6534/QuakeScope',
        problem: 'Earthquake datasets require efficient tools for analysis and visualization.',
        solution: [
            'Built Python toolbox for processing and visualizing seismic data.',
            'Generated graphical insights from raw datasets.'
        ],
        learning: 'python, data analysis, visualization, tool development',
        tags: ['Python', 'Matplotlib', 'Seismic Data']
    },
    {
        title: 'Telecom Dashboard',
        image: '/resources/telecom.png',
        githubUrl: 'https://github.com/Adarsh-Kumar6534',
        problem: 'Telecom data requires analysis to understand usage patterns and performance.',
        solution: [
            'Created dashboard to analyze customer behavior and trends.',
            'Extracted key metrics for decision making.'
        ],
        learning: 'data analysis, visualization, business insights',
        tags: ['Dashboard', 'Data Analysis', 'Business Metrics']
    }
];

const ProjectCard = ({ project, index }) => (
    <div className="project-card glass-card reveal" style={{ transitionDelay: `${0.1 + ((index % 3) * 0.1)}s` }}>
        <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
                <div className="project-links">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary glow-btn icon-btn">
                            <ExternalLink size={18} /> View Live
                        </a>
                    )}
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary glass-btn icon-btn">
                            <Github size={18} /> Source Code
                        </a>
                    )}
                </div>
            </div>
        </div>

        <div className="project-content">
            <h3 className="project-title">{project.title}</h3>

            <div className="project-details">
                <div className="detail-block problem-block">
                    <span className="detail-label label-problem">PROBLEM</span>
                    <p className="detail-text">{project.problem}</p>
                </div>
                <div className="detail-block solution-block">
                    <span className="detail-label label-solution">SOLUTION</span>
                    <ul className="solution-list">
                        {project.solution.map((line, i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>
                <div className="detail-block learning-block">
                    <span className="detail-label label-learning">LEARNING</span>
                    <p className="detail-text learning-text">{project.learning}</p>
                </div>
            </div>

            <div className="project-tags">
                {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const Work = () => {
    return (
        <section className="section work-section" id="work">
            <div className="container">
                <h2 className="section-title reveal" style={{ textAlign: 'left' }}>Work</h2>

                <h3 className="category-title reveal">Featured Projects</h3>
                <div className="projects-grid">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <h3 className="category-title reveal" style={{ marginTop: '80px' }}>Other Projects</h3>
                <div className="projects-grid">
                    {otherProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;
