import { FiTrash2 } from "react-icons/fi";

export default function MessageTable({ messages, onDelete }) {
  return (
    <div className="rounded-2xl bg-[#1e293b] border border-white/5 shadow-lg overflow-hidden">
      <div className="p-5 border-b border-white/5">
        <h3 className="text-lg font-semibold text-white">Messages</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-[#94a3b8]">
            <tr>
              <th className="text-left px-4 py-3">Name</th>
              <th className="text-left px-4 py-3">Email</th>
              <th className="text-left px-4 py-3">Message</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg, idx) => (
              <tr
                key={msg._id}
                className={`border-b border-white/5 ${idx % 2 === 0 ? "bg-white/0" : "bg-white/5"} hover:bg-white/10 transition`}
              >
                <td className="px-4 py-3 text-white">{msg.name}</td>
                <td className="px-4 py-3 text-[#94a3b8]">{msg.email}</td>
                <td className="px-4 py-3 text-[#94a3b8] max-w-xs truncate">{msg.message}</td>
                <td className="px-4 py-3 text-[#94a3b8]">
                  {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "-"}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => onDelete(msg._id)}
                    className="px-3 py-2 rounded-lg bg-white/5 text-[#f87171] hover:text-white"
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
