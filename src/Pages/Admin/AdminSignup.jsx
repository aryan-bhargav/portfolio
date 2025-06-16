import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // TODO: save to backend or localStorage
        console.log('Signup:', { email, password });
        alert('Account created (mock)');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0F0D0C] px-4">
            <form
                onSubmit={handleSignup}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg w-full max-w-md space-y-5"
            >
                <h2 className="text-2xl font-bold text-center dark:text-white">Admin Signup</h2>

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
                    className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                    Create Account
                </button>

                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    Already have an account?{' '}
                    <Link to="/admin/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default AdminSignup;
