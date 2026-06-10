import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/nosotros" element={<AboutUsPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;