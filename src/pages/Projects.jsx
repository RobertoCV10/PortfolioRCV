import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import '../styles/projects.css';

const Projects = () => {
    // State to store all projects fetched from the API
    const [allProjects, setAllProjects] = useState([]);
    // State to store the projects that will be displayed after filtering
    const [filteredProjects, setFilteredProjects] = useState([]);
    // State to track the currently selected tag for filtering
    const [selectedTag, setSelectedTag] = useState('all');

    // This useEffect fetches data from the API only once when the component mounts
    useEffect(() => {
        const BACKEND_URL = process.env.NODE_ENV === 'production'
            ? 'https://backendportfoliorcv.onrender.com'
            : 'http://localhost:10000';

        const fetchProjects = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/projects`);
                if (!response.ok) {
                    throw new Error(`Error al cargar proyectos: ${response.statusText}`);
                }
                const data = await response.json();
                
                setAllProjects(data);
                setFilteredProjects(data);

            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    // This useEffect handles filtering whenever the `selectedTag` or `allProjects` state changes
    useEffect(() => {
        if (selectedTag === 'all') {
            setFilteredProjects(allProjects);
        } else {
            const projectsFiltered = allProjects.filter(project => 
                project.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase())
            );
            setFilteredProjects(projectsFiltered);
        }
    }, [selectedTag, allProjects]);

    // This function is called when the user changes the filter selection
    const handleFilterChange = (event) => {
        setSelectedTag(event.target.value);
    };

    return (
        <>
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
                {filteredProjects.length > 0 ? (
                    filteredProjects.map(project => (
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
                    ))
                ) : (
                    <p>No projects found with this tag.</p>
                )}
            </section>
            
            <Contact />
        </>
    );
};

export default Projects;