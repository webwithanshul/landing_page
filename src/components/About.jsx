import React from 'react';
import { Target, Lightbulb, Users2, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '5,000+', label: 'Attendees', icon: <Users2 size={24} /> },
    { number: '50+', label: 'Speakers', icon: <Lightbulb size={24} /> },
    { number: '$100K+', label: 'Funding Pool', icon: <Award size={24} /> },
    { number: '15+', label: 'Tracks & Hacks', icon: <Target size={24} /> },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-bg-card/20 border-y border-border-color relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-text-primary mb-3.5 tracking-tight">
            About E-Summit '26
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-5 rounded-full"></div>
          <p className="text-base md:text-lg text-text-secondary max-w-[650px] mx-auto leading-relaxed">
            Unleashing entrepreneurial grit and tech innovation to spark the next wave of unicorn startups.
          </p>
        </div>

        {/* About Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 mb-16">
          <div className="flex flex-col justify-center text-left">
            <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-text-primary mb-5 tracking-tight">
              Empowering the Founders of Tomorrow
            </h3>
            <p className="text-base leading-relaxed mb-5 text-text-secondary">
              Organized by the E-Cell, E-Summit is our flagship annual entrepreneurship festival. It serves as a hotbed for brilliant minds to showcase disruptive ideas, network with venture capitalists, and learn directly from industry titans.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              Whether you are an aspiring student founder looking to validate your first MVP, an engineer searching for co-founders, or an investor scouting high-potential early-stage companies, E-Summit '26 provides the perfect ecosystem.
            </p>
          </div>
          
          <div className="flex flex-col gap-5 justify-center text-left">
            <div className="flex gap-5 p-6 bg-bg-card border border-border-color rounded-xl transition-all duration-300 hover:border-border-color-hover hover:translate-x-1 group">
              <div className="w-11 h-11 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-secondary/15">
                <Target size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-text-primary mb-1.5">Our Mission</h4>
                <p className="text-sm leading-relaxed text-text-secondary">To nurture entrepreneurship at the grassroots, bridging the gap between innovative ideas and market viability.</p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 bg-bg-card border border-border-color rounded-xl transition-all duration-300 hover:border-border-color-hover hover:translate-x-1 group">
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/15">
                <Lightbulb size={20} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-text-primary mb-1.5">Our Vision</h4>
                <p className="text-sm leading-relaxed text-text-secondary">To create a self-sustaining startup ecosystem that leads national and global technological evolution.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative bg-bg-card border border-border-color rounded-2xl p-8 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/20 group">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(6,182,212,0.04)_0%,transparent_60%)] pointer-events-none z-0"></div>
              
              <div className="w-14 h-14 rounded-full bg-primary/8 border border-primary/15 text-primary flex items-center justify-center mx-auto mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <h3 className="font-heading font-extrabold text-4xl mb-2 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent relative z-10">
                {stat.number}
              </h3>
              <p className="text-[12px] font-bold text-text-secondary uppercase tracking-widest relative z-10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
