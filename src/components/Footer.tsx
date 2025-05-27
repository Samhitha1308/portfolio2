import React from 'react';
import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">SAMHITHA PUTTETI</h2>
            <p className="text-gray-400">Computer Science Engineer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/samhitha-putteti-02a238226" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-indigo-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-indigo-400 transition"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:2100031096cseh@gmail.com" 
              className="text-gray-400 hover:text-indigo-400 transition"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Samhitha Putteti. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#about" className="text-gray-400 hover:text-white transition text-sm">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition text-sm">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition text-sm">Contact</a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;