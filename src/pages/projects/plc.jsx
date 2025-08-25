import React, { useState, useEffect } from 'react';
import { IDLE_BLOCKER, Link } from 'react-router-dom';
import Nav from '../../components/Nav'; // Asegúrate de tener este componente
import Contact from '../../components/Contact'; // Asegúrate de tener este componente

// Importa aquí los estilos CSS para este componente
// import '../styles/colors.css';
// import '../styles/Nav.css';
// import '../styles/footer.css';
import '../../styles/presentation.css';
import Tools from '../../components/tools';


// Nota: Las fuentes de Google Fonts y los links de Font Awesome se añaden
// al <head> del archivo index.html en la carpeta public, no aquí.

const arm = () => {
  return (
    <div>
      {/* El componente de navegación se renderiza directamente, sin usar fetch.
        Si la navegación es dinámica, su lógica debería estar dentro de Nav.jsx
      */}

      <main className="project-presentation-container">
        <section className="project-hero">
          <h1>Industrial automation</h1>
          <p className="intro-paragraph">This project focused on the implementation of an industrial automation system that integrates three different machines for a quality control and part handling process. The main objective was to transfer parts from a warehouse to a positioning template, with a quality control mechanism to reject parts that did not meet predefined standards.</p>
        </section>

        <section className="project-section">
          <h2>Sections</h2>
          <p> The entire system was designed by <strong>DEENSA</strong> using three <strong>Siemens</strong> PLCs, the <strong>SISMATIC S7-1200s.</strong></p>
          <p> <strong>Pick and Place Station (Cartesian Robot): </strong> Its main function is to control the movement and operations of the robot to pick up objects and place them in designated locations.
          The robot was controlled by <strong>SMC LECP</strong> Linear Axis Controllers.</p>
          <p> <strong>Conveyor Belt: </strong> An electromechanical system controlled by a PLC, with a three-phase motor for speed and direction variation. The conveyor belt features five industrial sensors and a vision camera for inspecting parts.The conveyor belt was equipped with:</p>
          <ol>
            <li><p>Siemens MicroMaster 420 Inverter Drive with Basic Operator Panel (BOP)</p></li>
            <li><p>Autonics BF4RP through-beam fiber optic sensor</p></li>
            <li><p>Autonics PRL30-15DP Inductive Sensor</p></li>
            <li><p>Autonics CR30-15DP Capacitive Sensor</p></li>
            <li><p>Autonics BJ3M-PDT-P Reflective Sensor</p></li>
            <li><p>Autonics BEN300-DDT Diffuse Optical Sensor</p></li>
            <li><p>COGNEX Vision System with lighting</p></li>
          </ol>
          <p> <strong>Mitsubishi Robotic Arm: </strong>A multi-joint robot <strong>Mitsubishi RV-4FR</strong> with 6 degrees of freedom that picks up pieces from the belt and places them in a specific location based on their material and condition. The arm was programmed with a teach pendant and the CR800 controller</p>
          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/plc/almacen.png" alt="Storage" />
              <figcaption>Pieces storage and Cartesian arm.</figcaption>
            </figure>
            <figure>
              <img src="Assets/plc/conveyor.png" alt="conveyor belt" />
              <figcaption>Conveyor belt with sensors and camera.</figcaption>
            </figure>
           <figure>
              <img src="Assets/plc/arm.png" alt="Mitsubishi arm" />
              <figcaption>Robotic arm sorting pieces</figcaption>
            </figure>
          </div>
          <p></p>
        </section>


        <section className="project-section">
          <h2>Software and network</h2>
          <p><strong>TIA Portal:</strong> It was used for configuring the PLC controller and managing the control system. The project used three PLCs communicating with each other to control the warehouse, the conveyor belt, and the control system.</p>
          <p><strong>In-Sight Vision:</strong> Software used in conjunction with the Congex camera in the conveyor belt section for image capture and quality validation.</p>
          <p><strong>Profinet:</strong> This was used as the primary communication protocol to achieve fluid data exchange and real-time coordination between the three machines. Communication was established via <strong>GSD</strong> files.</p>

          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/plc/network.png" alt="Tia Portal setup" />
              <figcaption>PLCs setup.</figcaption>
            </figure>
            <figure>
              <img src="Assets/plc/insight.png" alt="In-Sight Vision" />
              <figcaption>In-Sight Vision setup example</figcaption>
            </figure>
          </div>
        </section>



        <section className="project-section">
          <h2>Secuence</h2>
          <ol>
            <li><p>The process begins with the introduction of a part (good metal, defective metal, good plastic, or defective plastic) from the warehouse station.</p></li>
            <li><p>A SCARA robot picks up the part and places it on the conveyor belt.</p></li>
            <li><p>The conveyor belt determines the condition and material of the part (good/defective, metal/plastic) using its sensors and a camera.</p></li>
            <li><p>Upon reaching the end of the belt, the Mitsubishi robotic arm picks up the part.</p></li>
            <li><p>The robotic arm places the part in a specific location based on the information received from the belt.</p></li>
            <li><p>The warehouse PLC is the most important, as it has the ability to control the other two PLCs.</p></li>
          </ol>
          <figure className="project-image-full">
            <img src="Assets/plc/pieces.png" alt="Pieces" />
            <figcaption>Test pieces.</figcaption>
          </figure>
        </section>

        <section className="project-section">
          <h2>Results</h2>
          <p>The designed algorithm enabled optimal part picking, sorting, and placement. Communication between the three PLCs and the robot arm occurred in real time. Experience was gained in PLC programming using TIA Portal software and in creating procedures and subroutines for the robot arms.</p>
        
        
         <Tools toolIdsToShow={[10,11,12]} />
        </section>

       <Contact />
      </main>

      {/* Los componentes de contacto y pie de página se renderizan directamente.
        Si son compartidos en tu aplicación, esta es la forma de reutilizarlos.
      */}
    </div>
  );
};

export default arm;