import { motion, useScroll, useTransform } from "framer-motion";
import { profile, heroTech } from "../data.js";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 noise" />
      <div className="absolute inset-0 -z-20 light-sky dark:bg-hero-gradient" />
      <motion.div
        style={{ y }}
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 400], [0, -100]) }}
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-accent2/30 blur-3xl"
      />
      <motion.div
        className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-accent/20 blur-[140px]"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[520px] h-[520px] rounded-full bg-accent2/20 blur-[150px]"
        animate={{ x: [0, 70, 0], y: [0, -50, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 md:py-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-display font-semibold text-ink-900 dark:text-white"
          >
            {profile.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-ink-700 dark:text-white/70"
          >
            {profile.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-ink-900 font-semibold shadow-glow"
            >
              {profile.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-ink-900/15 dark:border-white/20 text-ink-900 dark:text-white hover:border-accent hover:text-accent transition"
            >
              {profile.ctaSecondary}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {heroTech.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -4 }}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide border border-white/10 text-white/80 bg-white/5"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs uppercase tracking-[0.3em] text-ink-700 dark:text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span>Scroll Down</span>
        <span className="mt-2 text-base">v</span>
      </motion.div>
    </section>
  );
}
