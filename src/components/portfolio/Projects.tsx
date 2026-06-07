import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Section, SectionHeader } from "./Section";

type Cat = "All" | "Frontend" | "Full Stack" | "AI Projects";

const projects = [
  {
    name: "FindMySlot",
    desc:
      "QR-based IoT smart parking platform that enables real-time parking slot monitoring, reservations, and seamless vehicle access through automated smart parking management.",
    tech: ["ESP32", "Firebase", "JavaScript", "HTML", "CSS", "IR Sensors"],
    cat: ["Full Stack"],
    github: "https://github.com/theresros/Findmyslot.git",
    demo: "https://findmyslot-one.vercel.app/",
    features: [
      "Real-time slot tracking",
      "QR-based parking access",
      "Temporary reservations",
      "Floor-wise visualization",
      "Admin dashboard",
    ],
  },
  {
    name: "CareOptimize",
    desc:
      "AI-powered healthcare workforce optimization platform that intelligently assigns caregivers, monitors patient risk levels, and manages emergency alerts in real time.",
    tech: ["React", "Tailwind CSS", "FastAPI", "WebSockets", "Groq LLaMA", "Chart.js"],
    cat: ["AI Projects", "Full Stack"],
    github: "https://github.com/add-win/Quick-Care.git",
    demo: "quick-care-one.vercel.app",
    features: [
      "AI caregiver assignment",
      "Patient risk monitoring",
      "Emergency alarm system",
      "Live workload tracking",
      "Analytics dashboard",
    ],
  },
  {
    name: "Mathrua AI",
    desc:
      "Comprehensive AI productivity suite that combines content generation, image processing, and resume analysis tools into a unified intelligent workspace.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "AI APIs"],
    cat: ["AI Projects", "Full Stack"],
    github: "https://github.com/theresros/Quick-AI.git",
    demo: "quick-ai-green-omega.vercel.app",
    features: [
      "AI article generation",
      "Image editing tools",
      "Background removal",
      "Resume analysis",
      "Content automation",
    ],
  },
];

const cats: Cat[] = ["All", "Full Stack", "AI Projects"];

export function Projects() {
  const [cat, setCat] = useState<Cat>("All");

  const filtered =
    cat === "All" ? projects : projects.filter((p) => p.cat.includes(cat));

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Projects"
        title={
          <>
            Selected <span className="text-gradient">work</span>
          </>
        }
        description="A glimpse into what I've been building and shipping."
      />

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              cat === c
                ? "bg-primary text-primary-foreground glow-orange-sm"
                : "glass text-muted-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article
            key={p.name}
            className="group glass rounded-2xl overflow-hidden hover:border-primary transition-all hover:-translate-y-1.5 flex flex-col"
          >
            {/* HEADER */}
            <div className="relative aspect-[16/10] bg-gradient-to-br from-primary/30 via-accent/20 to-surface overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-3xl font-bold text-foreground/90 px-4 text-center">
                  {p.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-xl font-semibold text-primary group-hover:text-gradient">
                {p.name}
              </h3>

              <p className="text-sm text-muted-foreground mt-2 flex-1">
                {p.desc}
              </p>

              <ul className="mt-4 space-y-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-2 mt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glass text-sm font-medium hover:border-primary transition-all"
                >
                  <Github size={15} /> Code
                </a>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:glow-orange-sm transition-all"
                >
                  <ExternalLink size={15} /> Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}