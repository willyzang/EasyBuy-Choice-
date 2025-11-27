import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '#'}>
            <div className="bg-usBlue text-white p-2 rounded-lg">
              <ShoppingBag size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight text-usBlue-dark">EasyBuy Choice</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-usBlue font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-600 hover:text-usBlue font-medium transition-colors">Why Us</a>
            <a href="#solutions" className="text-gray-600 hover:text-usBlue font-medium transition-colors">Solutions</a>
            <a href="#categories" className="text-gray-600 hover:text-usBlue font-medium transition-colors">Products</a>
            <a href="#testimonials" className="text-gray-600 hover:text-usBlue font-medium transition-colors">Success Stories</a>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="px-5 py-2.5 text-usBlue font-semibold hover:bg-blue-50 transition-all">
              Log In
            </button>
            <button className="px-6 py-2.5 bg-usBlue text-white font-bold rounded-full shadow-lg hover:bg-usBlue-dark transition-all transform hover:-translate-y-0.5">
              Join for Free
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-usBlue p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#home" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-usBlue">Home</a>
            <a href="#services" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-usBlue">Why Us</a>
            <a href="#solutions" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-usBlue">Solutions</a>
            <a href="#categories" className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-usBlue">Products</a>
            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full px-5 py-3 text-usBlue font-bold border border-usBlue rounded-lg">
                Log In
              </button>
              <button className="w-full px-5 py-3 bg-usBlue text-white font-bold rounded-lg shadow-md">
                Join for Free
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;