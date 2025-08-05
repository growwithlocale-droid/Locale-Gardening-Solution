import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Leaf } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1920"
        >
          {/* Placeholder video - user will upload their own later */}
          <source src="https://videos.pexels.com/video-files/8549518/8549518-uhd_2560_1440_25fps.mp4 />
          {/* Fallback image for browsers that don't support video */}
          <img 
            src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Gardening background"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Video Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Bring Nature Home with Local-e
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-md font-medium">
              Custom gardening solutions for Indian homes, offices & rooftops.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button className="bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#344e41] transition-all duration-300 transform hover:scale-105 text-lg font-semibold backdrop-blur-sm">
                Shop Eco Products
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Leaf Animation */}
      <div className="absolute top-1/4 left-10 animate-float hidden lg:block">
        <Leaf className="h-8 w-8 text-white opacity-60 drop-shadow-lg" />
      </div>
      <div className="absolute top-1/3 right-16 animate-float-delayed hidden lg:block">
        <Leaf className="h-6 w-6 text-white opacity-40 drop-shadow-lg" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-float-slow hidden lg:block">
        <Leaf className="h-7 w-7 text-white opacity-50 drop-shadow-lg" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2 opacity-80">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
