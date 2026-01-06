
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import TestimonialsSection from '../components/TestimonialsSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Testimonials = () => {
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

  const stats = [
    { number: '95%', label: 'Patient Satisfaction Rate' },
    { number: '40%', label: 'Faster Recovery Times' },
    { number: '2.4M', label: 'Dollars Saved Annually' },
    { number: '500+', label: 'Healthcare Partners' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Client Success Stories"
        subtitle="Real Results from Real Healthcare Systems"
        description="Discover how healthcare organizations are transforming patient care and achieving remarkable outcomes with Kenetics."
      />
      
      <TestimonialsSection />

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The numbers speak for themselves. See how Kenetics is making a measurable impact across healthcare systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-all duration-300 scroll-scale-in"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-primary))] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-gray-700">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <Footer />
    </div>
  );
};

export default Testimonials;
