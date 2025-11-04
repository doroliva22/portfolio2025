// src/components/ContactSection.jsx
export const ContactSection = () => {
    return (
        <section
            id="contact"
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

        </section>
    );
};

export default ContactSection;
