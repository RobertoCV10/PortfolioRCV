import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import '../../styles/presentation.css';
import Tools from '../../components/tools';

const MantechLabs = () => {
  return (
    <div>
      <main className="project-presentation-container">

        <section className="project-hero">
          <h1>Mantech Labs</h1>
          <p className="intro-paragraph">
            A Windows desktop optimization application built with Electron, React, and TypeScript. 
            Mantech Labs provides a complete toolkit to improve system performance through RAM optimization, 
            temporary files cleanup, gaming mode activation, and maintenance tasks. The application features 
            a modern UI with dark/light theme support, preset system for different use scenarios, and deep 
            Windows system integration via PowerShell.
          </p>
        </section>

        <section className="project-section">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <a
            href="https://mantech-labs-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="call-to-action-button"
            >
            <i className="fas fa-download"></i> Download for Windows
            </a>
        </div>
        </section>

        <section className="project-section">
          <h2>What was built</h2>
          <p>
            The frontend is a React 19 application with Material UI components and Framer Motion animations. 
            It features a responsive sidebar navigation, multiple views (Home, CPU, RAM, Disk, Optimizer, 
            Maintenance, Settings), and a comprehensive notification system.
          </p>
          <p>
            The backend runs on Electron's main process, exposing a secure IPC API to the renderer. 
            System optimization features include RAM cleanup via Standby List and Working Set management, 
            temp files cleaning from multiple Windows directories, power plan management for gaming mode, 
            Windows telemetry disabling, and Focus Assist activation.
          </p>
          <p>
            The application supports internationalization with Spanish and English translations, 
            custom preset saving and loading, automatic backup system, and persistent configuration storage.
          </p>
        </section>

        <section className="project-section">
          <h2>Highlights</h2>
          <p>
            Security-focused architecture with Context Isolation, Sandbox enabled, strict CSP, and validated preload scripts. 
            Real-time system metrics display for CPU, RAM, and Disk usage. Interactive progress tracking for maintenance tasks. 
            Dual theme system (dark/light) with custom color palettes. System tray integration with minimize-to-tray functionality.
          </p>
        </section>

        <section className="project-section">
          <h3>Detail Information</h3>
          <div className="github-link">
            <a
              href="https://github.com/RobertoCV10/mantech-labs"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fab fa-github"></i> See GitHub repository
            </a>
          </div>
          <Tools toolIdsToShow={[1, 2, 3, 4, 5, 6]} />
        </section>

      </main>

      <Contact />
    </div>
  );
};

export default MantechLabs;