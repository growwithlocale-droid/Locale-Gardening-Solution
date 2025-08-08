import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "5 Native Plants Perfect for Indian Balcony Gardens",
      excerpt: "Discover low-maintenance, climate-adapted plants that thrive in small spaces and support local biodiversity.",
      image: "https://i.pinimg.com/1200x/4a/cc/b8/4accb84e938d7ecc500e0de4861f4853.jpg",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "Plant Care"
    },
    {
      title: "DIY Compost: Turn Kitchen Waste into Garden Gold",
      excerpt: "Learn how to create nutrient-rich compost at home using kitchen scraps and organic waste.",
      image: "https://i.pinimg.com/1200x/87/00/18/870018254f9fcbc6ba5940761ab27824.jpg",
      author: "Rajesh Kumar",
      date: "March 10, 2024",
      category: "Sustainability"
    },
    {
      title: "Smart Irrigation: Technology Meets Traditional Gardening",
      excerpt: "Explore how IoT and automation can make your garden more efficient while preserving water.",
      image: "https://i.pinimg.com/736x/e9/b9/da/e9b9dad3adb8fe19c061ac3ecbb72f25.jpg",
      author: "Anita Desai",
      date: "March 5, 2024",
      category: "Technology"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-[#dad7cd] bg-opacity-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl text-[#344e41] mb-4">
            Latest from Our Garden
          </h2>
          <p className="font-body text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest gardening tips, sustainability practices, and innovation in urban agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="font-body bg-[#a3b18a] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-heading text-xl text-[#344e41] mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="font-body text-gray-700 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span className="font-body">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-body">{post.date}</span>
                    </div>
                  </div>
                </div>
                <button className="font-body mt-4 text-[#344e41] font-medium hover:text-[#a3b18a] transition-colors flex items-center space-x-1">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="font-body bg-[#344e41] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg">
            Visit Our Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
