// ✅ Forcefully apply dark mode BEFORE anything else
if (
  localStorage.getItem('theme') === 'dark' ||
  !localStorage.getItem('theme') // optional: default to dark
) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} else {
  document.documentElement.classList.remove('dark');
}

// THEN import styles and render
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // AFTER the theme class is set
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
