import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";

export default function ContactSection() {
    return (
        <section className="w-full flex flex-col items-center gap-8" id="contacto">
            <div className="mt-8 flex items-center gap-6 text-[36px] text-blue-950 dark:text-gray-100">
                <a
                    href="https://www.linkedin.com/in/julio-alberto-ocampo-villalobos-335999268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] transform hover:scale-110 hover:shadow-lg transition duration-300"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://www.instagram.com/julio._.villalobos?igsh=Znc2aTVyZDd6Y2h0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E1306C] transform hover:scale-110 hover:shadow-lg transition duration-300"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
                <a
                    href="https://github.com/JulioVillalobos03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#541FA3FF] transform hover:scale-110 hover:shadow-lg transition duration-300"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href={`${import.meta.env.BASE_URL}assets/cv/CV Julio Alberto Ocampo Villalobos.pdf`}
                    download="JulioVillalobos_CV.pdf"
                    className="hover:text-[#3B82F6] transform hover:-translate-y-1 transition duration-300"
                    aria-label="Descargar CV"
                >
                    <HiDocumentArrowDown />
                </a>
            </div>


            <div className="absolute bottom-3 w-full border-t border-blue-950 dark:border-gray-600 pt-4 pb-12 md:pb-6 text-center text-sm text-blue-950 dark:text-gray-400">
                © {new Date().getFullYear()} Julio Villalobos – Todos los derechos reservados.
            </div>
        </section>
    );
}
