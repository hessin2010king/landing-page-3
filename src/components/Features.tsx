
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-4 bg-olive-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center my-2 md:my-0">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="uppercase font-medium tracking-wide">Authentic Italian Taste</span>
          </div>
          
          <div className="flex items-center my-2 md:my-0">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="uppercase font-medium tracking-wide">Sustainable Production Practices</span>
          </div>
          
          <div className="flex items-center my-2 md:my-0">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            <span className="uppercase font-medium tracking-wide">Fast Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
