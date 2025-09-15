import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useRevealOnScroll from './utils/useRevealOnScroll';
import { useTranslation } from "react-i18next";

function App() {
  useRevealOnScroll(); // hook to add reveal classes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const { t, i18n } = useTranslation();


  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <Header />
      <main id="main" className="max-w-[var(--page-max-width)] mx-auto px-4 py-12">
        <Hero />
        {/* <About /> */}
        <Timeline />
        <Skills />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
