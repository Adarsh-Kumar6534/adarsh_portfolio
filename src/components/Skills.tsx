"use client";

import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Programming",
        skills: [
            { name: "C++", level: 90 },
            { name: "Python", level: 85 },
            { name: "Java", level: 80 },
            { name: "C", level: 85 },
        ],
    },
    {
        category: "Frameworks & Libs",
        skills: [
            { name: "Flutter", level: 85 },
            { name: "Pandas/NumPy", level: 80 },
            { name: "Sklearn", level: 75 },
            { name: "Matplotlib/Seaborn", level: 75 },
        ],
    },
    {
        category: "Tools & Platforms",
        skills: [
            { name: "Git/GitHub", level: 90 },
            { name: "MySQL", level: 80 },
            { name: "Figma", level: 70 },
            { name: "VS Code", level: 90 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">
                        My <span className="text-neon-cyan">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillsData.map((category, catIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                            className="glass-card p-6 rounded-2xl border border-white/5 hover:border-neon-cyan/30 transition-all hover:-translate-y-2"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
                                {category.category}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-neon-cyan">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                                                className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
