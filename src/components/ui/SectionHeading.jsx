import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}) {
  const reduce = useReducedMotion();

  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <motion.div
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }
      }
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: reduce ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`mb-10 max-w-2xl ${alignment}`}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-brand" />

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        </div>
      )}

      <h2
        className={`text-3xl font-extrabold leading-[1.05] tracking-tight md:text-5xl ${
          light ? "text-white" : "text-neutral-900 dark:text-white"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${
            light
              ? "text-white/70"
              : "text-neutral-600 dark:text-neutral-400"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}