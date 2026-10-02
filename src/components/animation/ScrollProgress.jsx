import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-brand"
    />
  );
}