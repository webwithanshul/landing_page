import React, { useState } from 'react';
import { ArrowLeft, User, Mail, School, Phone, CheckSquare, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Register({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    contact: '',
    event: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'College name is required';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.event) {
      newErrors.event = 'Please select an event track';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success(`Success! Registered for ${formData.event}. Confirmation sent to ${formData.email}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setFormData({
        name: '',
        email: '',
        college: '',
        contact: '',
        event: ''
      });
      setTimeout(() => {
        onNavigate('home');
      }, 3000);
    } else {
      toast.error('Validation failed. Please check the fields below.');
    }
  };

  return (
    <section className="pt-36 pb-20 min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[60%] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_70%)] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-xl relative z-10 text-left">
        <button 
          className="bg-transparent border-none text-text-secondary font-semibold text-sm flex items-center gap-2 cursor-pointer mb-6 transition-colors duration-200 hover:text-primary"
          onClick={() => onNavigate('home')}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="bg-bg-card border border-border-color rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/45 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 bg-secondary/8 border border-secondary/20 text-secondary px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-4">
              <Sparkles size={14} className="animate-pulse-sparkle text-secondary" />
              <span>E-Summit '26 Registration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-text-primary mb-2 tracking-tight">Secure Your Slot</h2>
            <p className="text-sm text-text-secondary">Join India's most energetic startup ecosystem. Form validations apply.</p>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-text-primary">Full Name</label>
              <div className="relative flex items-center">
                <User size={18} className="absolute left-3.5 text-text-muted pointer-events-none" />
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full bg-white/2 border rounded-lg py-3 pl-11 pr-4 text-text-primary text-sm transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/4 focus:shadow-md focus:shadow-primary/15 ${
                    errors.name ? 'border-accent/50 shadow-md shadow-accent/10' : 'border-border-color'
                  }`}
                />
              </div>
              {errors.name && <span className="text-xs text-accent font-medium mt-1">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-text-primary">Email Address</label>
              <div className="relative flex items-center">
                <Mail size={18} className="absolute left-3.5 text-text-muted pointer-events-none" />
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full bg-white/2 border rounded-lg py-3 pl-11 pr-4 text-text-primary text-sm transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/4 focus:shadow-md focus:shadow-primary/15 ${
                    errors.email ? 'border-accent/50 shadow-md shadow-accent/10' : 'border-border-color'
                  }`}
                />
              </div>
              {errors.email && <span className="text-xs text-accent font-medium mt-1">{errors.email}</span>}
            </div>

            {/* College Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="college" className="text-sm font-semibold text-text-primary">College / University Name</label>
              <div className="relative flex items-center">
                <School size={18} className="absolute left-3.5 text-text-muted pointer-events-none" />
                <input 
                  type="text" 
                  id="college"
                  name="college"
                  placeholder="IIT BHU / BITS Pilani" 
                  value={formData.college}
                  onChange={handleInputChange}
                  className={`w-full bg-white/2 border rounded-lg py-3 pl-11 pr-4 text-text-primary text-sm transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/4 focus:shadow-md focus:shadow-primary/15 ${
                    errors.college ? 'border-accent/50 shadow-md shadow-accent/10' : 'border-border-color'
                  }`}
                />
              </div>
              {errors.college && <span className="text-xs text-accent font-medium mt-1">{errors.college}</span>}
            </div>

            {/* Contact Number Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className="text-sm font-semibold text-text-primary">Contact Number (10-Digit Mobile)</label>
              <div className="relative flex items-center">
                <Phone size={18} className="absolute left-3.5 text-text-muted pointer-events-none" />
                <input 
                  type="tel" 
                  id="contact"
                  name="contact"
                  placeholder="9876543210" 
                  value={formData.contact}
                  onChange={handleInputChange}
                  className={`w-full bg-white/2 border rounded-lg py-3 pl-11 pr-4 text-text-primary text-sm transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/4 focus:shadow-md focus:shadow-primary/15 ${
                    errors.contact ? 'border-accent/50 shadow-md shadow-accent/10' : 'border-border-color'
                  }`}
                />
              </div>
              {errors.contact && <span className="text-xs text-accent font-medium mt-1">{errors.contact}</span>}
            </div>

            {/* Event Selection */}
            <div className="flex flex-col gap-2">
              <label htmlFor="event" className="text-sm font-semibold text-text-primary">Select Event Track</label>
              <div className="relative flex items-center after:content-[''] after:absolute after:right-4 after:top-1/2 after:-translate-y-1/2 after:border-5 after:border-transparent after:border-t-text-muted after:pointer-events-none">
                <CheckSquare size={18} className="absolute left-3.5 text-text-muted pointer-events-none" />
                <select 
                  id="event"
                  name="event"
                  value={formData.event}
                  onChange={handleInputChange}
                  className={`w-full bg-white/2 border rounded-lg py-3 pl-11 pr-10 text-text-primary text-sm appearance-none cursor-pointer transition-all duration-300 focus:outline-none focus:border-primary focus:bg-white/4 focus:shadow-md focus:shadow-primary/15 ${
                    errors.event ? 'border-accent/50 shadow-md shadow-accent/10' : 'border-border-color'
                  }`}
                >
                  <option value="">Choose a Track...</option>
                  <option value="Pitch Perfect (B-Plan Championship)">Pitch Perfect (B-Plan Championship)</option>
                  <option value="Genesis Hack (36-Hour Hackathon)">Genesis Hack (36-Hour Hackathon)</option>
                  <option value="Startup Expo (Product Demo)">Startup Expo (Product Demo Arena)</option>
                  <option value="DeFi & Tech Panel Sessions">DeFi & Tech Panel Sessions</option>
                </select>
              </div>
              {errors.event && <span className="text-xs text-accent font-medium mt-1">{errors.event}</span>}
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white font-semibold text-base py-3.5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer mt-3">
              Complete Registration
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
