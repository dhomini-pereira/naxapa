import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animation library
const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return null;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AOSInit />
    <App />
  </StrictMode>
);