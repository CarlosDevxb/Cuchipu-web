import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* El Navbar y Footer los pondremos de forma global en App.jsx */}
    </>
  );
}

export default Home;