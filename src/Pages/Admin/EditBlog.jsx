import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../../Services/blog";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Loading...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await getBlogById(id);
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } catch (err) {
        alert("Failed to load blog");
        navigate("/admin/blogs");
      }
    };
    fetchBlog();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateBlog(id, { title, content });
      alert("Blog updated!");
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to update blog");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">✏️ Edit Blog</h2>

      <form onSubmit={handleUpdate} className="space-y-6">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full px-4 py-3 dark text-lg border border-gray-300 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div
          data-color-mode="light"
          className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
        >
          <MDEditor value={content} onChange={setContent} height={400} preview="edit" />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          💾 Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
