"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, Download, Eye, ExternalLink } from "lucide-react";
import { useState } from "react";
import CertificateModal from "./CertificateModal";

const education = [
    {
        title: "B.Tech in Computer Science Engineering",
        institution: "Lovely Professional University, Punjab",
        year: "2023 - Present",
        desc: "CGPA: 8.64. Focusing on Data Science and Intelligent Systems.",
    },
    {
        title: "Intermediate",
        institution: "Gurukul Vidyapeeth, Hajipur",
        year: "Completed",
        desc: "Scored 87.6%. Focus on Physics, Chemistry, and Mathematics.",
    },
    {
        title: "Matriculation",
        institution: "Mahnar St Joseph’s School",
        year: "Completed",
        desc: "Scored 87.3%.",
    },
];

const certifications = [
    {
        id: "oracle-data",
        title: "Oracle Certified Professional: Data Science",
        issuer: "Oracle",
        year: "Oct 2025",
        image: "/assets/oracledata.png",
    },
    {
        id: "oracle-ai",
        title: "Oracle Certified Associate: AI Foundations",
        issuer: "Oracle",
        year: "Oct 2025",
        image: "/assets/oracleai.png",
    },
    {
        id: "nptel-ml",
        title: "Introduction to Machine Learning",
        issuer: "NPTEL (IIT Madras)",
        year: "Apr 2025",
        image: "/assets/nptelml.png",
    },
    {
        id: "flutter",
        title: "Mobile Application Development using Flutter",
        issuer: "Cypher Schools",
        year: "Jul 2024",
        image: "/assets/flutter.png",
    },
];

const achievements = [
    {
        title: "Patent Filed",
        desc: "AI-Powered Deadlock Detection, Prediction, Visualization and Resolution in Single Instance. App No: 202511075563",
        link: null,
    },
    {
        title: "Codeforces Rating",
        desc: "Max Rating: 1315 (Pupil)",
        link: "https://codeforces.com/profile/adarshsingh6534",
    },
    {
        title: "LeetCode Rating",
        desc: "Peak Contest Rating: 1555",
        link: "https://leetcode.com/u/adarsh65/",
    },
];

export default function Resume() {
    const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null);

    return (
        <section id="resume" className="py-20 relative">
            <CertificateModal
                isOpen={!!selectedCert}
                onClose={() => setSelectedCert(null)}
                imageSrc={selectedCert?.image || ""}
                title={selectedCert?.title || ""}
            />
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        My <span className="text-neon-cyan">Resume</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full mb-8" />

                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-3 glass-card text-white font-medium rounded-full hover:bg-white/10 border border-neon-cyan/30 hover:border-neon-cyan transition-all flex items-center gap-2 mx-auto group">
                            <Download size={20} className="group-hover:animate-bounce" /> Download Resume
                        </button>
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <BookOpen className="text-neon-cyan" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-white/10 pl-8 ml-3">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-neon-cyan border-4 border-black" />
                                    <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all">
                                        <span className="text-sm text-neon-cyan font-mono mb-2 block flex items-center gap-2">
                                            <Calendar size={14} /> {item.year}
                                        </span>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-gray-400 text-sm mb-3">{item.institution}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Award className="text-neon-purple" /> Certifications
                        </h3>
                        <div className="space-y-6">
                            {certifications.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    onClick={() => setSelectedCert(item)}
                                    className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all flex items-center gap-4 group cursor-pointer relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform z-10">
                                        <Award size={24} />
                                    </div>
                                    <div className="flex-1 z-10">
                                        <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                                        <p className="text-gray-400 text-sm">{item.issuer} • {item.year}</p>
                                    </div>

                                    {/* View Label */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs text-neon-cyan font-mono z-10">
                                        <Eye size={14} /> View
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 justify-center">
                        <Award className="text-neon-cyan" /> Achievements
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {achievements.map((item, index) => {
                            const CardContent = () => (
                                <>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 translate-x-[-100%] group-hover:animate-shine pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-lg font-bold text-white group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                                            {item.link && (
                                                <ExternalLink size={16} className="text-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
                                            )}
                                        </div>
                                        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                    </div>
                                </>
                            );

                            const cardClasses = "relative glass-card p-6 rounded-2xl border border-white/5 transition-all overflow-hidden group text-left h-full flex flex-col justify-center";

                            if (item.link) {
                                return (
                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.03, y: -5, boxShadow: "0 0 20px rgba(0, 243, 255, 0.2)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`${cardClasses} hover:border-neon-cyan/50 cursor-pointer`}
                                    >
                                        <CardContent />
                                    </motion.a>
                                );
                            }

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)" }}
                                    className={`${cardClasses} hover:border-neon-purple/50`}
                                >
                                    <CardContent />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
