import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { testimonials } from "../data.js";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="section-space">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          kicker="Highlights"
          title="Experience highlights"
          subtitle="Snapshot of recent roles and internships."
        />
        <div className="relative glass-light dark:glass rounded-3xl p-8 shadow-glass">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-ink-900 dark:text-white">"{active.quote}"</p>
              <p className="mt-6 text-sm text-ink-700 dark:text-white/60">
                {active.name} - {active.role}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full ${
                  i === index ? "bg-accent" : "bg-white/20"
                }`}
                aria-label={`Show testimonial from ${t.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
