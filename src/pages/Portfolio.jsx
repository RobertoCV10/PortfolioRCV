import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Este componente usará los mismos estilos de proyectos, lo cual es ideal
import '../styles/projects.css';

const Portfolio = () => {
    // Los estados son idénticos a los de la página de proyectos
    const [allPortfolio, setAllPortfolio] = useState([]);
    const [filteredPortfolio, setFilteredPortfolio] = useState([]);
    const [selectedTag, setSelectedTag] = useState('all');

    // 1. Carga los datos del portafolio desde la API
    useEffect(() => {
        // Set the backend URL based on the environment
        const BACKEND_URL = process.env.NODE_ENV === 'production'
            ? 'https://backendportfoliorcv.onrender.com' // Production URL
            : 'http://localhost:10000'; // Development URL

        // Función para cargar el portafolio desde la API
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/portfolio`);
                if (!response.ok) {
                    throw new Error(`Error al cargar portafolio: ${response.statusText}`);
                }
                const data = await response.json();
                setPortfolio(data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching portfolio:", error);
            }
        };

        fetchPortfolio();
    }, []);

    // 2. Filtra el portafolio cada vez que la etiqueta seleccionada cambie
    useEffect(() => {
        if (selectedTag === 'all') {
            setFilteredPortfolio(allPortfolio);
        } else {
            const filtered = allPortfolio.filter(item =>
                item.tags.some(tag => tag.toLowerCase() === selectedTag)
            );
            setFilteredPortfolio(filtered);
        }
    }, [selectedTag, allPortfolio]);

    const handleFilterChange = (event) => {
        setSelectedTag(event.target.value);
    };

    return (
        <>
            <Nav />

            <div className="projects-header-controls">
                <header className="projects-main-header">
                    <h1>My Portfolio</h1>
                    <p>Select a project or filter by tag</p>
                </header>
                <section className="filter-section">
                    <label htmlFor="filter">Filter by:</label>
                    <select id="filter" value={selectedTag} onChange={handleFilterChange}>
                        {/* Las opciones de filtro para el portafolio */}
                        <option value="all">All</option>
                        {/* Estas etiquetas son solo un ejemplo, ajusta las que necesites */}
                        <option value="web-development">Web Development</option>
                        <option value="design">Design</option>
                        <option value="backend">Backend</option>
                        <option value="ui/ux">UI/UX</option>
                    </select>
                </section>
            </div>

            <section className="project-grid">
                {/* Renderizamos las tarjetas del portafolio filtradas */}
                {filteredPortfolio.map(item => (
                    <article key={item.id} className="project-card">
                        {/* El enlace puede ser distinto si las URLs del portafolio son diferentes */}
                        <Link to={`/portfolio/${item.id}`} className="project-link">
                            <img src={item.image} alt={item.title} className="project-image" />
                            <div className="project-info">
                                <h3>{item.title}</h3>
                                <p className="project-description">{item.description}</p>
                                <div className="project-tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
            
            <Contact />
        </>
    );
};

export default Portfolio;