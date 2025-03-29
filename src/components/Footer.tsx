
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-tectera-blue text-white relative">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h1 className="font-montserrat font-extrabold text-3xl mb-6">
              <span className="bg-gradient-to-r from-white to-tectera-orange-light text-transparent bg-clip-text">TECTERA</span>
            </h1>
            <p className="text-gray-300 mb-6">
              Transforming ideas into digital reality with innovative solutions tailored for your business success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tectera-orange transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tectera-orange transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tectera-orange transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-tectera-orange transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Mobile Applications</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Custom Software</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">AI Integration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Data Analytics</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Services</a></li>
              <li><a href="#process" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Process</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-tectera-orange transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-l-lg flex-grow text-gray-800 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-tectera-orange text-white px-4 py-2 rounded-r-lg hover:bg-tectera-orange-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Tectera. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-tectera-orange text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-tectera-orange text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-tectera-orange text-sm transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
      
      {/* Scroll To Top Button */}
      <button 
        className="absolute bottom-10 right-10 w-12 h-12 bg-tectera-orange rounded-full flex items-center justify-center shadow-lg hover:bg-tectera-orange-light transition-colors duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
