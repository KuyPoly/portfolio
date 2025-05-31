import React from "react";
import "./work.css";
import fitness from "../../assets/fitness.png";
import kfc from "../../assets/KFC.png";
import quiz from "../../assets/quiz.png";
import elearning from "../../assets/e-learning.png";

const projects = [
    {
        img: fitness,
        title: "Fitness E-commerce Website",
        desc: "A responsive e-commerce website for fitness products, built with React and Tailwind CSS.",
        link: "https://github.com/KuyPoly/Fitness_E-commerce.git"
    },
    {
        img: kfc,
        title: "KFC Clone",
        desc: "A clone of the KFC website, showcasing a responsive design and interactive features using HTML, CSS, and JavaScript.",
        link: "https://github.com/SophalChanrat/Project-web-design.git"
    },
    {
        img: quiz,
        title: "Quiz Management System",
        desc: "A simple quiz management system that allows users to create, manage, and take quizzes. Built with Java, JavaFX and MariaDB for the data storage.",
        link: "https://github.com/KuyPoly/Quiz.git"
    },
    {
        img: elearning,
        title: "E-Learning Management System",
        desc: "An e-learning system that run in terminal which allows teacher to create and manage courses, enroll in courses, and track progress. Built with C++ and file handling for data storage.",
        link: "https://github.com/KuyPoly/E-Learning-Management-System.git"
    }
];

const Work = () => {
    return (
        <section id="work">
            <span className="work-title">Portfolio</span>
            <span className="work-desc">Here are some of my projects:</span>
            <div className="work-projects">
                {projects.map((project, index) => (
                    <div className="work-project" key={index}>
                        <img src={project.img} alt={project.title} className="work-img" />
                        <div className="work-project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-btn">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;