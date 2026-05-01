import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import '../../styles/presentation.css';
import Tools from '../../components/tools';

const MantechGoogleEdition = () => {
  return (
    <div>
      <main className="project-presentation-container">

        <section className="project-hero">
          <h1>Mantech Google Edition</h1>
          <p className="intro-paragraph">
            An internal audit tool developed with Google Apps Script that allows users to visualize and manage Google Drive storage intuitively within the Google ecosystem. Mantech Drive Manager provides a clear overview of space consumption, helping teams maintain organized and efficient cloud storage.
          </p>
        </section>

        <section className="project-section">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            {/* Note: Update this link once the specific project web app or demo is deployed */}
            <a
              href="https://script.google.com/macros/s/AKfycbyZq1QuXUP_uLMPUAPARglqsKYYwAs6pPii-i49n2ArwFdcSBovIWT-6p73Ai7AvTET/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fas fa-external-link-alt"></i> Access Web App
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>The Problem & Solution</h2>
          <p>
            In teams where Google Drive serves as the primary repository, it is common to accumulate heavy files—videos, exports, and backups—that silently consume storage. Manually auditing folders is a tedious and error-prone process.
          </p>
          <p>
            This application deploys a navigable folder explorer directly in the browser. Users can traverse their Drive level by level, select specific folders for review, and receive a detailed email report of all files exceeding 10 MB, including the file name, exact size, and a direct link for immediate action.
          </p>
        </section>

        <section className="project-section">
          <h2>Technical Features</h2>
          <p>
            Built on Google Apps Script, the tool features a hierarchical navigation system with a clickable breadcrumb. To ensure high performance, it loads data incrementally—one level at a time—rather than scanning the entire Drive at once.
          </p>
          <p>
            The interface includes a real-time search bar that filters folders in the current view without additional server calls. Additionally, it features an automatic recipient selector that identifies the authenticated user's email while allowing manual overrides.
          </p>
          <p>
            Reports are delivered as formatted HTML emails containing a clean data table. The UI follows the Mantech Labs visual identity with a professional dark theme, deployed as a public Web App.
          </p>
        </section>

        <section className="project-section">
          <h2>Tools & Technologies</h2>
          {/* Adjusted tool IDs to reflect Google Apps Script, JavaScript, and HTML/CSS focus */}
          <Tools toolIdsToShow={[20, 21, 22]} />
        </section>

      </main>

      <Contact />
    </div>
  );
};

export default MantechGoogleEdition;