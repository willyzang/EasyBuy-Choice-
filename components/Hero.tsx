import React from 'react';
import { Warehouse, Users, Truck, BadgeCheck, ArrowRight, Calendar } from 'lucide-react';
import { StatProps } from '../types';

const StatCard: React.FC<StatProps> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
    <div className="text-blue-300 mb-2">{icon}</div>
    <div className="text-3xl font-bold text-white mb-1">{value}</div>
    <div className="text-sm text-blue-100 font-medium text-center uppercase tracking-wide">{label}</div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-usBlue-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1076/1920/1080" 
          alt="Logistics Warehouse" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-usBlue-dark via-usBlue-dark/95 to-usBlue/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-usRed/10 border border-usRed/40 text-red-400 font-bold text-sm tracking-wide mb-8 animate-fade-in-up uppercase">
            <span className="w-2 h-2 rounded-full bg-usRed animate-pulse"></span>
            Direct From Manufacturer · Shipped from USA
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Factory Direct Inventory.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Shipped from the US.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-blue-100 mb-10 font-light leading-relaxed max-w-3xl">
            Streamline your supply chain with our 2M+ sq. ft. US warehouse network. 
            <span className="text-white font-medium"> No customs delays. No hidden fees. Just fast, local shipping.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-usRed hover:bg-usRed-dark text-white text-lg font-bold rounded-full shadow-lg shadow-usRed/30 transition-all transform hover:-translate-y-1">
              Start Sourcing
              <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white hover:bg-white/20 text-lg font-semibold rounded-full backdrop-blur-sm border border-white/30 transition-all">
              <Calendar size={20} />
              Book a Demo
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCard 
              icon={<Warehouse size={28}/>} 
              value="2M+" 
              label="Sq. Ft. Storage" 
            />
            <StatCard 
              icon={<Users size={28}/>} 
              value="2,000+" 
              label="US Retailers" 
            />
            <StatCard 
              icon={<Truck size={28}/>} 
              value="3-5 Day" 
              label="US Delivery" 
            />
            <StatCard 
              icon={<BadgeCheck size={28}/>} 
              value="100%" 
              label="US Certified" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;