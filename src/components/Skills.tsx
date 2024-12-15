import React from 'react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Frontend: React, Redux, HTML, CSS, JavaScript, Angular (Basic)</li>
        <li>Backend: NestJS, Node.js</li>
        <li>Databases: PostgreSQL, MongoDB</li>
        <li>Version Control: Git</li>
        <li>Others: REST APIs, JWT, Docker, Testing (Jest, Mocha)</li>
      </ul>
    </section>
  );
};

export default Skills;
