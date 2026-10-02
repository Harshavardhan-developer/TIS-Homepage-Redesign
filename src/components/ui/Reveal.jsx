import { motion, useReducedMotion } from "framer-motion";

const hiddenStates = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -70 },
  right: { x: 70 },
  scale: { scale: 0.9 },
  blur: { filter: "blur(10px)" },
};

export default function Reveal({
  children,
  from = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.2,
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  const hidden = hiddenStates[from] || hiddenStates.up;

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        ...hidden,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}