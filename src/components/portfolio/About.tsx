import { GraduationCap, Code2, Trophy, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const highlights = [
  { icon: Code2, title: "Full Stack Development", desc: "Building end-to-end web apps" },
  { icon: Trophy, title: "Problem Solving", desc: "Sharpening DSA skills daily" },
  { icon: GraduationCap, title: "Hackathons", desc: "Collaborating under pressure" },
  { icon: Github, title: "Open Source Learning", desc: "Contributing & exploring" },
];

const timeline = [
  { year: "2023", title: "Started B.Tech Journey", desc: "Began Software Engineering at Christ College of Engineering." },
  { year: "2024", title: "Mastered Frontend", desc: "Self-taught React, Tailwind & dove into open source." },
  { year: "2025", title: "Hackathons & Abhaha", desc: "Participated in hackathons, coding competitions and Abhaha (international competition)." },
  { year: "2026", title: "First Hackathon Win", desc: "Secured first hackathon win while building full stack production projects." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About Me"
        title={<>The story <span className="text-gradient">behind the code</span></>}
        description="A curious engineer turning coffee and curiosity into clean, scalable software."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="glass rounded-2xl p-7">
            <h3 className="font-display text-2xl font-semibold mb-3 text-primary">Who I am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm Theresrose Vilsan, a 7th semester B.Tech student at Christ College of Engineering.
              I love building things for the web — from polished UIs to logic-heavy systems — and I'm
              constantly leveling up by shipping projects, competing in hackathons and grinding DSA.
            </p>
          </div>

          <div className="glass rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="text-primary" />
              <h3 className="font-display text-xl font-semibold">Education</h3>
            </div>
            <p className="font-semibold">B.Tech in Software Engineering</p>
            <p className="text-sm text-muted-foreground">Christ College of Engineering · 7th Semester</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {highlights.map((h) => (
              <div key={h.title} className="glass rounded-xl p-4 hover:border-primary transition-all">
                <h.icon className="text-primary mb-2" size={22} />
                <p className="font-semibold text-sm">{h.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
          <div className="space-y-8">
            {timeline.map((t) => (
              <div key={t.year} className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary glow-orange-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                </div>
                <div className="glass rounded-xl p-5 hover:border-primary transition-all">
                  <span className="font-mono text-xs text-primary font-semibold">{t.year}</span>
                  <h4 className="font-display text-lg font-semibold mt-1">{t.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
