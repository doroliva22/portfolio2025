import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
    FiGithub,
    FiLinkedin,
    FiMail,
    FiPhone,
    FiMenu,
    FiX,
} from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMenu = () => setIsOpen(!isOpen);

    // 🔽 Ocultar header al hacer scroll hacia abajo
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: showHeader ? 0 : -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed w-full z-50 top-0 left-0 flex justify-center items-center py-6 bg-transparent"
        >
            <div
                className="backdrop-blur-md bg-white/5 border border-white/20 rounded-2xl shadow-lg shadow-violet-900/20 
        flex items-center justify-center px-8 py-4 space-x-8"
            >
                {/* Navegación */}
                <nav className="hidden md:flex space-x-6 text-gray-200 text-sm uppercase tracking-wide">
                    <a href="#sobre-mi" className="hover:text-violet-400 transition">
                        Sobre mí
                    </a>
                    <a href="#proyectos" className="hover:text-violet-400 transition">
                        Proyectos
                    </a>
                    <a href="#contacto" className="hover:text-violet-400 transition">
                        Contacto
                    </a>
                </nav>

                {/* Íconos de contacto */}
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    href="https://github.com/doroliva22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-violet-400 transition-colors"
                >
                    <FiGithub className="w-6 h-6" />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    href="https://www.linkedin.com/in/salvador-oliva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-violet-400 transition-colors"
                >
                    <FiLinkedin className="w-6 h-6" />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    href="mailto:doroliva22@gmail.com"
                    className="text-gray-200 hover:text-violet-400 transition-colors"
                >
                    <FiMail className="w-6 h-6" />
                </motion.a>

                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    href="https://wa.me/5491133034776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-violet-400 transition-colors"
                >
                    <FiPhone className="w-6 h-6" />
                </motion.a>
            </div>

            {/* Menú móvil */}
            <div className="absolute right-6 top-6 md:hidden">
                <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={toggleMenu}
                    className="text-gray-300"
                >
                    {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </motion.button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-20 left-0 w-full bg-black/80 backdrop-blur-md p-6 flex flex-col items-center space-y-4"
                >
                    <a href="#sobre-mi" className="text-gray-200 hover:text-violet-400">
                        Sobre mí
                    </a>
                    <a href="#proyectos" className="text-gray-200 hover:text-violet-400">
                        Proyectos
                    </a>
                    <a href="#contacto" className="text-gray-200 hover:text-violet-400">
                        Contacto
                    </a>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
