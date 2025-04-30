
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FeaturedDish from '../components/FeaturedDish';
import PopularMenu from '../components/PopularMenu';
import SpecialsSection from '../components/SpecialsSection';
import Discount from '../components/Discount';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedDish />
      <PopularMenu />
      <SpecialsSection />
      <Discount />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
