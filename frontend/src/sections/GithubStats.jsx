import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data.js";

export default function GithubStats() {
  const username = profile.githubUsername;

  return (
    <section id="github" className="section-space">
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="absolute -top-10 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-64 h-64 rounded-full bg-accent2/10 blur-3xl" />
        <SectionTitle
          kicker="GitHub"
          title="Open-source momentum"
          subtitle="Contribution activity and repository stats, powered by GitHub."
        />
        <div className="grid lg:grid-cols-3 gap-6 relative z-10">
          {[
            {
              label: "Profile",
              src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=37f2b0&icon_color=6c7dff&text_color=94a3b8`
            },
            {
              label: "Languages",
              src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=37f2b0&text_color=94a3b8`
            },
            {
              label: "Streak",
              src: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&ring=37f2b0&fire=6c7dff&currStreakLabel=94a3b8`
            }
          ].map((card) => (
            <div key={card.label} className="p-[1px] rounded-2xl bg-gradient-to-br from-accent/40 via-white/10 to-accent2/30">
              <div className="glass-light dark:glass rounded-2xl p-6 shadow-glass">
                <p className="text-xs uppercase tracking-[0.3em] text-ink-600 dark:text-white/60">
                  {card.label}
                </p>
                <img src={card.src} alt={card.label} className="w-full mt-4" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-[1px] rounded-3xl bg-gradient-to-br from-accent/40 via-white/10 to-accent2/30 relative z-10">
          <div className="glass-light dark:glass rounded-3xl p-6 shadow-glass">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                Contribution Graph
              </p>
              <p className="text-xs text-ink-600 dark:text-white/60">
                Live GitHub activity for @{username}
              </p>
            </div>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=ffffff00&color=94a3b8&line=37f2b0&point=6c7dff&hide_border=true`}
              alt="GitHub contribution graph"
              className="w-full mt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
