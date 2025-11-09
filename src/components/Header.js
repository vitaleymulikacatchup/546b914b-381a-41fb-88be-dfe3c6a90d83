import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-brand-green">
            A
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-brand-green transition-colors duration-300">
              Home
            </a>
            <a href="#about" className="text-white hover:text-brand-green transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-white hover:text-brand-green transition-colors duration-300">
              Projects
            </a>
            <a href="#testimonials" className="text-white hover:text-brand-green transition-colors duration-300">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-brand-green transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="bg-brand-green text-black px-4 py-2 rounded-full font-medium hover:bg-lime-400 transition-colors duration-300 flex items-center gap-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            MENU
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-brand-green transition-colors duration-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-brand-green transition-colors duration-300">
                About
              </a>
              <a href="#projects" className="text-white hover:text-brand-green transition-colors duration-300">
                Projects
              </a>
              <a href="#testimonials" className="text-white hover:text-brand-green transition-colors duration-300">
                Testimonials
              </a>
              <a href="#contact" className="text-white hover:text-brand-green transition-colors duration-300">
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;