import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <h1>6-Axis Arm Robot</h1>
          <p className="intro-paragraph">This project describes a control system for a robotic arm, implemented using a combination of Python software and Arduino-based hardware. The main objective of this system is to provide an intuitive user interface that allows manual manipulation of the arm joints, as well as the execution of automated movements and predefined position sequences. The solution aims to provide flexibility and precision in the control of robotic arms for various applications.</p>
        </section>

        <section className="project-section">
          <h2>Robot Design and Components</h2>
          <figure className="project-image-full">
            <img src="Assets/6AxisArm/arm.jpg" alt="6-Axis Arm Robot Design and Key Components" />
            <figcaption>Arm Robot's mechanical design.</figcaption>
          </figure>
          <p>The arm was composed of 5 MG995 servo motors located in the different joints and one mg90s for the gripper. An Atmega328P microcontroller was used together with a CP2102 USB to UART Bridge to upload code to the microcontroller. The arm design was developed entirely with 3D printing using PLA as material. Finally, the arm could be connected to a common 5V to 3A cell phone charger.</p>
        </section>

        <section className="project-section">
          <h2>Control of Robotic Arm Joints</h2>
          <p><strong>Individual Servo Movement:</strong> Functions are defined to send angle commands to each specific servo motor. A write command is used to move the servo motor connected to a given pin at an angle between 0 and 180 degrees.</p>
          <p><strong>Home Position:</strong> A dedicated function sets the robotic arm to a predefined “home position”. This home position is a set of specific angles for each of the six joints, serving as a reference point for the arm.</p>

          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/6AxisArm/arm2.jpg" alt="3D design created in SolidWorks" />
              <figcaption>The project includes a conveyor belt made of flip flops.</figcaption>
            </figure>
            <figure>
              <img src="Assets/6AxisArm/dashboard.png" alt="Graphical Control Interface" />
              <figcaption>User interface for arm control.</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-section">
          <h2>Automated Operation Modes</h2>
          <figure className="project-image-full">
            <img src="Assets/6AxisArm/code.png" alt="Code for Automated Modes" />
            <figcaption>Snippet of the code implementing circular and linear automated movements.</figcaption>
          </figure>
          <p><strong>Circular Mode (AUTO):</strong> In this mode, the robotic arm executes a circular trajectory. While one of the joints (shoulder) remains in a fixed position, the other two (hip and elbow) move in a coordinated manner. This is achieved by trigonometric calculations that determine the angles required at each step to simulate the tracking of a circle. Small pauses are introduced between each movement to ensure a smooth trajectory.</p>
          <p><strong>Linear Mode:</strong> Similar to the circular mode, this mode allows the arm to follow a linear trajectory between a defined start and end point. The hip and elbow joints move in a coordinated manner, while the shoulder remains static. Angles are calculated incrementally to simulate a straight-line motion. Pauses are also used to ensure the smoothness of the movement.</p>
        </section>

        <section className="project-section">
          <h2>Conclusion</h2>
          <p>The developed project offers a comprehensive solution for the control of a robotic arm, combining the robustness of the Atmega hardware with the programming flexibility of Python and the Firmata library together with an interactive graphical user interface. It allows both direct, manual control of joints and the execution of predefined movements and complex sequences, making it suitable for demonstration purposes, education or light automation applications.</p>
        </section>

        <section className="project-section">
          <h2>Future Recommendations</h2>
          <figure className="project-image-full">
            <img src="Assets/6AxisArm/complete.png" alt="Future Enhancements Concept" />
            <figcaption>The robots was named PARKY</figcaption>
          </figure>
          <p>To implement a more advanced version, the use of more precise servomotors could be incorporated to improve the system. Additionally, with the knowledge acquired, the implementation of inverse kinematics would greatly enhance the quality of the project.</p>
        
        
         <Tools toolIdsToShow={[1,3,2,5,6]} />
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