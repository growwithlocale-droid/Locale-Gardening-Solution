import React from 'react';
import { Package, Droplets, TreePine, Palette, Battery, ArrowRight } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: <Package className="h-10 w-10 text-[#a3b18a]" />,
      title: "Organic Soil & Inputs",
      description: "Plant-specific soil mixes, vermicompost, neem cake, and bio-enzymes for healthy plant growth.",
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Plant-Specific Soil Mixes", "Vermicompost & Cow Dung Manure", "Neem Cake, Mustard Cake", "Bio-Enzymes & Natural Pest Solutions"]
    },
    {
      icon: <Droplets className="h-10 w-10 text-[#a3b18a]" />,
      title: "Smart Irrigation Kits",
      description: "IoT-enabled sprinkler systems, soil moisture sensors, and rainwater harvest integration.",
      image: "https://images.pexels.com/photos/4503733/pexels-photo-4503733.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["IoT & Non-IoT Sprinkler Systems", "Soil Moisture Sensors", "Rainwater Harvest Kits", "Voice-Enabled Timers"]
    },
    {
      icon: <TreePine className="h-10 w-10 text-[#a3b18a]" />,
      title: "Planters & Grow Systems",
      description: "Self-watering pots, vertical garden panels, and hydroponic starter kits for modern gardening.",
      image: "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Self-Watering Pots", "Modular Vertical Panels", "Hydroponic & Aquaponic Kits", "Window & Balcony Planters"]
    },
    {
      icon: <Palette className="h-10 w-10 text-[#a3b18a]" />,
      title: "Eco Decor & Green Gifting",
      description: "Preserved moss wall art, bamboo accessories, and herbal gift kits for conscious living.",
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Preserved Moss Wall Art", "Bamboo & Clay Accessories", "Upcycled Planters", "Terrariums & Herbal Gift Kits"]
    },
    {
      icon: <Battery className="h-10 w-10 text-[#a3b18a]" />,
      title: "Green Tech Tools",
      description: "Solar lighting, smart monitoring devices, and voice-controlled systems for modern gardens.",
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=400",
      features: ["Solar Garden Lighting", "Smart Plant Monitoring", "Voice-Controlled Watering", "Indoor Grow Lights"]
    }
  ];

  const featuredProducts = [
    {
      title: "IoT Garden Hub",
      description: "Smart control center for your entire garden ecosystem",
      price: "₹12,999",
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Vertical Garden Kit",
      description: "Complete modular system for space-saving gardening",
      price: "₹8,499",
      image: "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Moss Art Frame",
      description: "Preserved moss wall art for natural indoor décor",
      price: "₹3,999",
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#344e41] mb-4">
            Innovative Garden Products
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our product line is designed for conscious gardeners looking for functionality, sustainability, and beauty.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#344e41] mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-[#dad7cd] bg-opacity-30 rounded-3xl p-8 lg:p-12 mb-12">
          <h3 className="text-3xl font-bold text-[#344e41] mb-8 text-center">
            Featured Products
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#344e41] mb-2">
                    {product.title}
                  </h4>
                  <p className="text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#344e41]">
                      {product.price}
                    </span>
                    <button className="bg-[#a3b18a] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop with Purpose Section */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-[#344e41] mb-6">
            Shop with Purpose
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We're not just selling garden tools — we're helping you grow a greener life. All products are:
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="text-lg font-semibold text-[#344e41]">Organic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="text-lg font-semibold text-[#344e41]">Sustainably Sourced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="text-lg font-semibold text-[#344e41]">Made for Indian Climates</span>
            </div>
          </div>
          <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6 mb-8">
            <p className="text-lg text-[#344e41]">
              🌐 Available at our Online Store & Local-e Experience Center<br />
              📦 Custom kits & seasonal subscriptions available
            </p>
          </div>
          <button className="bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto text-lg">
            <span>Browse All Products</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;