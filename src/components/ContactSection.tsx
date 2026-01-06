
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
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
            Take the next step in driving change from the frontline
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'}`}>
            Ready to transform your physical therapy delivery? Get in touch with our team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <MapPin size={20} className="text-[hsl(var(--kenetics-dark))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--kenetics-dark))] mb-1">Address</h3>
                    <p className="text-gray-500 text-sm">Washington, DC</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Phone size={20} className="text-[hsl(var(--kenetics-dark))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--kenetics-dark))] mb-1">Call Us</h3>
                    <p className="text-gray-500 text-sm">202-929-7790</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                    <Mail size={20} className="text-[hsl(var(--kenetics-dark))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--kenetics-dark))] mb-1">Email Us</h3>
                    <p className="text-gray-500 text-sm">keneticsolutions@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Office Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[hsl(var(--kenetics-primary))]/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-[hsl(var(--kenetics-dark))] font-semibold">Washington, DC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[hsl(var(--kenetics-dark))] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--kenetics-primary))] focus:border-transparent transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[hsl(var(--kenetics-dark))] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--kenetics-primary))] focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[hsl(var(--kenetics-dark))] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--kenetics-primary))] focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your therapy needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full kenetics-primary kenetics-primary-hover px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 kenetics-glow"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
