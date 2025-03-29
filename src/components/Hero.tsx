
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Animation for the hero section
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

    // Trigger once on load to reveal elements that are already visible
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-tectera-blue text-white overflow-hidden">
      {/* Background gradient decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-tectera-orange rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tectera-blue-light rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white">Digital Solutions </span>
              <span className="bg-gradient-to-r from-tectera-orange to-tectera-orange-light text-transparent bg-clip-text">for the Modern World</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 max-w-xl">
              Tectera helps businesses transform and thrive in the digital age with innovative solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#services" className="bg-tectera-orange hover:bg-tectera-orange-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center animate-bounce-gentle">
                Explore Services
              </a>
              <a href="#contact" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end reveal">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-tectera-blue-light to-tectera-orange-light rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Digital Technology" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/30 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {[
            { title: '10+', subtitle: 'Years Experience' },
            { title: '200+', subtitle: 'Projects Completed' },
            { title: '50+', subtitle: 'Team Members' },
            { title: '99%', subtitle: 'Client Satisfaction' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">{stat.title}</h2>
              <p className="text-gray-300 mt-2">{stat.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Wave decoration at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,96C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
