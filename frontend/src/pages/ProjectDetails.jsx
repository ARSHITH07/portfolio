import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api.js";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await api.get(`/projects/${id}`);
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-light-gradient dark:bg-hero-gradient text-ink-900 dark:text-white p-10">
        <Link to="/" className="text-accent">? Back</Link>
        <p className="mt-6">Loading project...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gradient dark:bg-hero-gradient text-ink-900 dark:text-white p-10">
      <Link to="/" className="text-accent">? Back</Link>
      <div className="max-w-4xl mx-auto mt-8 glass-light dark:glass rounded-3xl p-8">
        <img src={project.image} alt={project.title} className="rounded-2xl mb-6" />
        <h1 className="text-3xl font-display font-semibold">{project.title}</h1>
        <p className="mt-4 text-ink-700 dark:text-white/70">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack?.map((tech) => (
            <span key={tech} className="text-xs px-2 py-1 rounded-full border border-ink-200 dark:border-white/10">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4 text-sm">
          <a className="text-accent" href={project.liveUrl}>Live demo</a>
          <a className="text-accent" href={project.githubUrl}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
