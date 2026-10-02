import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(pointer: fine)").matches
      : false
  );

  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  const smoothY = useSpring(y, {
    stiffness: 500,
    damping: 35,
    mass: 0.2,
  });

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-cursor");

    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handlePointerOver = (event) => {
      const interactive = event.target.closest(
        "a, button, [data-cursor='hover']"
      );

      setHovering(Boolean(interactive));
    };

    const handlePointerOut = (event) => {
      const interactive = event.target.closest(
        "a, button, [data-cursor='hover']"
      );

      if (interactive) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      document.body.classList.remove("has-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.9 : 0.75,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-brand mix-blend-difference"
      />

      <motion.div
        aria-hidden="true"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.5 : 1,
          opacity: hovering ? 0.35 : 0.15,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 rounded-full border border-brand"
      />
    </>
  );
}