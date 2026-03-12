import { FiBell, FiLogOut, FiSearch } from "react-icons/fi";

export default function Header({ onLogout }) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 bg-[#0f172a]/80 backdrop-blur border-b border-white/5 px-6 py-4 sticky top-0 z-30">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[#22c55e]">Admin</p>
        <h1 className="text-xl font-semibold text-white">Command Center</h1>
      </div>
      <div className="flex items-center gap-3 flex-1 justify-end">
        <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 text-sm text-[#94a3b8] min-w-[240px]">
          <FiSearch />
          <input
            placeholder="Search projects, blogs..."
            className="bg-transparent outline-none placeholder:text-[#64748b] text-[#e2e8f0] w-full"
          />
        </div>
        <button className="w-10 h-10 rounded-xl bg-white/5 text-[#94a3b8] hover:text-white transition">
          <FiBell />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#22c55e]/20 flex items-center justify-center text-[#22c55e] font-semibold">
            A
          </div>
          <button
            onClick={onLogout}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22c55e] text-[#0f172a] font-semibold hover:brightness-110 transition"
          >
            <FiLogOut />
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
