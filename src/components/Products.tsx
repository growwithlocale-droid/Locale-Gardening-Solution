import React from 'react';
import { Sprout, Package, Droplets, TreePine, Palette, ArrowRight, Leaf } from 'lucide-react';

const Products = () => {
  const productCategories = [
    {
      icon: <Sprout className="h-10 w-10 text-[#a3b18a]" />,
      title: "Saplings & Seeds Delivery",
      description: "Grow your own garden from carefully nurtured saplings and seeds. Available for homes, rooftops, balconies, and offices.",
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Leafy Trees", "Flowering Plants", "Vegetable & Fruit Plants", "Custom Garden Kits (Tailored to space & needs)"]
    },
    {
      icon: <Package className="h-10 w-10 text-[#a3b18a]" />,
      title: "Organic Soil & Natural Inputs",
      description: "Ensure healthy, chemical-free plant growth with organic nourishment.",
      image: "https://i.pinimg.com/1200x/cb/8b/51/cb8b51899674c2cae6ccd96eab5fd1a5.jpg",
      features: ["Plant-Specific Soil Mixes (Veggie, Bloom, Succulent, etc.)", "Vermicompost & Cow Dung Manure", "Neem Cake & Mustard Cake Fertilizer", "Bio-Enzymes & Natural Pest Control Solutions"],
      highlight: "100% Organic | No Synthetic Chemicals | Pollinator-Safe"
    },
    {
      icon: <Droplets className="h-10 w-10 text-[#a3b18a]" />,
      title: "Smart Irrigation Kits",
      description: "Efficient water usage meets smart gardening.",
      image: "https://i.pinimg.com/1200x/5a/dd/52/5add52c003e75c00775a8a47d107abcf.jpg",
      features: ["IoT & Non-IoT Sprinkler Systems", "Soil Moisture Sensors", "Rainwater Harvesting Integration Kits"],
      highlight: "Designed for sustainable water use and remote garden care."
    },
    {
      icon: <TreePine className="h-10 w-10 text-[#a3b18a]" />,
      title: "Planters & Grow Systems",
      description: "Modern, modular solutions for space-efficient gardening.",
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: ["Self-Watering Pots (Reduce water waste)", "Modular Vertical Garden Panels", "Hydroponic & Aquaponic Starter Kits", "Window & Balcony Planters"],
      highlight: "Perfect for apartments, rooftops, and compact spaces."
    },
    {
      icon: <Palette className="h-10 w-10 text-[#a3b18a]" />,
      title: "Eco Décor & Organic Gift Items",
      description: "Green living made beautiful and giftable.",
      image: "https://i.pinimg.com/736x/e5/0a/19/e50a19164b8a4f8b289761a7ca7b8d39.jpg",
      features: ["Preserved Moss Wall Art (Low-maintenance, aesthetic decor)", "Organic Goodies: Honey, Soaps, Candles, Jams, Jellies, Sauces", "Herbal Wellness Gift Kits (Curated for festivals, events, and corporate gifting)"]
    }
  ];

  const featuredProducts = [
    {
      title: "Custom Garden Kit",
      description: "Complete starter kit tailored to your space and needs",
      price: "₹4,999",
      image: "https://i.pinimg.com/1200x/2a/df/a9/2adfa99c9f975d5c396cfd18f419859b.jpg"
    },
    {
      title: "Smart Irrigation System",
      description: "IoT-enabled watering system with moisture sensors",
      price: "₹12,999",
      image: "https://i.pinimg.com/1200x/ba/15/96/ba1596b1983f3b1cd4fc933673ebff91.jpg"
    },
    {
      title: "Herbal Wellness Gift Kit",
      description: "Curated organic goodies perfect for gifting",
      price: "₹2,499",
      image: "https://i.pinimg.com/1200x/33/13/9d/33139d98ea4bd1054000853cbe5c1ac3.jpg"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#344e41] mb-4">
            Innovative Garden Products
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
            Designed for conscious gardeners who value functionality, sustainability, and beauty.
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
                <h3 className="font-heading text-xl text-[#344e41] mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#a3b18a] rounded-full"></div>
                      <span className="font-body text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                {category.highlight && (
                  <div className="bg-[#dad7cd] bg-opacity-30 rounded-lg p-3 text-center">
                    <p className="font-body text-sm font-medium text-[#344e41]">
                      {category.highlight}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-[#dad7cd] bg-opacity-30 rounded-3xl p-8 lg:p-12 mb-12">
          <h3 className="font-heading text-3xl text-[#344e41] mb-8 text-center">
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
                  <h4 className="font-heading text-xl text-[#344e41] mb-2">
                    {product.title}
                  </h4>
                  <p className="font-body text-gray-700 mb-4">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading text-2xl text-[#344e41]">
                      {product.price}
                    </span>
                    <button className="font-body bg-[#a3b18a] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
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
          <h3 className="font-heading text-3xl text-[#344e41] mb-6">
            Shop with Purpose
          </h3>
          <p className="font-body text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We're not just selling garden tools — we're helping you grow a greener life. All products are:
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="font-body text-lg font-medium text-[#344e41]">Organic</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="font-body text-lg font-medium text-[#344e41]">Sustainably Sourced</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#a3b18a] rounded-full"></div>
              <span className="font-body text-lg font-medium text-[#344e41]">Made for Indian Climates</span>
            </div>
          </div>
          <div className="bg-[#dad7cd] bg-opacity-30 rounded-2xl p-6 mb-8">
            <p className="font-body text-lg text-[#344e41]">
              🌐 Available at our Online Store & Local-e Experience Center<br />
              📦 Custom kits & seasonal subscriptions available
            </p>
          </div>
          <button className="font-body bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto text-lg">
            <span>Browse All Products</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;