import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-text">
                <hr className="hero-line" />
                <h1 className="my-name">ROBERTO CORIA VARGAS</h1>
                <p className="welcome-font">
                    Welcome to my portfolio! Here, you'll find a detailed exploration of my journey and accomplishments as a Computational Robotic Engineer.
                    This space is dedicated to showcasing the innovative projects I've worked on, the advanced skills I've cultivated,
                    and the valuable experience I've gained in blending software, hardware, and mechanical systems to solve complex challenges.
                </p>
            </div>
            <div className="hero-img">
                <img src="/Assets/Roberto/RCV_index.jpg" alt="Roberto presentation" />
            </div>
        </section>
    );
};

export default Hero;