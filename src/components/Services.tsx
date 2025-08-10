import React from 'react';
import { Home, Building2, Sprout, Wifi, Leaf, Users, Heart, Palette } from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: <Home className="h-12 w-12 text-[#a3b18a]" />,
      title: "Home Garden Design & Setup",
      description: "Transform your living space with custom garden solutions tailored to your home's unique environment.",
      features: [
        "Balcony & Terrace Gardens",
        "Kitchen Herb Gardens", 
        "Indoor Plant Arrangements",
        "Seasonal Garden Planning"
      ]
    },
    {
      icon: <Building2 className="h-12 w-12 text-[#a3b18a]" />,
      title: "Office & Commercial Spaces",
      description: "Create productive, healthy work environments with professional landscaping and plant installations.",
      features: [
        "Reception Area Landscaping",
        "Meeting Room Plant Walls",
        "Outdoor Corporate Gardens",
        "Air-Purifying Plant Systems"
      ]
    },
    {
      icon: <Sprout className="h-12 w-12 text-[#a3b18a]" />,
      title: "Rooftop & Vertical Gardens",
      description: "Maximize your space with innovative vertical growing systems and rooftop garden installations.",
      features: [
        "Space-Efficient Vertical Systems",
        "Rooftop Vegetable Gardens",
        "Living Wall Installations",
        "Modular Growing Solutions"
      ]
    },
    {
      icon: <Wifi className="h-12 w-12 text-[#a3b18a]" />,
      title: "Smart Garden Technology",
      description: "Integrate cutting-edge technology for automated, efficient garden management and monitoring.",
      features: [
        "IoT Irrigation Systems",
        "Smart Plant Monitoring",
        "Automated Nutrient Delivery",
        "Remote Garden Management"
      ]
    }
  ];

  const designServices = [
    "Aesthetic Plant Selection & Arrangement",
    "Functional Space Planning",
    "Lighting & Irrigation Integration",
    "Seasonal Color Schemes"
  ];

  const wellnessOptions = [
    "Meditation Garden Spaces",
    "Aromatherapy Plant Collections",
    "Stress-Relief Garden Designs",
    "Therapeutic Herb Gardens"
  ];

  const upcomingSpecializations = [
    "Butterfly & Pollinator Gardens",
    "Edible Landscape Design",
    "Rain Garden Systems",
    "Native Plant Restoration"
  ];

  const smartFeatures = [
    "AI-Powered Plant Health Monitoring",
    "Weather-Responsive Irrigation",
    "Mobile App Garden Control",
    "Predictive Maintenance Alerts"
  ];

  const supportServices = [
    {
      title: "Monthly Garden Care",
      description: "Regular maintenance visits to keep your garden thriving",
      price: "₹2,999/month"
    },
    {
      title: "Seasonal Plant Refresh",
      description: "Quarterly updates with new seasonal plants and arrangements",
      price: "₹4,999/quarter"
    },
    {
      title: "Emergency Plant Care",
      description: "On-demand support for plant health issues and problems",
      price: "₹999/visit"
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
            From design to maintenance, we provide comprehensive gardening solutions that bring nature into your everyday life.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl text-[#344e41] mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-700 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                    <span className="font-body text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Specialized Service Categories */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Urban & Interior Green Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="h-8 w-8 text-[#a3b18a]" />
              <h3 className="font-heading text-2xl text-[#344e41] font-medium">Urban & Interior Green Design</h3>
            </div>
            <p className="font-body text-gray-700 mb-6">
              Professional design services that blend aesthetics with functionality for modern living spaces.
            </p>
            <div className="space-y-3">
              {designServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="font-body text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle & Wellness Integration */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="h-8 w-8 text-[#a3b18a]" />
              <h3 className="font-heading text-2xl text-[#344e41] font-medium">Lifestyle & Wellness Integration</h3>
            </div>
            <p className="font-body text-gray-700 mb-6">
              Gardens designed to enhance your physical and mental well-being through thoughtful plant selection.
            </p>
            <div className="space-y-3">
              {wellnessOptions.map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="font-body text-gray-600">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soil Culture Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-[#344e41] mb-4">
              Soil Culture – Our Foundation
            </h3>
            <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
              We believe healthy soil is the foundation of any thriving garden. Our soil culture approach ensures your plants get the best possible start.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-[#a3b18a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-heading text-xl text-[#344e41] mb-3 font-medium">Organic Soil Mixes</h4>
              <p className="font-body text-gray-700">
                Custom-blended organic soil combinations tailored to specific plant types and growing conditions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#a3b18a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-heading text-xl text-[#344e41] mb-3 font-medium">Beneficial Microorganisms</h4>
              <p className="font-body text-gray-700">
                Introduction of helpful bacteria and fungi that support plant health and nutrient absorption.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#a3b18a] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sprout className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-heading text-xl text-[#344e41] mb-3 font-medium">Natural Fertilizers</h4>
              <p className="font-body text-gray-700">
                Compost, vermicast, and organic amendments that provide slow-release nutrition for sustained growth.
              </p>
            </div>
          </div>

          <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6 text-center">
            <p className="font-body text-lg text-[#344e41] font-medium">
              🌱 100% Chemical-Free | 🌍 Locally Sourced Materials | 🔬 Scientifically Balanced
            </p>
          </div>
        </div>

        {/* Future Services */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Customizable & Specialized Gardens */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-[#a3b18a]" />
              <h3 className="font-heading text-2xl text-[#344e41] font-medium italic">Upcoming Specializations</h3>
            </div>
            <p className="font-body text-gray-700 mb-6">
              Specialized garden types we're developing to meet diverse ecological and aesthetic needs.
            </p>
            <div className="space-y-3">
              {upcomingSpecializations.map((specialization, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="font-body text-gray-600">{specialization}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Smart & Digital Gardening */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Wifi className="h-8 w-8 text-[#a3b18a]" />
              <h3 className="font-heading text-2xl text-[#344e41] font-medium italic">Coming Soon</h3>
            </div>
            <p className="font-body text-gray-700 mb-6">
              Advanced smart gardening features we're developing to make garden care even more efficient and enjoyable.
            </p>
            <div className="space-y-3">
              {smartFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                  <span className="font-body text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extended Garden Support & Add-Ons */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl text-[#344e41] mb-4">
              Extended Garden Support & Add-Ons
            </h3>
            <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
              Keep your garden thriving with our comprehensive maintenance and support services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {supportServices.map((service, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition-all">
                <h4 className="font-heading text-xl text-[#344e41] mb-3 font-medium">{service.title}</h4>
                <p className="font-body text-gray-700 mb-4">{service.description}</p>
                <div className="font-body text-2xl text-[#a3b18a] font-medium mb-4">{service.price}</div>
                <button className="font-body bg-[#a3b18a] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6 mb-8">
              <p className="font-body text-lg text-[#344e41]">
                💡 <span className="font-body font-medium">Subscription Plans Available</span> - Save up to 20% with annual garden care packages
              </p>
            </div>
            <button className="font-body bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg">
              Explore All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;