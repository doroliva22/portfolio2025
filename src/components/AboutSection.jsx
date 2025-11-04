import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const AboutSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const introRef = useRef(null);
    const starsRef = useRef([]);
    const [showArrow, setShowArrow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 65%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                introRef.current,
                { y: 80, opacity: 0, filter: "blur(10px)" },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            starsRef.current.forEach((star, index) => {
                if (!star) return;
                const direction = index % 2 === 0 ? 1 : -1;
                const speed = 0.5 + Math.random() * 0.5;
                gsap.to(star, {
                    x: direction * (40 + index * 15),
                    y: direction * (-25 + index * 10),
                    rotation: direction * 180,
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: speed,
                    },
                });
            });
        }, sectionRef);

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

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
            ref={sectionRef}
            id="sobre-mi"
            className="relative min-h-screen bg-gradient-to-b from-black to-[#9a74cf50] overflow-hidden"
        >
            {/* Floating Stars */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`star-${i}`}
                        ref={(el) => (starsRef.current[i] = el)}
                        className="absolute rounded-full"
                        style={{
                            width: `${8 + i * 2}px`,
                            height: `${8 + i * 2}px`,
                            backgroundColor: "white",
                            opacity: 0.2 + Math.random() * 0.4,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Title */}
            <div className="container mx-auto px-4 flex flex-col items-center justify-center pt-24 pb-10">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl font-bold text-center text-white opacity-0 tracking-tight"
                >
                    Sobre mí
                </h1>
            </div>

            {/* Intro Text + Image */}
            <div
                ref={introRef}
                className="relative w-full flex md:flex-row flex-col justify-between lg:px-24 px-6 items-center opacity-0"
            >
                <div className="lg:max-w-[36rem] max-w-[26rem] text-center md:text-left">
                    <p className="text-base md:text-lg text-purple-100 leading-relaxed">
                        Soy <span className="text-purple-300 font-semibold">desarrollador front-end</span>
                        enfocado en crear interfaces modernas, rápidas y funcionales.
                        Trabajo con <span className="text-purple-300 font-medium">React, TypeScript y Node.js</span>,
                        aplicando buenas prácticas y herramientas actuales como Redux Toolkit,
                        TailwindCSS y Vite para construir experiencias web sólidas y escalables.
                    </p>

                    <p className="mt-6 text-base md:text-lg text-purple-100 leading-relaxed">
                        Busco formar parte de un equipo donde pueda aportar mi enfoque en
                        <span className="text-purple-300 font-medium"> rendimiento, diseño y usabilidad</span>,
                        y seguir creciendo como profesional en el desarrollo front-end.
                    </p>
                </div>
                <img
                    src="images/sinfondobien.png"
                    alt="Salvador Oliva - Frontend Developer"
                    className="lg:h-[26rem] md:h-[20rem] h-[15rem] 
           mix-blend-screen opacity-90 
           mt-10 md:mt-0 
           rounded-2xl border border-violet-300/10 
           shadow-[0_0_30px_rgba(147,51,234,0.3)] 
           transition-all duration-700 ease-in-out 
           hover:opacity-100 hover:scale-105"
                />
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
