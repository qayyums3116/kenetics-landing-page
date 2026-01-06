
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { Users, Target, Heart, Award } from 'lucide-react';

const About = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make quality physical therapy accessible to everyone, regardless of location, age, or economic status. We believe technology can bridge healthcare gaps and empower patients in their recovery journey.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Patient-centered care, innovation, accessibility, and excellence drive everything we do. We are committed to improving lives through technology-enabled healthcare solutions.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'A diverse team of healthcare professionals, engineers, and data scientists working together to revolutionize physical therapy delivery through cutting-edge technology.'
    },
    {
      icon: Award,
      title: 'Our Impact',
      description: 'Since our founding, we\'ve helped thousands of patients recover faster, reduced healthcare costs, and improved access to quality physical therapy services across the country.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="About Kenetics"
        subtitle="Transforming Healthcare Through Innovation"
        description="Learn about our mission, values, and the dedicated team working to make physical therapy more accessible and effective for everyone."
      />
      
      <AboutSection />

      {/* Our Story Section with Floating Bubbles */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Floating Background Bubbles */}
        <div className="floating-bubble floating-bubble-1"></div>
        <div className="floating-bubble floating-bubble-2"></div>
        <div className="floating-bubble floating-bubble-3"></div>
        <div className="floating-bubble floating-bubble-4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded with a vision to bridge healthcare gaps, Kenetics has grown from a simple idea into a leading platform for AI-powered physical therapy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="scroll-fade-in-left">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                    The Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Millions of patients struggle to access quality physical therapy due to geographic barriers, scheduling conflicts, high costs, and limited availability of specialized therapists. This gap in care leads to prolonged recovery times, increased healthcare costs, and reduced quality of life.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We recognized that technology could solve these challenges by bringing expert therapy guidance directly to patients' homes, making care more accessible, affordable, and effective.
                  </p>
                </div>
              </div>

              <div className="scroll-fade-in-right">
                <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                    Our Solution
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kenetics combines artificial intelligence, machine learning, and augmented reality to create a comprehensive platform that guides patients through personalized therapy exercises while providing real-time feedback and progress tracking.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our platform enables therapists to monitor patient progress remotely, adjust treatment plans in real-time, and deliver high-quality care that matches or exceeds in-person therapy outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid with Bubble Animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-[hsl(var(--kenetics-primary))] hover:shadow-lg transition-all duration-300 scroll-scale-in bubble-float"
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                  <div className="w-14 h-14 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center mb-4 shadow-md">
                    <value.icon size={28} className="text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-[hsl(var(--kenetics-dark))] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
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

export default About;
