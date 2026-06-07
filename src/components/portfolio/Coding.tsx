import { Code2, Terminal, Brain, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const profiles = [
  { icon: Code2, name: "LeetCode", stat: "70+", label: "Problems Solved", color: "text-primary" },
  { icon: Terminal, name: "HackerRank", stat: "20+", label: "Challenges", color: "text-primary" },
  { icon: Brain, name: "GeeksforGeeks", stat: "20+", label: "Problems", color: "text-primary" },
  { icon: Github, name: "GitHub", stat: "10+", label: "Repositories", color: "text-primary" },
];

export function Coding() {
  return (
    <Section id="coding">
      <SectionHeader
        eyebrow="Coding Profiles"
        title={<>Where I <span className="text-gradient">contribute & compete</span></>}
        description="Sharpening my problem-solving on the platforms that matter."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {profiles.map((p) => (
          <a
            key={p.name}
            href="#"
            className="glass rounded-2xl p-7 text-center hover:border-primary transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:glow-orange transition-all">
              <p.icon size={26} />
            </div>
            <p className="font-display text-4xl font-bold text-gradient">{p.stat}</p>
            <p className="text-sm text-muted-foreground mt-1">{p.label}</p>
            <p className="mt-4 font-semibold text-foreground">{p.name}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
