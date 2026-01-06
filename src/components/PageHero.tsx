import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(true);
  }, [location.pathname]);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--kenetics-dark))] mb-4">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-[hsl(var(--kenetics-primary))] font-semibold mb-6">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
