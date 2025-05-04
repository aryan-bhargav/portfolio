import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here (API call or integration with EmailJS, Formspree, etc.)
        console.log(form);
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="bg-white/10 scale-75 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-md space-y-4">
                <div className='flex flex-row gap-4'>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none"
                    />
                </div>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="3"
                    className="w-full p-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white focus:outline-none"
                />
                <button
                    type="submit"
                    className="w-full border hover:scale-98 duration-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
