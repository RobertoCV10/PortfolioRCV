import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact';
import '../../styles/presentation.css';
import Tools from '../../components/tools';

const ZeroTrail = () => {
  return (
    <div>
      <main className="project-presentation-container">

        <section className="project-hero">
          <h1>Zero Trail</h1>
          <p className="intro-paragraph">
            A full-stack electric vehicle catalog built with React, Node.js, and MongoDB. 
            Users can explore 150+ EV models, compare specs, filter by range, price, or safety rating, 
            and navigate dedicated pages for six major manufacturers — each with its own visual identity. 
            The project was designed and developed entirely from scratch, covering frontend architecture, 
            REST API design, database modeling, and cloud deployment.
          </p>
        </section>

        <section className="project-section">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <a
            href="https://zero-trail.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="call-to-action-button"
            >
            <i className="fas fa-external-link-alt"></i> View Live Site
            </a>
        </div>
        </section>

        <section className="project-section">
          <h2>What was built</h2>
          <p>
            The frontend is a multi-page React application with a custom MUI-based design system. 
            Each manufacturer — Tesla, Audi, BYD, Chevrolet, Hyundai, and Nissan — has a dedicated page 
            with its own color palette, typography, hero layout, and brand decorations. 
            A shared configuration file drives the visual differences without duplicating components.
          </p>
          <p>
            The catalog supports real-time search, multi-field sorting, and responsive pagination 
            (10 items on mobile, 20 on desktop). A multi-step spec dialog lets users drill down 
            from model year to trim variant to full technical sheet, pulling live data from the API on every visit.
          </p>
          <p>
            The backend is a Node.js + Express REST API connected to a MongoDB Atlas database. 
            It handles filtered queries, sorting, and pagination server-side to keep response times low 
            regardless of dataset size.
          </p>
        </section>

        <section className="project-section">
          <h2>Highlights</h2>
          <p>
            Beyond the catalog, the project includes four premium model pages 
            (Ferrari SF90 Stradale, Lamborghini Revuelto, Audi e-tron GT, Maserati GranTurismo Folgore) 
            with photo galleries and lightbox viewers, three ranking pages 
            (Most Popular, Best Value for Money, Safest) with computed scoring algorithms, 
            a standalone Cybertruck page with a parallax hero and interactive trim configurator, 
            and a persistent dark/light mode toggle.
          </p>
        </section>

        <section className="project-section">
          <h3>Detail Information</h3>
          <div className="github-link">
            <a
              href="https://github.com/RobertoCV10"
              target="_blank"
              rel="noopener noreferrer"
              className="call-to-action-button"
            >
              <i className="fab fa-github"></i> See GitHub repository
            </a>
          </div>
          <Tools toolIdsToShow={[7, 1, 3, 2, 5, 6]} />
        </section>

      </main>

      <Contact />
    </div>
  );
};

export default ZeroTrail;