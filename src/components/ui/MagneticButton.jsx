import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

export default function MagneticButton({ children, strength = 0.2 }) {
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
    mass: 0.25,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
    mass: 0.25,
  });

  const handleMove = (event) => {
    if (reduce || event.pointerType === "touch") return;

    const box = event.currentTarget.getBoundingClientRect();

    const offsetX =
      (event.clientX - box.left - box.width / 2) * strength;

    const offsetY =
      (event.clientY - box.top - box.height / 2) * strength;

    x.set(offsetX);
    y.set(offsetY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}