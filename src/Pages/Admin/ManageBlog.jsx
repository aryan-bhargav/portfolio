import React, { useEffect, useState } from "react";
import { getAllBlogs, deleteBlog } from "../../Services/blog";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Loading from "../../Components/Loading";

const ITEMS_PER_PAGE = 5;

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs();
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to load blogs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const result = blogs.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredBlogs(result);
    setCurrentPage(1);
  }, [search, blogs]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      await deleteBlog(id);
      setBlogs((prev) => prev.filter((b) => b._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
      alert("Could not delete blog.");
    }
  };

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

  if (loading) return <Loading />;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-white mb-6 mt-24">📝 Manage Blogs</h2>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search blogs..."
        className="w-full mb-6 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {paginatedBlogs.length === 0 ? (
        <p className="text-white/50 text-center mt-10">No blogs found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-white/10 backdrop-blur shadow-lg">
          <table className="w-full table-auto text-left text-white">
            <thead className="bg-white/10">
              <tr>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white/5">
              {paginatedBlogs.map((blog) => (
                <tr key={blog._id} className="border-t border-white/10 hover:bg-white/10">
                  <td className="px-4 py-3">{blog.title}</td>
                  <td className="px-4 py-3">{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3 flex gap-4 items-center">
                    <button
                      onClick={() => navigate(`/admin/blogs/edit/${blog._id}`)}
                      className="text-white hover:text-blue-400 transition"
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(blog._id)}
                      className="text-white hover:text-red-400 transition"
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex justify-center mt-6 mb-2 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-4 py-2 rounded-lg backdrop-blur border border-white/10 text-white/80 hover:bg-white/10 transition
                  ${currentPage === num ? "bg-white/10 text-white font-semibold" : ""}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageBlog;
