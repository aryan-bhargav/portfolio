import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById, likeBlog, addCommentToBlog } from '../../Services/blog';
import MDEditor from '@uiw/react-md-editor';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

import Loading from '../../Components/Loading';

// 🔹 Shared Styles
const containerStyle = 'max-w-4xl mx-auto px-4 py-10';
const cardStyle = 'bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 rounded-xl p-4 shadow';
const textInputStyle = 'w-full mb-2 p-2 rounded bg-white dark:bg-black/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/60';
const buttonBase = 'px-4 py-2 rounded text-white font-medium';
const commentTextStyle = 'text-sm text-gray-700 dark:text-white/80';
const smallText = 'text-xs text-gray-500 dark:text-white/50 mt-1';

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [likeLoading, setLikeLoading] = useState(false);
  const [error, setError] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [commentName, setCommentName] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await getBlogById(slug);
        setBlog(response.data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Blog not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleLike = async () => {
    const likeKey = `liked-${blog._id}`;
    const alreadyLiked = localStorage.getItem(likeKey);

    try {
      setLikeLoading(true);

      // Toggle like state
      const res = await likeBlog(blog._id); // assume this toggles like/unlike
      setBlog(res.data);

      if (alreadyLiked) {
        localStorage.removeItem(likeKey);
      } else {
        localStorage.setItem(likeKey, 'true');
      }
    } catch (err) {
      console.error('Error toggling like:', err);
    } finally {
      setLikeLoading(false);
    }
  };


  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || !commentName.trim()) return;

    try {
      await addCommentToBlog(blog._id, {
        name: commentName,
        text: commentText,
      });

      const updated = await getBlogById(blog._id);
      setBlog(updated.data);
      setCommentText('');
      setCommentName('');
    } catch (err) {
      console.error('Error adding comment:', err);
    }
  };

  if (loading) return <Loading />;
  if (error || !blog) {
    return (
      <div className="text-center py-20 text-gray-800 dark:text-white text-xl">
        Blog not found 🫤
      </div>
    );
  }

  const isAlreadyLiked = !!localStorage.getItem(`liked-${blog?._id}`);


  return (
    <div className={containerStyle}>
      {/* Header Image */}
      <div
        className="w-full aspect-[2/1] bg-cover bg-center rounded-xl shadow-xl mb-8 relative"
        style={{ backgroundImage: `url(${blog.image || '/default-image.jpg'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl p-6 flex flex-col justify-end">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{blog.title}</h1>
          <p className="text-sm text-white/70 mt-1">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Markdown Content */}
      <div className={`${cardStyle} prose dark:prose-invert max-w-none text-gray-900 dark:text-white mb-6`}>
        <MDEditor.Markdown
          source={blog.content}
          style={{ backgroundColor: 'transparent' }}
        />
      </div>

      {/* Like Button */}
      <button
        onClick={handleLike}
        disabled={likeLoading || isAlreadyLiked}
        className={`${buttonBase} ${isAlreadyLiked
          ? 'bg-gray-600 cursor-not-allowed'
          : 'bg-pink-600 hover:bg-pink-700'
          }`}
      >
        ❤️ {isAlreadyLiked ? `Liked (${blog.likes})` : likeLoading ? 'Liking...' : `Like (${blog.likes})`}
      </button>

      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Comments</h2>

        {blog.comments?.length > 0 ? (
          blog.comments.map((comment, index) => (
            <div key={index} className={`${cardStyle} mb-3 text-gray-900 dark:text-white`}>
              <p className="font-bold">{comment.name}</p>
              <p className={commentTextStyle}>{comment.text}</p>
              <p className={smallText}>
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-white/60">No comments yet.</p>
        )}

        {/* Comment Form */}
        <form onSubmit={handleCommentSubmit} className={`${cardStyle} mt-6`}>
          <input
            type="text"
            placeholder="Your name"
            value={commentName}
            onChange={(e) => setCommentName(e.target.value)}
            required
            className={textInputStyle}
          />
          <textarea
            placeholder="Write a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
            rows={3}
            className={textInputStyle}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-medium"
          >
            Post Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
