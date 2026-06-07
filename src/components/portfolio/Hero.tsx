import { useEffect, useState } from "react";
import { Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import profileImg from "@/assets/image.jpeg";

const roles = ["Full Stack Developer", "Software Engineer", "React Developer", "Problem Solver"];

const floatIcons = [
  { label: "React", x: "8%", y: "12%", delay: 0 },
  { label: "Node.js", x: "82%", y: "18%", delay: 1 },
  { label: "JavaScript", x: "6%", y: "70%", delay: 2 },
  { label: "Python", x: "85%", y: "65%", delay: 3 },
  { label: "Git", x: "50%", y: "8%", delay: 4 },
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = del ? 50 : 100;

    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1500);
        return;
      }

      if (del && text === "") {
        setDel(false);
        setI((i + 1) % roles.length);
        return;
      }

      setText(
        del
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle animate-blink" />
    </span>
  );
}

const stats = [
  { v: "10+", l: "Projects Built" },
  { v: "70+", l: "DSA Problems" },
  { v: "3+", l: "Hackathons" },
  { v: "5+", l: "Technologies" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 hero-bg overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div className="space-y-7">
          

          <p className="font-mono text-primary text-sm">{"<hello world />"}</p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <br />
            <span className="text-gradient">Theresrose Vilsan</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-display font-medium text-muted-foreground min-h-[2.5rem]">
            I'm a <Typewriter />
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Passionate B.Tech student specializing in Full Stack Development, building scalable
            web applications and solving real-world problems through technology.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-2">

            {/* ✅ DOWNLOAD RESUME BUTTON (FIXED) */}
            <a
              href="https://drive.google.com/file/d/1Br8uZNfaYoqj0Ai-24TdoFwWbi7oRw-_/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:glow-orange transition-all"
            >
              <Download size={18} /> Download Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-semibold hover:border-primary transition-all"
            >
              <FolderGit2 size={18} /> View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail size={18} /> Contact Me
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none select-none">
            <span className="font-display font-bold text-[14rem] leading-none text-foreground/[0.03]">
              DEV
            </span>
          </div>

          {floatIcons.map((f) => (
            <div
              key={f.label}
              className="absolute glass px-3 py-1.5 rounded-lg text-xs font-mono text-primary animate-float"
              style={{ left: f.x, top: f.y, animationDelay: `${f.delay}s` }}
            >
              {f.label}
            </div>
          ))}

          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-primary to-accent rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

            <div className="relative w-[280px] sm:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary glow-orange">
              <img
                src={profileImg}
                alt="Theresrose Vilsan"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-4 -right-4 glass-strong rounded-2xl px-4 py-3">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-semibold text-primary">Open to Work</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="relative max-w-6xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.l}
              className="glass rounded-2xl p-6 text-center hover:border-primary transition-all hover:-translate-y-1"
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">
                {s.v}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}