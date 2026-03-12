import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGrid, FiFolder, FiBookOpen, FiMessageSquare, FiSettings, FiLogOut, FiMenu } from "react-icons/fi";

const items = [
  { id: "overview", label: "Dashboard", icon: FiGrid },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "blogs", label: "Blog Posts", icon: FiBookOpen },
  { id: "messages", label: "Messages", icon: FiMessageSquare },
  { id: "settings", label: "Settings", icon: FiSettings },
  { id: "logout", label: "Logout", icon: FiLogOut }
];

export default function Sidebar({ active, onNavigate, onLogout }) {
  const [open, setOpen] = useState(false);

  const menu = useMemo(
    () =>
      items.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              if (item.id === "logout") {
                onLogout();
                return;
              }
              onNavigate(item.id);
              setOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
              isActive
                ? "bg-[#22c55e]/15 text-[#22c55e]"
                : "text-[#94a3b8] hover:text-white hover:bg-white/5"
            }`}
          >
            <item.icon className="text-base" />
            <span>{item.label}</span>
          </button>
        );
      }),
    [active, onNavigate, onLogout]
  );

  return (
    <>
      <button
        className="lg:hidden inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-white/5 text-[#94a3b8]"
        onClick={() => setOpen(true)}
      >
        <FiMenu />
        Menu
      </button>
      <aside className="hidden lg:flex flex-col gap-6 w-64 bg-[#0b1222] border-r border-white/5 p-6 fixed inset-y-0">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#22c55e]">Admin</p>
          <h2 className="text-lg font-semibold text-white">Portfolio OS</h2>
        </div>
        <nav className="flex flex-col gap-2">{menu}</nav>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="w-72 h-full bg-[#0b1222] p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.4em] text-[#22c55e]">Admin</p>
                <h2 className="text-lg font-semibold text-white">Portfolio OS</h2>
              </div>
              <nav className="flex flex-col gap-2">{menu}</nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
