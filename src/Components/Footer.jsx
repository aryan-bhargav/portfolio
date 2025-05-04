import React from 'react';
import ContactForm from './ContactForm';
const Footer = () => {
  return (

    <footer className="text-white mx-30 pt-6 mb-10  mt-10 ">
      <hr className="mb-6 border-t border-white/20" />

      <div className="flex items-center justify-center text-sm text-center md:text-left">
        © {new Date().getFullYear()} Aryan Dev.
      </div>
    </footer>
  );
};

export default Footer;
