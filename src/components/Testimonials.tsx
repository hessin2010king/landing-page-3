
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Neura Silvana',
    image: './src/assets/person-one.jpg',
    rating: 5,
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus"',
  },
  {
    id: 2,
    name: 'Azura',
    image: './src/assets/person-two.jpg',
    rating: 5,
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus"',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div className="flex flex-col gap-2">
              <img src="./src/assets/aboutus-upper-dish.png" alt="Food 1" className="w-full h-32 object-cover rounded-lg" />
              <div className="grid grid-cols-2 gap-2">
                <img src="./src/assets/aboutus-left-dish.png" alt="Food 2" className="w-full h-32 object-cover rounded-lg rotate-180" />
                <img src="./src/assets/aboutus-right-dish.png" alt="Food 3" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-2xl font-bold mb-8">
              What Our Customers Say About Us
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <div className="flex text-amber-500">
                        {'★'.repeat(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
