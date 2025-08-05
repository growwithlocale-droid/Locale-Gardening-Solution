import React from 'react';
import { Leaf, Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#344e41] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="h-8 w-8 text-[#a3b18a]" />
                <span className="text-2xl font-bold">Local-e</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Bringing nature home with eco-friendly, customizable gardening services for homes and workspaces. 
                Creating sustainable green spaces using local materials and organic methods.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#a3b18a] p-2 rounded-lg hover:bg-opacity-80 transition-all">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#a3b18a] p-2 rounded-lg hover:bg-opacity-80 transition-all">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#a3b18a] p-2 rounded-lg hover:bg-opacity-80 transition-all">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-[#a3b18a] p-2 rounded-lg hover:bg-opacity-80 transition-all">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-300 hover:text-[#a3b18a] transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-[#a3b18a] transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-[#a3b18a] transition-colors">Services</a></li>
                <li><a href="#products" className="text-gray-300 hover:text-[#a3b18a] transition-colors">Products</a></li>
                <li><a href="#sustainability" className="text-gray-300 hover:text-[#a3b18a] transition-colors">Sustainability</a></li>
                <li><a href="#gallery" className="text-gray-300 hover:text-[#a3b18a] transition-colors">Gallery</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#a3b18a]" />
                  <span className="text-gray-300">hello@local-e.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#a3b18a]" />
                  <span className="text-gray-300">+91 98765 43210</span>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-[#a3b18a] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Book a Site Visit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Local-e Gardening Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#a3b18a] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#a3b18a] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#a3b18a] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;