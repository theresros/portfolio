import { Layout, Layers, Palette, BarChart3 } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const services = [
  { icon: Layout, title: "Frontend Development", desc: "Pixel-perfect, responsive interfaces built with React & Tailwind." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end web apps with authentication, databases and clean APIs." },
  { icon: Palette, title: "UI / UX Design", desc: "Intuitive, modern interfaces with thoughtful motion and hierarchy." },
  { icon: BarChart3, title: "Data Analytics", desc: "Turning raw data into actionable insights with dashboards & reports." },
];

export function Services() {
  return (
    <Section id="services" className="bg-surface/40">
      <SectionHeader
        eyebrow="Services"
        title={<>How I can <span className="text-gradient">help you</span></>}
        description="Fields where I can step in and add value to your team or product."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="glass rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 group-hover:glow-orange-sm transition-all">
              <s.icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
