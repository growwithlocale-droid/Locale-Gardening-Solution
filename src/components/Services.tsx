import React from 'react';
import { Sprout, Settings, Building, Palette, ArrowRight, Leaf, Droplets, TestTube } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sprout className="h-12 w-12 text-[#a3b18a]" />,
      title: "Customizable & Specialized Gardens",
      description: "Create personalized green spaces for sustainable and beautiful living.",
      coreOfferings: [
        "Flower Gardens (Orchid Specialization)",
        "Kitchen Gardens (Vegetables & Fruits)",
        "Herbal & Medicinal Plant Gardens",
        "Hydroponic Systems"
      ],
      upcomingSpecializations: [
        "Butterfly & Pollinator Gardens",
        "Bonsai Gardens",
        "Miyawaki Forest Patches"
      ]
    },
    {
      icon: <Settings className="h-12 w-12 text-[#a3b18a]" />,
      title: "Smart & Digital Gardening",
      description: "Modern gardens powered by technology for convenience and efficiency.",
      currentSolutions: [
        "IoT & Non-IoT Sprinkler Systems (Design + Setup)"
      ],
      comingSoon: [
        "Voice-Controlled Garden Monitoring",
        "Soil Moisture Sensors",
        "Remote Management Apps"
      ]
    },
    {
      icon: <Building className="h-12 w-12 text-[#a3b18a]" />,
      title: "Urban & Interior Green Design",
      description: "Space-saving greenery solutions for urban living and interior enhancement.",
      designServices: [
        "Vertical Wall Gardens",
        "Balcony & Window Gardens",
        "Indoor Hydroponic Gardens",
        "Moss Art & Decorative Installations"
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-[#a3b18a]" />,
      title: "Lifestyle & Wellness Integration",
      description: "Gardens that support holistic living and enhance well-being.",
      wellnessOptions: [
        "Urban Forests",
        "Aromatherapy Gardens",
        "Yoga & Meditation Zones",
        "Pet-Friendly Garden Layouts",
        "Child-Friendly Green Spaces"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#dad7cd] bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#344e41] mb-4">
            Our Services
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
            From soil to sensors, we handle it all with customized, modern, and sustainable gardening solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl text-[#344e41] mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-700 mb-6">
                {service.description}
              </p>
              
              {service.coreOfferings && (
                <div className="mb-4">
                  <h4 className="font-body text-lg font-medium text-[#344e41] mb-3">Core Offerings:</h4>
                  <ul className="space-y-2">
                    {service.coreOfferings.map((offering, offeringIndex) => (
                      <li key={offeringIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                        <span className="font-body text-gray-600">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.upcomingSpecializations && (
                <div className="mb-4">
                  <h4 className="font-body text-lg font-medium text-[#344e41] mb-3">Upcoming Specializations:</h4>
                  <ul className="space-y-2">
                    {service.upcomingSpecializations.map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full opacity-60"></div>
                        <span className="font-body text-gray-600 italic">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.currentSolutions && (
                <div className="mb-4">
                  <h4 className="font-body text-lg font-medium text-[#344e41] mb-3">Current Solutions:</h4>
                  <ul className="space-y-2">
                    {service.currentSolutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                        <span className="font-body text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.comingSoon && (
                <div className="mb-4">
                  <h4 className="font-body text-lg font-medium text-[#344e41] mb-3">Coming Soon:</h4>
                  <ul className="space-y-2">
                    {service.comingSoon.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full opacity-60"></div>
                        <span className="font-body text-gray-600 italic">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.designServices && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#344e41] mb-3">Design Services:</h4>
                  <ul className="space-y-2">
                    {service.designServices.map((design, designIndex) => (
                      <li key={designIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                        <span className="text-gray-600">{design}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.wellnessOptions && (
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-[#344e41] mb-3">Wellness Garden Options:</h4>
                  <ul className="space-y-2">
                    {service.wellnessOptions.map((option, optionIndex) => (
                      <li key={optionIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                        <span className="text-gray-600">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Soil Culture Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <TestTube className="h-12 w-12 text-[#a3b18a] mr-4" />
              <h3 className="text-3xl font-bold text-[#344e41]">
                Soil Culture – Our Foundation
              </h3>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              At Local-e, healthy soil is the heart of a thriving garden. We offer plant-specific, organic soil solutions—no chemical fertilizers, ever.
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
              <h4 className="text-xl font-bold text-[#344e41]">Soil Treatments & Testing</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="text-gray-700">Soil Diagnostics</span>
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
              ❌ No Chemical Fertilizers | ✅ 100% Organic | 🐾 Safe for Children, Pets & Pollinators
            </p>
          </div>
        </div>

        {/* Extended Garden Support Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Droplets className="h-12 w-12 text-[#a3b18a] mr-4" />
              <h3 className="text-3xl font-bold text-[#344e41]">
                Extended Garden Support & Add-Ons
              </h3>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Enhance and maintain your garden sustainably.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
          </div>

          <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6">
            <h4 className="text-xl font-bold text-[#344e41] mb-4 text-center">
              Maintenance Subscription Plans
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white rounded-lg p-4">
                <span className="text-lg font-semibold text-[#344e41]">Daily</span>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-lg font-semibold text-[#344e41]">Weekly</span>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-lg font-semibold text-[#344e41]">Monthly</span>
              </div>
              <div className="bg-white rounded-lg p-4">
                <span className="text-lg font-semibold text-[#344e41]">Quarterly</span>
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