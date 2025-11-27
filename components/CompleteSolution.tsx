import React from 'react';
import { PackageSearch, Truck, Shuffle } from 'lucide-react';

const CompleteSolution: React.FC = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-usBlue font-bold tracking-wide uppercase text-sm mb-3">Complete Solution</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">Warehousing · Logistics · Tech, Empowering Your Business</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Solution 1 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100">
            <div className="p-3 bg-usBlue text-white rounded-lg mb-6 shadow-md">
              <PackageSearch size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">In-Stock Inventory, Instant Shipping</h4>
            <ul className="space-y-4 w-full">
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">1,000+ US SKUs</span>
                <span className="text-green-600 text-sm font-semibold">Ready to Ship</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">48-Hour Processing</span>
                <span className="text-green-600 text-sm font-semibold">Instant Fulfillment</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Smart Restock System</span>
                <span className="text-green-600 text-sm font-semibold">Never OOS</span>
              </li>
            </ul>
          </div>

          {/* Solution 2 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100">
            <div className="p-3 bg-usRed text-white rounded-lg mb-6 shadow-md">
              <Truck size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Flexible Fulfillment, Multiple Choices</h4>
            <ul className="space-y-4 w-full">
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Dropshipping Support</span>
                <span className="text-gray-500 text-sm">Zero Inventory Risk</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Bulk Purchasing</span>
                <span className="text-gray-500 text-sm">Tiered Discounts</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">FBA Prep Services</span>
                <span className="text-gray-500 text-sm">Simplified Intake</span>
              </li>
            </ul>
          </div>

          {/* Solution 3 */}
          <div className="flex flex-col items-start p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
            <div className="p-3 bg-gray-800 text-white rounded-lg mb-6 shadow-md">
              <Shuffle size={32} />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">Open Platform, Seamless Integration</h4>
            <ul className="space-y-4 w-full">
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Amazon / Shopify Native</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Standard API for Custom Integration</span>
              </li>
              <li className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                <span className="text-gray-700">Real-time Data Sync</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteSolution;