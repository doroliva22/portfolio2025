import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
    const [showArrow, setShowArrow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) setShowArrow(true);
            else setShowArrow(false);
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <section
            id="contacto"
            className="min-h-screen bg-gradient-to-b from-black to-violet-950 flex flex-col items-center justify-center text-center px-6"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contacto
            </h2>

            <p className="text-purple-200 text-lg max-w-xl mb-10">
                Si querés trabajar conmigo o tenés alguna idea que te gustaría llevar a
                cabo, escribime directamente por correo o por WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
                <a
                    href="mailto:doroliva22@gmail.com"
                    className="px-8 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/30"
                >
                    📧 Enviar Email
                </a>

                <a
                    href="https://wa.me/5491133034776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-400 transition-all duration-300 shadow-lg shadow-green-500/30"
                >
                    💬 WhatsApp
                </a>
            </div>

            {/* Flecha volver arriba */}
            {showArrow && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed bottom-8 right-8 backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl shadow-lg shadow-violet-900/20 px-4 py-3 cursor-pointer text-gray-200 hover:text-violet-400"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    ↑
                </motion.div>
            )}
        </section>
    );
};
