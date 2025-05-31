import React from "react";
import "./skill.css";
import db from "../../assets/db.png";
import uiux from "../../assets/uxui.png";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png"

const Skill = () => {
    return (
        <section id="skill">
            <span className="skill-title">What I do</span>
            <span className="skill-desc">I am exploring various technologies and perfecting my skills in web development, trying to build an interactive, user-friendly application using languages like C, C++, Java, Javascript, REACT and VITE. I also share a passion in UX/Ui design and I enjoy creating visually appealing and user-centric interfaces using tool such as Figma</span>
            <div className="skill-bars">
                <div className="skill-bar">
                    <img src= {uiux} alt="icon" className="skill-icon"/>
                    <div className="skill-text">
                        <h2>UX/UI Design</h2>
                        <p>I can use tool like Figma and Adobe</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={frontend} alt="icon" className="skill-icon"/>
                    <div className="skill-text">
                        <h2>Frontend Development</h2>
                        <p>I can use HTML, CSS, JavaScript and REACT</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={backend} alt="icon" className="skill-icon"/>
                    <div className="skill-text">
                        <h2>Backend Development</h2>
                        <p>I can use Node.js, Express and Java</p>
                    </div>
                </div>
                <div className="skill-bar">
                    <img src={db} alt="icon" className="skill-icon"/>
                    <div className="skill-text">
                        <h2>Database Management</h2>
                        <p>I can use MariaDB, PostgreSQL and MySQL</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;