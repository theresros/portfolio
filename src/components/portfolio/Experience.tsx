import { Award, Trophy, BookOpen, Mic, Rocket } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const items = [
  {
    icon: Trophy,
    title: "Hacksus Winner",
    org: "Rajagiri School of Engineering & Technology",
    date: "2026",
    desc: "Won the Hacksus hackathon, building a full stack product under 24 hours.",
    badge: "Winner",
  },
  {
    icon: Award,
    title: "Google Data Analytics Certified",
    org: "Google · Coursera",
    date: "2025",
    desc: "Completed the Google Data Analytics Professional Certificate.",
    badge: "Certified",
  },
  {
    icon: BookOpen,
    title: "Contributor — CODEFIX Magazine",
    org: "Christ College of Engineering",
    date: "2024 — Present",
    desc: "Active contributor to the official college tech magazine.",
    badge: "Editorial",
  },
  {
    icon: Mic,
    title: "2nd Place — Debate Competition",
    org: "Inter-college Event",
    date: "2025",
    desc: "Secured second position in a competitive inter-college debate.",
    badge: "Runner Up",
  },
  {
    icon: Rocket,
    title: "3rd Place — Spacecraft (ISRO Certified)",
    org: "ISRO",
    date: "2024",
    desc: "Awarded third position in the ISRO-certified spacecraft competition.",
    badge: "ISRO",
  },
];

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeader
        eyebrow="Experience & Achievements"
        title={<>Wins, <span className="text-gradient">badges & milestones</span></>}
        description="Competitions, certifications and recognitions that shaped my journey."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="glass rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1 flex gap-5"
          >
            <div className="shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary glow-orange-sm">
                <it.icon size={24} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{it.title}</h3>
                <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                  {it.badge}
                </span>
              </div>
              <p className="text-sm text-primary font-medium mt-0.5">{it.org}</p>
              <p className="text-xs font-mono text-muted-foreground">{it.date}</p>
              <p className="text-sm text-muted-foreground mt-2">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
