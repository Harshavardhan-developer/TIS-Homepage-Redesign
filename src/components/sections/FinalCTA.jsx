import { motion } from "framer-motion";
import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import Reveal from "../ui/Reveal";
import { footer, images } from "../../data/content";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative min-h-[620px] overflow-hidden text-white md:min-h-[680px]"
    >
      {/* Campus image */}
      <motion.img
        src={images.campus}
        alt="Tulas International School campus"
        loading="lazy"
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Animated overlay */}
      <motion.div
        aria-hidden="true"
        animate={{
          backgroundPosition: [
            "0% 50%",
            "100% 50%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "220% 220%",
        }}
        className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand/80 to-brand-dark/95"
      />

      {/* Dark readability layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/20"
      />

      {/* Decorative circles */}
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-white/10"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute -left-24 bottom-10 h-60 w-60 rounded-full border border-white/10"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[620px] max-w-5xl items-center justify-center px-5 py-24 text-center md:min-h-[680px] md:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <Reveal from="up">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-white/40" />

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">
                Tulas International School
              </p>

              <span className="h-px w-10 bg-white/40" />
            </div>
          </Reveal>

          {/* Main heading */}
          <Reveal from="blur" delay={0.1}>
            <h2 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Let&rsquo;s do it
              <span className="block font-display text-white/70">
                with Tulas.
              </span>
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal from="up" delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
              Take the next step and connect with the Tulas admissions team.
              Discover the campus, explore the opportunities and begin your
              journey with Tulas.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal from="scale" delay={0.35}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton>
                <Button
                  href="https://admission.tis.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                  variant="light"
                >
                  Apply Now
                  <span className="ml-2">↗</span>
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  href={`tel:${footer.admissionHelpline}`}
                  variant="outline"
                >
                  Call Admissions
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  href={`mailto:${footer.email}`}
                  variant="outline"
                >
                  Email Us
                </Button>
              </MagneticButton>
            </div>
          </Reveal>

          {/* Contact information */}
          <Reveal from="up" delay={0.5}>
            <div className="mt-12 flex flex-col items-center justify-center gap-3 text-xs text-white/60 sm:flex-row sm:gap-6">
              <a
                href={`tel:${footer.admissionHelpline}`}
                className="transition-colors hover:text-white"
              >
                {footer.admissionHelpline}
              </a>

              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />

              <a
                href={`mailto:${footer.email}`}
                className="transition-colors hover:text-white"
              >
                {footer.email}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
      />
    </section>
  );
}