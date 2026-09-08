interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface-card p-6 md:p-8 transition-all duration-300 ${
        glow
          ? "hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,180,255,0.08)]"
          : "hover:border-border-light"
      } ${className}`}
    >
      {children}
    </div>
  );
}
