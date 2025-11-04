import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export const HeroSection = () => {
    return (
        <section className="h-screen bg-gradient-to-b from-violet-900 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg-px-24 px-10 relative overflow-hidden">
            {/* left */}
            <div className="z-40 xl:mb-0 mb-[20%]">
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffnes: 40,
                        damping: 25,
                        delay: 0.9,
                        duration: 0.9,
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 mb-6"
                >
                    Salvador Oliva <br />
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffnes: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className="text-xl md:text-1x1 lg:text-sxl text-purple-200 max-w-2xl"
                >
                    Front-end Developer especializado en Node, Vite, React, JavaScript,
                    TypeScript. Creación de interfaces modernas y eficientes, aplicando
                    buenas prácticas de testing y utilizando herramientas como Redux
                    Toolkit, TailwindCSS y el stack MERN para construir aplicaciones
                    escalables y seguras.
                </motion.p>
            </div>

            {/* derecha */}
            <Spline
                className="absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0"
                scene="https://prod.spline.design/CY9eX-a05VB8GNtd/scene.splinecode"
            />
        </section>
    );
};
