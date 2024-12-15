import React from 'react';
import user from '../assets/user.jpg'
const Hero: React.FC = () => {
    const handleContactClick = () => {
        // Open Gmail compose window
        const mailToUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=manikantavaddi40470@gmail.com';
        window.open(mailToUrl, '_blank');
    };
    return (
        <div>
            <section className="hero__container">
                <div className='hore__content'>
                    <h1 className='hero__title'>Hi I'm Manikanta</h1>
                    <p className='hero__description'>I'm a MERN stack developer with 1.6 years of experience using React. Reach out if you'd like to know more!</p>
                    {/* <a href='mailto:manikantavaddi40470@gmail.com' className='hero__contactBtn'>Contact me</a> */}
                    <button onClick={handleContactClick} className="hero__contactBtn">
                        Contact me
                    </button>
                </div>
                <img src={user} className='hero__img' alt=''/>
                {/* <div className='hero__topBlur'></div> */}
                <div className='hero__bottomBlur'></div>
            </section>
        </div>
    );
};

export default Hero;
