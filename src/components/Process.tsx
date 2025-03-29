
import React, { useEffect } from 'react';
import { Search, FileText, Code, CheckCircle2, Zap } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and requirements to ensure our solution aligns with your vision.",
      color: "bg-tectera-blue"
    },
    {
      icon: <FileText className="h-12 w-12 text-white" />,
      title: "Planning",
      description: "Our team creates a detailed roadmap with timelines, milestones, and deliverables to keep the project on track.",
      color: "bg-tectera-orange"
    },
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: "Development",
      description: "Using the latest technologies and best practices, we build your solution with a focus on quality, security, and scalability.",
      color: "bg-tectera-blue"
    },
    {
      icon: <CheckCircle2 className="h-12 w-12 text-white" />,
      title: "Testing",
      description: "Rigorous testing ensures your solution works flawlessly across all devices and platforms before launch.",
      color: "bg-tectera-orange"
    },
    {
      icon: <Zap className="h-12 w-12 text-white" />,
      title: "Launch & Support",
      description: "We help you launch your solution and provide ongoing support to ensure its continued success.",
      color: "bg-tectera-blue"
    }
  ];

  return (
    <section id="process" className="bg-white section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h6 className="text-tectera-orange font-semibold text-lg mb-2">Our Process</h6>
          <h2 className="text-3xl md:text-4xl font-bold text-tectera-blue mb-4">How We Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our proven methodology ensures consistent, high-quality results for every project, delivered on time and within budget.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg relative`}>
                  {step.icon}
                  <div className="absolute -top-3 -right-3 bg-white rounded-full w-8 h-8 flex items-center justify-center text-tectera-blue font-bold shadow">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-gray-50 rounded-xl shadow-md reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-tectera-blue mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-4">
                Let's discuss how we can help bring your ideas to life and create a solution that drives your business forward.
              </p>
              <a 
                href="#contact" 
                className="bg-tectera-orange hover:bg-tectera-orange-light text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
              >
                Get in Touch
              </a>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Start Your Project" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
