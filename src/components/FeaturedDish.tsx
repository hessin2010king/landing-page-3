
import React from 'react';

const FeaturedDish: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img 
              src="/assets/images/main-dish.jpg" 
              alt="Featured dish" 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
            <p className="text-gray-500 mb-4">Lorem ipsum is simply dummy</p>
            <p className="text-gray-800 mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDish;
