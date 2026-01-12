import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sun, 
  MapPin, 
  Layout, 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  Navigation, 
  Quote, 
  Wind, 
  Layers,
  CheckCircle2,
  Compass,
  Waves,
  Trees,
  Mail,
  ArrowRight,
  Home
} from 'lucide-react';

const Summerset2 = () => {
   const [activeTab, setActiveTab] = useState('palette');

  // Intersection Observer logic for the Mockups tab to demonstrate brand reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const branding = {
    colors: [
      { name: 'Forest Obsidian', hex: '#1b3022', description: 'The primary prestige color. A deep, obsidian-green representing the lush Douglas landscape.', text: 'white' },
      { name: 'Brushed Champagne', hex: '#d4af37', description: 'The metallic accent. Reflects the golden hour light and high-end hardware finishes.', text: 'black' },
      { name: 'Stone Linen', hex: '#fcfaf7', description: 'The primary background tone. A warm, mineral-based cream that provides airy luxury.', text: 'black' },
      { name: 'Deep Earth', hex: '#e7e4df', description: 'Secondary neutral for topographical elements and secondary layouts.', text: 'black' },
    ],
    fonts: [
      {
        name: 'The Editorial Serif',
        family: 'serif',
        font: 'Playfair Display, serif',
        usage: 'Headlines & Signature Wordmarks',
        description: 'Sophisticated, high-contrast, and timeless.'
      },
      {
        name: 'The Quiet Luxury Sans',
        family: 'sans',
        font: 'Tenor Sans, sans-serif',
        usage: 'Sub-headlines & Navigation',
        description: 'Boutique-inspired with wide tracking for an editorial feel.'
      },
      {
        name: 'The Technical Sans',
        family: 'sans',
        font: 'Inter, sans-serif',
        usage: 'Body Copy & Specifications',
        description: 'Modern, geometric, and highly legible.'
      }
    ],
    floorplans: [
      { name: 'The Meridian', type: '4 Bed + Rooftop', highlight: 'Panoramic view of Semiahmoo Bay' },
      { name: 'The Pavilion', type: '3 Bed + Garden', highlight: 'Double-height ceilings and private courtyard' },
      { name: 'The Azure', type: '4 Bed Executive', highlight: 'Primary suite with personal sky-lounge' },
      { name: 'The Heirloom', type: '3 Bed + Flex', highlight: 'Chef’s kitchen with oversized butler’s pantry' }
    ]
  };

  const LogoConcept = ({ type }) => {
    switch (type) {
      case 'horizon':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex flex-col items-center justify-center relative mb-6">
              <span className="text-3xl font-serif text-[#1b3022] tracking-[0.4em] relative">
                SUMMERSET
                <div className="absolute -bottom-4 left-1/4 w-1/2 h-[1.5px] bg-[#d4af37]" />
              </span>
              <span className="text-[8px] tracking-[0.6em] text-slate-400 mt-6 uppercase text-center font-bold">Douglas Residential Estates</span>
            </div>
            <p className="text-[10px] font-bold text-[#1b3022] uppercase tracking-widest">Concept 1: The Linear Estate</p>
          </div>
        );
      case 'arch':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex flex-col items-center justify-center mb-6">
               <svg viewBox="0 0 100 60" className="w-12 h-12 mb-4 transition-transform group-hover:scale-110 duration-500">
                  <circle cx="50" cy="30" r="28" fill="none" stroke="#d4af37" strokeWidth="0.5" />
                  <path d="M30 40 L50 20 L70 40" fill="none" stroke="#1b3022" strokeWidth="1.5" />
               </svg>
               <span className="text-xl font-serif text-[#1b3022] tracking-[0.3em] font-bold">SUMMERSET</span>
            </div>
            <p className="text-[10px] font-bold text-[#1b3022] uppercase tracking-widest">Concept 2: The Celestial Arch</p>
          </div>
        );
      case 'monogram':
        return (
          <div className="flex flex-col items-center justify-center p-12 bg-white border border-slate-100 rounded-sm shadow-sm group hover:shadow-xl transition-all duration-700">
            <div className="w-48 h-24 flex items-center justify-center mb-6">
              <div className="relative group">
                <div className="absolute inset-0 border border-[#d4af37] scale-110 opacity-20 group-hover:scale-125 transition-transform" />
                <div className="border border-[#d4af37] px-6 py-4 flex items-center justify-center bg-white shadow-inner">
                  <div className="flex items-center space-x-2">
                     <Compass size={24} className="text-[#1b3022]" />
                     <span className="text-3xl font-serif text-[#1b3022] leading-none font-bold">S</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[10px] font-bold text-[#1b3022] uppercase tracking-widest">Concept 3: The Artisan Compass</p>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#1b3022] font-sans selection:bg-[#d4af37] selection:text-white pb-20 relative overflow-hidden">
      {/* Global Grain Overlay demonstrated in the Brand Kit */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Premium Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-[#1b3022]/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#1b3022] flex items-center justify-center text-[#d4af37] rounded-full">
              <Compass size={18} />
            </div>
            <div>
              <h1 className="text-2xl font-serif tracking-[0.3em] text-[#1b3022] font-bold uppercase">SUMMERSET</h1>
              <p className="text-[9px] text-[#d4af37] font-bold uppercase tracking-[0.4em]">South Surrey Residential Estates</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            {['palette', 'typography', 'logos', 'strategy', 'mockups'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                  activeTab === tab ? 'text-[#1b3022]' : 'text-slate-400 hover:text-[#1b3022]'
                }`}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#d4af37]" />}
              </button>
            ))}
          </nav>
          <button className="bg-[#1b3022] text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#d4af37] transition-all shadow-lg hover:shadow-[#1b3022]/20">
            Request Priority Access
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Luxury Hero Section */}
        <section className="mb-24 text-center relative overflow-hidden">
          {/* Topographical SVG background preview */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#1b3022" strokeWidth="1" />
              <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#1b3022" strokeWidth="1" />
              <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#1b3022" strokeWidth="1" />
            </svg>
          </div>

          <div className="inline-flex items-center gap-4 mb-6">
             <div className="w-16 h-[1px] bg-[#d4af37]" />
             <span className="text-[11px] font-bold tracking-[0.5em] text-[#d4af37] uppercase">Elevated Living in South Surrey</span>
             <div className="w-16 h-[1px] bg-[#d4af37]" />
          </div>
          <h2 className="text-5xl md:text-8xl font-serif mb-8 max-w-5xl mx-auto leading-tight tracking-tight text-[#1b3022]">
            Heritage Charm meets <br/><span className="italic text-[#1b3022]/80 font-normal">Contemporary Luxury</span>.
          </h2>
          <p className="text-xl text-[#1b3022]/60 max-w-2xl mx-auto leading-relaxed font-light">
            "A collection of master-crafted residences designed to harmonize with the natural sanctuary of the West Coast."
          </p>
        </section>

        {/* Tab Content with Luxury Styling */}
        <div className="space-y-20">
          {activeTab === 'palette' && (
            <div className="space-y-16 animate-in fade-in duration-700">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {branding.colors.map((color) => (
                    <div key={color.hex} className="group relative">
                    <div 
                        className="h-72 w-full transition-all duration-700 ease-in-out group-hover:scale-[1.03] shadow-lg flex items-end p-6 border border-[#1b3022]/5" 
                        style={{ backgroundColor: color.hex }}
                    >
                        <div className="bg-white/10 backdrop-blur-md p-3 rounded-sm border border-white/20">
                            <span className="text-[10px] font-mono tracking-widest font-bold" style={{ color: color.text }}>
                            {color.hex}
                            </span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xs font-bold text-[#1b3022] uppercase tracking-widest mb-2">{color.name}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed font-light">{color.description}</p>
                    </div>
                    </div>
                ))}
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-[#1b3022]/10">
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Layers size={14} className="text-[#d4af37]" /> Digital Grain Texture
                        </h4>
                        <div className="aspect-video bg-[#1b3022] rounded-sm relative overflow-hidden">
                           <div className="absolute inset-0 opacity-20" 
                                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                           </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Layers size={14} className="text-[#d4af37]" /> Heritage Materials
                        </h4>
                        <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1581404476143-fb31d742929f?auto=format&fit=crop&q=80&w=800')] bg-cover grayscale opacity-60 rounded-sm" />
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Layers size={14} className="text-[#d4af37]" /> Topographical Overlay
                        </h4>
                        <div className="aspect-video bg-[#fcfaf7] border border-[#1b3022]/10 rounded-sm p-4 overflow-hidden">
                           <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-20 text-[#1b3022]">
                              <path d="M0 20 Q 25 15 50 20 T 100 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                              <path d="M0 40 Q 25 35 50 40 T 100 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                              <path d="M0 60 Q 25 55 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                           </svg>
                        </div>
                    </div>
                </div>
            </div>
          )}

          {activeTab === 'typography' && (
            <section className="space-y-12 animate-in fade-in duration-700">
              {branding.fonts.map((font) => (
                <div key={font.name} className="bg-white p-12 border border-slate-100 flex flex-col md:flex-row gap-12 items-center hover:shadow-md transition-shadow">
                  <div className="flex-1 space-y-4">
                    <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-[0.3em]">{font.usage}</span>
                    <h3 className="text-2xl font-serif text-[#1b3022] font-bold uppercase">{font.name}</h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed">{font.description}</p>
                  </div>
                  <div className="flex-[2] w-full border-l border-slate-100 pl-12">
                    <p className="text-6xl mb-4 leading-tight tracking-tight text-[#1b3022]" style={{ fontFamily: font.font }}>
                      Summerset Residences
                    </p>
                    <p className="text-lg text-[#d4af37] tracking-[0.5em] uppercase font-bold" style={{ fontFamily: font.font }}>
                      Heritage &amp; Contemporary Luxury
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeTab === 'logos' && (
            <div className="space-y-16 animate-in fade-in duration-700">
                <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <LogoConcept type="horizon" />
                    <LogoConcept type="arch" />
                    <LogoConcept type="monogram" />
                </section>
                <div className="bg-[#1b3022] p-24 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37] opacity-10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <p className="text-[10px] tracking-[0.5em] uppercase mb-8 opacity-50">Logotype Inverse Application</p>
                    <h4 className="text-5xl font-serif tracking-[0.5em] mb-4 font-bold">SUMMERSET</h4>
                    <div className="w-24 h-[1px] bg-[#d4af37] mx-auto mb-6" />
                    <p className="text-[10px] tracking-[0.3em] font-bold text-[#d4af37]">SOUTH SURREY RESIDENCES</p>
                </div>
            </div>
          )}

          {activeTab === 'strategy' && (
              <div className="space-y-20 animate-in fade-in duration-700">
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                      <div className="space-y-8">
                          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d4af37]">Brand Voice &amp; Tonality</h3>
                          <div className="space-y-6">
                              <div className="flex gap-4">
                                  <Quote size={24} className="text-[#d4af37] shrink-0" />
                                  <p className="text-lg font-serif italic text-[#1b3022]/70 leading-relaxed">
                                      "Summerset is a sanctuary defined by quiet luxury and geological permanence. We sell the way the morning light hits the coastline."
                                  </p>
                              </div>
                              <ul className="space-y-3 pl-10">
                                  <li className="text-sm flex items-center gap-3 font-medium"><CheckCircle2 size={14} className="text-[#d4af37]" /> Sophisticated Heritage</li>
                                  <li className="text-sm flex items-center gap-3 font-medium"><CheckCircle2 size={14} className="text-[#d4af37]" /> Coastal Serenity</li>
                                  <li className="text-sm flex items-center gap-3 font-medium"><CheckCircle2 size={14} className="text-[#d4af37]" /> Architectural Integrity</li>
                              </ul>
                          </div>
                      </div>
                      <div className="space-y-8">
                          <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#d4af37]">The Collection: Floor Plan Naming</h3>
                          <div className="grid grid-cols-1 gap-4">
                              {branding.floorplans.map((plan) => (
                                  <div key={plan.name} className="p-6 bg-white border border-slate-100 flex justify-between items-center group hover:bg-[#1b3022] transition-all">
                                      <div>
                                          <h5 className="font-serif text-xl group-hover:text-white transition-colors font-bold uppercase tracking-tight">{plan.name}</h5>
                                          <p className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">{plan.type}</p>
                                      </div>
                                      <p className="text-xs text-slate-400 group-hover:text-white/40 italic max-w-[150px] text-right">{plan.highlight}</p>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </section>
              </div>
          )}

          {activeTab === 'mockups' && (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in duration-700">
              {/* Luxury Signage with animated reveal */}
              <div className="space-y-6 reveal opacity-0 translate-y-10 transition-all duration-1000">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Navigation size={14} className="text-[#d4af37]" /> Entry Monument Concept
                </h3>
                <div className="aspect-video bg-[#1b3022] rounded-sm overflow-hidden relative group shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590060417666-4bc29320b925?auto=format&fit=crop&q=80&w=1200')] bg-cover opacity-30 grayscale group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="border border-[#d4af37]/30 p-12 bg-[#1b3022]/60 backdrop-blur-md text-center">
                        <h2 className="text-white text-5xl font-serif tracking-[0.4em] mb-2 font-bold">SUMMERSET</h2>
                        <p className="text-[#d4af37] text-[10px] tracking-[0.6em] font-bold uppercase">195 - 172nd STREET</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Invitation / Registration Preview */}
              <div className="space-y-6 reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] flex items-center gap-2">
                  <Mail size={14} className="text-[#d4af37]" /> Digital Invitation
                </h3>
                <div className="flex justify-center bg-[#1b3022] py-16 border border-white/5 shadow-2xl relative overflow-hidden">
                   {/* Animated Background Orbs */}
                  <div className="absolute top-0 -left-10 w-32 h-32 bg-[#d4af37]/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 -right-10 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl animate-pulse" />
                  
                  <div className="w-72 aspect-[3/4] bg-[#fcfaf7] border border-white/10 shadow-2xl relative overflow-hidden group hover:rotate-1 transition-transform cursor-pointer p-8">
                    <div className="h-full flex flex-col justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-[#1b3022] rounded-full flex items-center justify-center text-[#d4af37]">
                            <Compass size={16} />
                          </div>
                          <span className="text-xs font-serif tracking-widest font-bold text-[#1b3022]">SUMMERSET</span>
                        </div>
                        <div className="space-y-4">
                            <p className="text-[9px] text-[#d4af37] font-bold uppercase tracking-[0.3em]">South Surrey Residences</p>
                            <h4 className="text-3xl font-serif leading-tight text-[#1b3022] font-bold italic">Elevated <br/>Living.</h4>
                            <p className="text-[8px] text-[#1b3022]/40 uppercase tracking-widest font-bold">Priority Registration Open</p>
                            <div className="w-full h-[1px] bg-[#d4af37]" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Brand Pillars Section with New Icons */}
        <section className="mt-32 pt-24 border-t border-[#1b3022]/10">
           <div className="text-center mb-20">
                <div className="flex justify-center mb-6">
                    <Compass size={32} className="text-[#d4af37]" />
                </div>
                <h3 className="text-4xl font-serif mb-4 text-[#1b3022] font-bold">Curated Sanctuary</h3>
                <p className="text-slate-500 font-light italic max-w-xl mx-auto text-lg leading-relaxed">"A master-planned boutique enclave where natural serenity meets contemporary craft."</p>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#d4af37] shadow-sm border border-[#1b3022]/5 group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500">
                    <Waves size={24} />
                </div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.3em]">Coastal Proximity</h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Minutes from the scenic shores of White Rock and the heritage trails of Semiahmoo.</p>
              </div>
              <div className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#d4af37] shadow-sm border border-[#1b3022]/5 group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500">
                    <Home size={24} />
                </div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.3em]">Artisan Design</h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Wolf &amp; Sub-Zero culinary suites paired with bespoke architectural finishes.</p>
              </div>
              <div className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#d4af37] shadow-sm border border-[#1b3022]/5 group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500">
                    <Trees size={24} />
                </div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.3em]">Natural Refuge</h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Nestled within the lush greenery of Douglas, offering a sanctuary of quiet luxury.</p>
              </div>
              <div className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#d4af37] shadow-sm border border-[#1b3022]/5 group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500">
                    <Navigation size={24} />
                </div>
                <h5 className="text-[11px] font-bold uppercase tracking-[0.3em]">The Gateway</h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">Unrivaled connectivity to the US Border, Highway 99, and the heart of South Surrey.</p>
              </div>
           </div>
        </section>
      </main>

      {/* Luxury Footer */}
      <footer className="bg-[#1b3022] text-white py-24 relative overflow-hidden">
        {/* Animated Background Pattern preview in brand board */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-16 mb-20 relative z-10">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#d4af37] backdrop-blur-md">
                        <Compass size={24} />
                      </div>
                      <h2 className="text-4xl font-serif tracking-[0.5em] font-bold">SUMMERSET</h2>
                    </div>
                    <p className="text-[10px] text-[#d4af37] tracking-[0.8em] uppercase font-bold">Heritage &amp; Contemporary Residences</p>
                </div>
                <div className="flex flex-col items-center md:items-end gap-6 text-right">
                    <p className="text-[11px] tracking-widest opacity-60 uppercase italic font-light">Presentation Center opening Summer 2025</p>
                    <div className="flex gap-12 border-b border-white/10 pb-4">
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#d4af37] cursor-pointer transition-colors">Digital Registry</span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#d4af37] cursor-pointer transition-colors">Area Map</span>
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] hover:text-[#d4af37] cursor-pointer transition-colors">Press</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 opacity-30 text-[9px] tracking-widest uppercase font-bold relative z-10">
                <p>Curated by [Developer Name]</p>
                <p>195-172nd Street, South Surrey, British Columbia</p>
            </div>
        </div>
        {/* Navigation to Next Page */}
        <section className="max-w-7xl mx-auto px-8 pb-32">
          <div className="border-t border-slate-200 pt-20 flex flex-col items-center">
            <p className="text-[10px] font-bold tracking-[0.5em] text-slate-400 uppercase mb-8">
              Continue Exploration
            </p>
    
            <Link 
              to="/page3" 
              className="group relative px-12 py-6 border border-[#1A1C1E] overflow-hidden transition-all hover:border-[#D4AF37]"
            >
              <span className="relative z-10 text-[12px] font-bold uppercase tracking-[0.4em] group-hover:text-[#D4AF37] transition-colors">
                Coming Soon Website
              </span>
              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-[#F4F1ED] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </Link>
    
            <p className="mt-6 text-sm italic text-slate-400 font-light">
              Preliminary Coming Soon Website Design
            </p>
          </div>
    </section>
      </footer>
    </div>
  );
};

export default Summerset2;