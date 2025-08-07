import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sustainable gardening" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#344e41] mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Local-e, we design, build, and maintain sustainable green spaces using locally sourced materials and 100% organic methods.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We believe every space—no matter how small—can become a thriving ecosystem. Our passionate team of gardeners and sustainability experts craft custom gardening solutions to bring nature closer to your daily life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">100% Organic & Chemical-Free</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Locally Sourced Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Smart Technology Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;