import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import '../../styles/presentation.css';
import Tools from '../../components/tools';

const ottStudio = () => {
  return (
    <div>
      <main className="project-presentation-container">

        <section className="project-hero">
          <h1>OTT Analytics Dashboard</h1>
          <p className="intro-paragraph">
            An interactive analytics platform built with Google Apps Script that enables comprehensive analysis of Over-The-Top (OTT) streaming content (It is designed to simulate a realistic streaming ecosystem) data. OTT Analytics Dashboard provides real-time insights into platform market share, content performance metrics, trending titles, and quality indicators—all within an intuitive, Microsoft-inspired light interface.
          </p>
        </section>

        <section className="project-section">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <a
              href="https://script.google.com/macros/s/AKfycbz-FwDxXBb0OqOPCn2kURD8SCqUPaxkM20Su2fUSSSrs9WUVSrCJ7cG5DTBNHhutAh2/exec"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fas fa-external-link-alt"></i> Access Dashboard
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>The Problem & Solution</h2>
          <p>
            Streaming platforms and media analysts need actionable insights from massive content libraries to make strategic decisions. Traditional spreadsheet-based analysis is static, tedious, and difficult to visualize at scale. Decision-makers require a centralized hub that immediately reveals market trends, content performance patterns, and quality metrics.
          </p>
          <p>
            OTT Analytics Dashboard transforms raw OTT content data into interactive visualizations and actionable insights. The platform aggregates performance across multiple dimensions—platforms, languages, genres, ratings, and trending content—enabling users to identify market gaps, benchmark quality standards, and track engagement patterns in real time.
          </p>
        </section>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
            <li><strong>Dashboard Overview:</strong> At-a-glance KPIs including total titles, content type distribution, average ratings, and market dominance insights.</li>
            <li><strong>Market Analysis:</strong> Platform-level competitive analysis with volume comparisons and quality metrics (average ratings by service).</li>
            <li><strong>Language Intelligence:</strong> Global content distribution across languages with percentage breakdowns and top-10 rankings.</li>
            <li><strong>Trending Analysis:</strong> Real-time identification of trending content and popular titles ranked by engagement and popularity scores.</li>
            <li><strong>Quality Metrics:</strong> Distribution analysis of ratings (0-2, 2-4, 4-6, 6-8, 8-10), maximum/minimum ratings, and average vote counts.</li>
            <li><strong>Performance Insights:</strong> Scatter plot correlations between user votes vs. ratings and engagement score vs. popularity score.</li>
            <li><strong>Data Management:</strong> Full CRUD operations—search, edit, update, and delete individual content records with real-time feedback.</li>
          </ul>
        </section>

        <section className="project-section">
          <h2>Technical Architecture</h2>
          <p>
            The platform is built on Google Apps Script with a dynamic, responsive HTML/CSS frontend enhanced by Chart.js for advanced data visualization. The backend implements intelligent data aggregation and analysis functions that process datasets of varying sizes efficiently.
          </p>
          <p>
            <strong>Frontend Highlights:</strong> A Microsoft-inspired light theme with a fixed sidebar navigation, smooth animations powered by Animate.css, and Bootstrap 5 for responsive layouts. The interface implements a Single-Page Application (SPA) pattern with client-side routing that eliminates page reloads.
          </p>
          <p>
            <strong>Backend Highlights:</strong> Dynamic header mapping ensures compatibility with datasets regardless of column order. Modular analysis functions calculate statistics by platform, genre, language, country, and content type. The system supports incremental data loading and filtering without server bottlenecks.
          </p>
          <p>
            <strong>Data Processing:</strong> Raw spreadsheet data is transformed into structured objects with parsed ratings, votes, and engagement metrics. Multi-dimensional analysis includes genre distribution, language segmentation, platform comparisons, and quality benchmarking—all computed in-memory for instant dashboard updates.
          </p>
        </section>

        <section className="project-section">
          <h2>Technologies & Stack</h2>
          <p>
            <strong>Frontend:</strong> HTML5, CSS3 (CSS Variables for theming), JavaScript (ES6+), Bootstrap 5, Chart.js, Animate.css
          </p>
          <p>
            <strong>Backend:</strong> Google Apps Script, Google Sheets API
          </p>
          <p>
            <strong>Architecture Patterns:</strong> SPA (Single-Page Application), Client-side state management, Dynamic header mapping, Modular analytics functions
          </p>
        </section>

        <section className="project-section">
          <h2>Use Cases</h2>
          <ul style={{ lineHeight: '1.8', marginLeft: '1.5rem' }}>
            <li><strong>Content Strategists:</strong> Identify underserved genres and language markets to inform acquisition decisions.</li>
            <li><strong>Platform Analysts:</strong> Benchmark competitive positioning and market share across OTT services.</li>
            <li><strong>Quality Assurance:</strong> Monitor rating distributions and flag content quality outliers.</li>
            <li><strong>Operations Teams:</strong> Manage content metadata and maintain data accuracy through integrated CRUD operations.</li>
          </ul>
        </section>

        <section className="project-section">
          <Tools toolIdsToShow={[20, 21, 22]} />
        </section>

      </main>

      <Contact />
    </div>
  );
};

export default ottStudio;