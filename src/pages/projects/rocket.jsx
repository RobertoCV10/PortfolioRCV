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

// Nota: Las fuentes de Google Fonts, Font Awesome y otros metadatos
// se deben añadir al <head> del archivo index.html en la carpeta public, no aquí.

const Rocket = () => {
  return (
    <div>

      <main className="project-presentation-container">
        <section className="project-hero">
          <h1>Didactic Experimental Rocket</h1>
          <p className="intro-paragraph">The prototype was designed to carry a nominal payload of up to 300 grams to a maximum altitude of 100 meters and incorporates a custom-built flight computer capable of measuring atmospheric variables (temperature, altitude, and pressure) and dynamic variables (pitch, roll, and yaw orientation). The system includes a real-time data transmission module to a ground base via LoRa communication with a UART protocol.</p>
        </section>

        <section className="project-section">
          <figure className="project-image-full">
            <img src="Assets/Rocket/UIBoard.jpg" alt="UI and board" />
            <figcaption>View of the rocket's user interface and electronic board.</figcaption>
          </figure>
          <p>An important aspect of this project is the development of a custom electronics board that integrates all sensors and communication modules, ensuring efficient data acquisition and processing. Flight computer programming includes real-time data logging, sensor fusion algorithms, and communication protocols to improve system reliability. The project addresses key challenges such as sensor integration, propulsion system design, and real-time data processing. By using refurbished model rocket components and advanced sensor technologies, this project seeks to provide a practical and educational platform for aerospace experimentation, contributing to the development of low-cost, high-performance rocketry systems.</p>
        </section>

        <section className="project-section">
          <h2>Dashboard Program</h2>
          <p>The program developed was an interface with modular displays that the user could select by selecting one of the boxes. The application included various widgets, such as gauge graphs, bar graphs, and even a special one that displayed a graphical representation of the rocket's orientation in real time using a gyroscope.</p>
          
          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/Rocket/dashboard.png" alt="Dashboard main view" />
              <figcaption>Main interface of the telemetry software.</figcaption>
            </figure>
            <figure>
              <img src="Assets/Rocket/dashboardReal.png" alt="Dashboard graphics in real-time" />
              <figcaption>Real-time telemetry graphs, including rocket orientation.</figcaption>
            </figure>
          </div>

          <p>The software was programmed using Python, primarily using CustomTkinter and Matplotlib for the interface and widgets. Serial readings via COM are also used to receive data from the local LoRa.</p>
          <figure className="project-image-full">
            <img src="Assets/Rocket/flowchart.png" alt="System flowchart" />
            <figcaption>Condensed system flow diagram and data communication.</figcaption>
          </figure>
        </section>

        <section className="project-section">
          <h2>Rocket Launches</h2>
          <p>Images of the launches from the rocket chamber and from the ground.</p>
          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/Rocket/launch.png" alt="First launch from ground" />
              <figcaption>First launch from the terrestrial ground.</figcaption>
            </figure>
            <figure>
              <img src="Assets/Rocket/Launch2.png" alt="Second launch from ground" />
              <figcaption>Second launch from the terrestrial ground.</figcaption>
            </figure>
            <figure>
              <img src="Assets/Rocket/frame1.jpg" alt="Rocket POV first launch" />
              <figcaption>View from rocket chamber during first launch.</figcaption>
            </figure>
            <figure>
              <img src="Assets/Rocket/frame2.jpg" alt="Rocket POV second launch" />
              <figcaption>View from rocket chamber during second launch.</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-section">
          <h3>Detail Information</h3>
          <div className="github-link">
            <a href="https://github.com/RobertoCV10/Rocket-data-monitoring-interface-using-ESP32-and-LoRa-/tree/main" target="_blank" className="call-to-action-button">
              <i className="fab fa-github"></i> See GitHub repository
            </a>
          </div>
          <Tools toolIdsToShow={[7,1,3,2,5,6]} />
        </section>
      </main>
      
      <Contact />
    </div>
  );
};

export default Rocket;