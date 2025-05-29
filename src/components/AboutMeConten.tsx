import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMeContent() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current) {
            const ctx = gsap.context(() => {
                gsap.from(containerRef.current, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                });
            }, containerRef);

            return () => ctx.revert();
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="max-w-5xl flex flex-col md:flex-row items-center gap-8 px-4 md:px-0"
        >
            <div className="space-y-6 text-justify text-gray-800 dark:text-gray-100">
                {/* Imagen + Título */}
                <div className="flex gap-6 items-center">
                    <div className="w-[100px] aspect-square shrink-0 rounded-full overflow-hidden border-4 border-blue-950 shadow-md">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/images/my_profile_photo.png`}
                            alt="Julio Villalobos"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight border-l-4 border-blue-950 pl-4">
                        Sobre Mí
                    </h1>
                </div>

                {/* Párrafos */}
                <p className="text-xl leading-relaxed">
                    Soy un{" "}
                    <span className="font-semibold text-blue-700 dark:text-blue-300">
                        desarrollador de software apasionado
                    </span>{" "}
                    que disfruta crear aplicaciones web full-stack que no solo sean funcionales, sino también intuitivas y visualmente atractivas. Me destaco en la intersección entre el{" "}
                    <span className="font-semibold text-rose-700 dark:text-rose-300">
                        código limpio
                    </span>
                    , el diseño cuidadoso y el impacto en el mundo real.
                </p>

                <p className="text-xl leading-relaxed">
                    Con una base sólida en tecnologías como{" "}
                    <span className="font-medium text-green-700 dark:text-green-300">
                        React, Vue js, Node.js y JavaScript
                    </span>
                    , y un creciente entusiasmo por frameworks backend como{" "}
                    <span className="font-medium text-purple-700 dark:text-purple-300">
                        Spring Boot y Laravel
                    </span>
                    , me esfuerzo por crear experiencias digitales fluidas en distintas plataformas. Siempre estoy dispuesto a aprender, colaborar y dar vida a nuevas ideas a través del código.
                </p>
            </div>
        </div>
    );
}
