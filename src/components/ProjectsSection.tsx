import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ImageCarousel from "./ImageCarousel";

const projects = [
    {
        id: "viaja-segura",
        title: "Viaja Segura",
        description:
            "App móvil y backend que permite a usuarios solicitar viajes seguros, con seguimiento en tiempo real, botones de pánico, y sistema de verificación QR.",
        technologies: ["Flutter", "Spring Boot", "WebSocket", "JWT", "AWS"],
        images: [
            `${import.meta.env.BASE_URL}assets/images/vs/vs-1.png`,
            `${import.meta.env.BASE_URL}assets/images/vs/vs-2.png`,
            `${import.meta.env.BASE_URL}assets/images/vs/vs-3.png`,
        ],
        github: "https://github.com/JulioVillalobos03/viaja-segura-backend",
        live: "",
    },
    {
        id: "portfolio",
        title: "Mi Portafolio",
        description:
            "Un portafolio moderno construido con React, Tailwind y GSAP para mostrar mis habilidades y proyectos de forma visual y dinámica.",
        technologies: ["React", "Tailwind", "GSAP", "Vite"],
        images: [
            `${import.meta.env.BASE_URL}assets/images/portafolio/portafolio-web.png`,
        ],
        github: "https://github.com/JulioVillalobos03/portafolio",
        live: "",
    },
    {
        id: "efocushub",
        title: "efocushub",
        description:
            "Sistema empresarial desarrollado con Laravel y Vue.js para centralizar la administración de empleados, empresas, vacaciones y nóminas. Participé como desarrollador Fullstack en la modernización y migración del sistema existente, contribuyendo a mejorar los procesos internos y la eficiencia operativa mediante una interfaz moderna y un backend robusto.",
        technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "MySQL"],
        images: [
            `${import.meta.env.BASE_URL}assets/images/efocushub/efocushub-web.png`,
        ],
        github: "",
        live: "https://e-focushub.com/login",
    },
];

export default function ProjectsSection() {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 space-y-24" id="projects">
            <h2 className="text-5xl font-extrabold text-center">Mis Projectos</h2>

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`flex flex-col-reverse md:flex-row items-center gap-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                        }`}
                >
                    <div className="md:w-1/2 space-y-4">
                        {/*<p className="text-sm text-blue-600 dark:text-blue-300 uppercase tracking-wide">
                            Featured Project
                        </p>*/}
                        <h3 className="fancy-link text-3xl font-bold transition-colors duration-300 text-blue-950 dark:text-white">
                            {project.title}
                        </h3>


                        <div className="bg-white/80 dark:bg-white/10 p-10 rounded-lg text-sm backdrop-blur-md shadow-md">
                            {project.description}
                        </div>
                        <style>{`
                            @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

                            .fancy-link {
                                position: relative;
                                font-family: 'Pacifico', cursive;
                                font-size: 2.0rem;
                                background: linear-gradient(90deg, currentColor 0%, currentColor 100%);
                                background-size: 0% 100%;
                                background-repeat: no-repeat;
                                background-position: left bottom;
                                -webkit-background-clip: text;
                                background-clip: text;
                                -webkit-text-stroke: 1px currentColor;
                                text-decoration: underline wavy transparent;
                                text-underline-offset: 6px;
                                transition: background-size 0.6s ease, text-decoration-color 0.4s ease;
                            }

                            .fancy-link:hover {
                                background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b);
                                background-size: 100% 100%;
                                background-repeat: no-repeat;
                                background-position: left bottom;
                                background-clip: text;
                                -webkit-background-clip: text;
                                color: transparent;
                                text-decoration-color: #8b5cf6;
                            }
                        `}</style>

                        <ul className="flex flex-wrap gap-4 text-sm text-blue-950 dark:text-blue-200 mt-2">
                            {project.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>

                        {(project.github || project.live) && (
                            <div className="flex gap-5 mt-4 text-xl text-white dark:text-blue-200">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 transition"
                                    >
                                        <FaGithub />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-500 transition"
                                    >
                                        <FiExternalLink />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Imagen */}
                    <div className="md:w-1/2">
                        <ImageCarousel images={project.images} />
                    </div>
                </div>
            ))}
        </div>
    );
}
