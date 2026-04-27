import React from 'react';
import Hero from './components/Hero';
import Overview from './components/Overview';
import FloorPlan from './components/FloorPlan';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-dark-900 overflow-hidden">
      <Hero />
      <Overview />
      <FloorPlan />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
