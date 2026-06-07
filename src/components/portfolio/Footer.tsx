import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/30 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display text-2xl font-bold">
            <span className="text-gradient">Theresrose</span> Vilsan
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-sm">
            B.Tech student & Full Stack Developer crafting fast, modern and meaningful web
            experiences.
          </p>
        </div>

        <div>
          <p className="font-semibold mb-4">Navigation</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold mb-4">Connect</p>
          <div className="flex gap-3">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">theresrose2004@gmail.com</p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Theresrose Vilsan. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
