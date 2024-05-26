import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/About.css';

const About = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hey there!\n I'm a 22-year-old tech enthusiast based in Athens, Greece. Studying Informatics and Computer Engineering at the University of West Attica. When I'm not hitting the books, I'm busy creating awesome web interfaces as a front-end developer. I'm passionate about bringing fresh and innovative ideas to life, making sure every project is both functional and visually cool. Outside the tech world, I love exploring Athens and finding inspiration in its lively streets.\n I'm all about using technology to make a difference and excited to collaborate on exciting projects. Let's connect and make something amazing happen!"
      ],
      typeSpeed: 60,
      backSpeed: 60,
      showCursor: true,
      cursorChar: '|', // This adds the terminal cursor effect
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about">
    <div id="about-section" className="about-section">
      <h1 className="pixel-about-text">About Me</h1>
      <p className="pixel-about-text"><span ref={typedElement}></span></p>
    </div>
    </section>
  );
};

export default About;
