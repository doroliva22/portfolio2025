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
import { useLanguage } from "../context/LanguageContext";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("sobre-mi");

    // 🔥 Idioma global desde el contexto
    const { language, setLanguage } = useLanguage();

    const toggleMenu = () => setIsOpen(!isOpen);

    // Ocultar header al hacer scroll
    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY <= lastScrollY);
            setLastScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // Scroll suave
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    // Detectar sección activa
    useEffect(() => {
        const sections = ["sobre-mi", "proyectos", "contacto"];
        const observers = [];

        sections.forEach((id) => {
            const section = document.getElementById(id);
            if (!section) return;

            const observer = new IntersectionObserver(
                ([entry]) => entry.isIntersecting && setActiveSection(id),
                { threshold: 0.6 }
            );

            observer.observe(section);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    // Clases de navegación
    const linkClass = (id) =>
        `cursor-pointer text-gray-200 hover:text-violet-400 transition-colors`;

    // Diccionario traducido
    const t = {
        es: {
            about: "Sobre mí",
            projects: "Proyectos",
            contact: "Contacto",
        },
        en: {
            about: "About me",
            projects: "Projects",
            contact: "Contact",
        },
    };

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
                {/* 🔥 LANGUAGE SWITCH GLOBAL */}
                <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-1 py-1 select-none">
                    <button
                        onClick={() => setLanguage("es")}
                        className={`relative w-14 text-center text-xs font-semibold transition-colors ${language === "es" ? "text-black" : "text-gray-300"
                            }`}
                    >
                        {language === "es" && (
                            <motion.div
                                layoutId="langSwitch"
                                className="absolute inset-0 rounded-full bg-violet-400"
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            />
                        )}
                        <span className="relative z-10">SPA</span>
                    </button>

                    <button
                        onClick={() => setLanguage("en")}
                        className={`relative w-14 text-center text-xs font-semibold transition-colors ${language === "en" ? "text-black" : "text-gray-300"
                            }`}
                    >
                        {language === "en" && (
                            <motion.div
                                layoutId="langSwitch"
                                className="absolute inset-0 rounded-full bg-violet-400"
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                            />
                        )}
                        <span className="relative z-10">ENG</span>
                    </button>
                </div>

                {/* Navegación */}
                <nav className="hidden md:flex space-x-6 text-sm uppercase tracking-wide">
                    <span onClick={() => scrollToSection("sobre-mi")} className={linkClass("sobre-mi")}>
                        {t[language].about}
                    </span>
                    <span onClick={() => scrollToSection("proyectos")} className={linkClass("proyectos")}>
                        {t[language].projects}
                    </span>
                    <span onClick={() => scrollToSection("contacto")} className={linkClass("contacto")}>
                        {t[language].contact}
                    </span>
                </nav>

                {/* Íconos */}
                {[{
                    icon: <FiGithub className="w-6 h-6" />,
                    href: "https://github.com/doroliva22"
                }, {
                    icon: <FiLinkedin className="w-6 h-6" />,
                    href: "https://www.linkedin.com/in/salvador-oliva/"
                }, {
                    icon: <FiMail className="w-6 h-6" />,
                    href: "mailto:doroliva22@gmail.com"
                }, {
                    icon: <FiPhone className="w-6 h-6" />,
                    href: "https://wa.me/5491133034776"
                }].map((item, i) => (
                    <motion.a
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-200 hover:text-violet-400 transition-colors"
                    >
                        {item.icon}
                    </motion.a>
                ))}
            </div>

            {/* Menú móvil */}
            <div className="absolute right-6 top-6 md:hidden">
                <motion.button whileTap={{ scale: 0.8 }} onClick={toggleMenu} className="text-gray-300">
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
                    <span onClick={() => scrollToSection("sobre-mi")} className={linkClass("sobre-mi")}>
                        {t[language].about}
                    </span>
                    <span onClick={() => scrollToSection("proyectos")} className={linkClass("proyectos")}>
                        {t[language].projects}
                    </span>
                    <span onClick={() => scrollToSection("contacto")} className={linkClass("contacto")}>
                        {t[language].contact}
                    </span>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;
