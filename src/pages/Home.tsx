import AnimatedSection from "../components/AnimatedSection";
import Navbar from "../components/Navbar";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";
import TextAnimated from "../components/TextAnimated";
import AboutMeContent from "../components/AboutMeConten";
import MySkillsSection from "../components/MySkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:grid lg:grid-cols-3" id="inicio">
                <div className="hidden lg:flex flex-col items-center justify-center h-[700px] bg-white dark:bg-white pt-[80px]" >
                    {/*<div className="relative w-[70vw] max-w-[280px] aspect-square flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full animate-spin-slow z-0 bg-[conic-gradient(#3b82f6,#8b5cf6,#ec4899,#f59e0b,#3b82f6)]"></div>
                        <div className="relative z-10 w-[96%] h-[96%] rounded-full bg-white dark:bg-gray-300 flex items-center justify-center">
                            <img
                                src="/assets/images/my_profile_photo.png"
                                alt="Tu foto"
                                className="w-[90%] h-[90%] rounded-full object-cover shadow-lg"
                            />
                        </div>
                    </div>*/}

                    <div className="mt-8 flex flex-col items-center gap-6 text-[36px] text-gray-800 dark:text-gray-800">
                        <a
                            href="https://www.linkedin.com/in/julio-alberto-ocampo-villalobos-335999268/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#0A66C2] transform hover:-translate-y-1 transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.instagram.com/julio._.villalobos?igsh=Znc2aTVyZDd6Y2h0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#E1306C] transform hover:-translate-y-1 transition duration-300"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://github.com/JulioVillalobos03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#541FA3FF] transform hover:-translate-y-1 transition duration-300"
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
                </div>

                <TextAnimated />
            </div>
            <div className="bg-blue-300 dark:bg-blue-950 transition-colors duration-300">
                <AnimatedSection
                    bgClass="bg-white dark:bg-blue-950  text-gray-800 dark:text-gray-100"
                    className="mt-0"
                >
                    <AboutMeContent />
                </AnimatedSection>
                <AnimatedSection bgClass="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                    <MySkillsSection />
                </AnimatedSection>

                <AnimatedSection bgClass="bg-blue-300 dark:bg-blue-900 text-blue-950 dark:text-blue-100">
                    <ProjectsSection />
                </AnimatedSection>
                <AnimatedSection bgClass="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                    <ExperienceSection />
                </AnimatedSection>
                <AnimatedSection bgClass="bg-blue-300 dark:bg-gray-800">
                    <ContactSection />
                </AnimatedSection>
            </div>
        </>
    );
}
