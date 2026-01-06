
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import TherapySection from '../components/TherapySection';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Therapy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-scale-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'Personalized Treatment Plans',
      description: 'Each therapy program is customized based on your specific condition, recovery goals, and progress tracking data.'
    },
    {
      title: 'Real-Time Guidance',
      description: 'AI-powered movement analysis provides instant feedback to ensure exercises are performed correctly and safely.'
    },
    {
      title: 'Progress Monitoring',
      description: 'Track your recovery journey with detailed analytics and reports that you can share with your healthcare provider.'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Access your therapy sessions anytime, anywhere, fitting seamlessly into your daily routine.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Choose Your Therapy"
        subtitle="Comprehensive Rehabilitation Solutions"
        description="Explore our wide range of therapy options designed to address various conditions and help you achieve your recovery goals."
      />
      
      <TherapySection />

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                Benefits of Kenetics Therapy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the advantages of AI-powered physical therapy delivered in the comfort of your home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 scroll-fade-in"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-[hsl(var(--kenetics-primary))] to-[hsl(var(--kenetics-primary-dark))] rounded-2xl p-12 text-center scroll-scale-in">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Start Your Recovery Journey?
              </h3>
              <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                Get started with a personalized therapy plan designed specifically for your needs.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                Request a Demo
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Therapy;
