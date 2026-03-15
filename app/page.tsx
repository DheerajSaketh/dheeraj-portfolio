import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Skills from "./components/Skills.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import Certifications from "./components/Certifications.tsx";
import Interests from "./components/Interests.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Interests />
      <Contact />
      <Footer />
    </>
  );
}