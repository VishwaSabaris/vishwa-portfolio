import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Roadmap from "@/components/sections/Roadmap";
import GitHubSection from "@/components/sections/GitHubSection";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-cyan-600/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-600/5 blur-[120px]" />
        </div>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Roadmap />
        <GitHubSection />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
