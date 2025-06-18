
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from "./Pages/Projects";
import Blogs from "./Pages/Blog/Blogs"
import BlogPost from "./Pages/Blog/BlogPost"
import AdminLogin from "./Pages/Admin/AdminLogin"
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AddBlog from './Pages/Admin/AddBlog';
import ManageBlog from './Pages/Admin/ManageBlog';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import 'highlight.js/styles/github-dark.css'; 
import EditBlog from './Pages/Admin/EditBlog';
import PageNotFound from "./Pages/PageNotFound"
function App() {

  return (

    <div className='min-h-screen bg-white text-black dark:bg-[#0F0D0C] dark:text-white' >
      <div className="  lg:px-50 md:px-20 sm:px-10 bg-[#F1F2F4] text-black/80 dark:bg-[#0F0D0C] dark:text-white  transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path='*' element={<PageNotFound/>} />
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/blogs" element={
            <ProtectedRoutes>
              <ManageBlog />
            </ProtectedRoutes>
          } />
          <Route path="/admin/blogs/add" element={
            <ProtectedRoutes>
              <AddBlog />
            </ProtectedRoutes>
          } />
          <Route path="/admin/blogs/edit/:id" element={
            <ProtectedRoutes>
              <EditBlog />
            </ProtectedRoutes>
          } />
          
          <Route path="/admin" element={
            <ProtectedRoutes>
              <AdminDashboard />
            </ProtectedRoutes>
          } />

          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        <Footer />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
