import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile, skills, education, experience, certifications } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section-space">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1.4fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="rounded-3xl w-full h-[420px] object-cover"
          />
          <div className="absolute -bottom-6 -right-6 glass-light dark:glass rounded-2xl p-5 shadow-glass">
            <p className="text-sm text-ink-900 dark:text-white">10+ Years Experience</p>
            <p className="text-xs text-ink-600 dark:text-white/60">Digital products & brands</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle
            kicker="About"
            title="Data, insights, and impact"
            subtitle={profile.about}
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-accent hover:text-accent transition"
              href={`mailto:${profile.email}`}
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                Email
              </span>
              {profile.email}
            </a>
            <div className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80">
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                Phone
              </span>
              {profile.phone}
            </div>
            <a
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-accent hover:text-accent transition"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                LinkedIn
              </span>
              {profile.linkedin.replace("https://", "")}
            </a>
            <a
              className="rounded-xl border border-white/10 px-4 py-3 text-sm text-white/80 hover:border-accent hover:text-accent transition"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-white/50">
                GitHub
              </span>
              {profile.github.replace("https://", "")}
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.slice(0, 6).map((skill) => (
              <div
                key={skill.name}
                className="px-3 py-2 rounded-xl border border-ink-200 dark:border-white/10 text-sm text-ink-700 dark:text-white/70"
              >
                {skill.name}
              </div>
            ))}
          </div>
          <a
            href={profile.resumeUrl}
            className="inline-flex mt-6 px-5 py-3 rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900"
          >
            Download Resume
          </a>
        </motion.div>
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 mt-6">
          <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline">
            <h3 className="text-lg font-semibold text-ink-900 dark:text-white">Experience</h3>
            <div className="mt-4 space-y-4 text-sm text-ink-700 dark:text-white/70">
              {experience.map((item) => (
                <div key={item.title}>
                  <p className="font-semibold text-ink-900 dark:text-white">{item.title}</p>
                  <p className="text-xs">{item.company} | {item.period}</p>
                  <ul className="mt-2 list-disc list-inside space-y-1">
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline">
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">Education</h3>
              <div className="mt-4 space-y-3 text-sm text-ink-700 dark:text-white/70">
                {education.map((item) => (
                  <div key={item.degree}>
                    <p className="font-semibold text-ink-900 dark:text-white">{item.degree}</p>
                    <p className="text-xs">{item.school}</p>
                    <p className="text-xs">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline">
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">Certifications</h3>
              <ul className="mt-4 list-disc list-inside text-sm text-ink-700 dark:text-white/70 space-y-1">
                {certifications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
