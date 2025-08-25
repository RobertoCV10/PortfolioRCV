import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav'; // Asegúrate de tener este componente
import Contact from '../../components/Contact'; // Asegúrate de tener este componente

// Importa aquí los estilos CSS para este componente
// import '../styles/colors.css';
// import '../styles/Nav.css';
// import '../styles/footer.css';
import '../../styles/Presentation.css';
import Tools from '../../components/tools';


// Nota: Las fuentes de Google Fonts y los links de Font Awesome se añaden
// al <head> del archivo index.html en la carpeta public, no aquí.

const task = () => {
  return (
    <div>
      {/* El componente de navegación se renderiza directamente, sin usar fetch.
        Si la navegación es dinámica, su lógica debería estar dentro de Nav.jsx
      */}

      <main className="project-presentation-container">
        <section className="project-hero">
          <h1>Multi-task Mobile Robot</h1>
          <p className="intro-paragraph">I developed a two-wheeled mobile robot with a manipulator arm using a ROS (Robot Operating System)-based communication architecture. The project focused on the integration of hardware and software to solve complex robotic tasks.</p>
        </section>

        <section className="project-section">
          <h2>Features</h2>
          <figure className="project-image-full">
            <img src="Assets/Task/cad.png" alt="CAD desing" />
            <figcaption>Robot CAD design.</figcaption>
          </figure>
          <p>Modeled and designed a chassis and robotic arm in <strong>SolidWorks</strong>, followed by 3D printing. Implemented kinematics to optimize performance and weight distribution, controlling DC motors with encoders.</p>
          <p>Used the <strong>Open CV</strong> library for image processing. I programmed an algorithm for detecting and tracking a yellow object, allowing the robot to track it in real time.</p>
        </section>

        <section className="project-section">
          <h2>ROS and network connectivity</h2>
          <p>Publisher/Subscriber node architecture in <strong>ROS</strong> using Python and C++ to manage communication between components. The <strong>Raspberry Pi 4</strong> workings as the master node, coordinating data from sensors, actuators, and control commands.</p>
          <p>Configured static IP addresses for stable communication between the Raspberry Pi and the master computer. Protocols such as <strong>VNC</strong> and <strtong>SSH</strtong> were used for remote control and monitoring of the robot.</p>
          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/Task/ros.png" alt="Project created in ubunto 21.04" />
              <figcaption>All project is running on Linux</figcaption>
            </figure>
            <figure>
              <img src="Assets/Task/task2.png" alt="Robot mobile" />
              <figcaption>Robot IRL</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-section">
          <h2>Results</h2>
          <figure className="project-image-full">
            <img src="Assets/Task/task1.jpg" alt="Robot flexing" />
            <figcaption>The robots was named Wuaychivo</figcaption>
          </figure>
          <p>The robot successfully completed all tests and demonstrated its ability to detect, track, and manipulate objects. The main challenges included adapting the design to component limitations (motors and screws), optimizing camera performance across the network, and standardizing power systems to avoid interference.</p>
        </section>

        <section className="project-section">
          <h3>Detail Information</h3>
          <div className="github-link">
            <a href="https://github.com/RobertoCV10/Robotic-cart-with-arm-using-ROS-Raspberry-PI-4-and-Arduino" target="_blank" className="call-to-action-button">
              <i className="fab fa-github"></i> See GitHub repository
            </a>
          </div>
          <Tools toolIdsToShow={[1,3,2,5,6,9]} />
        </section>
      </main>
      <Contact />

      {/* Los componentes de contacto y pie de página se renderizan directamente.
        Si son compartidos en tu aplicación, esta es la forma de reutilizarlos.
      */}
    </div>
  );
};

export default task;