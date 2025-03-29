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
      {/* Enhanced background decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-tectera-orange rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-tectera-blue-light rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-400 rounded-full opacity-20 blur-xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-orange-300 rounded-full opacity-20 blur-xl animate-float-rotate"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="text-white fancy-text-shadow">Digital Solutions </span>
              <br />
              <div className="modern-typing mt-2 text-3xl md:text-4xl lg:text-5xl space-x-1">
                <span className="letter">f</span>
                <span className="letter">o</span>
                <span className="letter">r</span>
                <span className="letter"> </span>
                <span className="letter">t</span>
                <span className="letter">h</span>
                <span className="letter">e</span>
                <span className="letter"> </span>
                <span className="letter">M</span>
                <span className="letter">o</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
                <span className="letter">r</span>
                <span className="letter">n</span>
                <span className="letter"> </span>
                <span className="letter">W</span>
                <span className="letter">o</span>
                <span className="letter">r</span>
                <span className="letter">l</span>
                <span className="letter">d</span>
              </div>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-100 max-w-xl fancy-text-shadow">
              Tectera helps businesses transform and thrive in the digital age with innovative solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#services" className="btn-hover-slide bg-tectera-orange hover:bg-tectera-orange-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 text-center">
                Explore Services
              </a>
              <a href="#contact" className="btn-hover-slide bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center">
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
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white/30 animate-float shadow-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-tectera-orange rounded-full flex items-center justify-center text-white font-bold animate-float-rotate shadow-lg">
                <span className="text-sm">Innovative</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-tectera-blue-light rounded-full flex items-center justify-center text-white font-bold animate-float shadow-lg">
                <span className="text-sm">Digital</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          <div className="stats-card bg-white/10 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 text-center">
            <h2 className="text-4xl font-bold text-tectera-orange text-glow animate-pulse-subtle">10+</h2>
            <p className="text-gray-500 mt-2 font-medium text-sm tracking-wide">Years<br/>Experience</p>
          </div>
          
          <div className="stats-card bg-white/10 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 text-center">
            <h2 className="text-4xl font-bold text-tectera-orange text-glow animate-pulse-subtle">200+</h2>
            <p className="text-gray-500 mt-2 font-medium text-sm tracking-wide">Projects<br/>Completed</p>
          </div>
          
          <div className="stats-card bg-white/10 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 text-center">
            <h2 className="text-4xl font-bold text-tectera-orange text-glow animate-pulse-subtle">50+</h2>
            <p className="text-gray-500 mt-2 font-medium text-sm tracking-wide">Team<br/>Members</p>
          </div>
          
          <div className="stats-card bg-white/10 p-6 rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300 text-center">
            <h2 className="text-4xl font-bold text-tectera-orange text-glow animate-pulse-subtle">99%</h2>
            <p className="text-gray-500 mt-2 font-medium text-sm tracking-wide">Client<br/>Satisfaction</p>
          </div>
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
