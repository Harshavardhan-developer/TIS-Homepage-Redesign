import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  speed = 40,
  direction = "up",
  hoverZoom = true,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const parallaxDistance = reduce ? 0 : speed;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "down"
      ? [-parallaxDistance, parallaxDistance]
      : [parallaxDistance, -parallaxDistance]
  );

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [-1, 0, 1]
  );

  return (
    <motion.div
      ref={ref}
      initial={
        reduce
          ? false
          : {
              clipPath: "inset(14% 14% 14% 14% round 2rem)",
              opacity: 0,
              scale: 0.96,
            }
      }
      whileInView={
        reduce
          ? undefined
          : {
              clipPath: "inset(0% 0% 0% 0% round 2rem)",
              opacity: 1,
              scale: 1,
            }
      }
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reduce ? 0 : 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          y,
          rotate,
          scale: 1.18,
        }}
        whileHover={
          hoverZoom && !reduce
            ? {
                scale: 1.28,
              }
            : undefined
        }
        transition={{
          scale: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        className="h-full w-full object-cover"
      />

      {!reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute inset-0 bg-black/5"
        />
      )}
    </motion.div>
  );
}