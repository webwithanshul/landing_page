import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import heroBanner from '../assets/hero-banner.jpg';
import ecellLogoOnly from '../assets/jnct-ecell-logo-only.png';

export default function Hero({ onNavigate }) {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="hero" className="relative pt-40 pb-20 md:pt-48 md:pb-28 flex items-center justify-center overflow-hidden">
      {/* Dynamic Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 relative z-10">
        <div className="flex flex-col items-start text-left">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/8 border border-primary/20 text-primary px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wide">
              <Sparkles className="animate-pulse-sparkle text-primary" size={14} />
              <span>India's Premier Entrepreneurship Summit</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/4 border border-white/10 px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-text-primary">
              <img src={ecellLogoOnly} alt="JNCT E-Cell" className="h-4.5 w-auto object-contain" />
              <span>JNCT E-Cell</span>
            </div>
          </div>
          
          <h1 className="font-heading font-extrabold text-5xl md:text-7xl leading-tight tracking-tight text-text-primary mb-3">
            E-Summit <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-black">'26</span>
          </h1>
          <p className="text-2xl md:text-3xl font-heading font-medium mb-6 bg-gradient-to-r from-white to-text-secondary bg-clip-text text-transparent">
            Genesis of Innovation
          </p>
          
          <p className="text-[16px] md:text-[17px] leading-relaxed text-text-secondary mb-8 max-w-[540px]">
            The ultimate convergence of tech pioneers, visionary entrepreneurs, venture capitalists, and innovative minds. Over 3 days, unlock hackathons, keynotes, and a funding pool designed to scale your vision.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <Calendar className="text-primary" size={18} />
              <span>June 27-29, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-text-primary">
              <MapPin className="text-primary" size={18} />
              <span>JNCT Campus, Bhopal & Virtual</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-semibold text-[15px] px-7 py-3.5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              onClick={() => onNavigate('register')}
            >
              Register Now <ArrowRight size={18} />
            </button>
            <a 
              href="#about" 
              className="w-full sm:w-auto bg-white/4 border border-border-color hover:bg-white/8 hover:border-border-color-hover hover:-translate-y-0.5 active:translate-y-0 text-text-primary font-semibold text-[15px] px-7 py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              onClick={scrollToAbout}
            >
              Explore Events
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] bg-[radial-gradient(circle,rgba(6,182,212,0.2)_0%,transparent_65%)] pointer-events-none filter blur-[20px]"></div>
          <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-border-color shadow-2xl shadow-black/45">
            {heroBanner ? (
              <img 
                src={heroBanner} 
                alt="E-Summit '26 Genesis" 
                className="w-full h-auto transition-transform duration-500 hover:scale-[1.02] object-cover aspect-[16/10]"
              />
            ) : (
              <div className="w-full aspect-[16/10] bg-gradient-to-br from-bg-card to-indigo-950/40 flex items-center justify-center">
                <div className="grid grid-cols-6 grid-rows-6 w-full h-full opacity-10"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
