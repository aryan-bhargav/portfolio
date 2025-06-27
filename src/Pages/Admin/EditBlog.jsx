import  { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../../Services/blog";
import AlertPopup from "../../Components/AlertPopup";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("## Loading...");
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await getBlogById(id);
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } catch (err) {
        setAlert({ type: "error", message: "Failed to load blog" });
        setTimeout(() => navigate("/admin/blogs"), 1500);
      }
    };
    fetchBlog();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateBlog(id, { title, content });
      setAlert({ type: "success", message: "Blog updated!" });
      setTimeout(() => navigate("/admin/blogs"), 1500);
    } catch (err) {
      console.error(err);
      setAlert({ type: "error", message: "Failed to update blog" });
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="relative">
      {alert && (
        <div className="fixed top-0 left-0 w-full z-50">
          <AlertPopup type={alert.type} message={alert.message} />
        </div>
      )}

      <div className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg">
        <h2 className=" mt-20 text-2xl font-bold mb-6 text-gray-800 dark:text-white">✏️ Edit Blog</h2>
        <form onSubmit={handleUpdate} className="space-y-6">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            className="w-full px-4 py-3 text-lg border border-gray-300 text-gray-800 dark:text-white dark:bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
    </div>
  );
};

export default EditBlog;
