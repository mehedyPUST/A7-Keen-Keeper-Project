import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import TimelineContext from './context/TimelineContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>
      <RouterProvider router={router} />

      {/* Toast positioned nicely below navbar - centered */}
      <ToastContainer
        position="top-center"           // Centered horizontally
        autoClose={3000}                // Auto close after 3 seconds
        hideProgressBar={true}          // Cleaner look
        newestOnTop={false}
        closeOnClick={true}
        pauseOnHover={true}
        pauseOnFocusLoss={false}
        theme="colored"                 // Uses the toast background color
        toastStyle={{
          backgroundColor: '#10b981',   // Emerald green (matches your theme)
          color: '#ffffff',
          borderRadius: '16px',
          padding: '14px 20px',
          fontSize: '15px',
          fontWeight: '500',
          boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.3)',
          margin: '0 auto',
        }}
        style={{
          marginTop: '90px',            // Important: Pushes toast below sticky navbar
          width: 'auto',
          maxWidth: '420px',
        }}
      />
    </TimelineContext>
  </StrictMode>
);