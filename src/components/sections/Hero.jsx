import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import TextReveal from "../ui/TextReveal";
import { hero, images } from "../../data/content";

const floaters = [
  {
    className: "left-[7%] top-[30%] h-16 w-16 bg-amber-300/80",
    delay: 0,
    duration: 5,
  },
  {
    className: "right-[9%] top-[24%] h-24 w-24 bg-teal-300/70",
    delay: 0.8,
    duration: 6,
  },
  {
    className: "bottom-[22%] right-[17%] h-10 w-10 bg-white/80",
    delay: 1.4,
    duration: 4,
  },
];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "18%"]
  );

  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [1.08, 1.08] : [1.08, 1.16]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -90]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.72],
    [1, 0]
  );

  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.25, 0.55]
  );

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-dark text-white"
    >
      {/* Background image */}
      <motion.img
        src={images.hero}
        alt="Tulas International School campus"
        loading="eager"
        initial={
          reduce
            ? false
            : {
                scale: 1.2,
                opacity: 0,
              }
        }
        animate={
          reduce
            ? undefined
            : {
                scale: 1.08,
                opacity: 1,
              }
        }
        style={{
          y: bgY,
          scale: bgScale,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Main gradient */}
      <motion.div
        aria-hidden="true"
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand/75 to-black/70"
      />

      {/* Moving light */}
      <motion.div
        aria-hidden="true"
        animate={
          reduce
            ? undefined
            : {
                x: ["-20%", "20%", "-20%"],
                opacity: [0.15, 0.3, 0.15],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-teal-300/20 blur-[120px]"
      />

      {/* Background typography */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, x: 80 }}
        animate={reduce ? undefined : { opacity: 0.08, x: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute right-[-5%] top-1/2 hidden -translate-y-1/2 select-none text-[18rem] font-black uppercase leading-none tracking-[-0.08em] md:block lg:text-[24rem]"
      >
        TIS
      </motion.div>

      {/* Floating shapes */}
      {floaters.map((floater) => (
        <motion.span
          key={floater.className}
          aria-hidden="true"
          className={`absolute hidden rounded-full blur-[1px] md:block ${floater.className}`}
          initial={reduce ? false : { opacity: 0, scale: 0 }}
          animate={
            reduce
              ? undefined
              : {
                  opacity: 0.8,
                  scale: 1,
                  y: [0, -18, 0],
                }
          }
          transition={{
            opacity: {
              duration: 0.8,
              delay: floater.delay,
            },
            scale: {
              duration: 0.8,
              delay: floater.delay,
            },
            y: {
              duration: floater.duration,
              delay: floater.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Hero content */}
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-28 sm:px-8 lg:px-10"
      >
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -30 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-teal-200/80" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-teal-100">
              {hero.eyebrow} · Dehradun
            </p>
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.94] tracking-tight sm:text-7xl md:text-8xl lg:text-[7.5rem]">
            <TextReveal
              as="span"
              text="Let's do it"
              immediate
              delay={0.55}
              className="block"
            />

            <span className="block">
              <TextReveal
                as="span"
                text="with"
                immediate
                delay={0.8}
              />

              <span className="ml-3 font-display text-teal-100 sm:ml-5">
                <TextReveal
                  as="span"
                  text="Tulas."
                  immediate
                  delay={0.95}
                />
              </span>
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={
              reduce
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            {hero.description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={
              reduce
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: 0.7,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <MagneticButton>
              <Button
                href={hero.primaryButton.href}
                target="_blank"
                rel="noreferrer"
                variant="light"
                showArrow={false}
              >
                Apply Now
                <ArrowUpRight
                  size={17}
                  className="ml-2"
                />
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button href="#campus" variant="outline">
                Explore Campus
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom information */}
        <motion.div
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          animate={
            reduce
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.7,
            delay: 1.7,
          }}
          className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-5 text-xs uppercase tracking-[0.18em] text-white/60 sm:flex-row sm:items-center sm:justify-between"
        >
          <span>Education · Opportunity · Growth</span>

          <span className="hidden h-px flex-1 bg-white/10 sm:mx-8 sm:block" />

          <span>Since 2012</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to the next section"
        initial={
          reduce
            ? false
            : {
                opacity: 0,
                y: 15,
              }
        }
        animate={
          reduce
            ? undefined
            : {
                opacity: 1,
                y: [0, 8, 0],
              }
        }
        transition={{
          opacity: {
            duration: 0.6,
            delay: 1.9,
          },
          y: {
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70 transition-colors hover:text-white"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 backdrop-blur-sm">
          <ArrowDown size={16} />
        </span>
      </motion.a>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark/60 to-transparent"
      />
    </section>
  );
}