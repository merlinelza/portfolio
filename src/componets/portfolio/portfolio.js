import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="portfolioTitle">My Portfolio</h2>
            <p className="portfolioDepc">
                I am Merlin Elizabeth Varghese, a B.Tech graduate in Computer
                Science and Engineering. I have one year of experience. After
                graduating, I joined a full-stack development course
                (MERNStack). I am enthusiastic about the chance to contribute my
                expertise to software development.
            </p>
            <h2 className="portfolioHeading">Education</h2>
            <p className="title">B.Tech in Computer Science and Engineering</p>
            <p className="titleDesp">
                Providence College of Engineering and School of Business
            </p>
            <p className="titleDesp">2022</p>
            <p className="title">Central Board of Secondary Education</p>
            <p className="titleDesp">
                Mathews Mar Athanasius Residential Central School
            </p>
            <p className="titleDesp">2018</p>
            <p className="title">Indian Certificate of Secondary Education</p>
            <p className="titleDesp">
                Mathews Mar Athanasius Residential School
            </p>
            <p className="titleDesp">2016</p>
            <h2 className="portfolioHeading">Publication</h2>
            <p className="title">
                2022 International Conference on Decision Aid Sciences and
                Applications (DASA)
            </p>
            <p className="titleDesp">
                Article Title: An Intelligent Fire Detection and Extinguishing
                Assistant System Using Internet of Things (IoT).
            </p>
        </section>
    );
};

export default Portfolio;
