import { motion, useReducedMotion } from "framer-motion";
import { Trophy } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { awards, influentialPersonalities, rankings } from "../../data/content";

// Recognition: rankings, awards and well-known people connected with TIS.
export default function Highlights() {
  const reduce = useReducedMotion();

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-cream py-24 dark:bg-neutral-900 md:py-32"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Rankings" title={rankings.title} />

        {/* Rankings */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.items.map((item, i) => (
            <Reveal key={item.title} from="up" delay={i * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ duration: 0.3 }}
                className="flex h-full flex-col rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950"
              >
                <Trophy size={22} className="text-brand" aria-hidden="true" />
                <p className="mt-6 text-6xl font-extrabold tracking-tight text-brand">
                  {item.rank}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                  {item.region}
                </p>
                <h3 className="mt-4 text-sm font-semibold leading-6 text-neutral-800 dark:text-neutral-200">
                  {item.title}
                </h3>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Awards */}
        <div className="mt-24">
          <SectionHeading eyebrow={awards.eyebrow} title={awards.title} />
          <div className="grid gap-5 md:grid-cols-3">
            {awards.images.map((award, i) => (
              <Reveal key={award.src} from="scale" delay={i * 0.1}>
                <figure className="group overflow-hidden rounded-3xl bg-white p-3 shadow-sm dark:bg-neutral-950">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={award.src}
                      alt={award.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Influential personalities */}
        <div className="mt-24">
          <SectionHeading
            eyebrow={influentialPersonalities.eyebrow}
            title={influentialPersonalities.title}
          />
          <ul className="no-scrollbar -mx-5 flex snap-x gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0">
            {influentialPersonalities.people.map((person) => (
              <li
                key={person.name}
                className="w-64 shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-sm dark:bg-neutral-950"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {person.name}
                  </h3>
                  <p className="mt-2 line-clamp-4 text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                    {person.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
