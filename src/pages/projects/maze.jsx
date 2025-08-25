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

// Nota: Las fuentes de Google Fonts, Font Awesome y otros metadatos
// se deben añadir al <head> del archivo index.html en la carpeta public, no aquí.

const MazeRobot = () => {
  return (
    <div>
      <main className="project-presentation-container">
        <section className="project-hero">
          <h1>Maze-solving Robot</h1>
          <p className="intro-paragraph">In this integrative project, you will find the complete development of a robot whose main objective was to solve a maze, either through robust methods or rules as well as one or another algorithm. This robot was inspired by a micromouse robot, which does the same, but using more complex electronic circuits and programming too.</p>
        </section>

        <section className="project-section">
          <h2>Robot Design and Components</h2>
          <figure className="project-image-full">
            <img src="Assets/Maze/Yesenia2.png" alt="Robot Design" />
            <figcaption>Detailed view of the Maze-solving Robot design and its key components.</figcaption>
          </figure>
          <p>The maze robot was composed of two wheels, three HC-SR04 ultrasonic sensors, two motors, an MPU6050 gyroscope, and other essential components. Its body was 3D printed using PLA material. Expanders for 3mm screws were utilized, with lengths of approximately 2.5cm, along with other 0.5cm spacers. Custom bases were designed and printed to securely fix the motors and sensors to the main structure. For the programming, multiple support libraries were incorporated to structure and create all the necessary logic for the robot to function correctly. Furthermore, a PID control system was implemented in the robot's code to achieve smoother movement control, preventing aggressive or abrupt motions and minimizing collisions with the maze walls.</p>
        </section>

        <section className="project-section">
          <h2>Algorithm</h2>
          <p>The maze-solving algorithm is entirely based on feedback provided by the ultrasonic sensors. For the correct operation of these sensors, they are set to a maximum reading of 13cm. The algorithm primarily employs a right-wall following strategy. Due to the specific configuration of the maze, it is more efficient to prioritize right turns. Several conditions are established for the robot's operation, but certain priorities are crucial for the desired algorithm to be fulfilled. In this case, the condition for turning right is prioritized, and the second priority is for the robot to move forward. There are various scenarios in which the robot turns left or right, but each is essential for the robot to successfully navigate the maze. Essentially, the algorithm is constructed with IF-else and else-if type conditions, which activate boolean variables that, in turn, trigger pre-established functions.</p>

          <div className="image-gallery-grid">
            <figure>
              <img src="Assets/Maze/structure.png" alt="3D base" />
              <figcaption>3D design created in SolidWorks</figcaption>
            </figure>
            <figure>
              <img src="Assets/Maze/Maze.png" alt="Maze to solve" />
              <figcaption>Maze used to test te functionality.</figcaption>
            </figure>
          </div>
        </section>

        <section className="project-section">
          <h2>PID Control System</h2>
          <figure className="project-image-full">
            <img src="Assets/Maze/code.png" alt="PID Calculations" />
            <figcaption>PID calculations code for precise robot movement.</figcaption>
          </figure>
          <p>The PID control system of the robot is primarily oriented around the gyroscope, enabling the robot to execute precise 90-degree and 180-degree turns, and to maintain a straight trajectory when moving forward. To achieve this, other components and careful calibration of PID values are also necessary. The functions implemented in the Arduino IDE operate by activating loops through boolean variables. Crucially, a setpoint value or desired angle is established; thanks to the gyroscope library, we can continuously target the Z-axis or Z-angle. When moving forward, the target angle is 0 degrees, theoretically ensuring a perfectly straight path. Another critical factor is the error, calculated by simply subtracting the current angle from the target angle. The resulting error value influences the correction, as it is multiplied by the P, I, and D values. Subsequently, the overall correction is established by summing P+I+D, and this correction is applied via PWM to the motors, creating a variable that sets the new corrected speed for both motors, ensuring synchronized rotation.</p>
        </section>

        <section className="project-section">
          <h2>Conclusion</h2>
          <p><strong>Effective Turn Control:</strong> The integration of PID control with a gyroscope significantly improved turn accuracy and repeatability, addressing previous challenges encountered with encoder-based systems. <strong>Enhanced Navigation:</strong> The implementation of PID control and the gyroscope not only facilitated precise turns but also contributed to overall navigation efficiency and obstacle avoidance capabilities. <strong>Improved Performance:</strong> The project demonstrated a substantial enhancement in the robot's ability to navigate complex mazes efficiently and reliably.</p>
        </section>

        <section className="project-section">
          <h2>Future Recommendations</h2>
          <figure className="project-image-full">
            <img src="Assets/Maze/Yesenia.png" alt="Yesenia" />
            <figcaption>Yesenia was the name of the robot.</figcaption>
          </figure>
          <p><strong>Further Sensor Integration:</strong> Explore opportunities for integrating additional sensors, such as proximity sensors or cameras, to enhance obstacle detection and improve overall situational awareness. <strong>Advanced Control Techniques:</strong> Investigate advanced control techniques, including adaptive control or machine learning approaches, to further enhance the robot's adaptability and autonomy in navigating complex environments. <strong>Robustness Testing:</strong> Conduct extensive robustness testing to evaluate the robot's performance under various environmental conditions and ensure reliability in real-world scenarios. In summary, the maze robot project demonstrated significant achievements in overcoming challenges, enhancing navigation capabilities, and improving overall performance through the integration of PID control with a gyroscope. Lessons learned from the design and implementation process provide valuable insights for future robotic projects, while recommendations for future work outline avenues for further enhancement and exploration.</p>
        <Tools toolIdsToShow={[1,2,5,6,8]} />
        </section>
      </main>
      
      <Contact />

    </div>
  );
};

export default MazeRobot;