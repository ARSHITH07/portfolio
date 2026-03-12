import { useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import api, { withAuth } from "../services/api.js";
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header.jsx";
import DashboardCards from "../components/DashboardCards.jsx";
import ProjectForm from "../components/ProjectForm.jsx";
import BlogForm from "../components/BlogForm.jsx";
import ProjectTable from "../components/ProjectTable.jsx";
import BlogTable from "../components/BlogTable.jsx";
import MessageTable from "../components/MessageTable.jsx";

export default function Dashboard() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [active, setActive] = useState("overview");
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [messages, setMessages] = useState([]);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const stats = useMemo(
    () => ({
      projects: projects.length,
      blogs: blogs.length,
      messages: messages.length
    }),
    [projects, blogs, messages]
  );

  const loadAll = useCallback(async () => {
    try {
      const [projectRes, blogRes, messageRes] = await Promise.all([
        api.get("/projects", withAuth(token)),
        api.get("/blogs", withAuth(token)),
        api.get("/messages", withAuth(token))
      ]);
      setProjects(projectRes.data);
      setBlogs(blogRes.data);
      setMessages(messageRes.data);
    } catch (error) {
      toast.error("Failed to load dashboard data");
    }
  }, [token]);

  useEffect(() => {
    if (token) loadAll();
  }, [token, loadAll]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post("/auth/login", login);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      toast.success("Welcome back");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  const deleteProject = async (id) => {
    try {
      await api.delete(`/projects/${id}`, withAuth(token));
      setProjects((prev) => prev.filter((p) => p._id !== id));
      toast.success("Project deleted");
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  const deleteBlog = async (id) => {
    try {
      await api.delete(`/blogs/${id}`, withAuth(token));
      setBlogs((prev) => prev.filter((b) => b._id !== id));
      toast.success("Blog deleted");
    } catch (error) {
      toast.error("Failed to delete blog");
    }
  };

  const deleteMessage = async (id) => {
    try {
      await api.delete(`/messages/${id}`, withAuth(token));
      setMessages((prev) => prev.filter((m) => m._id !== id));
      toast.success("Message deleted");
    } catch (error) {
      toast.error("Failed to delete message");
    }
  };

  const handleNavigate = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">
        <Toaster position="top-right" />
        <motion.form
          onSubmit={handleLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl bg-[#1e293b] border border-white/5 p-8 shadow-lg space-y-5"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#22c55e]">Secure Access</p>
            <h1 className="text-2xl font-semibold mt-2">Admin Login</h1>
            <p className="text-sm text-[#94a3b8] mt-2">Sign in to manage your portfolio content.</p>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={login.email}
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
            className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b]"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={login.password}
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              className="rounded-xl bg-[#0f172a] border border-white/5 text-white placeholder:text-[#64748b] pr-12 w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-widest text-[#94a3b8] hover:text-[#22c55e]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="px-5 py-2 rounded-xl bg-[#22c55e] text-[#0f172a] font-semibold hover:brightness-110 transition">
            Sign in
          </button>
        </motion.form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#f8fafc]">
      <Toaster position="top-right" />
      <Sidebar active={active} onNavigate={handleNavigate} onLogout={handleLogout} />
      <div className="lg:pl-64">
        <Header onLogout={handleLogout} />
        <main className="p-6 space-y-10">
          <section id="overview" className="space-y-6">
            <DashboardCards stats={stats} />
          </section>

          <section id="projects" className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
            <ProjectForm token={token} onCreated={loadAll} />
            <ProjectTable projects={projects} onDelete={deleteProject} />
          </section>

          <section id="blogs" className="grid lg:grid-cols-[1.2fr_1fr] gap-6">
            <BlogForm token={token} onCreated={loadAll} />
            <BlogTable blogs={blogs} onDelete={deleteBlog} />
          </section>

          <section id="messages">
            <MessageTable messages={messages} onDelete={deleteMessage} />
          </section>

          <section id="settings" className="rounded-2xl bg-[#1e293b] border border-white/5 p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white">Settings</h3>
            <p className="text-sm text-[#94a3b8] mt-2">
              Settings panel placeholder. Add profile controls and API keys here.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
