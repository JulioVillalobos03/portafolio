import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiDocumentArrowDown } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function TextAnimated() {
    const subtitleRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (subtitleRef.current) {
            const split = new SplitText(subtitleRef.current, {
                type: "words,chars",
            });

            gsap.from(split.chars, {
                opacity: 0,
                y: 50,
                stagger: 0.05,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: subtitleRef.current,
                    start: "top 80%",
                },
            });

            return () => {
                split.revert();
            };
        }
    }, []);

    return (
        <div className="col-span-3 md:col-span-2 min-h-[700px] bg-blue-300 dark:bg-blue-950 flex flex-col justify-center px-8">
            <div className="w-full flex flex-col items-start md:items-end text-left md:text-right">
                <h1 className="text-blue-950 dark:text-white font-grotesk font-bold tracking-tight text-[clamp(1.5rem,4vw,2.5rem)]">
                    HOLA～ SOY JULIO,  SOFTWARE
                </h1>

                <p
                    ref={subtitleRef}
                    className="mt-4 font-grotesk text-blue-950 dark:text-white font-medium leading-none tracking-tight"
                    style={{
                        fontSize: "clamp(2.5rem, 8vw, 126px)",
                        lineHeight: "1",
                        maxWidth: "100%",
                    }}
                >
                    DEVELOPER AND FULL STACK 
                </p>

                {/* Iconos solo visibles en móvil/tablet */}
                <div className="block lg:hidden mt-10 w-full flex flex-col items-start md:items-end">
                    <div className="flex gap-6 text-[36px] text-white dark:text-white">
                        <a href="https://www.linkedin.com/in/julio-alberto-ocampo-villalobos-335999268/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/julio._.villalobos?igsh=Znc2aTVyZDd6Y2h0" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/JulioVillalobos03" target="_blank" rel="noopener noreferrer" className="hover:text-[#541FA3FF] transition">
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
            </div>
        </div>

    );
}
