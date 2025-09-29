import React from "react";
import "./work.css";
import fitness from "../../assets/fitness.png";
import bayCanteen from "../../assets/baycanteen.jpg";
import quiz from "../../assets/quiz.png";
import ocean from "../../assets/oceanGate.png";
import elearning from "../../assets/e-learning.png";
import dbAdmin from "../../assets/dbAdmin.png";

const projects = [
    {
        img: fitness,
        title: "Fitness E-commerce Website",
        desc: "A responsive e-commerce website for fitness products, built with React and Tailwind CSS.",
        link: "https://github.com/KuyPoly/Fitness_E-commerce.git"
    },
    {
        img: elearning,
        title: "E-Learning Management System",
        desc: "An e-learning system that run in terminal which allows teacher to create and manage courses, enroll in courses, and track progress. Built with C++ and file handling for data storage.",
        link: "https://github.com/KuyPoly/E-Learning-Management-System.git"
    },
    {
        img: quiz,
        title: "Quiz Management System",
        desc: "A simple quiz management system that allows users to create, manage, and take quizzes. Built with Java, JavaFX and MariaDB for the data storage.",
        link: "https://github.com/KuyPoly/Quiz.git"
    },
    {
        img: dbAdmin,
        title: "Database Administrative Web Portal",
        desc: "A web portal for database administrators to manage and monitor databases. Built with React and Node.js.",
        link: "https://github.com/KuyPoly/Hall_booking_web.git"
    },
    {
        img: ocean,
        title: "Venue Booking System",
        desc: " The venue booking system is a middleman system between hall owner and customers. It allows owners to showcase their venues, making them easily accessible to a wider audience.",
        link: "https://github.com/KuyPoly/Venue_booking.git"
    },
        {
        img: bayCanteen,
        title: "Bay Canteen",
        desc: "The system lets students and teachers vote for daily meals, suggest favorite dishes, and give feedback. This helps the canteen know which foods are most popular and plan better menus for everyone.",
        link: "https://github.com/seangDarong/meal-voting-system-backend.git",
        demo: "https://baycanteen.vercel.app/"
    }
];

const Work = () => {
    return (
        <section id="work">
            <span className="work-title">Portfolio</span>
            <span className="work-desc">Here are some of my recent projects:</span>
            <div className="work-projects">
                {projects.map((project, index) => (
                    <div className="work-project" key={index}>
                        <img src={project.img} alt={project.title} className="work-img" />
                        <div className="work-project-content">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <div className="work-buttons">
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="work-btn github"
                                >
                                    View on GitHub
                                </a>
                                {project.demo && (
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="work-btn demo"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Work;