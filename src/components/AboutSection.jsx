import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export const AboutSection = () => {
    const { language } = useLanguage();

    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const starsRef = useRef([]);
    const [showArrow, setShowArrow] = useState(false);

    // Textos traducidos
    const t = {
        es: {
            title: "Sobre mí",
            p1: `Desarrollador de software especializado en crear aplicaciones modernas y de alto rendimiento con React 19+, Node.js, TypeScript y el stack MERN.`,
            p2: `Experiencia en interfaces eficientes con Hooks, Zustand, Redux Toolkit y ecosistemas modernos como ShadCN y TailwindCSS. Desarrollo con patrones como Clean Architecture y Domain-Driven Design, además de testing con Vitest y React Testing Library.`,
        },
        en: {
            title: "About me",
            p1: `specialized in building modern, high-performance applications using React 19+, Node.js, TypeScript and the MERN stack.`,
            p2: `Experience building efficient interfaces with Hooks, Zustand, Redux Toolkit and modern ecosystems such as ShadCN and TailwindCSS. Skilled in Clean Architecture, Domain-Driven Design, and testing using Vitest and React Testing Library.`,
        },
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(
                titleRef.current,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                    },
                }
            );

            // Intro animation
            gsap.fromTo(
                introRef.current,
                { y: 60, opacity: 0, filter: "blur(10px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    },
                }
            );

            // Floating stars
            starsRef.current.forEach((star, index) => {
                if (!star) return;
                const dir = index % 2 === 0 ? 1 : -1;

                gsap.to(star, {
                    x: dir * (10 + index * 4),
                    y: dir * (6 + index * 3),
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    },
                });

                gsap.to(star, {
                    x: `+=${dir * (3 + index * 0.4)}`,
                    y: `+=${dir * (2 + index * 0.3)}`,
                    duration: 4 + index * 0.5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleScroll = () => setShowArrow(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sobre-mi"
            className="relative min-h-screen bg-gradient-to-b from-black to-[#9a74cf40] overflow-hidden"
        >
            {/* Floating Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        ref={(el) => (starsRef.current[i] = el)}
                        className="absolute rounded-full"
                        style={{
                            width: `${6 + i * 2}px`,
                            height: `${6 + i * 2}px`,
                            backgroundColor: "white",
                            opacity: 0.12 + Math.random() * 0.25,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            filter: "blur(1px)",
                        }}
                    />
                ))}
            </div>

            {/* Title */}
            <div className="container mx-auto px-4 flex flex-col items-center pt-24 pb-10">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-bold text-center text-white opacity-0 tracking-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                >
                    {t[language].title}
                </h1>
            </div>

            {/* Text + Image */}
            <div
                ref={introRef}
                className="relative w-full flex md:flex-row flex-col justify-between lg:px-24 px-6 items-center opacity-0"
            >
                {/* TEXT CARD */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mt-10 p-6 md:p-8 bg-purple-900/20 border border-purple-500/30 
                    rounded-2xl backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.15)]
                    hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] transition-shadow duration-300 max-w-2xl"
                >
                    <p className="text-base md:text-lg text-purple-100 leading-relaxed text-justify">
                        <span className="text-purple-300 font-semibold">
                            {language === "es"
                                ? "Desarrollador de software "
                                : "Software developer "}
                        </span>
                        {t[language].p1}
                    </p>

                    <p className="mt-6 text-base md:text-lg text-purple-100 leading-relaxed text-justify">
                        {t[language].p2}
                    </p>
                </motion.div>

                {/* IMAGE */}
                <img
                    src="images/sinfondobien.png"
                    alt={language === "es" ? "Salvador Oliva - Desarrollador" : "Salvador Oliva - Developer"}
                    className="lg:h-[20rem] md:h-[16rem] h-[13rem]
                    mix-blend-screen opacity-90 mt-10 md:mt-0
                    rounded-2xl border border-violet-300/10
                    shadow-[0_0_25px_rgba(147,51,234,0.25)]
                    transition-all duration-700 ease-in-out
                    hover:scale-105 hover:opacity-100"
                />
            </div>

            {/* Back to Top Arrow */}
            {showArrow && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed bottom-8 right-8 backdrop-blur-md bg-white/5 border border-white/20
                    rounded-2xl shadow-lg shadow-violet-900/20 px-4 py-3 cursor-pointer text-gray-200
                    hover:text-violet-400"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    ↑
                </motion.div>
            )}
        </section>
    );
};
