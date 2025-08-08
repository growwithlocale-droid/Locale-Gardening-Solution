import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://i.pinimg.com/736x/9d/49/e1/9d49e138d9a09de6207bb589a6b1baa5.jpg" 
              alt="Sustainable gardening" 
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-4xl lg:text-5xl text-[#344e41] mb-6">
              Who We Are
            </h2>
            <p className="font-body text-lg text-gray-700 mb-4">
              At Local-e, we design, build, and maintain sustainable green spaces using locally sourced materials and 100% organic methods.
            </p>
            <p className="font-body text-lg text-gray-700 mb-8">
              We believe every space—no matter how small—can become a thriving ecosystem. Our passionate team of gardeners and sustainability experts craft custom gardening solutions to bring nature closer to your daily life.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="font-body text-gray-700">100% Organic & Chemical-Free</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="font-body text-gray-700">Locally Sourced Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="font-body text-gray-700">Smart Technology Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
