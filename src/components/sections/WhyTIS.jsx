import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { whyItems } from "../../data/content";

export default function WhyTIS() {
  const [active, setActive] = useState(0);

  const item = whyItems[active];

  return (
    <section
      id="why"
      className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* LEFT */}
          <Reveal from="left">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why TIS"
                title="Learning that doesn't stop at the classroom."
              />

              <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-neutral-200 shadow-xl dark:bg-neutral-900">
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={item.image}
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      initial={{
                        opacity: 0,
                        scale: 1.08,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 1.03,
                        x: -30,
                      }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Active title */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={item.title}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                        Tulas Experience
                      </p>

                      <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                        {item.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Image counter */}
                <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(whyItems.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT */}
          <div className="self-center">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
                Explore
              </p>

              <span className="text-xs font-semibold text-neutral-400">
                {String(active + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800">
              {whyItems.map((item, index) => {
                const isActive = active === index;

                return (
                  <Reveal
                    key={item.title}
                    from="right"
                    delay={index * 0.08}
                  >
                    <div className="border-b border-neutral-200 dark:border-neutral-800">
                      <button
                        type="button"
                        onMouseEnter={() => setActive(index)}
                        onFocus={() => setActive(index)}
                        onClick={() => setActive(index)}
                        aria-pressed={isActive}
                        className="group relative flex w-full gap-5 py-6 text-left md:py-7"
                      >
                        {/* Progress indicator */}
                        <span className="relative mt-1 flex h-6 w-1 shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                          <motion.span
                            animate={{
                              scaleY: isActive ? 1 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute inset-0 origin-top bg-brand"
                          />
                        </span>

                        {/* Number */}
                        <span
                          className={`pt-1 text-sm font-bold transition-colors duration-300 ${
                            isActive
                              ? "text-brand"
                              : "text-neutral-400"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Text */}
                        <span className="min-w-0 flex-1">
                          <span
                            className={`flex items-center justify-between gap-4 text-2xl font-extrabold tracking-tight transition-colors duration-300 md:text-3xl ${
                              isActive
                                ? "text-neutral-950 dark:text-white"
                                : "text-neutral-500 dark:text-neutral-400"
                            }`}
                          >
                            <span>{item.title}</span>

                            <motion.span
                              animate={{
                                rotate: isActive ? 45 : 0,
                                opacity: isActive ? 1 : 0.3,
                              }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0 text-brand"
                            >
                              <ArrowUpRight size={20} />
                            </motion.span>
                          </span>

                          {/* Description */}
                          <AnimatePresence initial={false}>
                            {isActive && (
                              <motion.span
                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}
                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}
                                transition={{
                                  duration: 0.4,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block overflow-hidden"
                              >
                                <span className="block max-w-xl pt-3 leading-7 text-neutral-600 dark:text-neutral-300">
                                  {item.text}
                                </span>
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                      </button>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}