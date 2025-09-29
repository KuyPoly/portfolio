import React from "react";
import "./intro.css";

import pic_profile from "../../assets/id.jpg"; // Ensure this path is correct

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-content">
                <span className="intro-hello">Hello!</span>
                <span className="intro-des">I am 
                    <span className="intro-name"> Kuy Poly</span>
                </span>
                <p className="intro-text">I am a Software engineer student who <br /> is passionate about building innovative <br /> solutions and explore the world of technology.</p>
                <a href="https://drive.google.com/file/d/1jtSvzyFMGdCQyFlBQFbHQ4i1xrR8a_aC/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <button className="intro-btn">
                        Get My CV
                    </button>
                </a>
            </div>
            <img src={pic_profile} alt="Profile" className="intro-image" />
        </section>
    );
};

export default Intro;
