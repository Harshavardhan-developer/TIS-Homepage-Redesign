import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { sports, sportsAll, sportsFeatured } from "../../data/content";

export default function Sports() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = sportsFeatured[active];

  const loop = [...sportsAll, ...sportsAll];

  return (
    <section
      id="sports"
      className="overflow-hidden bg-white py-24 dark:bg-neutral-950 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal from="up">
          <SectionHeading
            eyebrow="Sports"
            title={sports.heading}
          />
        </Reveal>

        {/* Featured sport */}
        <Reveal from="scale">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-neutral-200">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.name}
                src={current.image}
                alt={current.name}
                loading="lazy"
                initial={{
                  opacity: 0,
                  x: 60,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -60,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

            <motion.p
              key={`${current.name}-label`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-0 left-0 p-6 text-3xl font-extrabold text-white md:text-4xl"
            >
              {current.name}
            </motion.p>
          </div>
        </Reveal>

        {/* Featured sport selector */}
        <div className="no-scrollbar mt-6 flex snap-x gap-4 overflow-x-auto pb-2">
          {sportsFeatured.map((sport, i) => (
            <button
              key={sport.name}
              onClick={() => setActive(i)}
              aria-label={`Show ${sport.name}`}
              aria-pressed={active === i}
              className={`group relative h-28 w-40 shrink-0 snap-start overflow-hidden rounded-2xl ring-offset-2 transition-all duration-300 ${
                active === i
                  ? "scale-[1.02] ring-2 ring-brand"
                  : "opacity-70 hover:scale-[1.02] hover:opacity-100"
              }`}
            >
              <img
                src={sport.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <span className="absolute inset-x-0 bottom-0 bg-black/55 px-2 py-1.5 text-xs font-bold text-white">
                {sport.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ALL SPORTS AUTO-SCROLL */}
      <Reveal from="up">
        <div className="mt-16">
          <div className="mb-5 px-6">
            <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">
              {sports.description}
            </p>
          </div>

          <div
            className="relative overflow-hidden"
            aria-label="All sports offered at TIS"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {/* Left fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-neutral-950"
            />

            {/* Right fade */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-neutral-950"
            />

            {/* CSS marquee: GPU-friendly, and pausing is just animation-play-state */}
            <div
              className="marquee flex w-max gap-4 px-4"
              style={{ animationPlayState: isPaused ? "paused" : "running" }}
            >
              {loop.map((sport, i) => (
                <div
                  key={`${sport.name}-${i}`}
                  aria-hidden={i >= sportsAll.length ? "true" : undefined}
                  className="group relative h-28 w-52 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <img
                    src={sport.image}
                    alt={i < sportsAll.length ? sport.name : ""}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <span className="absolute bottom-0 left-0 p-4 text-sm font-bold text-white">
                    {sport.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Pause status */}
          <div className="mt-5 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {isPaused ? "Paused · Move away to continue" : "Hover to pause"}
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}