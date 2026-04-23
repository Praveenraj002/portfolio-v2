import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProjectsSection from "./sections/Projects";
import Experience from "./sections/Experience";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const HomePage = () => (
  <main>
    <Hero />
    <ProjectsSection />
    <Experience />
    <About />
    <Contact />
  </main>
);

const ScrollManager = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
};

function App() {
  return (
    <div className="app-shell">
      <div id="top" />
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
