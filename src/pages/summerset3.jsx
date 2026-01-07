import React, { useState } from 'react';
import { Sun, MapPin, Layout, BookOpen, ExternalLink, ShieldCheck, Sparkles, Trophy, Navigation } from 'lucide-react';

const Summerset3 = () => {
  const [activeTab, setActiveTab] = useState('palette');

  const branding = {
    colors: [
      { name: 'Ember Silk', hex: '#8E4A3E', description: 'A deeper, more sophisticated terracotta for prestige accents.', text: 'white' },
      { name: 'Obsidian Night', hex: '#1A1C1E', description: 'Near-black charcoal for ultimate grounding and luxury.', text: 'white' },
      { name: 'Brushed Champagne', hex: '#D4AF37', description: 'A refined metallic gold for high-end foil and hardware details.', text: 'black' },
      { name: 'Alabaster Stone', hex: '#F9F7F2', description: 'A cool, mineral-based neutral for expansive whitespace.', text: 'black' },
    ],
    fonts: [
      {
        name: 'The Editorial Serif',
        family: 'serif',
        font: 'Playfair Display, serif',
        usage: 'Logos & Hero Statements',
        description: 'High-contrast, elegant, and evocative of heritage brands.'
      },
      {
        name: 'The Quiet Luxury Sans',
        family: 'sans',
        font: 'Tenor Sans, sans-serif',
        usage: 'Sub-headlines & Navigation',
        description: 'A humanist sans with wide tracking for a "boutique" feel.'
      },
      {
        name: 'The Technical Sans',
        family: 'sans',
        font: 'Inter, sans-serif',
        usage: 'Fine Print & Specifications',
        description: 'Clean, geometric, and precise.'
      }
    ]
  };

  const LogoConcept = ({ type }) => {
    switch (type) {
      case 'horizon':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex flex-col items-center justify-center relative mb-6">
              <span className="text-3xl font-serif text-[#1A1C1E] tracking-[0.4em] relative">
                SUMMERSET
                <div className="absolute -bottom-4 left-1/4 w-1/2 h-[1px] bg-[#D4AF37]" />
              </span>
              <span className="text-[8px] tracking-[0.6em] text-slate-400 mt-6 uppercase">The Douglas Estates</span>
            </div>
            <p className="text-[10px] font-bold text-[#1A1C1E] uppercase tracking-widest">Concept 1: The Linear Estate</p>
          </div>
        );
      case 'arch':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex flex-col items-center justify-center mb-6">
               <svg viewBox="0 0 100 60" className="w-12 h-12 mb-4">
                  <circle cx="50" cy="30" r="28" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
                  <path d="M30 40 L50 20 L70 40" fill="none" stroke="#1A1C1E" strokeWidth="1" />
               </svg>
               <span className="text-xl font-serif text-[#1A1C1E] tracking-[0.3em]">SUMMERSET</span>
            </div>
            <p className="text-[10px] font-bold text-[#1A1C1E] uppercase tracking-widest">Concept 2: The Celestial Arch</p>
          </div>
        );
      case 'monogram':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex items-center justify-center mb-6">
              <div className="relative group">
                <div className="absolute inset-0 border border-[#D4AF37] scale-110 opacity-20 group-hover:scale-125 transition-transform" />
                <div className="border border-[#D4AF37] px-6 py-4 flex items-center justify-center bg-white">
                  <span className="text-4xl font-serif text-[#1A1C1E] leading-none">S</span>
                </div>
              </div>
            </div>
            <p className="text-[10px] font-bold text-[#1A1C1E] uppercase tracking-widest">Concept 3: The Artisan Monogram</p>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#1A1C1E] font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center text-[#1A1C1E]">
              <Sparkles size={18} />
            </div>
            <div>
              <h1 className="text-2xl font-serif tracking-[0.3em] text-[#1A1C1E]">SUMMERSET</h1>
              <p className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-[0.4em]">Douglas Residential Estates</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            {['palette', 'typography', 'logos', 'mockups'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                  activeTab === tab ? 'text-[#1A1C1E]' : 'text-slate-400 hover:text-[#1A1C1E]'
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]" />}
              </button>
            ))}
          </nav>
          <button className="bg-[#1A1C1E] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8E4A3E] transition-colors">
            Private Appointment
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Luxury Hero Section */}
        <section className="mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
             <div className="w-12 h-[1px] bg-[#D4AF37]" />
             <span className="text-[10px] font-bold tracking-[0.4em] text-[#8E4A3E] uppercase">Unrivaled South Surrey Living</span>
             <div className="w-12 h-[1px] bg-[#D4AF37]" />
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto leading-tight">
            Where Modern Elegance Meets the <span className="italic text-[#D4AF37]">Golden Hour</span>.
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light italic">
            "A bespoke collection of townhome residences at 195-172nd St, curated for those who demand architectural integrity and effortless connectivity."
          </p>
        </section>

        {/* Tab Content with Luxury Styling */}
        <div className="space-y-20">
          {activeTab === 'palette' && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {branding.colors.map((color) => (
                <div key={color.hex} className="group relative">
                  <div 
                    className="h-72 w-full transition-all duration-700 ease-in-out group-hover:scale-[1.03] shadow-lg flex items-end p-6" 
                    style={{ backgroundColor: color.hex }}
                  >
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-sm border border-white/20">
                        <span className="text-[10px] font-mono tracking-widest" style={{ color: color.text }}>
                          {color.hex}
                        </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xs font-bold text-[#1A1C1E] uppercase tracking-widest mb-2">{color.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-light">{color.description}</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeTab === 'typography' && (
            <section className="space-y-12">
              {branding.fonts.map((font) => (
                <div key={font.name} className="bg-white p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
                  <div className="flex-1 space-y-4">
                    <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.3em]">{font.usage}</span>
                    <h3 className="text-2xl font-serif text-[#1A1C1E]">{font.name}</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{font.description}</p>
                  </div>
                  <div className="flex-[2] w-full border-l border-slate-100 pl-12">
                    <p className="text-6xl mb-4 leading-none tracking-tight" style={{ fontFamily: font.font }}>
                      Summerset Residences
                    </p>
                    <p className="text-lg text-slate-300 tracking-[0.5em] uppercase" style={{ fontFamily: font.font }}>
                      Estates &amp; Private Gardens
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeTab === 'logos' && (
            <div className="space-y-16">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <LogoConcept type="horizon" />
                    <LogoConcept type="arch" />
                    <LogoConcept type="monogram" />
                </section>
                <div className="bg-[#1A1C1E] p-16 text-center text-white">
                    <p className="text-[10px] tracking-[0.5em] uppercase mb-8 opacity-50">Logotype Inverse Application</p>
                    <h4 className="text-4xl font-serif tracking-[0.4em] mb-4">SUMMERSET</h4>
                    <div className="w-24 h-[1px] bg-[#D4AF37] mx-auto" />
                </div>
            </div>
          )}

          {activeTab === 'mockups' && (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Luxury Signage */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Navigation size={14} className="text-[#D4AF37]" /> Entry Monument Concept
                </h3>
                <div className="aspect-video bg-[#1A1C1E] rounded-sm overflow-hidden relative group">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590060417666-4bc29320b925?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="border border-[#D4AF37]/30 p-12 bg-black/40 backdrop-blur-sm text-center">
                        <h2 className="text-white text-4xl font-serif tracking-[0.4em] mb-2">SUMMERSET</h2>
                        <p className="text-[#D4AF37] text-[9px] tracking-[0.5em] font-bold">195 - 172nd STREET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* The "Gift" of the Brochure */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <BookOpen size={14} className="text-[#D4AF37]" /> The Invitation (Brochure)
                </h3>
                <div className="flex justify-center bg-white py-12 border border-slate-100">
                  <div className="w-72 aspect-[3/4] bg-white border border-slate-200 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-[6px] bg-[#8E4A3E]" />
                    <div className="p-12 h-full flex flex-col justify-between">
                        <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center font-serif text-[#1A1C1E]">S</div>
                        <div className="space-y-4">
                            <h4 className="text-2xl font-serif leading-tight">The Art of <br/>Surrey Living.</h4>
                            <p className="text-[8px] text-slate-400 uppercase tracking-widest">A Limited Collection of 42 Residences</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Curated Excellence Section */}
        <section className="mt-32 pt-20 border-t border-slate-200">
           <div className="text-center mb-16">
                <h3 className="text-3xl font-serif mb-4">Curated Excellence</h3>
                <p className="text-slate-500 font-light italic">Standard features redefined for the Douglas enclave.</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#8E4A3E]">
                    <ShieldCheck size={20} />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest">Secured Enclave</h5>
                <p className="text-xs text-slate-500 font-light">Advanced smart-access systems and private gated entry points.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#D4AF37]">
                    <Trophy size={20} />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest">Wolf &amp; Sub-Zero</h5>
                <p className="text-xs text-slate-500 font-light">Professional-grade culinary suites integrated into every chef's kitchen.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#1A1C1E]">
                    <Layout size={20} />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest">Sky Lounges</h5>
                <p className="text-xs text-slate-500 font-light">Engineered rooftop terraces designed for structural hot-tub integration.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#F4F1ED] flex items-center justify-center text-[#8E4A3E]">
                    <MapPin size={20} />
                </div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest">Gateway Access</h5>
                <p className="text-xs text-slate-500 font-light">A unique position offering seamless transit between the Lower Mainland and the US.</p>
              </div>
           </div>
        </section>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-[#1A1C1E] text-white py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-serif tracking-[0.4em] mb-2">SUMMERSET</h2>
            <p className="text-[8px] text-slate-500 tracking-[0.6em] uppercase">Curated by [Developer Name]</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-[10px] tracking-widest opacity-50 uppercase">Presentation Center coming Summer 2025</p>
            <div className="flex gap-8">
                <span className="text-[10px] font-bold uppercase tracking-widest hover:text-[#D4AF37] cursor-pointer">Instagram</span>
                <span className="text-[10px] font-bold uppercase tracking-widest hover:text-[#D4AF37] cursor-pointer">Registration</span>
                <span className="text-[10px] font-bold uppercase tracking-widest hover:text-[#D4AF37] cursor-pointer">Press</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Summerset3;