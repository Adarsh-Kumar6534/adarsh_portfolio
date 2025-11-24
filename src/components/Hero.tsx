"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
    const [text, setText] = useState("");
    const skills = ["C++", "Python", "Data Science", "Flutter", "Machine Learning", "SQL"];
    const [skillIndex, setSkillIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentSkill = skills[skillIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentSkill.length) {
                setText(currentSkill.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setText(currentSkill.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentSkill.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setSkillIndex((prev) => (prev + 1) % skills.length);
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, skillIndex, skills]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-cyan/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-neon-pink/20 rounded-full blur-[100px] animate-pulse delay-2000" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-2 rounded-full glass-card mb-6 border-neon-cyan/30"
                    >
                        <span className="text-neon-cyan font-medium">Available for Hire</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold font-outfit mb-6 leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Adarsh</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Computer Science Engineer | <span className="text-white font-medium">Data Science Minor</span>
                    </h2>

                    <div className="h-8 mb-8 text-xl md:text-2xl text-neon-cyan font-mono">
                        &gt; {text}<span className="animate-blink">|</span>
                    </div>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Building intelligent systems with code, data, and creativity.
                        Passionate about solving complex problems through scalable solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#contact">
                            <button className="px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2">
                                Contact Me <ArrowRight size={20} />
                            </button>
                        </Link>
                        <Link href="/resume.pdf" target="_blank">
                            <button className="px-8 py-3 glass-card text-white font-medium rounded-full hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2">
                                Download Resume <Download size={20} />
                            </button>
                        </Link>
                    </div>

                    <div className="mt-12 flex gap-6">
                        <SocialLink href="https://github.com/Adarsh-Kumar6534" icon={<Github />} />
                        <SocialLink href="https://linkedin.com/in/adarsh65" icon={<Linkedin />} />
                        <SocialLink href="mailto:adarshsingh6534@gmail.com" icon={<Mail />} />
                    </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:flex justify-center items-center"
                >
                    <div className="relative w-[500px] h-[600px] flex items-center justify-center">
                        {/* Profile Image Container */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-80 h-96 z-20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-[2rem] blur-2xl opacity-20 animate-pulse" />
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 glass-card shadow-2xl group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 z-10" />
                                {/* Placeholder for Profile Image - User needs to upload profile.png */}
                                <img
                                    src="/assets/profile.png"
                                    alt="Adarsh"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-purple/10 rounded-full blur-[80px] -z-10" />

                        {/* Floating Icons/Badges */}
                        <FloatingBadge icon="C++" delay={0} x={-260} y={-180} />
                        <FloatingBadge icon="Python" delay={1} x={260} y={-100} />
                        <FloatingBadge icon="Flutter" delay={2} x={-260} y={140} />
                        <FloatingBadge icon="SQL" delay={3} x={260} y={180} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-full text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all transform hover:scale-110"
        >
            {icon}
        </a>
    );
}

function FloatingBadge({ icon, delay, x, y }: { icon: string; delay: number; x: number; y: number }) {
    return (
        <motion.div
            initial={{ x, y }}
            animate={{ y: [y, y - 10, y] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
            className="absolute top-1/2 left-1/2 z-30 px-4 py-2 glass-card rounded-full text-sm font-bold text-white border border-white/10 shadow-lg"
        >
            {icon}
        </motion.div>
    );
}
