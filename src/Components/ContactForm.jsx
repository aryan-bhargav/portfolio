import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form); // Replace with backend/email logic
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className='mt-5'>
            <h2 className="text-3xl lg:text-5xl font-bold text-black/80 dark:text-white/80 text-center mb-8">Leave a Message</h2>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6"
            >
                {['name', 'email', 'message'].map((field) => (
                    <div
                        key={field}
                        className="
            w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-4 rounded-xl shadow-sm border
            bg-white/60 border-gray-300 text-black
            dark:bg-white/10 dark:border-white/20 dark:text-white
            backdrop-blur-md hover:shadow-[0_0_15px_2px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_15px_2px_rgba(255,255,255,0.3)]
            hover:-translate-y-1 transition-transform duration-500 ease-in-out
          "
                    >
                        <label
                            htmlFor={field}
                            className="capitalize text-sm sm:text-base md:text-lg lg:text-xl min-w-[4rem]"
                        >
                            {field}
                        </label>
                        {field === 'message' ? (
                            <textarea
                                id={field}
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none resize-none text-sm sm:text-base"
                                rows="4"
                                placeholder="Your message..."
                                required
                            />
                        ) : (
                            <input
                                id={field}
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                                className="w-full bg-transparent outline-none text-sm sm:text-base"
                                placeholder={`Your ${field}`}
                                required
                            />
                        )}
                    </div>
                ))}

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 text-sm w-full sm:text-base md:text-lg bg-black text-white dark:bg-white dark:text-black rounded-xl hover:scale-102 transition-transform duration-500"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
