import React, { useState } from 'react';
import { sendMessage } from '../Services/contactMe';
import AlertPopup from '../components/AlertPopup';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [alert, setAlert] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(form);
      setAlert({ type: 'success', message: 'Message sent successfully!' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setAlert({ type: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className='mt-10 px-4 sm:px-6 md:px-8'>
      <h2 className="text-3xl lg:text-5xl font-bold text-black/80 dark:text-white/80 text-center mb-8">
        Leave a Message
      </h2>

      {alert && <AlertPopup type={alert.type} message={alert.message} />}

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl mx-auto space-y-6"
      >
        {['name', 'email', 'message'].map((field) => (
          <div key={field}>
            <label htmlFor={field} className="block mb-2 text-base font-medium capitalize text-gray-700 dark:text-white">
              {field}
            </label>
            {field === 'message' ? (
              <textarea
                id={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                className="w-full p-3 rounded-md border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                className="w-full p-3 rounded-md border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/10 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder={`Your ${field}`}
                required
              />
            )}
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 w-full sm:w-auto text-sm sm:text-base md:text-lg font-semibold bg-black text-white dark:bg-white dark:text-black rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
