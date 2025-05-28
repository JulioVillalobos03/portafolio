import { useParams } from "react-router-dom";
import NavbarProjects from "./NavbarProjects";

const projectDetails = {
    "viaja-segura": {
        title: "Viaja Segura",
        description:
            "Aplicación de transporte tipo Uber con seguridad integrada, seguimiento en tiempo real, botones de emergencia, verificación por QR y sistema de calificaciones.",
        technologies: ["React", "Spring Boot", "WebSocket", "Flutter", "AWS"],
        images: [
            "/assets/images/vs/vs-1.png",
            "/assets/images/vs/vs-2.png",
        ],
    },
    "portfolio": {
        title: "Mi Portafolio",
        description:
            "Sitio personal moderno con diseño responsivo, animaciones GSAP y sección editable visualmente.",
        technologies: ["React", "Tailwind CSS", "GSAP", "Vite"],
        images: [
            "/assets/images/portafolio/portafolio-web.png"
        ],
    },
    "efocushub": {
        title: "efocushub",
        description:
        "Sistema empresarial desarrollado con Laravel y Vue.js para centralizar la administración de empleados, empresas, vacaciones y nóminas. Participé como desarrollador Fullstack en la modernización y migración del sistema existente, contribuyendo a mejorar los procesos internos y la eficiencia operativa mediante una interfaz moderna y un backend robusto.",
        technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "MySQL"],
        images: ["/assets/images/efocushub/efocushub-web.png"],
    },
};

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectDetails[id as keyof typeof projectDetails];

    if (!project) return <div className="p-8 text-center">Proyecto no encontrado.</div>;

    return (
        <>

            <NavbarProjects />
            <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-5">
                    {/* Columna 1 - Texto */}
                    <div className="flex flex-col justify-center h-full space-y-8">
                        <h1 className="text-5xl font-extrabold">{project.title}</h1>

                        <p className="text-lg leading-relaxed">
                            {project.description}
                        </p>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
                            <ul className="flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-1 bg-gray-400 dark:bg-gray-700 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Columna 2 - Imágenes */}
                    <div className="space-y-6">
                        {project.images.length > 0 ? (
                            project.images.map((img, idx) => (
                                img && (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`${project.title} screenshot ${idx + 1}`}
                                        className="w-full rounded-lg shadow-xl object-cover"
                                    />
                                )
                            ))
                        ) : (
                            <p className="text-sm text-gray-500 dark:text-gray-400">No hay imágenes disponibles.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
