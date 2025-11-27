import React from 'react';
import { MapPin, ShieldCheck, Cpu, Users } from 'lucide-react';
import { ServiceProps } from '../types';

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group h-full">
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-usBlue mb-6 group-hover:bg-usBlue group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <ul className="space-y-3">
      {description.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-usRed flex-shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ServiceExcellence: React.FC = () => {
  const services = [
    {
      title: "Nationwide Warehousing",
      icon: <MapPin size={28} />,
      description: [
        "Strategic hubs in LA, NJ, and Savannah",
        "Same-day or Next-day dispatch",
        "Customs cleared & ready to ship"
      ]
    },
    {
      title: "Quality You Can Trust",
      icon: <ShieldCheck size={28} />,
      description: [
        "100% US Quality Standard Compliance",
        "FTC & CPSC Regulatory Adherence",
        "Verified by 3rd-party labs"
      ]
    },
    {
      title: "Smart Inventory Tech",
      icon: <Cpu size={28} />,
      description: [
        "Real-time stock visibility",
        "AI-driven product selection",
        "Seamless integration with major platforms"
      ]
    },
    {
      title: "US-Based Support",
      icon: <Users size={28} />,
      description: [
        "Dedicated Success Team in Los Angeles",
        "1-on-1 Business Strategy Guidance",
        "Rapid response times"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-usBlue font-bold tracking-wide uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Built for American Business</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExcellence;