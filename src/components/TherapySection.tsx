
import React, { useEffect, useState } from 'react';
import { Dumbbell, Zap, Scale, User, Activity, RotateCcw } from 'lucide-react';

const TherapySection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('therapy');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const therapyOptions = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Build muscle strength with personalized resistance exercises',
      delay: 'delay-100'
    },
    {
      icon: Zap,
      title: 'Flexibility',
      description: 'Improve range of motion through targeted stretching routines',
      delay: 'delay-200'
    },
    {
      icon: Scale,
      title: 'Balance',
      description: 'Enhance stability and prevent falls with balance exercises',
      delay: 'delay-300'
    },
    {
      icon: Activity,
      title: 'Gait Analysis',
      description: 'Analyze and improve walking patterns for better mobility',
      delay: 'delay-100'
    },
    {
      icon: User,
      title: 'Posture',
      description: 'Correct posture alignment for reduced pain and better health',
      delay: 'delay-200'
    },
    {
      icon: RotateCcw,
      title: 'Range of Motion',
      description: 'Restore joint mobility through targeted movement exercises',
      delay: 'delay-300'
    }
  ];

  return (
    <section id="therapy" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Floating Background Bubbles */}
      <div className="floating-bubble floating-bubble-3"></div>
      <div className="floating-bubble floating-bubble-4"></div>
      <div className="floating-bubble floating-bubble-6"></div>
      
      {/* Rising Balloon Bubbles */}
      <div className="balloon-bubble balloon-1"></div>
      <div className="balloon-bubble balloon-3"></div>
      <div className="balloon-bubble balloon-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Improve therapy outcomes in every department
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Comprehensive therapy options tailored to your specific needs and rehabilitation goals across all care settings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {therapyOptions.map((option, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl border border-gray-200 hover:border-[hsl(var(--kenetics-primary))] hover:shadow-lg transition-all duration-300 bubble-float ${
                isVisible ? `animate-fade-in-up ${option.delay}` : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${5 + index * 0.3}s`
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center">
                  <option.icon size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-[hsl(var(--kenetics-dark))]">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapySection;
