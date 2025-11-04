import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";

export const ProjectsSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleLineRef = useRef(null);

    const projectImages = [
        {
            id: 1,
            title: "Paginas",
            imageSrc: "/images/proyectoA.png",
            link: "https://sgiar.org.ar/sgiarnew/wordpress/",
        },
        {
            id: 2,
            title: "Diarios Online",
            imageSrc: "/images/proyectoB.png",
            link: "https://www.humanismosoka.org.ar/",
        },
        {
            id: 3,
            title: "Sistema de Entradas por QR",
            imageSrc: "/images/proyectoC.png",
            link: null, // sin ícono ni enlace
        },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            titleRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            titleLineRef.current,
            { width: "0%", opacity: 0 },
            {
                width: "100%",
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.utils.toArray(".project-card").forEach((card, i) => {
            gsap.fromTo(
                card,
                { y: 80, opacity: 0, scale: 0.95 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="relative py-20 bg-[#f6f6f6] overflow-hidden"
        >
            {/* 🔹 Título */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 opacity-0"
                >
                    Proyectos
                </h2>
                <div
                    ref={titleLineRef}
                    className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
                ></div>
            </div>

            {/* 🔹 Grid de proyectos */}
            <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projectImages.map((project) => (
                    <div
                        key={project.id}
                        className="project-card bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-[1.03] overflow-hidden"
                    >
                        <div className="relative w-full h-60 bg-gray-100 flex items-center justify-center">
                            <img
                                className="project-image w-full h-full object-contain"
                                src={project.imageSrc}
                                alt={project.title}
                            />
                        </div>
                        <div className="p-6 text-center">
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-title flex items-center justify-center gap-2 text-xl font-semibold text-black hover:text-gray-500 transition-colors duration-300 cursor-pointer"
                                >
                                    {project.title} <SlShareAlt />
                                </a>
                            ) : (
                                <h3 className="project-title text-xl font-semibold text-black">
                                    {project.title}
                                </h3>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
