
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-olive-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logoImage} alt="Logo" className="h-8 mr-2" />
              <span className="text-xl">🍔</span>
            </div>
            <p className="text-sm mb-4">
              Jalan Semanggi Baru, Telaga <br />
              Murni Cikarang Barat, Kab. Bekasi
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Career</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">How It Work</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Shipping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Get In Touch</h3>
            <ul className="space-y-2">
              <li className="text-sm">+62 896 7652 2960</li>
              <li className="text-sm">food@layup.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>© 2023 LovableFood. ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
