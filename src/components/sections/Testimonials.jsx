import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "../ui/Reveal";
import { testimonials } from "../../data/content";

export default function Testimonials() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-40, 40]);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative overflow-hidden bg-brand-dark py-24 text-white md:py-32"
    >
      <motion.img
        src={testimonials.backgroundImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand-dark/70" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal from="up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-200">
            {testimonials.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            {testimonials.title}
          </h2>
        </Reveal>

        <Reveal from="blur" delay={0.15}>
          <figure className="mt-12">
            <img
              src={testimonials.quoteDecoration}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="mx-auto h-10 w-auto"
            />
            <blockquote className="mt-6 text-lg leading-8 text-white/90 md:text-2xl md:leading-10">
              {testimonials.quote}
            </blockquote>
            <figcaption className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
              Parent review · Google
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
