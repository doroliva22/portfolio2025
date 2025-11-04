import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-14 px-6 border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                {/* Columna izquierda */}
                <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent mb-2">
                        Salvador Oliva
                    </h2>
                    <p className="text-gray-400 text-sm max-w-sm">
                        Desarrollador front-end enfocado en experiencias digitales modernas,
                        rendimiento y diseño funcional.
                    </p>
                </div>

                {/* Columna derecha */}
                <div className="flex flex-col items-start md:items-end gap-4">
                    <h3 className="text-lg font-semibold text-purple-200">Contacto</h3>
                    <div className="flex gap-5">
                        <a
                            href="https://github.com/doroliva22"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                            <FiGithub className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/salvador-oliva/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                            <FiLinkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:doroliva22@gmail.com"
                            className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                            <FiMail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://wa.me/5491133034776"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-violet-400 transition-colors"
                        >
                            <FiPhone className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Línea divisoria + parte inferior */}
            <div className="max-w-6xl mx-auto border-t border-gray-800 mt-10 pt-6 flex justify-center">
                <p className="text-gray-500 text-sm text-center">
                    © {new Date().getFullYear()} Salvador Oliva. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
