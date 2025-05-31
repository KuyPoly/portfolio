import React, {useRef} from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jwiykgs', 'template_jwqljag', form.current, {
        publicKey: 'xVwFze44uJ1H5_MZR',
      })
      .then(
        () => {
            console.log('SUCCESS!');
            e.target.reset(); // Reset the form after successful submission
            alert('Email sent successfully!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
    return (
        <section id="contact">
            <span className="contact-title">Contact Me</span>
            <span className="contact-desc">Feel free to reach out!</span>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" name="from_name" className="contact-input" />
                <input type="email" placeholder="Your Email" name="email" className="contact-input" />
                <textarea placeholder="Your Message" name="message" className="contact-input"></textarea>
                <button type="submit" value='send' className="contact-btn">Send Message</button>
            </form>
            <div className="contact-info">
                <a href="https://www.facebook.com/poly.kuy" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-facebook info" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/kuy-poly-4b0b1a1b2/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-linkedin info" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
                </a>
            </div>
        </section>
    );
}

export default Contact;