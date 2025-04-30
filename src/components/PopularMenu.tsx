
import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  image: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Lorem ipsum',
    image: '/placeholder.svg',
    price: '$14.99',
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    image: '/placeholder.svg',
    price: '$12.99',
  },
  {
    id: 3,
    name: 'Lorem ipsum',
    image: '/placeholder.svg',
    price: '$9.99',
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    image: '/placeholder.svg',
    price: '$10.99',
  },
];

const PopularMenu: React.FC = () => {
  return (
    <section className="py-12" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Taste the favorites, our Popular Menu
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <div key={item.id} className="food-card">
              <div className="h-[240px] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium">{item.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">⭐ 4.8</span>
                  </div>
                  <span className="font-bold">{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
