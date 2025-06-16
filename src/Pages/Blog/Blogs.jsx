import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../../Services/blog'; // adjust path if needed

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await getAllBlogs();
                setBlogs(response.data); // assumes your backend returns array of blog objects
                setLoading(false);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                setError("Failed to load blogs");
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div className="text-center py-10 text-white">Loading blogs...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <br /><br /><br />
            <h1 className="text-4xl font-bold text-white mb-12 text-center">Blog Articles</h1>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map(blog => (
                    <Link
                        key={blog._id}
                        to={`/blog/${blog.slug || blog._id}`} // fallback to _id if no slug
                        className="group relative flex flex-col rounded-lg overflow-hidden shadow-xl hover:scale-[1.015] transition-transform duration-300"
                    >
                        {/* Image + Title Overlay */}
                        <div
                            className="aspect-[2/1] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${blog.image || '/default-image.jpg'})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 p-4 flex flex-col justify-end">
                                <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold">{blog.title}</h2>
                                <p className="text-sm text-white/70 mt-1">{new Date(blog.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {/* Bottom Summary Section */}
                        <div className="flex flex-col justify-between h-full bg-white text-gray-800 dark:bg-white/5 dark:text-white backdrop-blur border-t border-gray-200 dark:border-white/10 p-4">
                            <p className="text-sm sm:text-base">{blog.summary}</p>
                            <span className="mt-4 inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline">
                                Read More →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
