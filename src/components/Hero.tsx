import React from 'react';
import hero from '../assets/hero.jpg'

const Hero: React.FC = () => {
    return (
        <div>
            <section className="hero__container">
                <div className='hore__content'>
                    <h1 className='hero__title'>Hi I'm Manikanta</h1>
                    <p className='hero__description'>I'm a Frontend Developer with 1.6 years of experience Using React, Reach out if you'd like to Know more!</p>
                    <a href='manikantavaddi40470@gmail.com' className='hero__contactBtn'>Contact me</a>
                </div>
                <img src={hero} className='hero__img' alt=''/>
                {/* <div className='hero__topBlur'></div> */}
                <div className='hero__bottomBlur'></div>
            </section>
        </div>
    );
};

export default Hero;
