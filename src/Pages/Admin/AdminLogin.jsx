import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../../Services/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AlertPopup from '../../Components/AlertPopup';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState(null); // <-- add alert state

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.data.token);
      
      setAlert({ type: 'success', message: 'Login successful!' });

      // Optional: Navigate after a brief delay
      setTimeout(() => {
        navigate('/admin');
      }, 1500);
    } catch (error) {
      setAlert({
        type: 'error',
        message: error.response?.data?.message || 'Login failed',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0F0D0C] px-4 relative">
      {/* Render AlertPopup */}
      {alert && (
        <div className="absolute top-5">
          <AlertPopup type={alert.type} message={alert.message} />
        </div>
      )}

      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center dark:text-white">Admin Login</h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="admin@example.com"
            className="w-full p-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111] text-black dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="••••••••"
            className="w-full p-3 pr-10 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111] text-black dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute top-[38px] right-3 text-gray-600 dark:text-gray-300"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
