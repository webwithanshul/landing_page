import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import Speakers from './components/Speakers';
import Contact from './components/Contact';
import Register from './components/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigate = (view) => {
    setCurrentView(view);
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      {currentView === 'home' ? (
        <main>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Highlights onNavigate={handleNavigate} />
          <Speakers />
          <Contact />
        </main>
      ) : (
        <main>
          <Register onNavigate={handleNavigate} />
        </main>
      )}

      {/* Styled React Toast Container for Startup Neon aesthetic */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: '#0b1120',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '12px',
          color: '#f8fafc',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
        }}
      />
    </>
  );
}

export default App;
