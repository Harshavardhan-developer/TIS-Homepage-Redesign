import { motion } from "framer-motion";
import {
  footer,
  navigation,
  quickLinks,
  siteInfo,
} from "../../data/content";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-brand-dark text-white"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20 lg:py-24">
        {/* Main Footer */}
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={footer.logo}
              alt={siteInfo.name}
              className="mb-6 h-auto w-36 object-contain"
              loading="lazy"
            />

            <h2 className="max-w-md text-3xl font-bold leading-tight md:text-4xl">
              Let's do it
              <span className="block text-teal-200">with Tulas.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              {siteInfo.name} was established in {siteInfo.established} under
              the aegis of {siteInfo.trust}, creating opportunities for
              students to learn, explore, grow and shape their futures.
            </p>

            <a
              href={footer.applyNow}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center rounded-full bg-brand px-6 py-3 text-sm font-bold text-white transition-transform duration-300 hover:-translate-y-1"
            >
              Apply Now
              <span className="ml-3">↗</span>
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.section ? `#${item.section}` : item.href}
                    target={item.section ? undefined : "_blank"}
                    rel={item.section ? undefined : "noreferrer"}
                    className="group inline-flex items-center text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-2 h-px w-0 bg-brand transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Quick Links
            </p>

            <ul className="space-y-3">
              {quickLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center text-sm text-white/75 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mr-2 h-px w-0 bg-brand transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.address
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="not-italic"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Contact
            </p>

            <p className="text-sm leading-7 text-white/75">
              {footer.address}
            </p>

            <div className="mt-5 space-y-2 text-sm">
              {footer.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block text-white/75 transition-colors hover:text-white"
                >
                  {phone}
                </a>
              ))}

              <a
                href={`tel:${footer.admissionHelpline}`}
                className="block font-semibold text-teal-200"
              >
                Admissions: {footer.admissionHelpline}
              </a>

              <a
                href={`mailto:${footer.email}`}
                className="block text-white/75 transition-colors hover:text-white"
              >
                {footer.email}
              </a>
            </div>
          </motion.address>
        </div>

        {/* Middle CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">
                Explore TIS
              </p>

              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                Dive into our virtual tour.
              </h3>
            </div>

            <a
              href={footer.virtualTour}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:border-brand hover:bg-brand"
            >
              Virtual Tour
              <span className="ml-3">↗</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-white/45">
              {footer.copyright}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {footer.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand"
                >
                  <img
                    src={social.icon}
                    alt=""
                    className="h-4 w-4 object-contain brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-2 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
            <p>
              Designed and managed by{" "}
              <a
                href={footer.managedByUrl}
                target="_blank"
                rel="noreferrer"
                className="text-white/60 transition-colors hover:text-white"
              >
                {footer.managedBy}
              </a>
            </p>

            <a
              href={footer.fedenaLogin}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Fedena Login ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}