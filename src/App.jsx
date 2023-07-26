import Navbar from "./components/NavBar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TechStacks from "./sections/TechStacks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStacks />
      <Services />
    </div>
  );
}

export default App;
