import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-[#344e41]" />
            <span className="font-heading text-2xl text-[#344e41]">Local-e</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Home</a>
            <a href="#about" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">About</a>
            <a href="#services" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Services</a>
            <a href="#products" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Products</a>
            <a href="#sustainability" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Sustainability</a>
            <a href="#gallery" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Gallery</a>
            <a href="#blog" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Blog</a>
            <a href="#contact" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <button className="font-body hidden lg:block bg-[#344e41] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Book a Site Visit
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#344e41] hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Home</a>
              <a href="#about" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">About</a>
              <a href="#services" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Services</a>
              <a href="#products" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Products</a>
              <a href="#sustainability" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Sustainability</a>
              <a href="#gallery" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Gallery</a>
              <a href="#blog" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Blog</a>
              <a href="#contact" className="font-body text-gray-700 hover:text-[#344e41] transition-colors">Contact</a>
              <button className="font-body bg-[#344e41] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all self-start">
                Book a Site Visit
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;