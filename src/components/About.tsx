"use client";

import { motion } from "framer-motion";
import { Code, Database, Globe, Server } from "lucide-react";

export default function About() {
    const highlights = [
        { icon: <Code size={24} />, title: "Languages", desc: "C++, Python, Java, Dart" },
        { icon: <Database size={24} />, title: "Data Science", desc: "Pandas, NumPy, Sklearn" },
        { icon: <Globe size={24} />, title: "Web/App", desc: "Flutter, React, HTML/CSS" },
        { icon: <Server size={24} />, title: "CS Core", desc: "DBMS, OS, CN, OOPs" },
    ];

    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        About <span className="text-neon-cyan">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image/Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass-card p-8 rounded-3xl border-l-4 border-neon-purple relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/20 rounded-full blur-[50px] transition-all group-hover:bg-neon-purple/30" />

                            <h3 className="text-2xl font-bold mb-4 text-white">Who am I?</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm Adarsh, a Computer Science Engineering student at Lovely Professional University, Punjab.
                                With a strong foundation in algorithms (Codeforces Pupil) and a passion for Data Science and App Development.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                I have filed a patent in AI-powered systems and hold certifications from Oracle and IIT Madras.
                                My journey involves mastering C++, Python, and Flutter to build scalable and intelligent solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side - Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all hover:-translate-y-2 border border-white/5 hover:border-neon-cyan/30 group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 text-neon-cyan group-hover:text-neon-purple transition-colors">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
