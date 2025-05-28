import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  bgClass?: string; // clase personalizada para fondo
  className?: string; // otras clases opcionales
};

const AnimatedSection = ({ children, bgClass = "", className = "" }: Props) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center 
                  ${bgClass} 
                  px-10 py-24 shadow-lg
                  transition-colors duration-300 ${className}`}
    >
      <div className="max-w-3xl text-center space-y-6">{children}</div>
    </div>
  );
};

export default AnimatedSection;
