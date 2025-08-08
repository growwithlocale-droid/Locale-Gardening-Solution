import React from 'react';

const Gallery = () => {
  const projects = [
    {
      image: "https://i.pinimg.com/736x/96/d0/db/96d0db1738c1630d66ad26f0d313451d.jpg",
      title: "Urban Rooftop Garden",
      description: "Complete transformation of a 500 sq ft terrace into a productive vegetable garden"
    },
    {
      image: "https://i.pinimg.com/1200x/3b/41/6e/3b416e5a63606e693860001b10d5e1a1.jpg",
      title: "Vertical Living Wall",
      description: "Space-saving vertical garden solution for apartment balcony"
    },
    {
      image: "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Smart Hydroponic Setup",
      description: "IoT-enabled hydroponic system for year-round fresh herbs"
    },
    {
      image: "https://i.pinimg.com/736x/f6/cf/6d/f6cf6d5987936b5154f9f286f9c058c7.jpg",
      title: "Moss Art Installation",
      description: "Preserved moss wall art for corporate office reception"
    },
    {
      image: "https://i.pinimg.com/1200x/e4/b8/a5/e4b8a5a101ebb0087c2e94d60820d1c0.jpg",
      title: "Kitchen Garden Makeover",
      description: "Organic kitchen garden with automated irrigation system"
    },
    {
      image: "https://i.pinimg.com/1200x/17/4f/70/174f70aff5eb5848726837c1ceebb569.jpg",
      title: "Indoor Plant Paradise",
      description: "Complete interior landscaping with air-purifying plants"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#344e41] mb-4">
            Our Portfolio
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
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
                  <h3 className="font-heading text-xl mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm opacity-90">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="font-body bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
