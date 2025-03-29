
import React, { useEffect } from 'react';
import { Trophy } from 'lucide-react';

const Awards = () => {
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

  const awards = [
    {
      title: "Best Digital Innovation",
      organization: "Tech Excellence Awards",
      year: "2023",
      icon: "🏆",
      description: "Recognized for groundbreaking digital solutions that drive business transformation"
    },
    {
      title: "UX Design of the Year",
      organization: "International Design Association",
      year: "2022",
      icon: "🎨",
      description: "Awarded for exceptional user experience design in financial technology applications"
    },
    {
      title: "Top 10 Technology Consultants",
      organization: "Business Tech Magazine",
      year: "2022",
      icon: "🌟",
      description: "Listed among the top technology consulting firms delivering impactful digital solutions"
    },
    {
      title: "Innovation in AI Implementation",
      organization: "Global Tech Summit",
      year: "2021",
      icon: "🤖",
      description: "Recognized for innovative use of artificial intelligence in business applications"
    }
  ];

  return (
    <section id="awards" className="bg-tectera-blue text-white section-padding overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-4">
            <Trophy size={32} className="text-tectera-orange" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Awards & Recognition
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Our commitment to excellence has been recognized by industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4">{award.icon}</div>
              <h3 className="text-xl font-bold text-tectera-orange mb-2">{award.title}</h3>
              <p className="text-gray-300 text-sm mb-1">{award.organization}</p>
              <p className="text-gray-400 text-xs mb-4">{award.year}</p>
              <p className="text-gray-200 text-sm">{award.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {["Forbes", "TechCrunch", "WIRED", "Bloomberg"].map((partner, index) => (
              <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="text-2xl md:text-3xl font-bold text-white/80">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave decoration at the bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,112C96,96,192,64,288,80C384,96,480,160,576,160C672,160,768,96,864,90.7C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Awards;
