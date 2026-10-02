import { ArrowRight } from "lucide-react";

const styles = {
  primary:
    "bg-brand text-white shadow-sm hover:bg-brand-dark hover:shadow-lg",

  light:
    "bg-white text-brand shadow-sm hover:bg-cream hover:shadow-lg",

  outline:
    "border border-white/70 text-white hover:border-white hover:bg-white/15",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  showArrow = true,
  target,
  rel,
  ariaLabel,
  ...props
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] ${styles[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </a>
  );
}