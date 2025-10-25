import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompareGrid from './components/CompareGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CompareGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
