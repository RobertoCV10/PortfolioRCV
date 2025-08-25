import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contact</h2>
            <p className="contact-intro">Feel free to reach out to me! I'm always open to new opportunities, collaborations, or just a friendly chat about robotics.</p>
            <div className="contact-details">
                <div className="contact-item">
                    <span className="icon">✉️</span>
                    <p><strong>Email:</strong> <a href="mailto:2109040@upy.edu.mx">2109040@upy.edu.mx</a></p>
                </div>
                <div className="contact-item">
                    <span className="icon">🔗</span>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/roberto-coria-vargas-088231309/" target="_blank">linkedin.com/in/roberto-coria-vargas</a></p>
                </div>
                <div className="contact-item">
                    <span className="icon">💻</span>
                    <p><strong>GitHub:</strong> <a href="https://github.com/RobertoCV10" target="_blank">github.com/RobertoCV10</a></p>
                </div>
            </div>
        </section>
    );
};

export default Contact;