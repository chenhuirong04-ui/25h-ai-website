import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 cursor-pointer";

const variants = {
  primary:
    "bg-accent text-primary hover:bg-accent-light shadow-[0_0_20px_rgba(0,180,255,0.25)] hover:shadow-[0_0_30px_rgba(0,180,255,0.4)]",
  secondary:
    "bg-surface-light text-text border border-border-light hover:border-accent/40",
  outline:
    "border border-border-light text-text hover:border-accent/50 hover:text-accent",
  ghost: "text-text-dim hover:text-text hover:bg-white/5",
};

const sizes = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const cls = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return <button className={cls}>{children}</button>;
}
