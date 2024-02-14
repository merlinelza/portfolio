import React, { useState } from 'react';
import './portfolio.css';
import reading from '../../logo/reading.png';
import gardening from '../../logo/gardening.png';
import traveling from '../../logo/traveling.png';
import painting from '../../logo/painting.png';
import photography from '../../logo/photography.png';
import workout from '../../logo/workout.png';
import music from '../../logo/music.png';
import cooking from '../../logo/cooking.png';

const Portfolio = () => {
    const [showMoreParagraph, setShowMoreParagraph] = useState(false);
    const toggleShowMoreParagraph = () => {
        setShowMoreParagraph(!showMoreParagraph);
    };

    return (
        <section id="portfolio">
            <h2 className="portfolioTitle"> My Portfolio</h2>
            <span className="portfolioDepc">
                I am Merlin Elizabeth Varghese, a B.Tech graduate in Computer
                Science and Engineering. I have one year of experience. After
                graduating, I joined a full-stack development course
                (MERNStack). I am enthusiastic about the chance to contribute my
                expertise to software development.
            </span>
            <h3 className="portfolioHeading"> My Hobbies</h3>
            <div className="portfolioImgs">
                <img src={reading} alt="reading" className="portfolioImg" />
                <img src={gardening} alt="gardening" className="portfolioImg" />
                <img src={traveling} alt="traveling" className="portfolioImg" />
                <img src={painting} alt="painting" className="portfolioImg" />
                <img src={cooking} alt="cooking" className="portfolioImg" />
                <img
                    src={photography}
                    alt="photography"
                    className="portfolioImg"
                />
                <img src={workout} alt="workout" className="portfolioImg" />
                <img src={music} alt="music" className="portfolioImg" />
            </div>
            <p>
                {showMoreParagraph && (
                    <>
                        <h2 className="portfolioHeading"> Education</h2>
                        <span className="title">
                            B.Tech in Computer Science and Engineering
                        </span>
                        <br />
                        <span className="titleDesp">
                            Providence College of Engineering and School of
                            Business
                        </span>
                        <br />
                        <span className="titleDesp">2022</span> <br />
                        <span className="title">
                            Central Board of Secondary Education
                        </span>
                        <br />
                        <span className="titleDesp">
                            Mathews Mar Athanasius Residential Central School
                        </span>
                        <br />
                        <span className="titleDesp">2018</span> <br />
                        <span className="title">
                            Indian Certificate of Secondary Education
                        </span>
                        <br />
                        <span className="titleDesp">
                            Mathews Mar Athanasius Residential School
                        </span>
                        <br />
                        <span className="titleDesp">2016</span> <br />
                        <h2 className="portfolioHeading"> Publication</h2>
                        <span className="title">
                            2022 International Conference on Decision Aid
                            Sciences and Applications (DASA)
                        </span>
                        <br />
                        <span className="titleDesp">
                            {' '}
                            Article Title: An Intelligent Fire Detection and
                            Extinguishing Assistant System Using Internet of
                            Things (IoT).
                        </span>
                        <button
                            className="portfolioBtn"
                            onClick={toggleShowMoreParagraph}
                        >
                            Show Less
                        </button>
                    </>
                )}
            </p>
            {!showMoreParagraph && (
                <button
                    className="portfolioBtn"
                    onClick={toggleShowMoreParagraph}
                >
                    Show More
                </button>
            )}
            {/* <button className="portfolioBtn">See More</button> */}
        </section>
    );
};

export default Portfolio;
