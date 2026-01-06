
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';
import { CheckCircle, Zap, Shield, BarChart3 } from 'lucide-react';

const Product = () => {
  const [isVisible, setIsVisible] = useState(false);

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

    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-fade-in-left, .scroll-fade-in-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Real-Time AI Analysis',
      description: 'Get instant feedback on exercise form and movement patterns using advanced computer vision and machine learning algorithms.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Your patient data is secure with enterprise-grade encryption and full compliance with healthcare regulations.'
    },
    {
      icon: BarChart3,
      title: 'Progress Tracking',
      description: 'Comprehensive analytics and reporting tools that help therapists monitor patient progress and adjust treatment plans.'
    },
    {
      icon: CheckCircle,
      title: 'Seamless Integration',
      description: 'Easily integrates with existing EMR systems and healthcare workflows for a smooth implementation process.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Our Technology"
        subtitle="Cutting-Edge AI-Powered Solutions"
        description="Discover how Kenetics leverages the latest in artificial intelligence, machine learning, and augmented reality to revolutionize physical therapy delivery."
      />
      
      <ProductSection />

      {/* Additional Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                Why Choose Kenetics Technology?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with clinical expertise to deliver superior patient outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 scroll-fade-in ${
                    index % 2 === 0 ? 'scroll-fade-in-left' : 'scroll-fade-in-right'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center">
                      <feature.icon size={28} className="text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Product;
