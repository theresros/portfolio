import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <p className="font-mono text-primary text-sm mb-3 uppercase tracking-widest">{eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">{children}</div>
    </section>
  );
}
