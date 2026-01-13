import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Home, ArrowRight, CheckCircle2, Waves, Trees, Compass } from 'lucide-react';

const Summerset3 = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Intersection Observer for scroll animations
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#1b3022] font-sans selection:bg-[#d4af37] selection:text-white relative overflow-x-hidden">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.03]" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3%3Ffilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-6 py-4 md:px-12 flex justify-between items-center bg-[#fcfaf7]/80 backdrop-blur-md border-b border-[#1b3022]/5">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#1b3022] rounded-full flex items-center justify-center text-[#d4af37]">
            <Compass size={18} />
          </div>
          <span className="text-xl font-serif tracking-widest uppercase font-bold text-[#1b3022]">Summerset</span>
          <br />
           <p className="text-[9px] text-[#d4af37] font-bold uppercase tracking-[0.4em]">South Surrey Residential Development</p>
        </div>
        <button 
          onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
          className="hidden md:block text-sm font-semibold tracking-tighter uppercase border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition-colors"
        >
          Register for Priority Access
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fcfaf7] via-[#f3f1ed] to-[#e7e4df] -z-10" />
        
        {/* Animated Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#1b3022]/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[150px] animate-blob animation-delay-4000" />

        {/* Decorative Topographical Lines (SVG) */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none -z-5">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200 Q 250 150 500 200 T 1000 200" fill="none" stroke="#1b3022" strokeWidth="1" />
            <path d="M0 400 Q 250 350 500 400 T 1000 400" fill="none" stroke="#1b3022" strokeWidth="1" />
            <path d="M0 600 Q 250 550 500 600 T 1000 600" fill="none" stroke="#1b3022" strokeWidth="1" />
            <path d="M0 800 Q 250 750 500 800 T 1000 800" fill="none" stroke="#1b3022" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-4xl space-y-6 reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out relative z-10">
          <p className="text-[#d4af37] font-semibold tracking-[0.4em] uppercase text-sm mb-2">Coming Soon</p>
          <h1 className="text-5xl md:text-8xl font-serif leading-tight">
            Elevated Living in <br />
            <span className="italic text-[#1b3022]/80">South Surrey</span>
          </h1>
          <p className="text-lg md:text-xl text-[#1b3022]/70 max-w-2xl mx-auto leading-relaxed">
            A boutique collection of master-crafted residences designed to harmonize with the natural beauty of the West Coast. Heritage charm meets contemporary luxury.
          </p>
          <div className="pt-8">
            <button 
              onClick={() => document.getElementById('register').scrollIntoView({ behavior: 'smooth' })}
              className="group relative inline-flex items-center px-10 py-5 bg-[#1b3022] text-white rounded-full overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#1b3022]/20 hover:-translate-y-1"
            >
              <span className="font-semibold uppercase tracking-widest text-sm relative z-10">Join the Interest List</span>
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center space-y-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1b3022]/30">Discover More</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#1b3022]/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Lifestyle Features */}
      <section className="relative py-32 px-6 md:px-12 bg-white overflow-hidden">
        {/* Subtle Side Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcfaf7] -skew-x-12 translate-x-1/2 -z-0 opacity-50" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-100 space-y-6 group">
            <div className="w-16 h-16 bg-[#fcfaf7] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
              <Waves size={32} />
            </div>
            <h3 className="text-3xl font-serif italic">Coastal Proximity</h3>
            <p className="text-[#1b3022]/70 leading-relaxed text-lg">Minutes from the shores of White Rock Beach and the scenic Crescent Beach trails. The best of coastal living at your doorstep.</p>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-200 space-y-6 group">
            <div className="w-16 h-16 bg-[#fcfaf7] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
              <Home size={32} />
            </div>
            <h3 className="text-3xl font-serif italic">Curated Design</h3>
            <p className="text-[#1b3022]/70 leading-relaxed text-lg">Thoughtfully planned layouts with high-end finishes, gourmet kitchens, and expansive windows that invite natural light into every corner.</p>
          </div>
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700 delay-300 space-y-6 group">
            <div className="w-16 h-16 bg-[#fcfaf7] rounded-2xl flex items-center justify-center text-[#d4af37] shadow-sm group-hover:bg-[#1b3022] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
              <Trees size={32} />
            </div>
            <h3 className="text-3xl font-serif italic">Natural Sanctuary</h3>
            <p className="text-[#1b3022]/70 leading-relaxed text-lg">Nestled in the heart of South Surrey’s lush greenery, Summerset offers a peaceful retreat with easy access to modern amenities.</p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="register" className="relative py-32 px-6 md:px-12 bg-[#1b3022] text-[#fcfaf7] overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,175,55,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        {/* Decorative Circles */}
        <div className="absolute -top-24 -left-24 w-64 h-64 border border-[#d4af37]/20 rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 border border-[#d4af37]/10 rounded-full" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="reveal opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Stay Informed</h2>
            <p className="text-xl text-[#fcfaf7]/70 mb-12 max-w-xl mx-auto">
              Be the first to receive updates on floorplans, pricing, and the official release date. Register your interest today for priority access.
            </p>

            {isSubmitted ? (
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-16 flex flex-col items-center space-y-6 animate-in zoom-in duration-700">
                <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center shadow-lg shadow-[#d4af37]/20">
                  <CheckCircle2 size={40} className="text-[#1b3022]" />
                </div>
                <h3 className="text-3xl font-serif italic">Registration Confirmed</h3>
                <p className="text-[#fcfaf7]/60 text-center text-lg">We've added you to the priority list. Look out for a welcome message in your inbox shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm uppercase tracking-widest font-bold border-b border-[#d4af37] pb-1 hover:text-[#d4af37] transition-all"
                >
                  Register another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all placeholder:text-[#fcfaf7]/30 text-lg"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#d4af37] focus:bg-white/10 transition-all placeholder:text-[#fcfaf7]/30 text-lg"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full px-12 py-5 bg-[#d4af37] text-[#1b3022] font-bold rounded-2xl hover:bg-white transition-all duration-500 disabled:opacity-50 uppercase tracking-[0.2em] text-sm shadow-xl shadow-black/20"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#1b3022]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Secure Priority Access'}
                </button>
                <p className="text-xs text-[#fcfaf7]/30 mt-6 leading-relaxed">
                  By registering, you agree to receive communications from Summerset and its marketing partners. Your information is secure and you may unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Location Map Placeholder */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 text-[#d4af37] uppercase tracking-[0.3em] text-xs font-bold">
              <span className="w-8 h-px bg-[#d4af37]" />
              <span>South Surrey, BC</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">Connected to <br />What Matters Most</h2>
            <ul className="space-y-6 text-lg text-[#1b3022]/70">
              {[
                "5 Minutes to Grandview Corners & Morgan Crossing",
                "Quick Access to Highway 99 & US Border",
                "Walking distance to top-rated schools & parks",
                "Semiahmoo Heritage Trail proximity"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <div className="mt-2 w-2 h-2 bg-[#d4af37] rounded-full flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square bg-[#f3f1ed] rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-[#1b3022]/5 group shadow-2xl shadow-[#1b3022]/5">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000')] bg-cover opacity-10 grayscale scale-110 group-hover:scale-100 transition-transform duration-1000" />
            
            {/* Artistic Map Marker Design */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-6">
                 <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full animate-ping" />
                 <div className="w-20 h-20 bg-[#1b3022] rounded-full flex items-center justify-center text-[#d4af37] relative z-10 shadow-xl">
                   <MapPin size={32} />
                 </div>
              </div>
              <p className="font-serif italic text-2xl text-[#1b3022]">South Surrey</p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#1b3022]/40 mt-2 font-bold">Location Preview</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-[#1b3022]/10 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-20" />
        
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#1b3022] rounded-full flex items-center justify-center text-[#d4af37]">
              <Compass size={16} />
            </div>
            <span className="text-lg font-serif tracking-widest uppercase font-bold text-[#1b3022]">Summerset</span>
          </div>
          
          <div className="text-[10px] uppercase tracking-[0.25em] text-[#1b3022]/50 leading-loose max-w-3xl px-4">
            Disclaimer: This is a promotional website for The Summerset project in South Surrey. The developer reserves the right to modify plans, specifications, and pricing without notice. Renderings and background elements are artistic representations only. E.&O.E.
          </div>
          
          <div className="pt-4 flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-widest font-bold opacity-40">
            <a href="#" className="hover:text-[#d4af37] hover:opacity-100 transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-[#d4af37] hover:opacity-100 transition-all">Developer Portal</a>
            <a href="#" className="hover:text-[#d4af37] hover:opacity-100 transition-all">Contact</a>
          </div>

          <div className="text-[9px] text-[#1b3022]/30 mt-8">
            © 2024 THE SUMMERSET RESIDENCES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Global CSS for custom animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite alternate ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />
    </div>
  );
};

export default Summerset3;