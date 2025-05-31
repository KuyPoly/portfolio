import React from "react";
import "./intro.css";
import { Link } from "react-scroll"; 
import pic_profile from "../../assets/KuyPoly.png"; // Ensure this path is correct

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-content">
                <span className="intro-hello">Hello!</span>
                <span className="intro-des">I am 
                    <span className="intro-name"> Kuy Poly</span>
                </span>
                <p className="intro-text">I am a Software engineer student who <br /> is passionate about building innovative <br /> solutions and explore the world of technology.</p>
                <Link>
                    <button className="intro-btn">
                        Hire Me
                    </button>
                </Link>
            </div>
            <img src={pic_profile} alt="Profile" className="intro-image" />
        </section>
    );
};

export default Intro;
