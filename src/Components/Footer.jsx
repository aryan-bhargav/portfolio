

const Footer = () => {
  return (
    <footer className="text-black/80 dark:text-white px-4 pt-6 pb-6 mt-10">
      <hr className="mb-6 border-t border-white/20" />
      <div className="text-sm text-center">
        © {new Date().getFullYear()} Aryan Dev.
      </div>
    </footer>
  );
};

export default Footer;
