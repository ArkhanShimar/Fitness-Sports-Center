import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      {/* Hero section with full viewport height */}
      <div className="relative">
        <Hero />
        {/* Navbar positioned absolutely over Hero */}
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
      </div>
      
      {/* Yellow Divider */}
      <div className="w-full h-2.5 bg-primary"></div>
    </div>
  );
}

export default App;