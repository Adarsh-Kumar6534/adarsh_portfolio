"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Telecom Data Analysis",
        desc: "Automated dashboards cutting 75% manual reporting effort. Identified customer trends to improve telecom decision-making.",
        tech: ["Excel", "Data Cleaning", "Visualization"],
        github: "https://github.com/Adarsh-Kumar6534/Telecom-Data-Analysis-and-Dashboard-",
        demo: "",
        image: "/assets/telecom.png",
    },
    {
        id: 2,
        title: "QuakeScope",
        desc: "Seismic Data Explorer. Explored large-scale earthquake datasets using Python and produced clear visuals reducing manual inspection time by 85%.",
        tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/Adarsh-Kumar6534/QuakeScope",
        demo: "",
        image: "/assets/newplot.png",
    },
    {
        id: 3,
        title: "Friend LMS",
        desc: "Cross-platform Learning Management App with real-time sync, smooth UI, animations, and Firebase backend.",
        tech: ["Flutter", "Dart", "Firebase", "Lottie"],
        github: "https://github.com/Adarsh-Kumar6534/friends_lms",
        demo: "",
        image: "/assets/frndlms.png",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        Featured <span className="text-neon-cyan">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layoutId={`project-${project.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onClick={() => setSelectedProject(project)}
                            className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-neon-cyan/50 transition-all"
                        >
                            <div className="h-48 w-full relative overflow-hidden">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    initial={{ opacity: 0, scale: 1 }}
                                    animate={{ opacity: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20">
                                        View Details
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            className="w-full max-w-2xl glass-card rounded-3xl overflow-hidden relative border border-white/10"
                        >
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedProject(null);
                                }}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="h-64 w-full relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {selectedProject.desc}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-neon-cyan border border-neon-cyan/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all"
                                    >
                                        <Github size={18} /> GitHub
                                    </a>
                                    {selectedProject.demo && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] transition-all"
                                        >
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Backdrop click to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={() => setSelectedProject(null)}
                        />
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
