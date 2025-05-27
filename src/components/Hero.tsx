import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-indigo-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-fadeIn">
              <span className="text-indigo-600">I'm </span>
              <br />SAMHITHA PUTTETI
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fadeIn animation-delay-300">
              Computer Science Engineer
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-lg animate-fadeIn animation-delay-500">
               Looking for secure and challenging position in a reputable organization to expand my knowledge and skills and eager to apply my skills in projects for effective growth.
            </p>
            <div className="flex space-x-4 animate-fadeIn animation-delay-700">
              <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition shadow-md">
                Contact Me
              </a>
              <a href="#projects" className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition shadow-sm">
                View My Work
              </a>
            </div>
            <div className="flex mt-8 space-x-4 animate-fadeIn animation-delay-1000">
              <a href="https://linkedin.com/in/samhitha-putteti-02a238226" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition">
                <Linkedin size={24} />
              </a>
              <a href="mailto:2100031096cseh@gmail.com" className="text-gray-600 hover:text-indigo-600 transition">
                <Mail size={24} />
              </a>
              <a href="https://github.com/Samhitha1308" className="text-gray-600 hover:text-indigo-600 transition">
                <Github size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-600 bg-opacity-10 border-4 border-indigo-600 border-opacity-30 flex items-center justify-center overflow-hidden animate-fadeIn animation-delay-300">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional headshot" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;