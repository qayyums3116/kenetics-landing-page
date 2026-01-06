
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Physical Therapy Director, Regional Medical Center',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b547?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Feeling valued improves patient satisfaction and loyalty, and regular recognition, acknowledgment, and personalized care are linchpins of an attractive therapeutic experience. Kenetics has transformed how we deliver care.',
      rating: 5,
      metric: '30% reduction in recovery time and $2.4 million in savings annually'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Rehabilitation Officer, Health System',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'We now have a tool to help therapists do those important things like personalized exercise guidance and progress tracking well. The AI and automation deliver insights from other solutions, so it\'s easy to make decisions and take action.',
      rating: 5,
      metric: '25% Improvement in Patient Outcomes and $1.8M saved in only 12 months'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Associate Chief of Physical Therapy, Medical Center',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Incorporating technology to enhance therapy productivity, provide meaningful patient engagement, and reduce recovery time. Kenetics proved to be a time-saving solution, not just in terms of efficiency, but also in helping therapists prioritize interactions with their patients.',
      rating: 5,
      metric: 'Reduced Average Recovery Time by Almost 40%'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Bubbles */}
      <div className="floating-bubble floating-bubble-1"></div>
      <div className="floating-bubble floating-bubble-2"></div>
      <div className="floating-bubble floating-bubble-5"></div>
      
      {/* Rising Balloon Bubbles */}
      <div className="balloon-bubble balloon-2"></div>
      <div className="balloon-bubble balloon-4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Hear from Kenetics clients
          </h2>
        </div>

        <div className={`max-w-5xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="mb-6">
              <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--kenetics-primary))] mb-4">
                {testimonials[currentTestimonial].metric}
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            
            <div className="flex items-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-[hsl(var(--kenetics-dark))] text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gray-700" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial 
                        ? 'bg-[hsl(var(--kenetics-primary))]' 
                        : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
