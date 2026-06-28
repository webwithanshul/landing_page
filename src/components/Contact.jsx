import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { toast } from 'react-toastify';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Thank you for subscribing to our newsletter! Stay tuned for updates.');
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#020617] pt-20 pb-10 border-t border-border-color text-left">
      <div className="container mx-auto">
        
        {/* Upper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <a href="#hero" className="font-heading font-extrabold text-2xl text-text-primary mb-4 block">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">E</span>
              -Summit <span className="text-secondary">'26</span>
            </a>
            <p className="text-sm leading-relaxed text-text-secondary mb-6 max-w-[260px]">
              Accelerating entrepreneurship and technological innovation to construct the ecosystems of tomorrow.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-[38px] h-[38px] rounded-lg bg-white/2 border border-border-color text-text-secondary flex items-center justify-center transition-all duration-300 hover:bg-white/8 hover:text-text-primary hover:border-border-color-hover hover:-translate-y-0.5" aria-label="Github"><GithubIcon size={20} /></a>
              <a href="#" className="w-[38px] h-[38px] rounded-lg bg-white/2 border border-border-color text-text-secondary flex items-center justify-center transition-all duration-300 hover:bg-white/8 hover:text-text-primary hover:border-border-color-hover hover:-translate-y-0.5" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
              <a href="#" className="w-[38px] h-[38px] rounded-lg bg-white/2 border border-border-color text-text-secondary flex items-center justify-center transition-all duration-300 hover:bg-white/8 hover:text-text-primary hover:border-border-color-hover hover:-translate-y-0.5" aria-label="Twitter"><TwitterIcon size={20} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-5">Navigation</h4>
            <ul className="list-none flex flex-col gap-3">
              <li><a href="#hero" className="text-sm text-text-secondary transition-all duration-300 hover:text-primary hover:translate-x-0.5 inline-block">Back to Top</a></li>
              <li><a href="#about" className="text-sm text-text-secondary transition-all duration-300 hover:text-primary hover:translate-x-0.5 inline-block">About Summit</a></li>
              <li><a href="#highlights" className="text-sm text-text-secondary transition-all duration-300 hover:text-primary hover:translate-x-0.5 inline-block">Event Tracks</a></li>
              <li><a href="#speakers" className="text-sm text-text-secondary transition-all duration-300 hover:text-primary hover:translate-x-0.5 inline-block">Speakers</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-5">Contact Us</h4>
            <ul className="list-none flex flex-col gap-4">
              <li className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                <Mail size={16} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:esummit@ecell.org" className="hover:text-primary transition-colors">esummit@ecell.org</a>
              </li>
              <li className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                <Phone size={16} className="text-primary shrink-0 mt-0.5" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                <MapPin size={16} className="text-primary shrink-0 mt-0.5" />
                <span>
                  Innovation Campus, Sector-62,<br />
                  New Delhi, India
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary mb-5">Stay Updated</h4>
            <p className="text-sm leading-relaxed text-text-secondary mb-4">Subscribe to receive final agendas, schedules, and event announcements.</p>
            <form onSubmit={handleSubscribe} className="flex relative w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/2 border border-border-color rounded-lg py-3 pl-4 pr-12 text-text-primary text-sm transition-all duration-300 focus:outline-none focus:bg-white/4 focus:border-primary focus:shadow-md focus:shadow-primary/15"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-primary text-white border-none rounded-md w-8 h-8 flex items-center justify-center cursor-pointer transition-colors duration-200 hover:bg-secondary" aria-label="Subscribe">
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* Lower Divider and Copyright */}
        <div className="mt-10 border-t border-border-color pt-6">
          <div className="flex justify-between items-center flex-wrap gap-4 max-w-6xl mx-auto px-6">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} E-Cell. All rights reserved. Designed for E-Summit '26.
            </p>
            <p className="text-xs text-text-muted flex items-center gap-1.5">
              <Sparkles size={14} className="text-secondary" /> Made by Web & Technical Team
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
