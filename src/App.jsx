// src/App.jsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectsBar } from "./components/ProjectsBar";
import { CustomCursor } from "./components/CustomCursor";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Refrescar triggers (por si se usan dentro de secciones individuales)
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Header />

      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <ProjectsBar />
      <CustomCursor />
    </>
  );
}

export default App;
