import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile, skills, education, experience, certifications } from "../data.js";

export default function About() {
  const linkedinDisplay = profile.linkedin
    ? profile.linkedin.split("?")[0].replace("https://", "")
    : "";

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
            className="rounded-3xl w-full h-[420px] object-cover object-top"
          />
          <div className="absolute -bottom-6 -right-6 glass-light dark:glass rounded-2xl p-5 shadow-glass">
            <p className="text-sm text-ink-900 dark:text-white">Arshith Raj</p>
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
            title="Full Stack Developer"
            subtitle="I build full-stack web applications with clean UI, structured APIs, and a support-first approach to quality, communication, and continuous improvement."
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              className="rounded-xl border border-ink-200 dark:border-white/10 px-4 py-3 text-sm text-ink-900 dark:text-white/80 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:bg-ink-50 dark:hover:bg-white/5 shadow-sm hover:shadow-glow"
              href={`mailto:${profile.email}`}
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                Email
              </span>
              {profile.email}
            </a>
            <a
              className="rounded-xl border border-ink-200 dark:border-white/10 px-4 py-3 text-sm text-ink-900 dark:text-white/80 transition hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:bg-ink-50 dark:hover:bg-white/5 shadow-sm hover:shadow-glow"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                LinkedIn
              </span>
              <span className="block break-all text-xs text-ink-700 dark:text-white/80">
                {linkedinDisplay}
              </span>
            </a>
            <div className="rounded-xl border border-ink-200 dark:border-white/10 px-4 py-3 text-sm text-ink-900 dark:text-white/80 transition hover:-translate-y-0.5 hover:border-accent hover:bg-ink-50 dark:hover:bg-white/5 shadow-sm hover:shadow-glow">
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                Location
              </span>
              {profile.location}
            </div>
            <div className="rounded-xl border border-ink-200 dark:border-white/10 px-4 py-3 text-sm text-ink-900 dark:text-white/80 transition hover:-translate-y-0.5 hover:border-accent hover:bg-ink-50 dark:hover:bg-white/5 shadow-sm hover:shadow-glow">
              <span className="block text-[0.65rem] uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                Role
              </span>
              {profile.title}
            </div>
          </div>
          <a
            href={profile.resumeUrl}
            className="inline-flex mt-6 px-5 py-3 rounded-full bg-ink-900 text-white dark:bg-white dark:text-ink-900"
          >
            Download Resume
          </a>
        </motion.div>
        <div className="lg:col-span-2 grid lg:grid-cols-[1.3fr_1fr] gap-6 mt-6">
          <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline transition hover:-translate-y-1 hover:shadow-glow hover:border-accent/60">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                Experience
              </p>
              <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                Career timeline
              </h3>
            </div>
            <div className="mt-6 space-y-6 text-sm text-ink-700 dark:text-white/70">
              {experience.map((item) => (
                <div key={`${item.title}-${item.company}`} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="mt-2 h-full w-px bg-white/10" />
                  </div>
                  <div className="pb-2">
                    <p className="font-semibold text-ink-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-ink-600 dark:text-white/60">{item.company}</p>
                    <p className="text-xs text-ink-600 dark:text-white/60">{item.period}</p>
                    <p className="mt-2">{item.highlights[0]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline transition hover:-translate-y-1 hover:shadow-glow hover:border-accent/60">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-600 dark:text-white/50">
                  Education
                </p>
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                  Academic timeline
                </h3>
              </div>
              <div className="mt-6 space-y-6 text-sm text-ink-700 dark:text-white/70">
                {education.map((item) => (
                  <div key={item.degree} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className="mt-2 h-full w-px bg-white/10" />
                    </div>
                    <div className="pb-2">
                      <p className="font-semibold text-ink-900 dark:text-white">{item.degree}</p>
                      <p className="text-xs text-ink-600 dark:text-white/60">{item.school}</p>
                      <p className="text-xs text-ink-600 dark:text-white/60">{item.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass glow-outline transition hover:-translate-y-1 hover:shadow-glow hover:border-accent/60">
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
