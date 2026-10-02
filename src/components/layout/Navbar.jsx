import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { navigation, siteInfo } from "../../data/content";
import useActiveSection from "../../hooks/useActiveSection";

const primaryItems = navigation.filter((item) => !item.more);
const moreItems = navigation.filter((item) => item.more);
const sectionIds = navigation.filter((i) => i.section).map((i) => i.section);
const APPLY_URL = "https://admission.tis.edu.in/";

const isExternal = (href) => href.startsWith("http");
// Items that exist on this page scroll in-page; others open the official site.
const linkFor = (item) => (item.section ? `#${item.section}` : item.href);
const externalProps = (href) =>
  isExternal(href) ? { target: "_blank", rel: "noreferrer" } : {};

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown label
  const [accordion, setAccordion] = useState(null); // mobile accordion label
  const activeSection = useActiveSection(sectionIds);

  // Solid style when scrolled or when the mobile panel is open
  const solid = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock body scroll + close with Escape
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the panel if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMobile = () => {
    setOpen(false);
    setAccordion(null);
  };

  const textColor = solid
    ? "text-neutral-800 dark:text-white/90"
    : "text-white";

  return (
    <header className="fixed inset-x-0 top-0 z-[100]">
      {/* Admission helpline strip */}
      <div
        className={`hidden overflow-hidden transition-all duration-500 md:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="bg-brand-dark px-6 py-2">
          <div className="mx-auto flex max-w-7xl justify-end">
            <a
              href={`tel:${siteInfo.admissionHelpline}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wide text-white/90 hover:text-white"
            >
              <Phone size={13} aria-hidden="true" />
              Admissions Helpline
              <span className="text-white">{siteInfo.admissionHelpline}</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`relative z-10 mx-3 mt-3 rounded-2xl transition-all duration-500 md:mx-5 ${
          solid
            ? "border border-black/5 bg-white/85 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/85"
            : "border border-white/10 bg-black/10 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 ${
            scrolled ? "h-16" : "h-[72px]"
          }`}
        >
          <a
            href="#home"
            aria-label="Tulas International School – home"
            className="flex items-center"
          >
            <img
              src={siteInfo.logo}
              alt={siteInfo.name}
              className={`w-auto object-contain transition-all duration-500 ${
                solid ? "h-10" : "h-12 brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {primaryItems.map((item) => {
              const isActive = item.section === activeSection;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                  onFocus={() => item.dropdown && setOpenMenu(item.label)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null);
                  }}
                >
                  <a
                    href={linkFor(item)}
                    {...externalProps(linkFor(item))}
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors hover:text-brand ${textColor}`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <ChevronDown
                        size={14}
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute inset-x-3 bottom-1 h-[2px] origin-left bg-brand transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>

                  <AnimatePresence>
                    {item.dropdown && openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white p-2 shadow-2xl dark:border-white/10 dark:bg-neutral-900">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group block overflow-hidden rounded-xl"
                          >
                            <div className="relative h-32 overflow-hidden">
                              <img
                                src={item.image}
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                              <span className="absolute bottom-3 left-4 text-sm font-bold text-white">
                                {item.label}
                              </span>
                            </div>
                            <div className="p-3">
                              <p className="text-xs leading-5 text-neutral-600 dark:text-neutral-400">
                                {item.description}
                              </p>
                              <span className="mt-2 inline-block text-xs font-bold text-brand">
                                Explore on tis.edu.in ↗
                              </span>
                            </div>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}

            {/* More */}
            <li
              className="relative"
              onMouseEnter={() => setOpenMenu("More")}
              onMouseLeave={() => setOpenMenu(null)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setOpenMenu(null);
              }}
            >
              <button
                type="button"
                aria-expanded={openMenu === "More"}
                aria-haspopup="true"
                onClick={() => setOpenMenu(openMenu === "More" ? null : "More")}
                className={`flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-semibold transition-colors hover:text-brand ${textColor}`}
              >
                More
                <ChevronDown
                  size={14}
                  aria-hidden="true"
                  className={`transition-transform duration-300 ${
                    openMenu === "More" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openMenu === "More" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute right-0 top-full w-60 pt-3"
                  >
                    <div className="rounded-2xl border border-black/5 bg-white p-2 shadow-2xl dark:border-white/10 dark:bg-neutral-900">
                      {moreItems.map((item) => (
                        <a
                          key={item.label}
                          href={linkFor(item)}
                          {...externalProps(linkFor(item))}
                          className="block rounded-xl px-4 py-3 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand dark:text-white/80 dark:hover:bg-white/5"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-brand hover:text-white ${
                solid
                  ? "bg-neutral-100 text-neutral-800 dark:bg-white/10 dark:text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-brand px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark sm:block"
            >
              Apply Now <span aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-0 overflow-y-auto bg-cream px-5 pb-10 pt-28 dark:bg-neutral-950 lg:hidden"
          >
            <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
              {navigation.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.04, duration: 0.35 }}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={accordion === item.label}
                        onClick={() =>
                          setAccordion(accordion === item.label ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-4 text-left text-xl font-bold text-neutral-900 dark:text-white"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          aria-hidden="true"
                          className={`text-brand transition-transform duration-300 ${
                            accordion === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {accordion === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-4 py-4 text-sm font-bold text-brand">
                              {item.section && (
                                <a href={`#${item.section}`} onClick={closeMobile}>
                                  On this page ↓
                                </a>
                              )}
                              <a href={item.href} target="_blank" rel="noreferrer">
                                tis.edu.in ↗
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={linkFor(item)}
                      {...externalProps(linkFor(item))}
                      onClick={closeMobile}
                      className="flex items-center justify-between py-4 text-xl font-bold text-neutral-900 dark:text-white"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-brand">↗</span>
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brand px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                Apply Now ↗
              </a>
              <a
                href={`tel:${siteInfo.admissionHelpline}`}
                className="rounded-full border border-neutral-300 px-6 py-4 text-center text-sm font-bold text-neutral-800 dark:border-neutral-700 dark:text-white"
              >
                Call {siteInfo.admissionHelpline}
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 rounded-full border border-neutral-300 px-6 py-4 text-sm font-bold text-neutral-800 dark:border-neutral-700 dark:text-white"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
                {dark ? "Light theme" : "Dark theme"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
