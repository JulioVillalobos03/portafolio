import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
};

const AnimatedItem = ({ children, className = "" }: Props) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={itemRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedItem;
