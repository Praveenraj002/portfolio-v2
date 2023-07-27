import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import TechStacks from "./sections/TechStacks";
import Workflow from "./sections/Workflow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <TechStacks />
      <Services />
      <Workflow />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
