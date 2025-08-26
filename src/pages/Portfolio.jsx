import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import '../styles/projects.css';

const Portfolio = () => {
    // State to store all portfolio items fetched from the API
    const [allPortfolio, setAllPortfolio] = useState([]);
    // State to store the portfolio items that will be displayed after filtering
    const [filteredPortfolio, setFilteredPortfolio] = useState([]);
    // State to track the currently selected tag for filtering
    const [selectedTag, setSelectedTag] = useState('all');

    // This useEffect fetches data from the API only once when the component mounts
    useEffect(() => {
        const BACKEND_URL = process.env.NODE_ENV === 'production'
            ? 'https://backendportfoliorcv.onrender.com'
            : 'http://localhost:10000';

        const fetchPortfolio = async () => {
            try {
                const response = await fetch(`${BACKEND_URL}/api/portfolio`);
                if (!response.ok) {
                    throw new Error(`Error al cargar portafolio: ${response.statusText}`);
                }
                const data = await response.json();
                
                // Store ALL portfolio items and set them as the initial filtered list
                setAllPortfolio(data);
                setFilteredPortfolio(data);

            } catch (error) {
                console.error("Error fetching portfolio:", error);
            }
        };

        fetchPortfolio();
    }, []);

    // This useEffect handles filtering whenever the `selectedTag` or `allPortfolio` state changes
    useEffect(() => {
        if (selectedTag === 'all') {
            setFilteredPortfolio(allPortfolio);
        } else {
            const filtered = allPortfolio.filter(item =>
                // Convert both the item's tags and the selected tag to lowercase for comparison
                item.tags.map(tag => tag.toLowerCase()).includes(selectedTag.toLowerCase())
            );
            setFilteredPortfolio(filtered);
        }
    }, [selectedTag, allPortfolio]);

    // This function is called when the user changes the filter selection
    const handleFilterChange = (event) => {
        setSelectedTag(event.target.value);
    };

    return (
        <>
            <div className="projects-header-controls">
                <header className="projects-main-header">
                    <h1>My Portfolio</h1>
                    <p>Select a project or filter by tag</p>
                </header>
                <section className="filter-section">
                    <label htmlFor="filter">Filter by:</label>
                    <select id="filter" value={selectedTag} onChange={handleFilterChange}>
                        <option value="all">All</option>
                        <option value="web-development">Web Development</option>
                        <option value="design">Design</option>
                        <option value="backend">Backend</option>
                        <option value="ui/ux">UI/UX</option>
                    </select>
                </section>
            </div>

            <section className="project-grid">
                {filteredPortfolio.length > 0 ? (
                    filteredPortfolio.map(item => (
                        <article key={item.id} className="project-card">
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
                    ))
                ) : (
                    <p>No projects found with this tag.</p>
                )}
            </section>
            
            <Contact />
        </>
    );
};

export default Portfolio;