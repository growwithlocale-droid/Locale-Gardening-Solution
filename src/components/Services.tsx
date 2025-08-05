import React from 'react';
import { Sprout, Settings, Building, Palette, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="h-12 w-12 text-[#a3b18a]" />,
      title: "Advanced & Specialized Gardens",
      description: "From customizable kitchen gardens to butterfly sanctuaries and aquaponic systems for sustainable living.",
      features: ["Customizable Gardens (Kitchen, Medicinal, Herb)", "Butterfly & Pollinator Gardens", "Aquaponic Systems", "Terrarium Creation", "Miyawaki Forest Patches"]
    },
    {
      icon: <Settings className="h-12 w-12 text-[#a3b18a]" />,
      title: "Smart & Digital Gardening",
      description: "IoT-enabled systems with voice control, remote monitoring, and climate-adaptive solutions for modern gardening.",
      features: ["IoT & Non-IoT Sprinkler Systems", "Voice-Controlled Garden Systems", "Remote Garden Monitoring", "LED Grow Light Systems", "Soil Moisture Sensors"]
    },
    {
      icon: <Building className="h-12 w-12 text-[#a3b18a]" />,
      title: "Urban & Interior Integration",
      description: "Space-optimized solutions including vertical gardens, hydroponic systems, and moss art for modern urban living.",
      features: ["Wall Gardens (Vertical Gardens)", "Balcony & Window Gardens", "Hydroponic Gardens", "Moss Art & Decoration", "Interior Garden Design"]
    },
    {
      icon: <Palette className="h-12 w-12 text-[#a3b18a]" />,
      title: "Lifestyle & Wellness Integration",
      description: "Gardens designed for holistic living with aromatherapy, meditation zones, and family-friendly spaces.",
      features: ["Edible Landscaping", "Aromatherapy Gardens", "Yoga & Meditation Zones", "Pet-Friendly Garden Layouts", "Child-Friendly Green Spaces"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#dad7cd] bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#344e41] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From soil to sensors, we handle it all with customized, modern, and sustainable gardening solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#344e41] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Soil Culture Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#344e41] mb-4">
              Soil Culture – Our Living Foundation
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Local-e, we know that great gardens start from the ground up. That's why we provide plant-specific, organic soil mixes and treatments—no synthetic fertilizers, ever.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#344e41]">Custom Soil Mixes</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Veggie Boost Mix</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Bloom Booster Mix</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Succulent & Cactus Mix</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Herbal Root Mix</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#344e41]">Specialized Blends</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Orchid Bark Blend</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Microgreen Medium</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Hydroponic Substrate</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-[#344e41]">Soil Treatments</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Soil Testing & Diagnostics</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Bioactivation & Enrichment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Soil Revitalization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6 text-center">
            <p className="text-lg font-semibold text-[#344e41]">
              ❌ No Chemical Fertilizers | ✅ 100% Organic | 🐾 Safe for Children, Pets, and Pollinators
            </p>
          </div>
        </div>

        {/* Extended Support Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <h3 className="text-3xl font-bold text-[#344e41] mb-8 text-center">
            Extended Garden Support & Add-Ons
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">"Plants on Vacation" Pickup/Drop Service</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Rainwater Harvesting Systems</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Waste-to-Compost Units</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Seasonal Garden Makeovers</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                <span className="text-gray-700">Routine Maintenance Plans</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto text-lg">
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;