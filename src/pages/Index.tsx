
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Awards from '@/components/Awards';

const Index = () => {
  useEffect(() => {
    // Enhanced reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active');
        }
      });
    };
    
    // Initialize modern typing animation
    const initializeTypingAnimation = () => {
      const letters = document.querySelectorAll('.modern-typing .letter');
      
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('visible');
        }, index * 120);
      });
    };
    
    // Initialize scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to reveal elements that are already visible
    handleScroll();
    
    // Initialize typing animation after a short delay
    setTimeout(() => {
      initializeTypingAnimation();
    }, 500);
    
    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
