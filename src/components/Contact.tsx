import React from 'react';
import '../styles/Contact.css'; // Ensure you are importing the CSS
import emailIcon from '../assets/emailIcon.png';
import linkedinIcon from '../assets/linkedinIcon.png';
import githubIcon from '../assets/githubIcon.png';
import profileImage from '../assets/hero.jpg'; // Path to your profile image

const Contact: React.FC = () => {
  return (
    <footer className="contact__container" id="contact">
      {/* <div className='contact__text'>
        <h2>Contact</h2>
        <p>Feel Free to Reach Out</p>
      </div> */}
      <div className="contact__profile">
        <img src={profileImage} alt="Profile" className="contact__profile-img" />
        <div className="contact__profile-info">
          <h3>Maniakanta Vaddi</h3>
          <p>Frontend Developer</p>
        </div>
      </div>
      <ul className='contact__links'>
        <li className='contact__link'>
          <img src={emailIcon} alt="Email Icon" />
          <a href='mailto:manikantavaddi4070@gmail.com'>
            manikantavaddi4070@gmail.com
          </a>
        </li>
        <li className='contact__link'>
          <img src={linkedinIcon} alt="LinkedIn Icon" />
          <a href='https://www.linkedin.com/in/manikantavaddi428' target="_blank" rel="noopener noreferrer">
            linkedin.com/in/manikantavaddi428
          </a>
        </li>
        <li className='contact__link'>
          <img src={githubIcon} alt="GitHub Icon" />
          <a href='https://github.com/Mani4070' target="_blank" rel="noopener noreferrer">
            github.com/Mani4070
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
