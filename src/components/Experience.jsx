import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl font-bold text-slate-100">Where I've Worked</h2>
                    <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
                </div>

                <div className="space-y-12">
                    <div className="relative border-l border-slate-700 pl-8 ml-4">
                        <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-400"></div>

                        <h3 className="text-xl font-bold text-slate-100">Intern</h3>
                        <p className="text-blue-400 mb-2">Bosch Sanayi ve Ticaret A.Ş. • Bursa</p>
                        <p className="text-slate-500 text-sm mb-4">Jul 2024 – Aug 2024</p>

                        <ul className="space-y-2 text-slate-400">
                            <li className="flex gap-2">
                                <span className="text-blue-400 mt-1.5">▹</span>
                                <span>Developed a Microsoft Access database to digitize and centralize departmental records, enabling faster data retrieval and more reliable storage.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-400 mt-1.5">▹</span>
                                <span>Implemented structured forms and automated report queries which reduced manual report preparation time.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-blue-400 mt-1.5">▹</span>
                                <span>Collaborated with the QMM (Quality Management and Methods Department) team to gather requirements and validate data integrity.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
