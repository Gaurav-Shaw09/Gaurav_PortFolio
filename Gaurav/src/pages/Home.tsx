import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import TestimonialPreview from '../components/TestimonialPreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Timeline />
      <TestimonialPreview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;