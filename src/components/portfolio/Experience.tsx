import {
  Award,
  Trophy,
  BookOpen,
  Mic,
  Rocket,
  Car,
} from "lucide-react";
import { Section, SectionHeader } from "./Section";

/* ---------------- DATA ---------------- */
const items = [
  {
    icon: Trophy,
    title: "Hacksus Winner",
    org: "Rajagiri School of Engineering & Technology",
    date: "2026",
    desc: "Won the Hacksus hackathon, building a full stack product under 24 hours.",
    badge: "Winner",
    link: "https://drive.google.com/file/d/1M6EOU9mpE96KkuWvh9TbJWILdGUME8NB/view?usp=drivesdk",
  },
  {
    icon: Award,
    title: "Google Data Analytics Certified",
    org: "Google · Coursera",
    date: "2025",
    desc: "Completed the Google Data Analytics Professional Certificate.",
    badge: "Certified",
    link: "https://drive.google.com/file/d/12OLiM7aOE6C0xazWH-qqLS-HAJdQcPa6/view?usp=drivesdk",
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
    title: "2nd Place — Debate Competition (ISRO Certified)",
    org: "Inter-college Event",
    date: "2025",
    desc: "Secured second position in the ISRO-certified inter-college debate.",
    badge: "Runner Up",
    link: "https://drive.google.com/file/d/1iAlQH6zibBJx_9GpcSK5Y0pVhSC5D_ml/view?usp=drivesdk",
  },
  {
    icon: Rocket,
    title: "3rd Place — Spacecraft (ISRO Certified)",
    org: "ISRO",
    date: "2024",
    desc: "Awarded third position in the ISRO-certified spacecraft competition.",
    badge: "ISRO",
    link: "https://drive.google.com/file/d/14Xm8Vapy0DOCJsBRyZvzhTOnr96d-o6k/view?usp=drivesdk",
  },
  {
    icon: Car,
    title: "Participant — aBAJA SAEINDIA 2025",
    org: "SAEINDIA",
    date: "2025",
    desc: "Participated in the aBAJA SAEINDIA 2025 competition focused on autonomous off-road vehicle design and engineering.",
    badge: "SAEINDIA",
    link: "https://drive.google.com/file/d/1irI9Q8jnqP_DMaxzQ_miFje49OXhaPar/view?usp=drivesdk",
  },
];

/* ---------------- SIMPLE GRID VIEW ---------------- */
export default function Achievements() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="p-4 border rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-2">
              <Icon className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold">{item.title}</h3>
            </div>

            {/* Org + Date */}
            <p className="text-sm text-gray-500">
              {item.org} • {item.date}
            </p>

            {/* Description */}
            <p className="text-sm mt-2">{item.desc}</p>

            {/* Badge + Link */}
            <div className="flex items-center justify-between mt-4">
              <span className="px-2 py-1 text-xs bg-green-500 text-white rounded">
                {item.badge}
              </span>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------------- EXPERIENCE SECTION ---------------- */
export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeader
        eyebrow="Experience & Achievements"
        title={
          <>
            Wins, <span className="text-gradient">badges & milestones</span>
          </>
        }
        description="Competitions, certifications and recognitions that shaped my journey."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => {
          const Icon = it.icon;

          return (
            <div
              key={it.title}
              className="glass rounded-2xl p-6 hover:border-primary transition-all hover:-translate-y-1 flex gap-5"
            >
              {/* ICON */}
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Icon size={24} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold">
                    {it.title}
                  </h3>

                  <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-primary text-primary-foreground">
                    {it.badge}
                  </span>
                </div>

                <p className="text-sm text-primary font-medium mt-0.5">
                  {it.org}
                </p>

                <p className="text-xs font-mono text-muted-foreground">
                  {it.date}
                </p>

                <p className="text-sm text-muted-foreground mt-2">
                  {it.desc}
                </p>

                {/* ✅ FIXED LINK BUTTON */}
                {it.link && (
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-blue-500 hover:underline"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}