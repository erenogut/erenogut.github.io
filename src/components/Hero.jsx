import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-start py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-blue-400 text-lg font-mono mb-4">Hi, my name is</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
                    Eren Öğüt.
                </h1>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
                    Decoding reality with data & AI.
                </h2>
                <p className="max-w-xl text-slate-400 text-lg mb-12 leading-relaxed">
                    I'm a Computer Engineering student specializing in Data Science, Artificial Intelligence, and Machine Learning.
                    Currently focused on building accessible, human-centered products.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href="https://linkedin.com/in/erenogut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 border border-blue-400 text-blue-400 rounded hover:bg-blue-400/10 transition-colors"
                    >
                        <Linkedin size={20} />
                        LinkedIn
                    </a>
                    <a
                        href="/ErenÖğüt_CV_ENG.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                    >
                        <FileText size={20} />
                        Download CV
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
