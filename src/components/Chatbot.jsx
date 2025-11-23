import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { MessageCircle, X, Send, Loader2, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [messages, setMessages] = useState([
        { role: 'model', text: "Selam! Ben Eren'in yapay zeka asistanıyım. Projeleri, yetenekleri veya tecrübeleri hakkında bana istediğini sorabilirsin! 👋" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

            if (!apiKey) {
                throw new Error('API Key is missing (undefined). Make sure .env file exists and server is restarted.');
            }
            if (apiKey.includes('YOUR_API_KEY')) {
                throw new Error('API Key is still the placeholder. Please edit .env file.');
            }

            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

            const systemPrompt = `
        Sen Eren Öğüt'ün portfolyo web sitesi için çalışan samimi ve yardımsever bir yapay zeka asistanısın.
        Amacın, ziyaretçilerin Eren hakkındaki sorularını cevaplamak.
        
        İşte Eren hakkında bilgiler:
        - İsim: Eren Öğüt
        - Rol: Çanakkale Onsekiz Mart Üniversitesi'nde Bilgisayar Mühendisliği Öğrencisi (4. Sınıf).
        - E-posta: erenogut@hotmail.com
        - Yetenekler: Python, TensorFlow, NumPy, Pandas, Matplotlib, Keras, SciKit-Learn, SQL, React, TailwindCSS, Git.
        - Deneyim: Bosch'ta staj yaptı (Access veritabanı geliştirdi, raporları otomatize etti).
        - Projeler: 
          1. AI-Smart-ATS (Yapay Zeka Destekli CV Analiz Sistemi)
          2. Okey Taş Tespit Sistemi (YOLOv5 tabanlı görüntü işleme)
          3. clkMakro (Klavye kısayollu fare makro kaydedici)
        - İlgi Alanları: Veri Bilimi, Yapay Zeka, Makine Öğrenmesi.
        - Liderlik: IEEE ÇOMÜ Computer Society Başkanı.

        Ton ve Kurallar:
        - Çok samimi, enerjik ve arkadaş canlısı bir dil kullan. Emoji kullanmaktan çekinme! 😊
        - Eren'i överken abartıya kaçma ama yeteneklerini vurgula.
        - Türkçe konuş.
        - Eğer bilmediğin bir şey sorulursa, dürüstçe bilmediğini ama Eren'in harika projeleri olduğunu söyleyerek konuyu değiştir.
        - Cevapları çok uzun tutma, sohbet havasında olsun.
      `;

            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: systemPrompt }],
                    },
                    {
                        role: "model",
                        parts: [{ text: "Anlaşıldı! Eren hakkında konuşmaya hazırım ve çok heyecanlıyım! 🚀" }],
                    },
                ],
            });

            const result = await chat.sendMessage(userMessage);
            const response = result.response.text();

            setMessages(prev => [...prev, { role: 'model', text: response }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages(prev => [...prev, { role: 'model', text: `Hata: ${error.message}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full shadow-lg z-50 flex items-center gap-3 font-semibold text-lg group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
                <span className="hidden group-hover:block transition-all duration-300">Asistanla Konuş</span>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-slate-800 p-4 border-b border-slate-700 flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <h3 className="font-semibold text-slate-100">Eren'in Asistanı</h3>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-blue-600' : 'bg-purple-600'}`}>
                                        {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                                    </div>
                                    <div
                                        className={`p-3 rounded-2xl text-sm max-w-[80%] ${msg.role === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-slate-800 text-slate-200 rounded-tl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3">
                                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <Bot size={16} />
                                    </div>
                                    <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none">
                                        <Loader2 size={16} className="animate-spin text-slate-400" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-slate-800 border-t border-slate-700">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Eren hakkında sor..."
                                    className="flex-1 bg-slate-900 border border-slate-700 rounded-full px-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={isLoading || !input.trim()}
                                    className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-colors"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
