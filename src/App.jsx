import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Competencies from "./sections/Competencies";
import ProjectsSection from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import AmbientField from "./components/AmbientField";
import { MotionConfig } from "framer-motion";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
      <AmbientField />
      <div id="top" />
      <Navbar />
      <main>
        <Hero />
        <Competencies />
        <ProjectsSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
