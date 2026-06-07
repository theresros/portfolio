import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Coding } from "@/components/portfolio/Coding";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Theresrose Vilsan — Full Stack Developer & Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Theresrose Vilsan — B.Tech Software Engineering student at Christ College of Engineering, building scalable full stack web applications.",
      },
      { property: "og:title", content: "Theresrose Vilsan — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "B.Tech student specializing in Full Stack Development. 10+ projects, 70+ DSA problems, 3+ hackathons.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Coding />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
