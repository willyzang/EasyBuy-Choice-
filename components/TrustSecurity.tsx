import React from 'react';
import { CheckCircle2, Shield } from 'lucide-react';

const TrustSecurity: React.FC = () => {
  const guarantees = [
    { title: "Quality Assurance", desc: "100% Passed US Standards" },
    { title: "On-Time Fulfillment", desc: "48h Dispatch or Compensated" },
    { title: "Real Inventory", desc: "Real-time Sync, What You See is What You Get" },
    { title: "Transparent Pricing", desc: "No Hidden Fees, Clear Costs" },
    { title: "Professional Service", desc: "Local Team, Always Supported" },
    { title: "Flexible Cooperation", desc: "No Long-term Contract, Buy as Needed" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h2 className="text-usBlue font-bold tracking-wide uppercase text-sm mb-3">Trust & Security</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Your Success Starts with Trust</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {guarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full bg-slate-50 p-8 rounded-3xl border border-slate-100">
             <h4 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
               <Shield className="text-usBlue" /> Authoritative Certifications
             </h4>
             <div className="space-y-4">
               <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-bold text-usBlue">BBB</div>
                 <div className="font-medium text-gray-800">Better Business Bureau (BBB) A+ Rating</div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center font-bold text-usRed">ISO</div>
                 <div className="font-medium text-gray-800">ISO 9001 Quality Management Certified</div>
               </div>
               <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                 <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-gray-600">US</div>
                 <div className="font-medium text-gray-800">US Warehousing & Logistics Association Member</div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSecurity;