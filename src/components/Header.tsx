
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'product', 'about', 'therapy', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
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
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'product', label: 'How it Works' },
    { id: 'about', label: 'Who We Help' },
    { id: 'therapy', label: 'Resources' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/d0586b0f-926d-4e97-aacd-c09808a2d113.png" 
              alt="Kenetics Solutions" 
              className="h-10 w-auto cursor-pointer"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-[hsl(var(--kenetics-primary))] bg-[hsl(var(--kenetics-primary))]/10' 
                    : 'text-gray-700 hover:text-[hsl(var(--kenetics-primary))]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-4 bg-[hsl(var(--kenetics-primary))] text-black px-6 py-2 rounded-lg font-semibold hover:bg-[hsl(var(--kenetics-primary-dark))] transition-all duration-300"
            >
              Request a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors duration-300 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 font-medium transition-colors duration-300 ${
                    activeSection === item.id 
                      ? 'text-[hsl(var(--kenetics-primary))] bg-[hsl(var(--kenetics-primary))]/10' 
                      : 'text-gray-700 hover:text-[hsl(var(--kenetics-primary))]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mx-4 mt-2 bg-[hsl(var(--kenetics-primary))] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[hsl(var(--kenetics-primary-dark))] transition-all duration-300"
              >
                Request a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
