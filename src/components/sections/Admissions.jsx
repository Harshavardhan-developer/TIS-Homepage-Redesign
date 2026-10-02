import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import MagneticButton from "../ui/MagneticButton";
import Button from "../ui/Button";
import { admissionSteps } from "../../data/content";

export default function Admissions() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.2,
  });

  return (
    <section
      id="admissions"
      className="relative overflow-hidden bg-white py-24 dark:bg-neutral-900 md:py-32"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {/* Heading */}
        <Reveal from="down">
          <SectionHeading
            eyebrow="Admissions"
            title="Your journey to Tulas, in four steps."
          />
        </Reveal>

        {/* Timeline */}
        <div
          ref={ref}
          className="relative mt-16 md:mt-20"
        >
          {/* Base line */}
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-px bg-neutral-200 dark:bg-neutral-700 md:left-1/2"
          />

          {/* Animated line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute left-5 top-0 h-full w-[2px] origin-top bg-brand md:left-1/2"
          />

          {admissionSteps.map((step, index) => {
            const isRight = index % 2 === 1;

            return (
              <Reveal
                key={step.title}
                from={isRight ? "right" : "left"}
                delay={index * 0.08}
                className={`relative mb-14 pl-16 last:mb-0 md:mb-20 md:w-1/2 md:pl-0 ${
                  isRight
                    ? "md:ml-auto md:pl-14"
                    : "md:pr-14"
                }`}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-brand text-xs font-extrabold text-white shadow-lg dark:border-neutral-900 ${
                    isRight
                      ? "md:-left-5"
                      : "md:left-auto md:-right-5"
                  }`}
                >
                  0{index + 1}
                </motion.div>

                {/* Step card */}
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-neutral-700 dark:bg-neutral-800 md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                        Step {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-2 text-xl font-extrabold text-neutral-900 dark:text-white md:text-2xl">
                        {step.title}
                      </h3>
                    </div>

                    <span className="text-2xl font-light text-neutral-200 transition-colors duration-300 group-hover:text-brand dark:text-neutral-700">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                    {step.text}
                  </p>

                  <div className="mt-5 h-px w-10 bg-brand transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal from="scale" delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center md:mt-20">
            <p className="max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
              Ready to take the next step?
            </p>

            <MagneticButton>
              <Button
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noreferrer"
              >
                Begin Your Journey
                <span className="ml-2">↗</span>
              </Button>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}