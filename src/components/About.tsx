
import React, { useEffect } from 'react';
import { Check } from 'lucide-react';

const About = () => {
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

  const benefits = [
    "Expert team with diverse technical skills",
    "Customized solutions tailored to your needs",
    "Transparent communication throughout the project",
    "Agile development methodology for faster delivery",
    "Dedicated support even after project delivery",
    "Cost-effective solutions with long-term value"
  ];

  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tectera-orange/20 rounded-lg -z-0 animate-pulse-slow"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-tectera-blue/20 rounded-lg -z-0 animate-pulse-slow"></div>
          </div>

          <div className="space-y-6 reveal">
            <h6 className="text-tectera-orange font-semibold text-lg">About Tectera</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-tectera-blue">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-gray-600 text-lg">
              Founded in 2010, Tectera has been at the forefront of digital innovation, helping businesses across various industries harness the power of technology to achieve their goals.
            </p>
            <p className="text-gray-600">
              Our team of experienced developers, designers, and strategists work together to deliver exceptional solutions that drive growth and efficiency for our clients. We believe in building long-term relationships and becoming true partners in your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <Check className="h-5 w-5 text-tectera-orange" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a 
                href="#process" 
                className="inline-flex items-center text-tectera-blue font-semibold hover:text-tectera-orange transition-colors duration-300"
              >
                Learn About Our Process
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
