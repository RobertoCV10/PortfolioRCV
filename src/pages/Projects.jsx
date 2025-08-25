import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// REMOVIDO: import Nav from '../components/Nav'; // Nav ya se importa en App.jsx
import Contact from '../components/Contact'; // Contact se mantiene si es parte de esta página
// REMOVIDO: import Footer from '../components/Footer'; // Footer ya se importa en App.jsx

// Importa los estilos CSS de tu archivo original
import '../styles/projects.css';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedTag, setSelectedTag] = useState('all');

    useEffect(() => {
        fetch('http://localhost:3000/api/projects')
            .then(res => res.json())
            .then(data => {
                setAllProjects(data);
                setFilteredProjects(data);
            })
            .catch(err => console.error('Error loading projects:', err));
    }, []);

    useEffect(() => {
        if (selectedTag === 'all') {
            setFilteredProjects(allProjects);
        } else {
            const filtered = allProjects.filter(project =>
                project.tags.some(tag => tag.toLowerCase() === selectedTag)
            );
            setFilteredProjects(filtered);
        }
    }, [selectedTag, allProjects]);

    const handleFilterChange = (event) => {
        setSelectedTag(event.target.value);
    };

    return (
        <>
            {/* REMOVIDO: <Nav /> - Ya lo renderiza App.jsx */}

            <div className="projects-header-controls">
                <header className="projects-main-header">
                    <h1>My Projects</h1>
                    <p>Select a project or filter by tag</p>
                </header>
                <section className="filter-section">
                    <label htmlFor="filter">Filter by:</label>
                    <select id="filter" value={selectedTag} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="robotics">Robotics</option>
                        <option value="software">Software</option>
                        <option value="algorithms">Algorithms</option>
                        <option value="electronics">Electronics</option>
                        <option value="internship">Internship</option>
                        <option value="mechanics">Mechanics</option>
                        <option value="plc">PLC</option>
                    </select>
                </section>
            </div>

            <section className="project-grid">
                {filteredProjects.map(project => (
                    <article key={project.id} className="project-card">
                        <Link to={`/projects/${project.url}`} className="project-link">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
            
            <Contact /> {/* Se mantiene si es parte de esta página */}
            {/* REMOVIDO: <Footer /> - Ya lo renderiza App.jsx */}
        </>
    );
};

export default Projects;
