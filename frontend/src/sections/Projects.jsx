import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { api } from "../api.js";

const fallbackProjects = [
  {
    _id: "p1",
    title: "Task Manager",
    description:
      "Task management web app for employees with work assignment, video conferencing, and progress updates. Separate logins for employees and admin.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "MERN Stack",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    _id: "p2",
    title: "Restaurant Table Management System",
    description:
      "MERN app for table booking, orders, staff assignment, billing, tipping, and takeout with real-time updates for chefs and waitstaff.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=80",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "MERN Stack",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    _id: "p3",
    title: "Spotify Clone",
    description:
      "Music streaming web app with user authentication, music playback, playlists, responsive UI, and real-time controls.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    category: "MERN Stack",
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
          title="Full Stack builds"
          subtitle="Hands-on projects focused on real-world workflows."
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
