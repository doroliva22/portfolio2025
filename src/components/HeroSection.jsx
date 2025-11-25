import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { useLanguage } from "../context/LanguageContext";

export const HeroSection = () => {
    const { language } = useLanguage();

    const text = {
        es: {
            title: "Salvador Oliva",
            subtitle:
                "Desarrollador de software especializado en React, Node.js y TypeScript. Construyo aplicaciones modernas, escalables y de alto rendimiento usando el ecosistema MERN, arquitecturas limpias y testing avanzado.",
        },
        en: {
            title: "Salvador Oliva",
            subtitle:
                "Software Developer specialized in React, Node.js and TypeScript. I build modern, scalable and high-performance applications using the MERN ecosystem, clean architectures and advanced testing.",
        },
    };

    return (
        <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden">

            {/* Left */}
            <div className="z-40 xl:mb-0 mb-[20%]">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 0.9,
                        duration: 0.9,
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
                >
                    {text[language].title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="text-lg md:text-xl lg:text-2xl text-purple-200 max-w-2xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
                >
                    {text[language].subtitle}
                </motion.p>
            </div>

            {/* Right */}
            <Spline
                className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
                scene="https://prod.spline.design/CY9eX-a05VB8GNtd/scene.splinecode"
            />
        </section>
    );
};
