import { LinkedinIcon, TwitterIcon } from './SocialIcons';

export default function Speakers() {
  const speakers = [
    {
      name: 'Kunjan Shah',
      role: 'Founder & CEO, NeoPay',
      bio: 'Ex-VP of Product at Stripe. Reimagining financial infrastructure for digital-first economies.',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
      initials: 'KS',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Dr. Ananya Nair',
      role: 'Head of AI Research, NeuralGrid',
      bio: 'Pioneering next-gen agents and swarm robotics. Stanford PhD & former OpenAI researcher.',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      initials: 'AN',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Vikram Malhotra',
      role: 'Managing Partner, Apex Ventures',
      bio: 'VC who backed 12 unicorns in early stages. Champion of tech infrastructure and SaaS.',
      gradient: 'linear-gradient(135deg, #f97316 0%, #e11d48 100%)',
      initials: 'VM',
      socials: { twitter: '#', linkedin: '#' }
    },
    {
      name: 'Elena Rostova',
      role: 'CTO & Co-Founder, EtherFlow',
      bio: 'Web3 protocol engineer, zero-knowledge proofs expert. Technical architect of EtherFlow protocol.',
      gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      initials: 'ER',
      socials: { twitter: '#', linkedin: '#' }
    }
  ];

  return (
    <section id="speakers" className="py-20 md:py-28 bg-bg-card/20 border-y border-border-color relative scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-text-primary mb-3.5 tracking-tight">
            Speaker Lineup
          </h2>
          <div className="w-14 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-5 rounded-full"></div>
          <p className="text-base md:text-lg text-text-secondary max-w-[650px] mx-auto leading-relaxed">
            Learn from industry visionaries, technical experts, and successful venture capitalists who have built global products.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="bg-bg-card border border-border-color rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/35 hover:shadow-lg hover:shadow-secondary/15 flex flex-col group">
              <div className="relative aspect-square m-5 rounded-xl overflow-hidden">
                <div 
                  className="w-full h-full flex items-center justify-center relative z-10" 
                  style={{ background: speaker.gradient }}
                >
                  <span className="font-heading text-5xl font-black text-white tracking-tighter drop-shadow-md">{speaker.initials}</span>
                </div>
                
                {/* Hover overlay socials */}
                <div className="absolute bottom-3 right-3 flex gap-2 z-20 translate-y-[10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <a href={speaker.socials.linkedin} className="w-8.5 h-8.5 rounded-lg bg-bg-dark/75 backdrop-blur-sm border border-white/10 text-text-primary flex items-center justify-center transition-colors duration-200 hover:bg-primary hover:text-white hover:border-primary" aria-label="LinkedIn Profile">
                    <LinkedinIcon size={18} />
                  </a>
                  <a href={speaker.socials.twitter} className="w-8.5 h-8.5 rounded-lg bg-bg-dark/75 backdrop-blur-sm border border-white/10 text-text-primary flex items-center justify-center transition-colors duration-200 hover:bg-primary hover:text-white hover:border-primary" aria-label="Twitter Profile">
                    <TwitterIcon size={18} />
                  </a>
                </div>
              </div>

              <div className="px-6 pb-6 flex flex-col grow text-left">
                <h3 className="text-xl font-bold text-text-primary mb-1">{speaker.name}</h3>
                <span className="text-[13px] font-semibold text-primary mb-3">{speaker.role}</span>
                <p className="text-sm leading-relaxed text-text-secondary">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
