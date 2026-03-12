import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { api } from "../api.js";

const fallbackBlogs = [
  {
    _id: "b1",
    title: "Designing for clarity in 2026",
    excerpt: "How to balance bold aesthetics with usability.",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80"
  },
  {
    _id: "b2",
    title: "The modular portfolio playbook",
    excerpt: "Reusable content systems that scale across careers.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80"
  },
  {
    _id: "b3",
    title: "Crafting API-first experiences",
    excerpt: "Why backend architecture now shapes frontend speed.",
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
          kicker="Blog"
          title="Insights, trends, and studio notes"
          subtitle="Thought leadership and behind-the-scenes experiments."
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
                <a
                  href={`/blog/${post._id}`}
                  className="inline-flex mt-4 text-sm text-accent"
                >
                  Read more ?
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
