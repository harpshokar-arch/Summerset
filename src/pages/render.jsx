import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Info } from 'lucide-react';

// Data structure for the uploaded images
const slides = [
  {
    src: "IMG_4461.JPG",
    title: "Vue6 Exterior Architecture",
    description: "Photorealistic exterior visualization showcasing lighting and material textures."
  },
  {
    src: "Vue6%20Kitchen.jpg",
    title: "Vue6 Kitchen",
    description: "Kitchen rendering highlighting open-plan layout and natural light."
  },
  {
    src: "Vue6%20Masert.jpg",
    title: "Vue6 Master Bedroom Suite",
    description: "Atmospheric interior rendering with detailed soft furnishings."
  },
  {
    src: "IMG_4462.JPG",
    title: "Vue6 Hero Shot",
    description: "Landscape and architectural integration for the Langley Project."
  },
  {
    src: "Roof%20Materials%20Day.png",
    title: "Rooftop Terrace",
    description: "Urban rooftop leisure space visualization."
  },
  {
    src: "Residence%201.png",
    title: "Residential Rendering",
    description: "Additional Work done to highlight material details and shadowing."
  },
  {
    src: "Sample%20Bedroom.png",
    title: "Masert Bedroom Rendering",
    description: "Bedroom architectural visualization."
  },
  {
    src: "Sample%20Kitchen%20and%20dining%20Img%202.png",
    title: "Dining Room Rendering",
    description: "Photo realistic Rendering of Dining Room"
  },
  {
    src: "Sample%20Kitchen.jpg",
    title: "Living Room Rendering",
    description: "Living Space Details."
  },
  {
    src: "Bedroom%20Image.png",
    title: "Furniture Details",
    description: "Additional Material Highlights for Interior Space."
  }
];

const Amantirender = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showInfo, setShowInfo] = useState(true);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const length = slides.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(current === length - 1 ? 0 : current + 1);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(current === 0 ? length - 1 : current - 1);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [current, isTransitioning]);

  // Touch navigation
  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStart.current - touchEnd.current > 75) {
      nextSlide();
    }
    if (touchStart.current - touchEnd.current < -75) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900 text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Header / Logo Area */}
      <div className="absolute top-0 left-0 w-full z-20 p-6 md:p-10 flex justify-between items-start pointer-events-none">
        <div>
          <h1 className="text-2xl md:text-3xl font-light tracking-tighter uppercase pointer-events-auto cursor-pointer mix-blend-difference">
            Amanti<span className="font-bold"> Rendering Service</span>
          </h1>
          <p className="text-xs md:text-sm tracking-widest text-neutral-400 mt-1 uppercase opacity-80 mix-blend-difference">
            Visualization Portfolio
          </p>
        </div>
        
        <button 
          onClick={() => setShowInfo(!showInfo)}
          className="pointer-events-auto p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
        >
          {showInfo ? <X size={20} /> : <Info size={20} />}
        </button>
      </div>

      {/* Main Slider */}
      <div 
        className="w-full h-full relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          let position = 'translate-x-full opacity-0';
          if (index === current) position = 'translate-x-0 opacity-100';
          if (index === (current === 0 ? length - 1 : current - 1)) position = '-translate-x-full opacity-0';
          
          // Determine if this slide is active
          const isActive = index === current;

          return (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'z-10 opacity-100 scale-100' : 'z-0 opacity-0 scale-105'}`}
            >
              {/* Image Container */}
              <div className="absolute inset-0 bg-black">
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isActive ? 'scale-100' : 'scale-110'}`}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 opacity-60"></div>
              </div>

              {/* Text Content */}
              <div 
                className={`absolute bottom-0 left-0 w-full p-8 md:p-16 pb-24 md:pb-20 transition-all duration-700 delay-300 ${isActive && showInfo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="max-w-4xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-mono text-orange-400">0{index + 1}</span>
                    <div className="h-[1px] w-12 bg-orange-400/50"></div>
                    <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">Visualization</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 tracking-tight text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-neutral-300 max-w-lg text-sm md:text-base leading-relaxed font-light border-l-2 border-orange-500 pl-4">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-between px-4 md:px-8">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto group p-3 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-white transition-colors" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto group p-3 rounded-full hover:bg-white/10 transition-all duration-300 focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-8 h-8 md:w-12 md:h-12 text-white/50 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Progress / Pagination */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-6 md:p-10 flex flex-col md:flex-row items-end md:items-center justify-between pointer-events-none">
        
        {/* Simple count for mobile */}
        <div className="md:hidden text-white/80 font-mono text-sm mb-4">
          {current + 1} / {length}
        </div>

        {/* Dots for desktop */}
        <div className="hidden md:flex gap-3 pointer-events-auto">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${current === idx ? 'w-8 bg-orange-500' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Interactive Timeline */}
        <div className="w-full md:w-auto flex gap-1 pointer-events-auto overflow-x-auto no-scrollbar mask-gradient">
           {slides.map((slide, idx) => (
             <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`hidden md:block group relative w-16 h-12 md:w-24 md:h-16 flex-shrink-0 overflow-hidden border border-white/10 transition-all duration-300 ${current === idx ? 'opacity-100 ring-2 ring-orange-500' : 'opacity-40 hover:opacity-70'}`}
             >
               <img src={slide.src} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
             </button>
           ))}
        </div>
      </div>

      {/* CSS Utilities for hiding scrollbar if needed */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Amantirender;