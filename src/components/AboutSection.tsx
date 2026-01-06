import React, { useEffect, useState } from 'react';
import { Target, Users, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Hook: count up animation for numbers
function useCountUp(target: number, isVisible: boolean, delay: number = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start: number | null = null;
      const duration = 2000; // animation duration in ms

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, target, delay]);

  return count;
}

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const el = document.getElementById('about');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Values grid data
  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'AI-driven accuracy in every movement assessment and therapy plan.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Making quality physical therapy available to everyone, everywhere.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Setting new standards in digital healthcare innovation.',
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Putting patient well-being at the center of everything we do.',
    },
  ];

  // Carousel content - Our Story, Vision, and Mission
  const carouselContent = [
    {
      title: 'Our Story',
      content:
        "At Kenetics Solutions, we are driven by a deep passion to make technology more accessible and inclusive for everyone. We understand first-hand the challenges that individuals face when they don't receive the care they need, whether due to age, location, economic constraints, or language barriers. And that is why we strive to develop innovative technology solutions that cater to the needs of various communities. Our solutions are designed to help bridge gaps, empower individuals, and improve their quality of life."
     },
    {
      title: 'Our Vision',
      content:
        "We are on a mission to revolutionize the way physical therapists interact with their patients. Our innovative service, offered through a smart device, allows patients to receive customized virtual guidance from their physical therapists while performing exercises at home. Our platform is easy to use, secure, and enables patients to stay connected to their healthcare providers from the comfort of their own homes. We envision a future where quality physical therapy is accessible to everyone, everywhere.",
    },
    {
      title: 'Our Mission',
      content:
        "At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. We understand first-hand the challenges individuals face when they don't receive the care they need—whether due to age, location, economic constraints, or language barriers—and we strive to bridge these gaps. Our innovative service, delivered through a smart device, empowers underserved patients with personalized at-home physical therapy exercises. Leveraging machine learning, artificial intelligence, language modeling, and augmented reality, every session is uniquely tailored and secure, enabling real-time virtual guidance from their therapists.",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Capability bars data
  const capabilities = [
    { name: 'AI-POWERED THERAPY', percentage: 100 },
    { name: 'MACHINE LEARNING ALGORITHMS', percentage: 90 },
    { name: 'AUGMENTED REALITY (AR) INTEGRATION', percentage: 75 },
    { name: 'TELEHEALTH & REMOTE MONITORING', percentage: 65 },
    { name: 'DATA SECURITY & COMPLIANCE', percentage: 60 },
    { name: 'USER-CENTRIC DESIGN & ACCESSIBILITY', percentage: 55 },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Bubbles */}
      <div className="floating-bubble floating-bubble-1"></div>
      <div className="floating-bubble floating-bubble-2"></div>
      <div className="floating-bubble floating-bubble-3"></div>
      <div className="floating-bubble floating-bubble-4"></div>
      
      {/* Rising Balloon Bubbles */}
      <div className="balloon-bubble balloon-1"></div>
      <div className="balloon-bubble balloon-2"></div>
      <div className="balloon-bubble balloon-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Mission Section with Image */}
        <div className="max-w-6xl mx-auto mb-20">
          <div
            className={`bg-gray-50 rounded-2xl p-8 md:p-12
                        grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* IMAGE */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <img
                src="/lovable-uploads/bf8bd996-4d49-4ac1-b078-f2d68526fbdb.png"
                alt="Kenetics AI Technology - Movement Analysis"
                className="w-full max-w-md h-auto object-cover rounded-xl shadow-xl"
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                  One connected platform for physical therapy
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Kenetics integrates essential workflows for therapists and patients, saving time and standardizing best practices in at-home physical therapy delivery.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-[hsl(var(--kenetics-dark))] mb-3">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At Kenetics, we are pioneers in health technology, driven by a mission to enhance healthcare accessibility and inclusivity. We understand first-hand the challenges individuals face when they don't receive the care they need—whether due to age, location, economic constraints, or language barriers—and we strive to bridge these gaps. Our innovative service, delivered through a smart device, empowers underserved patients with personalized at-home physical therapy exercises.
                </p>
              </div>
            </div>
          </div>
        </div>


         {/* Maximize Impact Section */}
         <div className="max-w-6xl mx-auto mb-20">
           <div className="text-center mb-12">
             <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
               Maximize the impact of every therapy session
             </h2>
           </div>

           {/* Three Key Benefits */}
           <div className="grid md:grid-cols-3 gap-8 mb-16">
             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center mb-6">
                 <Target size={28} className="text-black" />
               </div>
               <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                 Save hours of administrative work
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 By centralizing and streamlining core therapy workflows, automating standard tasks, and surfacing timely patient insights, Kenetics helps therapists focus more on what matters most.
               </p>
             </div>

             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center mb-6">
                 <Users size={28} className="text-black" />
               </div>
               <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                 Unlock impactful patient engagement moments
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 Using AI, the Kenetics platform filters through the noise to surface the highest impact, purposeful therapy actions – actions proven to move the needle on patient engagement and recovery outcomes.
               </p>
             </div>

             <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
               <div className="w-14 h-14 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center mb-6">
                 <Heart size={28} className="text-black" />
               </div>
               <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                 Make it easier to track patient progress
               </h3>
               <p className="text-gray-600 leading-relaxed">
                 Kenetics' integrated patient monitoring module makes it simple for therapists to plan and track therapy progress, facilitating proactive patient engagement and quick intervention when needed.
               </p>
             </div>
           </div>
         </div>

         {/* Kenetics Journey Carousel - Our Story, Vision, Mission */}
         <div className={`max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
           <div className="text-center mb-8">
             <h3 className="text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
               Kenetics Journey
             </h3>
             <p className="text-lg text-gray-600">
               Empowering individuals through technology-driven healthcare solutions
             </p>
           </div>
           
           <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
             <div className="h-96 flex items-center">
               <div 
                 className="flex transition-all duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${carouselContent.length * 100}%` }}
               >
                 {carouselContent.map((slide, index) => (
                   <div key={index} className="w-full flex-shrink-0 px-12 py-8 flex items-center justify-center">
                     <div className="text-center max-w-2xl">
                       <div className="inline-block mb-6">
                         <h4 className="text-2xl font-bold text-[hsl(var(--kenetics-primary))] bg-[hsl(var(--kenetics-primary))]/10 px-6 py-3 rounded-full">
                           {slide.title}
                         </h4>
                       </div>
                       <p className="text-gray-700 leading-relaxed text-lg">
                         {slide.content}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Navigation Buttons */}
             <button
               onClick={prevSlide}
               className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg z-10"
               aria-label="Previous slide"
             >
               <ChevronLeft size={20} />
             </button>
             <button
               onClick={nextSlide}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[hsl(var(--kenetics-primary))] text-black p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg z-10"
               aria-label="Next slide"
             >
               <ChevronRight size={20} />
             </button>
             
             {/* Indicators */}
             <div className="flex justify-center py-6 space-x-3">
               {carouselContent.map((_, index) => (
                 <button
                   key={index}
                   onClick={() => setCurrentSlide(index)}
                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
                     currentSlide === index 
                       ? 'bg-[hsl(var(--kenetics-primary))] scale-125' 
                       : 'bg-gray-300 hover:bg-gray-400'
                   }`}
                   aria-label={`Go to slide ${index + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>

        {/* Who We Help Section - Matching Laudio Style */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
              Who We Help
            </h2>
          </div>

          {/* Who We Help Grid - Matching Laudio Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Physical Therapists</h3>
              <p className="text-gray-600 text-lg">Streamline daily work and gain time for meaningful patient interactions</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Rehabilitation Directors</h3>
              <p className="text-gray-600 text-lg">Give therapists one platform to manage their patients efficiently</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Healthcare Administrators</h3>
              <p className="text-gray-600 text-lg">Standardize therapy best practices on every team</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Chief Medical Officers</h3>
              <p className="text-gray-600 text-lg">Operationalize world-class patient engagement and recovery strategies</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Chief Operating Officers</h3>
              <p className="text-gray-600 text-lg">Automate work and expand therapy capacity</p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">Chief Financial Officers</h3>
              <p className="text-gray-600 text-lg">Improve outcomes while reducing operational costs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
