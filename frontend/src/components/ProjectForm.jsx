import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import api, { withAuth } from "../services/api.js";

const initial = {
  title: "",
  description: "",
  image: "",
  stack: "",
  category: "",
  liveUrl: "",
  githubUrl: ""
};

export default function ProjectForm({ token, onCreated }) {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const preview = useMemo(() => form.image?.trim(), [form.image]);

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim()) return toast.error("Title is required");
    setLoading(true);
    try {
      const payload = { ...form, stack: form.stack.split(",").map((s) => s.trim()) };
      await api.post("/projects", payload, withAuth(token));
      setForm(initial);
      onCreated();
      toast.success("Project added successfully");
    } catch (error) {
      toast.error("Failed to add project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-[#1e293b] border border-white/5 p-6 shadow-lg space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Add Project</h3>
        {preview && (
          <img src={preview} alt="Preview" className="h-12 w-20 object-cover rounded-lg" />
        )}
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
        <input
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b] md:col-span-2"
        />
        <input
          name="stack"
          value={form.stack}
          onChange={handleChange}
          placeholder="Stack (comma separated)"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b] md:col-span-2"
        />
        <input
          name="liveUrl"
          value={form.liveUrl}
          onChange={handleChange}
          placeholder="Live URL"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
        <input
          name="githubUrl"
          value={form.githubUrl}
          onChange={handleChange}
          placeholder="GitHub URL"
          className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
        />
      </div>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        rows="3"
        className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b] w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="px-5 py-2 rounded-xl bg-[#22c55e] text-[#0f172a] font-semibold hover:brightness-110 transition"
      >
        {loading ? "Saving..." : "Save Project"}
      </button>
    </form>
  );
}
