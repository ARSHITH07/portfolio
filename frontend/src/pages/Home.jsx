import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../sections/Hero.jsx";
import About from "../sections/About.jsx";
import Skills from "../sections/Skills.jsx";
import Services from "../sections/Services.jsx";
import Projects from "../sections/Projects.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Blog from "../sections/Blog.jsx";
import Contact from "../sections/Contact.jsx";

export default function Home() {
  return (
    <div className="min-h-screen light-sky dark:bg-hero-gradient text-ink-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
