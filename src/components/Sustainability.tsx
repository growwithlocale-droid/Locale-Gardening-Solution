import React from 'react';
import { Leaf, Droplet, Recycle, Sun } from 'lucide-react';

const Sustainability = () => {
  const principles = [
    {
      icon: <Leaf className="h-12 w-12 text-[#a3b18a]" />,
      title: "Native Plants",
      description: "We prioritize indigenous species that thrive naturally in local conditions, reducing water needs and supporting local ecosystems."
    },
    {
      icon: <Droplet className="h-12 w-12 text-[#a3b18a]" />,
      title: "Smart Irrigation",
      description: "Water-efficient systems with rainwater harvesting and moisture sensors to minimize waste while keeping plants healthy."
    },
    {
      icon: <Recycle className="h-12 w-12 text-[#a3b18a]" />,
      title: "Zero Chemicals",
      description: "100% organic methods using natural compost, bio-pesticides, and beneficial microorganisms for plant health."
    },
    {
      icon: <Sun className="h-12 w-12 text-[#a3b18a]" />,
      title: "Solar Integration",
      description: "Renewable energy solutions for garden lighting, irrigation pumps, and smart monitoring systems."
    }
  ];

  return (
    <section id="sustainability" className="py-20 bg-[#dad7cd] bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#344e41] mb-4">
            Sustainable by Design
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We use native plants, organic soil, zero-chemical methods, and smart irrigation systems to create gardens that are good for you and the planet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="mb-6 flex justify-center">
                {principle.icon}
              </div>
              <h3 className="text-xl font-bold text-[#344e41] mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#344e41] mb-6">
                Our Environmental Impact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#a3b18a] rounded-full p-3">
                    <span className="text-white font-bold">0%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#344e41]">Chemical Fertilizers</p>
                    <p className="text-gray-600">All organic, natural inputs only</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#a3b18a] rounded-full p-3">
                    <span className="text-white font-bold">80%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#344e41]">Water Savings</p>
                    <p className="text-gray-600">Through smart irrigation and native plants</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#a3b18a] rounded-full p-3">
                    <span className="text-white font-bold">100%</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#344e41]">Local Sourcing</p>
                    <p className="text-gray-600">Supporting local suppliers and communities</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Sustainable gardening practices" 
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;