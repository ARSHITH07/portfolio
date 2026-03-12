import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services" className="section-space">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-64 h-64 rounded-full bg-accent2/10 blur-3xl" />
        <SectionTitle
          kicker="Services"
          title="Data services that drive decisions"
          subtitle="Insight-focused deliverables for teams and founders."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {services.map((service) => (
            <motion.div key={service.title} whileHover={{ y: -8 }}>
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-accent/40 via-white/10 to-accent2/30">
                <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sm font-semibold text-accent">
                      {service.icon}
                    </div>
                    <span className="text-xs text-white/50 uppercase tracking-[0.25em]">
                      Service
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-white/60 flex-1">
                    {service.description}
                  </p>
                  <button className="mt-6 text-sm text-accent font-semibold">
                    Learn more >
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
