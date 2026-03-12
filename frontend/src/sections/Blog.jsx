import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { api } from "../api.js";

const fallbackBlogs = [
  {
    _id: "b0",
    title: "MERN Stack Development",
    excerpt: "Completed a structured MERN stack development program.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
  },
  {
    _id: "b1",
    title: "Advanced Cyber Security (IBM)",
    excerpt: "Completed advanced certification focused on modern cyber defense.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80"
  },
  {
    _id: "b2",
    title: "Cyber Forensics",
    excerpt: "Built foundational knowledge in digital forensics and investigation.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    _id: "b3",
    title: "Data Analytics & AI (HP LIFE)",
    excerpt: "Completed beginner AI and data analytics certifications.",
    image:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?auto=format&fit=crop&w=900&q=80"
  }
];

export default function Blog() {
  const [blogs, setBlogs] = useState(fallbackBlogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get("/blogs");
        if (data?.length) setBlogs(data);
      } catch (error) {
        console.error("Failed to load blogs", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blog" className="section-space">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          kicker="Learning"
          title="Certifications and learning"
          subtitle="Industry credentials that support development and support roles."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((post) => (
            <motion.div
              key={post._id}
              whileHover={{ y: -6 }}
              className="glass-light dark:glass rounded-2xl overflow-hidden shadow-glass"
            >
              <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-white/60">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
