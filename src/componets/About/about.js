import React from 'react';
import './about.css';
import myPhoto from '../../logo/myPhoto.jpg';
import { FaAward } from 'react-icons/fa6';
import { RiFolderOpenLine } from 'react-icons/ri';

const About = () => {
    return (
        <section id="about">
            <p className="about_Intro">Get to know</p>
            <h2 className="about_heading">About me</h2>
            <div className="about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={myPhoto} alt="myPhoto" />
                    </div>
                </div>
            </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className="about_card">
                        <FaAward className="about_cardIcon" />
                        <h5>Experience</h5>
                        <small>1 Years</small>
                    </article>
                    <article className="about_card">
                        <RiFolderOpenLine className="about_cardIcon" />
                        <h5>Projects</h5>
                        <small>3+ Completed</small>
                    </article>
                </div>
                <br />
                <p className="aboutPara">
                    As a Full Stack Developer, I am fueled by a passion for
                    problem-solving and possess a diverse skill set in Web
                    Development.
                </p>
                <br />
                <a href="#contactMe">Let's Talk</a>
            </div>
        </section>
    );
};
export default About;
