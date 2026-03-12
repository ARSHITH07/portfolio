import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { api } from "../api.js";

const fallbackProjects = [
  {
    _id: "p1",
    title: "Telecom Customer Churn Modeling",
    description: "EDA, feature engineering, and classification modeling to identify churn drivers.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    stack: ["Python", "Pandas", "scikit-learn"],
    category: "Machine Learning",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    _id: "p2",
    title: "Credit Card Fraud Detection",
    description: "Logistic regression model with imbalance handling achieving 94% accuracy.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
    stack: ["Python", "scikit-learn", "EDA"],
    category: "Analytics",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    _id: "p3",
    title: "IMDB Movie Review Classification",
    description: "LSTM-based sentiment analysis model with 88% test accuracy.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    stack: ["Python", "LSTM", "NLP"],
    category: "NLP",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    _id: "p4",
    title: "RapidRelief - Disaster Alert & Response System",
    description: "Flutter app with FastAPI backend, SQLite database, and severity classification.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    stack: ["Flutter", "FastAPI", "SQLite"],
    category: "Full Stack",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        if (data?.length) setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    };
    fetchProjects();
  }, []);

  const categories = useMemo(() => {
    const unique = new Set(projects.map((p) => p.category || "General"));
    return ["All", ...unique];
  }, [projects]);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => (p.category || "General") === activeFilter);

  return (
    <section id="projects" className="section-space">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          kicker="Projects"
          title="Selected work, tailored for impact"
          subtitle="Filter by category and explore modular case studies."
        />
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                activeFilter === cat
                  ? "bg-accent text-ink-900 border-accent"
                  : "border-ink-200 dark:border-white/10 text-ink-700 dark:text-white/70 hover:border-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <motion.div
              key={project._id}
              whileHover={{ y: -8 }}
              className="glass-light dark:glass rounded-2xl overflow-hidden shadow-glass flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-white/60 flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-ink-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-4 text-sm">
                  <a className="text-accent" href={project.liveUrl}>
                    Live demo
                  </a>
                  <a className="text-accent" href={project.githubUrl}>
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
