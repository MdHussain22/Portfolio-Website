import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ParticleBackground from "../components/ParticleBackground";
 
export default function Home() {
  return (
    <>
      {/* Fixed background layers */}
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <ParticleBackground />
 
      {/* Navigation */}
      <Navbar />
 
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}