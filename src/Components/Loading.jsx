import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="flex flex-col items-center justify-center p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin mb-4" />

        {/* Text */}
        <p className="text-white text-lg tracking-wide animate-pulse">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
