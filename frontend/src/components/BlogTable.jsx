import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function BlogTable({ blogs, onDelete }) {
  return (
    <div className="rounded-2xl bg-[#1e293b] border border-white/5 shadow-lg overflow-hidden">
      <div className="p-5 border-b border-white/5">
        <h3 className="text-lg font-semibold text-white">Blog Posts</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-[#94a3b8]">
            <tr>
              <th className="text-left px-4 py-3">Image</th>
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, idx) => (
              <tr
                key={blog._id}
                className={`border-b border-white/5 ${idx % 2 === 0 ? "bg-white/0" : "bg-white/5"} hover:bg-white/10 transition`}
              >
                <td className="px-4 py-3">
                  <img src={blog.image} alt={blog.title} className="h-10 w-14 object-cover rounded-lg" />
                </td>
                <td className="px-4 py-3 text-white">{blog.title}</td>
                <td className="px-4 py-3 text-[#94a3b8]">
                  {blog.createdAt ? new Date(blog.createdAt).toLocaleDateString() : "-"}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-2 rounded-lg bg-white/5 text-[#94a3b8] hover:text-white">
                      <FiEdit2 />
                    </button>
                    <button
                      onClick={() => onDelete(blog._id)}
                      className="px-3 py-2 rounded-lg bg-white/5 text-[#f87171] hover:text-white"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
