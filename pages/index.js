import React from 'react';
import Layout from '../components/Layout/Layout';
import HomeSection from '../components/HomeSection/HomeSection';
import AboutSection from '../components/AboutSection/AboutSection';
import MenuSection from '../components/MenuSection/MenuSection';
import BlogSection from '../components/BlogSection/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection';
import ContactSection from '../components/ContactSection/ContactSection';
import ApplySection from '../components/ApplySection/ApplySection';

const HomePage = () => {
  return (
    <Layout>
      <div id="home">
        <HomeSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="menu">
        <MenuSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="apply">
        <ApplySection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default HomePage;
