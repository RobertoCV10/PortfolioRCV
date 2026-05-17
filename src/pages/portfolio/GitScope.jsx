import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import '../../styles/presentation.css';
import Tools from '../../components/tools';
import GitScopeImage from '../../Assets/GitScope/GitScope.png';

const GitScope = () => {
  return (
    <div>
      <main className="project-presentation-container">

        <section className="project-hero">
          <h1>GitScope</h1>
          <p className="intro-paragraph">
            A comprehensive GitHub repository analytics and visualization platform built with React and Node.js. 
            GitScope enables developers to explore repository metrics, analyze commit history, track contributor activity, 
            and visualize project statistics through interactive dashboards. The platform integrates with the GitHub API 
            to deliver real-time insights into repository performance, code quality, and team dynamics.
          </p>
        </section>

        <section className="project-section">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <img 
              src={GitScopeImage} 
              alt="GitScope platform preview" 
              style={{ 
                maxWidth: '100%', 
                height: 'auto', 
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }} 
            />
          </div>
        </section>

        <section className="project-section">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="https://git-scope-nu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fas fa-external-link-alt"></i> View Live Site
            </a>
            <a
              href="https://github.com/RobertoCV10/GitScope"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fab fa-github"></i> View Repository
            </a>
          </div>
        </section>

        <section className="project-section">
          <h2>What was built</h2>
          <p>
            GitScope is a full-stack analytics platform designed to extract and visualize meaningful insights 
            from GitHub repositories. The frontend is a React application that provides an intuitive interface 
            for connecting repositories and exploring detailed metrics through multiple dashboard views.
          </p>
          <p>
            The platform features real-time repository search, commit timeline visualization, contributor activity heatmaps, 
            and interactive charts displaying code frequency, repository growth, and team contributions. 
            Users can generate detailed reports, filter by date ranges, and compare metrics across multiple repositories.
          </p>
          <p>
            The backend is built with Node.js and Express, seamlessly integrating with the GitHub REST API 
            to fetch repository data, commit history, and contributor information. The architecture implements 
            intelligent caching strategies to optimize API rate limits and ensure fast response times 
            even when analyzing large repositories with extensive commit histories.
          </p>
        </section>

        <section className="project-section">
          <h2>Key features</h2>
          <p>
            The platform includes comprehensive repository analytics with real-time data fetching from GitHub, 
            interactive commit history visualization with timeline filtering, contributor activity analysis 
            with detailed performance metrics, code frequency charts showing language distribution and repository growth trends, 
            advanced search and filtering capabilities by repository name, language, and date range, 
            responsive dashboard design optimized for desktop and mobile viewing, and dark/light mode support 
            for improved user experience across different environments.
          </p>
          <p>
            Additional highlights include exportable analytics reports, comparative analysis tools for tracking 
            repository evolution over time, intelligent API request caching to maximize GitHub API quota usage, 
            and detailed contributor rankings with commit statistics and productivity metrics.
          </p>
        </section>

        <section className="project-section">
          <h3>Technical details</h3>
          <div className="github-link">
            <a
              href="https://github.com/RobertoCV10/GitScope"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fab fa-github"></i> View full repository
            </a>
          </div>
          <Tools toolIdsToShow={[13, 16, 23]} />
        </section>

      </main>

      <Contact />
    </div>
  );
};

export default GitScope;