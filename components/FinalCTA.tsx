import React from 'react';
import { Lock, Clock, MapPin } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-usBlue-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Join 2,000+ Successful US Merchants</h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="flex-1 max-w-sm flex flex-col items-center justify-center p-6 bg-usRed hover:bg-usRed-dark rounded-xl transition-all shadow-lg hover:shadow-usRed/50 transform hover:-translate-y-1">
            <span className="text-xl font-bold text-white mb-1">Create Free Account</span>
            <span className="text-sm text-red-100">Sign up in 2 minutes. No credit card needed.</span>
          </button>
          
          <button className="flex-1 max-w-sm flex flex-col items-center justify-center p-6 bg-white hover:bg-gray-100 rounded-xl transition-all shadow-lg transform hover:-translate-y-1">
            <span className="text-xl font-bold text-usBlue-dark mb-1">Talk to an Expert</span>
            <span className="text-sm text-gray-500">Get a custom growth plan for your business</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-blue-200 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Lock size={18} className="text-green-400" />
            Secure & Private
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-yellow-400" />
            Instant Access
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-usRed-light" />
            Los Angeles, CA
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;