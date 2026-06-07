import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const infos = [
  { icon: Mail, label: "Email", value: "theresrose2004@gmail.com", href: "mailto:theresrose2004@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6282422123", href: "tel:+916282422123" },
  { icon: MapPin, label: "Location", value: "Thrissur, Kerala", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:theresrose2004@gmail.com" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contact"
        title={<>Let's <span className="text-gradient">build together</span></>}
        description="Have a project, opportunity or just want to say hi? My inbox is open."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Info */}
        <div className="lg:col-span-2 space-y-4">
          {infos.map((i) => (
            <a
              key={i.label}
              href={i.href}
              className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-primary transition-all hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                <i.icon size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                <p className="font-semibold text-foreground">{i.value}</p>
              </div>
            </a>
          ))}

          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Follow</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} className="lg:col-span-3 glass rounded-2xl p-7 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What's this about?" />
          <div>
            <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-orange transition-all"
          >
            {sent ? "Message sent ✓" : <>Send Message <Send size={16} /></>}
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}
