import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { api } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    try {
      await api.post("/contact", form);
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-space">
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          kicker="Contact"
          title="Let’s connect"
          subtitle="Reach out for freelance works."
        />
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-light dark:glass rounded-3xl p-8 shadow-glass space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full rounded-xl bg-white/80 dark:bg-white/5 border border-white/20 text-ink-900 dark:text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl bg-white/80 dark:bg-white/5 border border-white/20 text-ink-900 dark:text-white"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="w-full rounded-xl bg-white/80 dark:bg-white/5 border border-white/20 text-ink-900 dark:text-white"
            required
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-accent text-ink-900 font-semibold"
            >
              Send Message
            </button>
            {status === "success" && (
              <span className="text-sm text-accent">Message sent!</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-500">Something went wrong.</span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
