import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../../Services/blog";

const AddBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Write your blog here...");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect if body has dark class (Tailwind dark mode)
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDark(darkModeEnabled);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return alert("All fields are required");

    try {
      await addBlog({ title, content });
      alert("Blog posted!");
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      alert("Failed to post blog");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg">
      <h2 className="mt-24 text-2xl font-bold mb-6 text-gray-800 dark:text-white">📝 Add Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Enter Blog Title"
          className="w-full px-4 py-3 text-lg border border-gray-300 dark:border-gray-600 rounded-lg 
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                    focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div
          data-color-mode={isDark ? "dark" : "light"}
          className="rounded-lg overflow-hidden shadow-md border border-gray-300 dark:border-gray-600"
        >
          <MDEditor
            value={content}
            onChange={setContent}
            height={400}
            preview="live"
            className="text-base bg-white dark:bg-gray-900 text-gray-800 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
