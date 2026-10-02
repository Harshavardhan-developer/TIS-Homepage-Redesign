import { motion, useReducedMotion } from "framer-motion";

export default function TextReveal({
  text,
  as = "h2",
  className = "",
  delay = 0,
  immediate = false,
  once = true,
  stagger = 0.06,
  duration = 0.7,
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  const words = text.split(" ");

  const animationProps = immediate
    ? {
        animate: { y: 0 },
      }
    : {
        whileInView: { y: 0 },
        viewport: {
          once,
          amount: 0.6,
        },
      };

  return (
    <Tag
      className={className}
      aria-label={text}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="mr-[0.25em] inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{
              y: reduce ? 0 : "110%",
            }}
            {...animationProps}
            transition={{
              duration: reduce ? 0 : duration,
              delay: reduce ? 0 : delay + index * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}