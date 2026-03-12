import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-64 h-64 rounded-full bg-accent2/10 blur-3xl" />
        <SectionTitle
          kicker="Skills"
          title="Tech Stack Mastery"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skills.map((skill) => (
            <motion.div key={skill.name} whileHover={{ y: -6 }}>
              <div className="p-[1px] rounded-2xl bg-gradient-to-br from-accent/40 via-white/10 to-accent2/30">
                <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-sm font-semibold text-accent">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-ink-600 dark:text-white/60">
                        Applied in real projects
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-accent to-accent2 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
