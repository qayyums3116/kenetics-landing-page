
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-white">
      {/* Floating Background Bubbles */}
      <div className="floating-bubble floating-bubble-1"></div>
      <div className="floating-bubble floating-bubble-2"></div>
      <div className="floating-bubble floating-bubble-3"></div>
      <div className="floating-bubble floating-bubble-4"></div>
      <div className="floating-bubble floating-bubble-5"></div>
      <div className="floating-bubble floating-bubble-6"></div>
      
      {/* Rising Balloon Bubbles */}
      <div className="balloon-bubble balloon-1"></div>
      <div className="balloon-bubble balloon-2"></div>
      <div className="balloon-bubble balloon-3"></div>
      <div className="balloon-bubble balloon-4"></div>
      <div className="balloon-bubble balloon-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 leading-tight">
            Help your{' '}
            <span className="text-[hsl(var(--kenetics-primary))]">patients recover.</span>{' '}
            Improve{' '}
            <span className="text-[hsl(var(--kenetics-primary))]">your outcomes.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Kenetics is an AI-enhanced platform that streamlines physical therapy delivery and prioritizes high-impact patient care, driving large-scale improvements in recovery outcomes at healthcare systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group bg-[hsl(var(--kenetics-primary))] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[hsl(var(--kenetics-primary-dark))] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Request a Demo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
