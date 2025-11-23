import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

function App() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-blue-500 selection:text-white relative overflow-hidden">
            {/* Mouse Spotlight */}
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                }}
            />

            <div className="stars stars-1"></div>
            <div className="stars stars-2"></div>
            <div className="stars stars-3"></div>

            {/* Animated Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center items-center">
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-4 pt-20 relative z-10">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <Chatbot />

            <footer className="bg-slate-950 py-8 mt-20 text-center text-slate-400 relative z-10">
                <p>© {new Date().getFullYear()} Eren Öğüt. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
