
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-olive-800 absolute w-full z-10 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white font-medium nav-link">Home</a>
            <a href="#about" className="text-white font-medium nav-link">About Us</a>
            <a href="#menu" className="text-white font-medium nav-link">Menu</a>
            <a href="#contact" className="text-white font-medium nav-link">Contact Us</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 bg-white bg-opacity-90 rounded-md shadow-lg animate-fade-in">
            <div className="flex flex-col px-4 py-2">
              <a href="#" className="py-2 text-olive-800 hover:text-amber-500" onClick={toggleMenu}>Home</a>
              <a href="#about" className="py-2 text-olive-800 hover:text-amber-500" onClick={toggleMenu}>About Us</a>
              <a href="#menu" className="py-2 text-olive-800 hover:text-amber-500" onClick={toggleMenu}>Menu</a>
              <a href="#contact" className="py-2 text-olive-800 hover:text-amber-500" onClick={toggleMenu}>Contact Us</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
