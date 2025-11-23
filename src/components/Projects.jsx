import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI-Smart-ATS",
            description: "AI Powered CV Analysis System. An intelligent applicant tracking system that parses and analyzes resumes using artificial intelligence.",
            tags: ["AI", "CV Analysis", "Automation"],
            link: "https://github.com/erenogut/AI-Smart-ATS"
        },
        {
            title: "Okey Tile Detector",
            description: "AI-based Okey tile recognition system with real-time camera input. Uses computer vision to identify game tiles instantly.",
            tags: ["Python", "Computer Vision", "YOLO"],
            link: "https://github.com/erenogut/okey-detector"
        },
        {
            title: "clkMakro",
            description: "GUI-based mouse macro recorder and player with keyboard shortcuts. Automate repetitive tasks with ease.",
            tags: ["GUI", "Automation", "Tools"],
            link: "https://github.com/erenogut/clkMakro"
        }
    ];

    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-slate-100">Some Things I've Built</h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 rounded-xl hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex justify-between items-center mb-6 relative z-10">
                                <Folder size={40} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                                <div className="flex gap-4">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors relative z-10">{project.title}</h3>
                            <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow relative z-10">
                                {project.description}
                            </p>

                            <ul className="flex flex-wrap gap-3 text-xs text-slate-500 font-mono mt-auto relative z-10">
                                {project.tags.map((tag, i) => (
                                    <li key={i} className="bg-slate-800/80 px-2 py-1 rounded text-blue-400/80">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/erenogut"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded hover:bg-slate-800 transition-colors"
                    >
                        <Github size={20} />
                        View More on GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
