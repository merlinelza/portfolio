import React from 'react';
import './intro.css';
import bg from '../../logo/background.jpeg';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">
                    I'm
                    <span className="introName"> Merlin </span>
                    <br />
                    Full Stack Developer
                </span>
                <p className="introPara">
                    I am a skilled full-stack developer with experience in
                    various <br />
                    front-end and back-end technologies.
                </p>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    );
};

export default Intro;
