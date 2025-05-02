
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(./src/assets/hero-background.png)' }}>
      <div className="absolute inset-0 overlay-dark"></div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-1">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow mb-6">
            Your recipes have never tasted that good.
          </h1>
          <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-lg rounded-md">
            CONTACT US NOW
          </Button>
          
          <div className="mt-12 flex justify-center space-x-6 text-white">
            <div className="text-center">
              <span className="block font-bold">35</span>
              <span className="text-sm">Locations</span>
            </div>
            <div className="text-center">
              <span className="block font-bold">24</span>
              <span className="text-sm">Outlets</span>
            </div>
            <div className="text-center">
              <span className="block font-bold">5</span>
              <span className="text-sm">Awards</span>
            </div>
            <div className="text-center">
              <span className="block font-bold">168</span>
              <span className="text-sm">Staff</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
