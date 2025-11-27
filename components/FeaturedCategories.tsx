import React from 'react';
import { ArrowRight, TrendingUp, Sofa, Sparkles, Dumbbell, Dog } from 'lucide-react';
import { CategoryProps } from '../types';

const CategoryCard: React.FC<CategoryProps> = ({ name, items, margin, icon, image }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg h-96 transition-all duration-300 hover:shadow-2xl">
    <img 
      src={image} 
      alt={name} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
    
    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">{items}</p>
      
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp size={16} className="text-green-400" />
        <span className="font-semibold text-green-400">Avg Margin: {margin}</span>
      </div>

      <button className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-4 transition-all">
        View Best Sellers <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const FeaturedCategories: React.FC = () => {
  const categories = [
    {
      name: "Home & Living",
      items: "Smart devices, storage solutions, seasonal decor",
      margin: "28-35%",
      icon: <Sofa size={20} />,
      image: "https://picsum.photos/id/1069/400/600"
    },
    {
      name: "Beauty & Personal Care",
      items: "Skincare tools, beauty devices, professional care",
      margin: "30-40%",
      icon: <Sparkles size={20} />,
      image: "https://picsum.photos/id/338/400/600"
    },
    {
      name: "Sports & Outdoors",
      items: "Yoga equipment, home gym, outdoor gear",
      margin: "25-35%",
      icon: <Dumbbell size={20} />,
      image: "https://picsum.photos/id/73/400/600"
    },
    {
      name: "Pet Supplies",
      items: "Smart feeders, interactive toys, grooming supplies",
      margin: "30-38%",
      icon: <Dog size={20} />,
      image: "https://picsum.photos/id/237/400/600"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-usBlue font-bold tracking-wide uppercase text-sm mb-3">Featured Categories</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Data-Driven Selection, High Growth Categories</h3>
          </div>
          <a href="#" className="flex items-center gap-2 text-usBlue font-semibold hover:text-usBlue-dark">
            Download Full Report <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;