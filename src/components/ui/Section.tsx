interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "deep";
}

const variants = {
  default: "bg-primary",
  elevated: "bg-surface",
  deep: "bg-[#060B16]",
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 scroll-mt-20 ${variants[variant]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
