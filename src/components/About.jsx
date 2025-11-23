import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Python", "TensorFlow", "NumPy", "Pandas",
        "Matplotlib", "Keras", "SciKit-Learn", "SQL",
        "React", "Git", "MS Office"
    ];

    return (
        <section id="about" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
                        <p>
                            I'm a Computer Engineering student with a deep curiosity for the intelligence behind the code.
                            My journey is defined by a relentless pursuit of knowledge in Data Science and AI—turning raw data into meaningful insights.
                        </p>
                        <p>
                            Beyond the screen, I've led communities like the IEEE COMU Computer Society, fostering a culture of learning and collaboration.
                            I don't just build software; I aim to engineer solutions that bridge the gap between complex algorithms and real-world impact.
                        </p>
                        <p>
                            Currently, I'm focused on pushing the boundaries of what's possible with Machine Learning.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-slate-100 mb-4">Skills</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                                    <span className="text-blue-400">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
