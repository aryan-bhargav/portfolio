
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4 text-white">
      <div className="mt-4 max-w-md w-full p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl text-center">
        <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-gray-200 via-gray-50 to-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-white/70 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-400 text-blue-300 hover:bg-blue-500/20 transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
