import React from 'react';
import './project.css';
import blog from '../../logo/blog.jpg';
import coffee from '../../logo/coffee.jpg';
import travel from '../../logo/travel.jpg';

const Project = () => {
    return (
        <section id="project">
            <h2 className="projectTitle">Projects</h2>
            <div className="PorjectBars">
                <div className="PorjectBar">
                    <img src={coffee} alt="coffee" className="projectImg" />
                    <div className="projectText">
                        <h2>Coffee Shop </h2>
                        <p>
                            <br />
                            Awaken your senses with the rich aromas and
                            exquisite flavors of our meticulously crafted coffee
                            creations
                        </p>
                    </div>
                </div>
                <div className="PorjectBar">
                    <img src={blog} alt="blog" className="projectImg" />
                    <div className="projectText">
                        <h2>Blog Page</h2>
                        <p>
                            Discover insights, inspirations, and stories that
                            ignite your wanderlust and enrich your travel
                            experiences
                        </p>
                    </div>
                </div>
                <div className="PorjectBar">
                    <img src={travel} alt="travel" className="projectImg" />
                    <div className="projectText">
                        <h2>Travel Site</h2>
                        <p>
                            Embark on unforgettable journeys to captivating
                            destinations, where adventure meets serenity
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
