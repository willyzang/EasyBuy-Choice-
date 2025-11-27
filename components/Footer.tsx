import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white text-xl font-bold mb-6">EasyBuy Choice</h4>
            <p className="text-sm leading-relaxed mb-6">
              Your trusted partner for factory-direct sourcing with local US warehousing. Simplify your logistics, maximize your margins.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-semibold mb-6">Platform</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Why Us</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Product Categories</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-6">Legal & Support</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold mb-6">Contact Us</h5>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Headquarters</span>
                <span className="text-white">Los Angeles, CA</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</span>
                <a href="mailto:support@easybuychoice.com" className="hover:text-white transition-colors">support@easybuychoice.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Phone</span>
                <a href="tel:+18001234567" className="hover:text-white transition-colors">+1 (800) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} EasyBuy Choice. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social Icons placeholders */}
            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-usBlue cursor-pointer transition-colors flex items-center justify-center">
              <span className="text-xs font-bold text-white">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-usBlue cursor-pointer transition-colors flex items-center justify-center">
              <span className="text-xs font-bold text-white">f</span>
            </div>
            <div className="w-8 h-8 bg-gray-800 rounded-full hover:bg-usBlue cursor-pointer transition-colors flex items-center justify-center">
              <span className="text-xs font-bold text-white">x</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;