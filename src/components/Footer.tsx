
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">How it Works</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection('product')} className="hover:text-white transition-colors">Our Technology</button></li>
              <li><button onClick={() => scrollToSection('therapy')} className="hover:text-white transition-colors">Therapy Options</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Who We Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Physical Therapists</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Healthcare Leaders</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Kenetics Solutions. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
