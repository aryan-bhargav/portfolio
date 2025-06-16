import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import login from "../../Services/auth"
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {

        e.preventDefault();
        //login logic start
        try {
            const response = await login(email, password);
            localStorage.setItem("token", response.data.token)
            if(response){
                navigate("/admin")
            }
            alert( 'Login successfull');

        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0F0D0C] px-4">
            <form
                onSubmit={handleLogin}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
            >
                <h2 className="text-2xl font-bold text-center dark:text-white">Admin Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111] text-black dark:text-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#111] text-black dark:text-white"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Login
                </button>

                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Don’t have an account?{' '}
                    <Link to="/admin/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default AdminLogin;
