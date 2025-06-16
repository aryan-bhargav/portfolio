import React, { useEffect, useState } from "react";

const typeStyles = {
  info: {
    bg: "bg-blue-50 text-blue-800 dark:bg-gray-800 dark:text-blue-400",
    iconColor: "text-blue-800",
    title: "Info alert!",
  },
  danger: {
    bg: "bg-red-50 text-red-800 dark:bg-gray-800 dark:text-red-400",
    iconColor: "text-red-800",
    title: "Danger alert!",
  },
  success: {
    bg: "bg-green-50 text-green-800 dark:bg-gray-800 dark:text-green-400",
    iconColor: "text-green-800",
    title: "Success alert!",
  },
  warning: {
    bg: "bg-yellow-50 text-yellow-800 dark:bg-gray-800 dark:text-yellow-300",
    iconColor: "text-yellow-800",
    title: "Warning alert!",
  },
  dark: {
    bg: "bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
    iconColor: "text-gray-800",
    title: "Dark alert!",
  },
};

const AlertPopup = ({ type = "info", message = "Something happened!" }) => {
  const [show, setShow] = useState(true);
  const style = typeStyles[type] || typeStyles.info;

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-[50px] left-0 w-full flex justify-center z-50 pointer-events-none">
      <div
        className={` pointer-events-auto flex items-center p-4 text-sm rounded-lg shadow-lg animate-fadeInUp transition-all duration-300 ${style.bg}`}
        role="alert"
        style={{ animation: "fadeInUp 0.4s ease-out" }}
      >
        <svg
          className={`shrink-0 inline w-4 h-4 mr-3 ${style.iconColor}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Alert</span>
        <div>
          <span className="font-medium">{style.title} </span>
          {message}
        </div>

        {/* Inline animation */}
        <style jsx="true">{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AlertPopup;