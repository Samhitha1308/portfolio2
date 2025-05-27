import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-indigo-600">PORTFOLIO</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition">Skills</a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">Projects</a>
          <a href="#education" className="text-gray-700 hover:text-indigo-600 transition">Education</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#education" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;