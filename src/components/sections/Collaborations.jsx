import Reveal from "../ui/Reveal";
import { collaborations } from "../../data/content";

// Logos repeat twice so the CSS marquee can loop seamlessly at -50%.
export default function Collaborations() {
  const loop = [...collaborations.logos, ...collaborations.logos];

  return (
    <section
      id="collaborations"
      className="overflow-hidden bg-white py-20 dark:bg-neutral-950 md:py-24"
    >
      <Reveal from="up">
        <h2 className="px-5 text-center text-xs font-bold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          {collaborations.title}
        </h2>
      </Reveal>

      <div className="mt-10 overflow-hidden">
        <ul className="marquee flex w-max items-center gap-6 px-3">
          {loop.map((logo, i) => (
            <li
              key={`${logo}-${i}`}
              aria-hidden={i >= collaborations.logos.length ? "true" : undefined}
              className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800"
            >
              <img
                src={logo}
                alt={i < collaborations.logos.length ? `Collaboration partner ${i + 1}` : ""}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
