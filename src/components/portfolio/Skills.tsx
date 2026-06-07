import { Section, SectionHeader } from "./Section";
import { Layout, Database, Code, Wrench } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: [
      { n: "HTML", v: 95 },
      { n: "CSS", v: 90 },
      { n: "JavaScript", v: 88 },
      { n: "React", v: 85 },
      { n: "Tailwind CSS", v: 90 },
    ],
  },
  {
    icon: Code,
    title: "Backend",
    items: [
      { n: "Node.js", v: 80 },
      { n: "Express.js", v: 78 },
    ],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      { n: "MySQL", v: 80 },
    ],
  },
  {
    icon: Code,
    title: "Languages",
    items: [
      { n: "C", v: 85 },
      { n: "C++", v: 82 },
      { n: "Java", v: 78 },
      { n: "Python", v: 80 },
      { n: "JavaScript", v: 88 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { n: "Git", v: 85 },
      { n: "GitHub", v: 88 },
      { n: "VS Code", v: 95 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-surface/40">
      <SectionHeader
        eyebrow="Skills"
        title={<>My <span className="text-gradient">technical toolbox</span></>}
        description="The stack I use to design, build and ship modern web experiences."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="glass rounded-2xl p-6 hover:border-primary transition-all group hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:glow-orange-sm transition-all">
                <g.icon size={20} />
              </div>
              <h3 className="font-display text-xl font-semibold">{g.title}</h3>
            </div>
            <div className="space-y-4">
              {g.items.map((it) => (
                <div key={it.n}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{it.n}</span>
                    <span className="font-mono text-primary text-xs">{it.v}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                      style={{ width: `${it.v}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
