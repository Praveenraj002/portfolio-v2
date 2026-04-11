import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="app-shell">
      <div id="top" />
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
