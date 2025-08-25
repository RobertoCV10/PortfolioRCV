import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // El componente para la sección de bienvenida
import About from '../components/About'; // Tu componente About.jsx
import Contact from '../components/Contact'; // Tu componente Contact.jsx
import '../index.css';

// Componente para una tarjeta de proyecto o portafolio
const ProjectCard = ({ item }) => (
    <article key={item.id} className="project-card">
        <Link to={`/detail/${item.id}`}>
            <img src={item.image} alt={item.title} />
        </Link>
        <h3>{item.title}</h3>
        <p>
            {item.tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </p>
        <p>{item.description}</p>
    </article>
);

const Home = () => {
    // Referencias para los elementos del carrusel para poder controlarlos
    const projectsCarouselRef = useRef(null);
    const portfolioCarouselRef = useRef(null);

    // Estados para almacenar los datos de la API
    const [projects, setProjects] = useState([]);
    const [portfolio, setPortfolio] = useState([]);

    // Estado para controlar qué sección está visible (proyectos o portafolio)
    const [activeSection, setActiveSection] = useState('projects');

    useEffect(() => {
        // Set the backend URL based on the environment
        const BACKEND_URL = process.env.NODE_ENV === 'production'
            ? 'https://backendportfoliorcv.onrender.com' // Production URL
            : 'http://localhost:10000'; // Development URL

        // Función para cargar los proyectos desde la API
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/projects`);
                if (!response.ok) {
                    throw new Error(`Error al cargar proyectos: ${response.statusText}`);
                }
                const data = await response.json();
                setProjects(data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        // Función para cargar el portafolio desde la API
        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/portfolio`);
                if (!response.ok) {
                    throw new Error(`Error al cargar portafolio: ${response.statusText}`);
                }
                const data = await response.json();
                setPortfolio(data.slice(0, 4));
            } catch (error) {
                console.error("Error fetching portfolio:", error);
            }
        };

        fetchProjects();
        fetchPortfolio();
    }, []);

    // Función para manejar el desplazamiento del carrusel
    const handleScroll = (direction, carouselRef) => {
        if (carouselRef.current) {
            const container = carouselRef.current;
            const cardWidth = container.querySelector('.project-card').offsetWidth;
            const scrollAmount = cardWidth + 20;

            if (direction === 'left') {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };
    
    // Renderizado de una tarjeta individual
    const renderCard = (item) => (
        <article key={item.id} className="project-card">
            <Link to={`/proyect/${item.url}`}>
                <img src={item.image} alt={`${item.title} image`} />
                <h3>{item.title}</h3>
            </Link>
            <p>Description: {item.description}</p>
            <p>Tags: {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</p>
        </article>
    );

    // Renderizado de la tarjeta "Ver más"
    const createSeeMoreCard = (url) => (
        <article key="see-more" className="project-card see-more">
            <h3>See more projects.</h3>
            <Link to={url}>View all</Link>
        </article>
    );

    return (
        <>
            <Hero />

            <ul className="filter-menu">
                <li
                    className={activeSection === 'projects' ? 'active' : ''}
                    onClick={() => setActiveSection('projects')}
                >
                    PROJECTS
                </li>
                <li
                    className={activeSection === 'portfolio' ? 'active' : ''}
                    onClick={() => setActiveSection('portfolio')}
                >
                    PORTFOLIO
                </li>
            </ul>

            {activeSection === 'projects' && (
                <section id="projects-section">
                    <h2>PROJECTS SECTION</h2>
                    <div className="carousel-wrapper">
                        <button className="carousel-arrow left" onClick={() => handleScroll('left', projectsCarouselRef)}>&lt;</button>
                        <div id="project-list" className="carousel-container" ref={projectsCarouselRef}>
                            {projects.length > 0 ? (
                                <>
                                    {projects.map(renderCard)}
                                    {createSeeMoreCard('/projects')}
                                </>
                            ) : (
                                <p>Cargando proyectos...</p>
                            )}
                        </div>
                        <button className="carousel-arrow right" onClick={() => handleScroll('right', projectsCarouselRef)}>&gt;</button>
                    </div>
                </section>
            )}

            {activeSection === 'portfolio' && (
                <section id="portfolio-section">
                    <h2>PORTFOLIO SECTION</h2>
                    <div className="carousel-wrapper">
                        <button className="carousel-arrow left" onClick={() => handleScroll('left', portfolioCarouselRef)}>&lt;</button>
                        <div id="portfolio-list" className="carousel-container" ref={portfolioCarouselRef}>
                            {portfolio.length > 0 ? (
                                <>
                                    {portfolio.map(renderCard)}
                                    {createSeeMoreCard('/portfolio')}
                                </>
                            ) : (
                                <p>Cargando portafolio...</p>
                            )}
                        </div>
                        <button className="carousel-arrow right" onClick={() => handleScroll('right', portfolioCarouselRef)}>&gt;</button>
                    </div>
                </section>
            )}
            
            <About />
            <Contact />
        </>
    );
};

export default Home;
