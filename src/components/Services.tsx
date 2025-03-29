
import React, { useEffect } from 'react';
import { Code, Globe, PenTool, Smartphone, Cpu, BarChart3 } from 'lucide-react';

const Services = () => {
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

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-tectera-blue" />,
      title: "Web Development",
      description: "Custom websites designed to meet your business needs with responsive design and modern frameworks."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-tectera-blue" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that provide seamless user experiences."
    },
    {
      icon: <Code className="h-10 w-10 text-tectera-blue" />,
      title: "Custom Software",
      description: "Tailor-made software solutions to address specific business challenges and enhance productivity."
    },
    {
      icon: <Cpu className="h-10 w-10 text-tectera-blue" />,
      title: "AI Integration",
      description: "Implementing artificial intelligence to optimize processes and deliver better insights."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-tectera-blue" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <PenTool className="h-10 w-10 text-tectera-blue" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces that enhance the overall user experience."
    }
  ];

  return (
    <section id="services" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h6 className="text-tectera-orange font-semibold text-lg mb-2">Our Services</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-tectera-blue mb-4">What We Offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive digital solutions to help your business grow and succeed in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 p-3 bg-gray-100 rounded-full inline-block group-hover:bg-tectera-orange/10 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-tectera-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a 
            href="#contact" 
            className="bg-gradient-to-r from-tectera-blue to-tectera-blue-light hover:from-tectera-blue-light hover:to-tectera-blue text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
          >
            Get Started with Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
