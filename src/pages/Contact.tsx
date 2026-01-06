
import React, { useEffect } from 'react';
import Header from '../components/Header';
import PageHero from '../components/PageHero';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { Clock, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '202-929-7790',
      description: 'Monday - Friday, 9 AM - 6 PM EST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'keneticsolutions@gmail.com',
      description: 'We typically respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Washington, DC',
      description: 'Serving healthcare systems nationwide'
    },
    {
      icon: Clock,
      title: 'Support Hours',
      content: '24/7 Platform Support',
      description: 'Technical support available around the clock'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PageHero
        title="Get in Touch"
        subtitle="Let's Transform Healthcare Together"
        description="Ready to see how Kenetics can improve patient outcomes at your organization? Contact us today to schedule a demo or learn more."
      />
      
      <ContactSection />

      {/* Additional Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
                Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for you. Our team is here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 text-center scroll-scale-in"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[hsl(var(--kenetics-primary))] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon size={24} className="text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-[hsl(var(--kenetics-dark))] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-semibold mb-1">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-500">
                    {info.description}
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

export default Contact;
