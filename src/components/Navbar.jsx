import { useState, useEffect } from 'react';
import ecellLogoOnly from '../assets/jnct-ecell-logo-only.png';

export default function Navbar({ currentView, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (currentView !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-glass-bg/85 backdrop-blur-md border-glass-border py-3 shadow-lg shadow-black/35' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        <a 
          href="#hero" 
          className="flex items-center gap-3 font-heading font-extrabold text-2xl text-text-primary tracking-tight"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <img src={ecellLogoOnly} alt="JNCT E-Cell Logo" className="h-9 w-auto object-contain" />
          <span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">E</span>
            -Summit <span className="text-secondary">'26</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'highlights', 'speakers', 'contact'].map((section) => (
            <a 
              key={section}
              href={`#${section}`} 
              onClick={(e) => handleLinkClick(e, section)}
              className="text-[15px] font-medium text-text-secondary hover:text-text-primary relative py-1 transition-colors duration-300 group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            className="ml-3 bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-semibold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate(currentView === 'home' ? 'register' : 'home')}
          >
            {currentView === 'home' ? 'Register Now' : 'Back to Home'}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col justify-between w-6 h-[18px] bg-transparent border-none cursor-pointer z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-[2px] bg-text-primary rounded-sm transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-y-[2px] translate-x-[2px]' : ''}`}></span>
          <span className={`w-full h-[2px] bg-text-primary rounded-sm transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-[2px] bg-text-primary rounded-sm transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 -translate-y-[2px] translate-x-[2px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-bg-dark/98 flex flex-col items-center justify-center gap-8 z-40 transition-transform duration-500 px-10 ${
        isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        {['about', 'highlights', 'speakers', 'contact'].map((section) => (
          <a 
            key={section}
            href={`#${section}`} 
            onClick={(e) => handleLinkClick(e, section)}
            className="font-heading text-2xl font-semibold text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <button 
          className="mt-4 w-full max-w-[280px] bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-semibold text-base py-3 rounded-lg shadow-md shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          onClick={() => {
            setIsMobileMenuOpen(false);
            onNavigate(currentView === 'home' ? 'register' : 'home');
          }}
        >
          {currentView === 'home' ? 'Register Now' : 'Back to Home'}
        </button>
      </div>
    </nav>
  );
}
