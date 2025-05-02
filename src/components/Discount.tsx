
import React from 'react';

const Discount: React.FC = () => {
  return (
    <section className="py-12 bg-black text-white text-center relative" style={{ backgroundImage: 'url(/assets/images/discount-background.png)' }}>
      <div className="absolute inset-0 overlay-dark"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-2xl md:text-3xl font-medium mb-2">
          get discount up to
        </h2>
        <p className="text-4xl md:text-5xl font-bold">50%</p>
      </div>
    </section>
  );
};

export default Discount;
