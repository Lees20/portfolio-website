import React, { useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
function App() {

  useEffect(() => {
    const aboutSection = document.getElementById('about-section');

    const handleScroll = () => {
      const aboutTop = aboutSection.getBoundingClientRect().top;
      const aboutBottom = aboutSection.getBoundingClientRect().bottom;

      if (aboutTop < window.innerHeight && aboutBottom >= 0) {
        document.body.style.backgroundColor = 'black';
      } else {
        document.body.style.backgroundColor = '#f0f0f0'; // Original background color
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
    <Header />
    <main>
      <section className="full-screen">
        <Home />
      </section>
      <section id="about-section" className="full-screen">
        <About />
      </section>
      {/* <section className="full-screen">
        <Projects />
      </section>
      <section className="full-screen">
        <Contact />
      </section> */}
    </main>
    <Footer />
  </div>
  );
}

export default App;
