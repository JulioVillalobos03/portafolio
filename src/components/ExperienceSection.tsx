import AnimatedItem from "../components/AnimatedItem";

export default function ExperienceSection() {
  const jobs = [
    {
      range: "Enero 2025 – Abril 2025",
      title: "Viaja Segura - Coordinación de Movilidad y Transporte del Estado de Morelos",
      description:
        "Desarrollador Backend encargado de la creación e implementación del backend utilizando Spring Boot para un sistema de transporte. El proyecto incluye funcionalidades como la gestión de usuarios (conductores y pasajeros), seguimiento en tiempo real de ubicaciones, manejo de notificaciones y un sistema de seguridad y autenticación para garantizar la confiabilidad del servicio.",
    },
    {
      range: "Octubre 2024 – Abril 2025",
      title: "Sistema de Gestión Empresarial - EGIS INFRAESTRUCTURA",
      description:
        "Desarrollador Fullstack en la migración y modernización del sistema interno de una empresa utilizando PHP, Laravel y Vue.js. El sistema centraliza la gestión de información relacionada con empleados, empresas asociadas, vacaciones y nóminas, abarcando todos los procesos internos clave para optimizar la administración y mejorar la eficiencia operativa.",
    },
    {
      range: "Septiembre 2024 – Diciembre 2024",
      title: "Gestor de Reparaciones Electrónicas - UTEZ",
      description:
        "Desarrollador Fullstack encargado del desarrollo completo de la aplicación web con Nuxt.js (Vue) para la administración de dispositivos en reparación, y parte del desarrollo móvil con Flutter. La aplicación móvil permite a los clientes consultar el progreso de sus reparaciones y realizar pagos, mientras que los técnicos actualizan el estado escaneando el código QR del dispositivo, agilizando el proceso y asegurando la sincronización de datos entre ambas plataformas.",
    },
    {
      range: "Mayo 2024 – Agosto 2024",
      title: "E-Commerce - UTEZ",
      description:
        "Desarrollador Frontend responsable del diseño, creación e implementación de APIs en una aplicación web utilizando React.js. Colaboración estrecha con el equipo backend para garantizar la integración eficiente de servicios, enfocando el trabajo en frontend en la experiencia de usuario y la escalabilidad del sistema.",
    },
    {
      range: "Septiembre 2023 – Actualidad",
      title: "Desarrollador Web - Social Conecta",
      description:
        "Responsable del desarrollo de páginas web corporativas mediante WordPress. Integración de funcionalidades personalizadas utilizando plugins como Elementor, Divi y WooCommerce. Optimización de la experiencia de usuario, diseño responsivo y despliegue de soluciones escalables en entornos productivos.",
    },
  ];


  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-left" id="experiencia">
      <h2 className="text-4xl font-extrabold mb-12 text-center">Experiencia Profesional</h2>
      <ol className="relative border-l-4 border-blue-900 dark:border-blue-100 space-y-12">
        {jobs.map((job, index) => (
          <AnimatedItem key={index} className="ml-6">
            <span className="block mb-1 text-sm font-medium text-blue-800 dark:text-blue-300">
              {job.range}
            </span>
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 text-justify">{job.description}</p>
          </AnimatedItem>
        ))}
      </ol>
    </section>
  );
}
