import React from 'react';
import '../styles/About.css';
import aboutIcon from '../assets/aboutIcon.jpg'
import cursorIcon from '../assets/cursorIcon.png'
import serverIcon from '../assets/serverIcon.png'


const About: React.FC = () => {
  return (
    <section id="about" className="about__container">
      <h2 className='about__title'>About</h2>
      <div className='about__content'>
        <img src={aboutIcon} alt='' className='about__img'/>
        <ul className='about__items'>
            <li className='about__item'>
                <img src={cursorIcon} alt=''/>
                <div>
                    <h3>Frontend Developer</h3>
                    <p>I'm Frontend Developer With Experience in building responsive and optimized websites</p>
                </div>
            </li>
            <li className='about__item'>
                <img src={serverIcon} alt=''/>
                <div>
                    <h3>Backend Developer</h3>
                    <p>I have experience devloping fast and optimized backend systems and APIs</p>
                </div>
            </li>
            <li className='about__item'>
                <img src={cursorIcon} alt=''/>
                <div>
                    <h3>UI Designer</h3>
                    <p>I have experience in designing and landing pages</p>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
