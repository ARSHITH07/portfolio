import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { api } from "../api.js";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await api.get(`/blogs/${id}`);
        setPost(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-light-gradient dark:bg-hero-gradient text-ink-900 dark:text-white p-10">
        <Link to="/" className="text-accent">? Back</Link>
        <p className="mt-6">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light-gradient dark:bg-hero-gradient text-ink-900 dark:text-white p-10">
      <Link to="/" className="text-accent">? Back</Link>
      <article className="max-w-3xl mx-auto mt-8 glass-light dark:glass rounded-3xl p-8">
        <img src={post.image} alt={post.title} className="rounded-2xl mb-6" />
        <h1 className="text-3xl font-display font-semibold">{post.title}</h1>
        <p className="mt-4 text-ink-700 dark:text-white/70">{post.excerpt}</p>
        <div className="mt-6 prose dark:prose-invert">
          <p>{post.content || "Full blog content goes here. Add markdown or rich text in the admin panel."}</p>
        </div>
      </article>
    </div>
  );
}
