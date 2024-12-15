import React from 'react';
import { Link } from 'react-scroll';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <section className="home" id="home">
        <h1>Welcome to My Portfolio</h1>
        <p>I'm a Frontend Developer proficient in React, Redux, TypeScript, and more.</p>
      </section>

      <Portfolio />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
