import React from 'react';
import { Gift, Percent, TrendingUp } from 'lucide-react';
import { OfferProps } from '../types';

const OfferCard: React.FC<OfferProps> = ({ title, items, icon }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md border-t-8 border-usRed hover:-translate-y-2 transition-transform duration-300">
    <div className="w-16 h-16 bg-red-50 text-usRed rounded-full flex items-center justify-center mb-6 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-2 text-gray-700 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-usRed-light"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const NewCustomerOffer: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-usRed font-bold text-sm mb-4">New Customer Offer</span>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Limited Time Offer, Kickstart Your Business</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OfferCard 
            title="Sign Up Bonus"
            icon={<Gift size={32} />}
            items={["Dedicated Account Manager", "Free Market Analysis Report", "Priority Access to New Arrivals"]}
          />
          <OfferCard 
            title="First Order Special"
            icon={<Percent size={32} />}
            items={["5% Off First Order", "Free Branding Customization", "Marketing Kit Included"]}
          />
          <OfferCard 
            title="Growth Rewards"
            icon={<TrendingUp size={32} />}
            items={["Monthly Cashback Plan", "VIP Priority Benefits", "Exclusive Data Insights"]}
          />
        </div>
      </div>
    </section>
  );
};

export default NewCustomerOffer;