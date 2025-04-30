
import React from 'react';

const SpecialsSection: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative food-card">
            <img 
              src="/placeholder.svg" 
              alt="Special Salad" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4">
              <h3 className="font-bold text-xl">Lorem Ipsum</h3>
              <p className="text-sm text-olive-700">For those health & balance</p>
            </div>
          </div>
          
          <div className="relative food-card">
            <img 
              src="/placeholder.svg" 
              alt="Special Fries" 
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4">
              <h3 className="font-bold text-xl">Lorem Ipsum</h3>
              <p className="text-sm text-olive-700">For your crunchy fries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;
