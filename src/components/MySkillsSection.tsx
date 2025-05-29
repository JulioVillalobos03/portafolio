import { FaReact, FaNodeJs, FaGitAlt, FaJava, FaLaravel, FaGithub, FaAws, FaWordpress  } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiSpring, SiPhp, SiDart, SiVuedotjs, SiNuxtdotjs, SiBootstrap, SiTailwindcss, SiPostman, SiIntellijidea, SiWoocommerce  } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaFlutter, FaElementor  } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";



const SkillItem = ({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  color: string;
}) => {
  const style: Record<string, string> = {
    '--hover-color': color,
  };

  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 group transition-transform duration-300 hover:scale-110">
      <div
        className="text-5xl text-gray-700 dark:text-white transition-colors duration-300 group-hover:[color:var(--hover-color)]"
        style={style}
      >
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};



export default function MySkillsSection() {
  return (
    <section className="py-16 text-gray-800 dark:text-gray-100" id="skills">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <h2 className="text-5xl font-extrabold text-center">Mi Stack Tecnológico</h2>

        {/* Lenguajes */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Lenguajes</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem icon={<FaJava />} label="Java" color="#007396" />
            <SkillItem icon={<SiDart />} label="Dart" color="#2593BCFF" />
            <SkillItem icon={<SiJavascript />} label="JavaScript" color="#F7DF1E" />
            <SkillItem icon={<SiTypescript />} label="TypeScript" color="#3178C6" />
            <SkillItem icon={<SiPhp />} label="PHP" color="#8621DAFF" />
            <SkillItem icon={<FaHtml5 />} label="HTML" color="#E44D26" />
          </div>
        </div>

        {/* Frameworks */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Frameworks y Librerías</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem icon={<FaReact />} label="React" color="#61DAFB" />
            <SkillItem icon={<SiVuedotjs />} label="Vue" color="#24C318FF" />
            <SkillItem icon={<SiNuxtdotjs />} label="Nuxt" color="#24C318FF" />
            <SkillItem icon={<FaLaravel />} label="Laravel" color="#FF2D20" />
            <SkillItem icon={<FaFlutter />} label="Flutter" color="#3C78E8FF" />
            <SkillItem icon={<SiSpring />} label="Spring Boot" color="#6DB33F" />
            <SkillItem icon={<FaNodeJs />} label="Node.js" color="#339933" />
            <SkillItem icon={<SiBootstrap />} label="Bootstrap" color="#7B1BB6FF" />
            <SkillItem icon={<SiTailwindcss />} label="Tailwind css" color="#3777C6FF" />
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Herramientas y Plataformas</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem icon={<FaGitAlt />} label="Git" color="#F05032" />
            <SkillItem icon={<FaGithub />} label="Git Hub" color="#C31BCCFF" />
            <SkillItem icon={<SiPostman />} label="Postman" color="#CB7716FF" />
            <SkillItem icon={<BiLogoVisualStudio />} label="VS Code" color="#007ACC" />
            <SkillItem icon={<SiIntellijidea />} label="Intellij Idea" color="#D70A44FF" />
            {/*<SkillItem icon={<SiDocker />} label="Docker" color="#2496ED" />*/}
            <SkillItem icon={<FaAws />} label="AWS" color="#E18B2FFF" />
          </div>
        </div>
        {/* CMS y Constructores Visuales */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">CMS y Constructores Visuales</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <SkillItem icon={<FaWordpress  />} label="WordPress" color="#21759B" />
            <SkillItem icon={<FaElementor  />} label="Elementor" color="#9146FF" />
            <SkillItem icon={<FaElementor />} label="Divi" color="#B534D3" />
            <SkillItem icon={<SiWoocommerce  />} label="WooCommerce" color="#96588A" />
          </div>
        </div>

      </div>
    </section>
  );
}
