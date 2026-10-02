import { motion } from "framer-motion";
import AnimatedCounter from "../animation/AnimatedCounter";
import ParallaxImage from "../animation/ParallaxImage";
import Reveal from "../ui/Reveal";
import { images, stats } from "../../data/content";

export default function Statistics() {
  return (
    <section
      id="campus"
      className="relative overflow-hidden bg-brand-dark py-24 text-white md:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand/30 blur-3xl"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal from="left" className="lg:col-span-3">
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-teal-200" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-200">
                  The Campus
                </p>
              </div>

              <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                A campus built
                <span className="block font-display text-white/70">
                  for growing up.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/65 md:text-lg">
                Space, sport, support and opportunity come together to create
                an environment where students can learn and grow.
              </p>
            </div>
          </Reveal>

          {/* Campus image */}
          <Reveal from="right" className="lg:col-span-2">
            <div className="relative">
              <ParallaxImage
                src={images.campus}
                alt="Aerial view of the TIS campus"
                className="aspect-[16/10] rounded-[2rem]"
                speed={30}
              />

              {/* Image label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.6,
                }}
                className="absolute -bottom-5 left-5 rounded-2xl border border-white/15 bg-brand-dark/90 px-5 py-4 shadow-xl backdrop-blur-md"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-200">
                  Tulas Campus
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Dehradun, Uttarakhand
                </p>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Statistics */}
        <div className="relative mt-24">
          {/* Connecting line */}
          <motion.div
            aria-hidden="true"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px origin-left bg-white/10 lg:block"
          />

          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-white/25 sm:p-7"
              >
                {/* Real TIS photo behind each stat */}
                <img
                  src={stat.image}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover opacity-20 transition-all duration-700 group-hover:scale-110 group-hover:opacity-35"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-brand-dark/30" />
                {/* Number marker */}
                <div className="relative mb-6 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[10px] font-bold text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-teal-200"
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </div>

                {/* Counter */}
                <p className="relative text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                  <AnimatedCounter
                    to={stat.value}
                    suffix={stat.displayValue ? "" : stat.suffix}
                    displayValue={stat.displayValue}
                    delay={index * 0.1}
                  />
                </p>

                {/* Label */}
                <p className="relative mt-3 max-w-[180px] text-xs font-bold uppercase leading-5 tracking-[0.14em] text-white/55">
                  {stat.label}
                </p>

                {/* Hover accent */}
                <motion.div
                  aria-hidden="true"
                  initial={{
                    scaleX: 0,
                  }}
                  whileHover={{
                    scaleX: 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="absolute bottom-0 left-5 right-5 h-0.5 origin-left bg-teal-200"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}