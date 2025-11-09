import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FloatingChat from './components/FloatingChat';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <FloatingChat />
    </div>
  );
}

export default App;