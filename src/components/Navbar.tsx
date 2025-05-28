import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return false;
    });
    const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-gray-200 dark:bg-gray-900 shadow-md backdrop-blur-md"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo responsivo */}
                    <Link to="/" className="block max-w-[200px] w-full">
                        <svg
                            viewBox="0 0 400 100"
                            className="w-full h-auto"
                            preserveAspectRatio="xMinYMid meet"
                        >
                            <defs>
                                <linearGradient
                                    id="gradient-light"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="20%" stopColor="#93c5fd" />
                                </linearGradient>
                                <linearGradient
                                    id="gradient-dark"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="100%" stopColor="#93c5fd" />
                                </linearGradient>
                            </defs>

                            <text
                                x="0"
                                y="60"
                                fontSize="52"
                                fontFamily="'Pacifico', cursive"
                                fill={isMobile ? "#FFFFFF" : `url(#${darkMode ? "gradient-dark" : "gradient-light"})`}
                                stroke={isMobile ? "#FFFFFF" : `url(#${darkMode ? "gradient-dark" : "gradient-light"})`}

                                strokeWidth={3}
                                strokeDasharray={1500}
                                strokeDashoffset={1500}
                                style={{
                                    animation: `
                                        draw 4.5s ease forwards,
                                        fill-in 4.5s ease forwards 0.5s
                                    `,
                                    fillOpacity: 0,
                                }}
                            >
                                VI.DEV
                            </text>

                            <style>{`
                                @keyframes draw {
                                to {
                                    stroke-dashoffset: 0;
                                }
                                }
                                @keyframes fill-in {
                                to {
                                    fill-opacity: 1;
                                }
                                }
                            `}</style>
                        </svg>
                    </Link >

                    {/* Desktop nav */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link
                            to="/"
                            className={`fancy-link transition-colors duration-300 ${isScrolled ? "text-gray-800 dark:text-white" : "text-blue-950 dark:text-white"
                                }`}
                        >
                            Inicio
                        </Link>
                        <a
                            href="#skills"
                            className={`fancy-link transition-colors duration-300 ${isScrolled
                                ? "text-gray-800 dark:text-white"
                                : "text-blue-950 dark:text-white"
                                }`}
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className={`fancy-link transition-colors duration-300 ${isScrolled
                                ? "text-gray-800 dark:text-white"
                                : "text-blue-950 dark:text-white"
                                }`}
                        >
                            Projectos
                        </a>
                        <a
                            href="#"
                            className={`fancy-link transition-colors duration-300 ${isScrolled
                                ? "text-gray-800 dark:text-white"
                                : "text-blue-950 dark:text-white"
                                }`}
                        >
                            Contacto
                        </a>

                        <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

              .fancy-link {
                position: relative;
                font-family: 'Pacifico', cursive;
                font-size: 1.5rem;
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
                    </nav>

                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`w-14 h-8 rounded-full border-2 border-white relative transition-colors duration-300 flex items-center px-1 ${darkMode ? "bg-gray-800" : "bg-yellow-100"
                            }`}
                    >
                        <div
                            className={`absolute left-1 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"
                                } flex items-center justify-center`}
                        >
                            {darkMode ? (
                                <div className="relative w-4 h-4 bg-white rounded-full overflow-hidden">
                                    <div className="absolute left-1 top-0 w-4 h-4 bg-gray-800 rounded-full"></div>
                                </div>
                            ) : (
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                            )}
                        </div>
                    </button>
                </div>
            </header>

            <nav className="fixed bottom-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
                <div className="grid grid-cols-4 text-xs text-center py-2">
                    <a
                        href="/"
                        className="flex flex-col items-center justify-center text-gray-700 dark:text-white hover:text-blue-500"
                    >
                        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 21V9.75z" />
                        </svg>
                        Inicio
                    </a>

                    <a
                        href="#skills"
                        className="flex flex-col items-center justify-center text-gray-700 dark:text-white hover:text-blue-500"
                    >
                        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317l.336 1.344a1.5 1.5 0 002.678 0l.336-1.344a1.5 1.5 0 012.828 1.086l-.336 1.344a1.5 1.5 0 000 2.678l1.344.336a1.5 1.5 0 01-1.086 2.828l-1.344-.336a1.5 1.5 0 00-2.678 0l-.336 1.344a1.5 1.5 0 01-2.828-1.086l.336-1.344a1.5 1.5 0 000-2.678l-1.344-.336a1.5 1.5 0 011.086-2.828z" />
                        </svg>
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="flex flex-col items-center justify-center text-gray-700 dark:text-white hover:text-blue-500"
                    >
                        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5A1.5 1.5 0 014.5 6h15A1.5 1.5 0 0121 7.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5v-9z" />
                        </svg>
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="flex flex-col items-center justify-center text-gray-700 dark:text-white hover:text-blue-500"
                    >
                        <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25l-9 5.25-9-5.25M21 15.75V8.25a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 8.25v7.5A2.25 2.25 0 005.25 18h13.5A2.25 2.25 0 0021 15.75z" />
                        </svg>
                        Contact
                    </a>
                </div>
            </nav>

        </>
    );
}
