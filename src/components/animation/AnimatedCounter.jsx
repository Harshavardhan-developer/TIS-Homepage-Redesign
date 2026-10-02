import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";

export default function AnimatedCounter({
  to,
  suffix = "",
  prefix = "",
  duration = 1.6,
  delay = 0,
  displayValue,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const reduce = useReducedMotion();
  const count = useMotionValue(0);

  const rounded = useTransform(count, (value) => Math.round(value));

  useEffect(() => {
    if (!inView || displayValue) return;

    const controls = animate(count, to, {
      duration: reduce ? 0 : duration,
      delay: reduce ? 0 : delay,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [inView, to, duration, delay, reduce, count, displayValue]);

  return (
    <motion.span
      ref={ref}
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: 30,
              scale: 0.85,
              filter: "blur(8px)",
            }
      }
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: reduce ? 0 : 0.8,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="inline-block"
    >
      {prefix}

      {displayValue ? (
        displayValue
      ) : (
        <motion.span>{rounded}</motion.span>
      )}

      {suffix}
    </motion.span>
  );
}