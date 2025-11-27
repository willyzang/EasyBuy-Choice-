import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceExcellence from './components/ServiceExcellence';
import CompleteSolution from './components/CompleteSolution';
import FeaturedCategories from './components/FeaturedCategories';
import SuccessStories from './components/SuccessStories';
import TrustSecurity from './components/TrustSecurity';
import NewCustomerOffer from './components/NewCustomerOffer';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ServiceExcellence />
        <CompleteSolution />
        <FeaturedCategories />
        <SuccessStories />
        <TrustSecurity />
        <NewCustomerOffer />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;