import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import api, { withAuth } from "../services/api.js";
import "react-quill/dist/quill.snow.css";

const initial = { title: "", excerpt: "", image: "", content: "" };

export default function BlogForm({ token, onCreated }) {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => form.image?.trim(), [form.image]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim()) return toast.error("Title is required");
    setLoading(true);
    try {
      await api.post("/blogs", form, withAuth(token));
      setForm(initial);
      onCreated();
      toast.success("Blog added successfully");
    } catch (error) {
      toast.error("Failed to add blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#1e293b] border border-white/5 p-6 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Add Blog Post</h3>
        {preview && (
          <img src={preview} alt="Preview" className="h-12 w-20 object-cover rounded-lg" />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          value={form.title}
          onChange={(e) => setForm((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Title"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
        <input
          value={form.image}
          onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
          placeholder="Image URL"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
      </div>
      <input
        value={form.excerpt}
        onChange={(e) => setForm((prev) => ({ ...prev, excerpt: e.target.value }))}
        placeholder="Excerpt"
        className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
      />
      <div className="rounded-xl overflow-hidden border border-white/5">
        <ReactQuill theme="snow" value={form.content} onChange={(value) => setForm((prev) => ({ ...prev, content: value }))} />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2 rounded-xl bg-[#22c55e] text-[#0f172a] font-semibold hover:brightness-110 transition"
      >
        {loading ? "Saving..." : "Save Blog"}
      </button>
    </form>
  );
}
