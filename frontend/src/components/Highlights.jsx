import React from 'react';
import { Cpu, Coins, Briefcase, Rocket } from 'lucide-react';

export default function Highlights({ onNavigate }) {
  const events = [
    {
      title: 'Pitch Perfect',
      subtitle: 'B-Plan Championship',
      desc: 'The ultimate stage to present your business models to seasoned venture capital firms. Compete for a total cash prize pool of $50,000 and direct incubation offers.',
      icon: <Briefcase size={24} />,
      colorClass: 'hover:border-secondary/45 hover:shadow-lg hover:shadow-secondary/15',
      bgClass: 'bg-secondary/10 text-secondary border border-secondary/20',
    },
    {
      title: 'Genesis Hack',
      subtitle: '36-Hour Tech Sprint',
      desc: 'Form teams and build production-ready software solutions in AI/ML, Web3, and sustainability. Mentored by software architects from top tech firms.',
      icon: <Cpu size={24} />,
      colorClass: 'hover:border-primary/45 hover:shadow-lg hover:shadow-primary/15',
      bgClass: 'bg-primary/10 text-primary border border-primary/20',
    },
    {
      title: 'Startup Expo',
      subtitle: 'Product Demo Arena',
      desc: 'An exhibition arena where 100+ promising startups showcase their MVPs to 5000+ attendees, media partners, and angel investors to secure feedback and partnerships.',
      icon: <Rocket size={24} />,
      colorClass: 'hover:border-accent/45 hover:shadow-lg hover:shadow-accent/15',
      bgClass: 'bg-accent/10 text-accent border border-accent/20',
    },
    {
      title: 'DeFi & Tech Panel',
      subtitle: 'Thought Leadership Sessions',
      desc: 'A series of high-energy panel discussions on Artificial General Intelligence, decentralization, and the future of cross-border financial systems.',
      icon: <Coins size={24} />,
      colorClass: 'hover:border-yellow-500/45 hover:shadow-lg hover:shadow-yellow-500/15',
      bgClass: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
    },
  ];

  return (
    <section id="highlights" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-text-primary mb-3.5 tracking-tight">
            Event Highlights
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-5 rounded-full"></div>
          <p className="text-base md:text-lg text-text-secondary max-w-[650px] mx-auto leading-relaxed">
            Explore the flagship tracks designed to test your technical skills, business acumen, and creative thinking.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 text-left">
          {events.map((event, idx) => (
            <div key={idx} className={`bg-bg-card border border-border-color rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${event.colorClass}`}>
              <div>
                <div className="flex items-center gap-5 mb-5">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${event.bgClass}`}>
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-0.5">{event.title}</h3>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-muted">{event.subtitle}</span>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary mb-7">{event.desc}</p>
              </div>
              
              <div>
                <button 
                  className="bg-transparent border-none text-primary font-semibold text-sm cursor-pointer inline-flex items-center p-0 transition-all duration-300 hover:text-text-primary hover:translate-x-1"
                  onClick={() => onNavigate('register')}
                >
                  Register for Track →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
