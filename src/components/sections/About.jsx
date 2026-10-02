import { motion } from "framer-motion";
import Reveal from "../ui/Reveal";
import TextReveal from "../ui/TextReveal";
import ParallaxImage from "../animation/ParallaxImage";
import { about, images } from "../../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 dark:bg-neutral-900 md:py-32 lg:py-40"
    >
      {/* Decorative element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Section intro */}
        <div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal from="left">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand">
                About Tulas
              </p>

              <div className="h-px w-16 bg-brand" />
            </div>
          </Reveal>

          <Reveal from="right" delay={0.1}>
            <p className="max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400 md:text-base">
              {about.description}
            </p>
          </Reveal>
        </div>

        {/* Main story */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Images */}
          <div className="relative">
            <Reveal from="left">
              <ParallaxImage
                src={images.about}
                alt={about.images[0].alt}
                className="aspect-[4/5] rounded-[2rem]"
                speed={35}
              />
            </Reveal>

            {/* Floating year card */}
            <Reveal from="up" delay={0.35}>
              <div className="absolute -bottom-6 -right-3 rounded-2xl bg-brand px-6 py-5 text-white shadow-xl sm:-right-6">
                <p className="text-3xl font-extrabold leading-none">2012</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
                  Established
                </p>
              </div>
            </Reveal>

            {/* Decorative circle */}
            <motion.div
              aria-hidden="true"
              className="absolute -left-5 top-10 hidden h-20 w-20 rounded-full border border-brand/30 lg:block"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <div>
            <Reveal from="right">
              <p className="text-sm font-semibold text-brand">
                {about.eyebrow}
              </p>
            </Reveal>

            <h2 className="mt-4 text-4xl font-extrabold leading-[0.95] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl dark:text-white">
              <TextReveal as="span" text="Made for the" />

              <span className="block font-display text-brand">
                <TextReveal
                  as="span"
                  text="future."
                  delay={0.3}
                />
              </span>
            </h2>

            <Reveal from="up" delay={0.25}>
              <p className="mt-8 max-w-xl text-base leading-8 text-neutral-600 dark:text-neutral-300 md:text-lg">
                {about.heading}
              </p>
            </Reveal>

            {/* Supporting points */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal from="up" delay={0.35}>
                <div className="border-l-2 border-brand pl-4">
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">
                    Holistic growth
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                    Learning experiences that extend beyond the classroom.
                  </p>
                </div>
              </Reveal>

              <Reveal from="up" delay={0.45}>
                <div className="border-l-2 border-brand pl-4">
                  <p className="text-sm font-bold text-neutral-900 dark:text-white">
                    Student experience
                  </p>
                  <p className="mt-1 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                    A campus environment designed around learning and growth.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* CTA */}
            <Reveal from="up" delay={0.55}>
              <a
                href="https://tis.edu.in/about-tis/why-choose-us/"
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-bold text-neutral-900 dark:text-white"
              >
                <span className="relative">
                  Discover Tulas
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left bg-brand transition-transform duration-300 group-hover:scale-x-50" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}