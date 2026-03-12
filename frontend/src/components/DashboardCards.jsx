import { motion } from "framer-motion";
import { FiFolder, FiBookOpen, FiMessageSquare } from "react-icons/fi";

const items = [
  { key: "projects", label: "Total Projects", icon: FiFolder },
  { key: "blogs", label: "Total Blog Posts", icon: FiBookOpen },
  { key: "messages", label: "Contact Messages", icon: FiMessageSquare }
];

export default function DashboardCards({ stats }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.key}
          whileHover={{ y: -4 }}
          className="rounded-2xl bg-[#1e293b] border border-white/5 p-5 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#94a3b8]">{item.label}</p>
              <p className="text-2xl font-semibold text-white mt-1">
                {stats[item.key] ?? 0}
              </p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#22c55e]/15 text-[#22c55e] flex items-center justify-center">
              <item.icon />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
