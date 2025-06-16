import API from "../api";

export const getAllBlogs = () => API.get("/api/admin/blogs");

export const getBlogById = (id) => API.get(`/api/admin/blogs/${id}`);

export const addBlog = (blogData) => API.post("/api/admin/blogs", blogData);

export const updateBlog = (id, blogData) => API.put(`/api/admin/blogs/${id}`, blogData);

export const deleteBlog = (id) => API.delete(`/api/admin/blogs/${id}`);

export const likeBlog = (id) => API.post(`/api/blogs/${id}/like`);

export const addCommentToBlog = (id, commentData) => API.post(`/api/blogs/${id}/comments`, commentData);