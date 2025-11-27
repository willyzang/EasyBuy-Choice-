import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const StoryCard: React.FC<TestimonialProps> = ({ quote, author, role, metric }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-usBlue relative">
    <div className="absolute -top-5 right-8 bg-usBlue text-white p-3 rounded-full shadow-lg">
      <Quote size={20} fill="currentColor" />
    </div>
    
    {metric && (
      <div className="mb-6 pb-6 border-b border-gray-100">
        <span className="block text-3xl font-extrabold text-usRed mb-1">{metric}</span>
        <span className="text-sm text-gray-500 font-medium">Key Performance Metric</span>
      </div>
    )}

    <p className="text-gray-700 italic mb-8 leading-relaxed">"{quote}"</p>
    
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xl">
        {author.charAt(0)}
      </div>
      <div>
        <h5 className="font-bold text-gray-900">{author}</h5>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const SuccessStories: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-usBlue-dark relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-red-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-300 font-bold tracking-wide uppercase text-sm mb-3">Success Stories</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-white">Real Growth Stories, Replicable Success Paths</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard 
            metric="Inventory Turnover +500%"
            quote="EasyBuy Choice's US warehousing completely changed our operating model. Sourcing used to take months, now we restock in 3 days. Sales tripled last year!"
            author="Michael Thompson"
            role="Texas Retail Chain Owner"
          />
          <StoryCard 
            metric="Monthly Sales > $100k"
            quote="From side hustle to main business. Professional selection guidance and zero-inventory model gave me the courage to try. My shop hit $100k in 6 months. Thanks to the team!"
            author="Jennifer Martinez"
            role="Shopify Store Owner"
          />
          <StoryCard 
            metric="Complaint Rate ≈ 0"
            quote="Quality assurance brings returning customers. All products come with full inspection reports, and our complaint rate is near zero. Consistent quality wins us loyalty."
            author="Robert Kim"
            role="Amazon Top Seller"
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;