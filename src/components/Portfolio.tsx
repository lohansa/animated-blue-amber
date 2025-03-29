
import React, { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      description: "A comprehensive e-commerce solution with payment integration and inventory management."
    },
    {
      title: "Healthcare App",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      description: "Appointment booking and patient management system for healthcare providers."
    },
    {
      title: "Financial Dashboard",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      description: "Interactive dashboard for financial analytics and transaction monitoring."
    },
    {
      title: "Smart Home System",
      category: "IoT Solution",
      image: "https://images.unsplash.com/photo-1558002038-1055e2dae2c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      description: "Integrated IoT solution for home automation and security management."
    }
  ];

  return (
    <section id="portfolio" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h6 className="text-tectera-orange font-semibold text-lg">Our Portfolio</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-tectera-blue mt-2">
            What We've Done So Far
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explore our diverse range of successful projects that showcase our expertise and commitment to excellence in digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tectera-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium">{item.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-tectera-blue mb-2 group-hover:text-tectera-orange transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-tectera-blue hover:bg-tectera-blue-light text-white font-semibold transition-colors duration-300"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
