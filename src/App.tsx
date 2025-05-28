import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';

import LogoPreloader from './components/LogoPreloader';
import Home from './pages/Home';
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen bg-black dark:bg-black flex items-center justify-center transition-all duration-1000">
        <LogoPreloader />
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}
