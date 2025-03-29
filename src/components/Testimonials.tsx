
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechInnova",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "Working with Tectera has been a game-changer for our business. Their team delivered a cutting-edge solution that exceeded our expectations and helped us increase our customer engagement by 75%."
    },
    {
      name: "Michael Chen",
      position: "CTO, FinanceFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "The expertise and professionalism of the Tectera team is unmatched. They took our complex requirements and transformed them into an intuitive, user-friendly system that has revolutionized our operations."
    },
    {
      name: "Amanda Rodriguez",
      position: "Marketing Director, EcoSmart",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      rating: 5,
      text: "From conception to execution, Tectera demonstrated exceptional creativity and technical skill. They didn't just meet our project goals - they provided strategic insights that added tremendous value to our business."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <section id="testimonials" className="bg-gray-50 section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 reveal">
          <h6 className="text-tectera-orange font-semibold text-lg">Testimonials</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-tectera-blue mt-2">
            Client Feedback
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Here's what our clients have to say about their experience working with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto reveal">
          <div className="absolute -top-14 -left-14 text-tectera-orange/10">
            <Quote size={120} />
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-tectera-orange/20">
                  <img 
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-2">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-tectera-orange text-tectera-orange" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-lg italic mb-6">"{testimonials[currentTestimonial].text}"</p>
                
                <div>
                  <h4 className="font-bold text-tectera-blue text-xl">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-5 right-10 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-tectera-blue hover:bg-tectera-blue hover:text-white transition-colors duration-300 shadow-md"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-tectera-blue hover:bg-tectera-blue hover:text-white transition-colors duration-300 shadow-md"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-tectera-orange w-10' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
