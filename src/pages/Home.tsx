
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductSection from '../components/ProductSection';
import TherapySection from '../components/TherapySection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="product">
        <ProductSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="therapy">
        <TherapySection />
      </section>
      <section id="testimonials">
        <StatsSection />
        <TestimonialsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
