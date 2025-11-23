import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 text-center max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-blue-400 font-mono mb-4">What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">Get In Touch</h2>
                <p className="text-slate-400 text-lg mb-12">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <a
                        href="mailto:erenogut@hotmail.com"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-blue-400 text-blue-400 rounded hover:bg-blue-400/10 transition-colors"
                    >
                        <Mail size={20} />
                        Say Hello
                    </a>

                    <a
                        href="tel:+90 537 485 5924"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-600 text-slate-300 rounded hover:bg-slate-700/50 transition-colors"
                    >
                        <Phone size={20} />
                        +90 537 485 5924
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
