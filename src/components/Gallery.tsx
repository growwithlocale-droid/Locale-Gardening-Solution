import React from 'react';

const Gallery = () => {
  const projects = [
    {
      image: "https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Urban Rooftop Garden",
      description: "Complete transformation of a 500 sq ft terrace into a productive vegetable garden"
    },
    {
      image: "https://images.pexels.com/photos/5699466/pexels-photo-5699466.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Vertical Living Wall",
      description: "Space-saving vertical garden solution for apartment balcony"
    },
    {
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Smart Hydroponic Setup",
      description: "IoT-enabled hydroponic system for year-round fresh herbs"
    },
    {
      image: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Moss Art Installation",
      description: "Preserved moss wall art for corporate office reception"
    },
    {
      image: "https://images.pexels.com/photos/4503733/pexels-photo-4503733.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Kitchen Garden Makeover",
      description: "Organic kitchen garden with automated irrigation system"
    },
    {
      image: "https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Indoor Plant Paradise",
      description: "Complete interior landscaping with air-purifying plants"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#344e41] mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover the beautiful transformations we've created for homes, offices, and communities across the city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;