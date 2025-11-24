"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-8 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-outfit text-white mb-2">
                            Adarsh<span className="text-neon-cyan">.</span>
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Building the future with code and data.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <SocialIcon href="https://github.com/Adarsh-Kumar6534" icon={<Github size={20} />} />
                        <SocialIcon href="https://linkedin.com/in/adarsh65" icon={<Linkedin size={20} />} />
                        <SocialIcon href="https://x.com/AADARSH47736609" icon={<Twitter size={20} />} />
                        <SocialIcon href="mailto:adarshsingh6534@gmail.com" icon={<Mail size={20} />} />
                    </div>

                    <div className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Adarsh. All rights reserved.
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-600 text-xs">
                    Made with <span className="text-neon-pink animate-pulse">❤️</span> by Adarsh
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-neon-cyan transition-colors hover:scale-110 transform"
        >
            {icon}
        </a>
    );
}
