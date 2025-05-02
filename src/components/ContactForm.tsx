
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactForm: React.FC = () => {
  return (
    <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(/assets/images/contact-background.png)' }} id="contact">
      <div className="absolute inset-0 overlay-dark"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto bg-cream rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6 text-olive-800">GET IN TOUCH</h2>
          
          <form>
            <div className="mb-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="input-field"
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="tel" 
                placeholder="Phone" 
                className="input-field"
              />
            </div>
            
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Mail" 
                className="input-field"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-olive-700 hover:bg-olive-800 text-white"
            >
              SEND
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
