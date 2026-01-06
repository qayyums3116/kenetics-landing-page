import React, { useEffect, useState } from 'react';
import { Brain, Cpu, MessageSquare } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('product');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    {
      icon: Cpu,
      title: 'MACHINE LEARNING',
      description:
        'Harness the power of our advanced machine learning for precise assessments, personalized treatment plans, progress tracking, and enhanced patient engagement. Elevate the expertise of physical therapists with data-driven insights.',
    },
    {
      icon: Brain,
      title: 'ARTIFICIAL INTELLIGENCE',
      description:
        'Leverage advanced technology for precise assessment, adjustments to treatment plans, progress monitoring, outcome prediction, and patient engagement, enhancing the expertise of trained therapists.',
    },
    {
      icon: MessageSquare,
      title: 'LANGUAGE MODELS',
      description:
        'Utilizing language modeling in on-demand physical therapy, providers can streamline the communication process, improve the quality of care, and enhance the overall patient experience in a remote or digital healthcare environment.',
    },
  ];

  return (
    <section
      id="product"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Floating Background Bubbles */}
      <div className="floating-bubble floating-bubble-1"></div>
      <div className="floating-bubble floating-bubble-2"></div>
      <div className="floating-bubble floating-bubble-5"></div>
      
      {/* Rising Balloon Bubbles */}
      <div className="balloon-bubble balloon-2"></div>
      <div className="balloon-bubble balloon-4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Heading - Matching Laudio Style */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}
          >
            How it Works
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto ${
              isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
            }`}
          >
            Kenetics integrates essential workflows for therapists and patients, saving time and standardizing best practices.
          </p>
        </div>

        {/* Images */}
        <div
          className={`flex justify-center items-center mb-20 space-x-4 md:space-x-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}
        >
          <img
            src="/lovable-uploads/image1.avif"
            alt="Technology Demo 1"
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-xl"
          />
          <img
            src="/lovable-uploads/image2.avif"
            alt="Technology Demo 2"
            className="w-full max-w-md h-auto object-cover rounded-xl shadow-xl"
          />
        </div>

        {/* Technology Cards Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 bubble-float ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationDuration: `${6 + index * 0.5}s`
                }}
              >
                <div className="w-16 h-16 rounded-lg bg-[hsl(var(--kenetics-primary))] flex items-center justify-center mb-6">
                  <tech.icon size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                  {tech.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
