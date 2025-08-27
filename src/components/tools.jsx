import React, { useState, useEffect, useRef } from 'react';

const ToolsCarousel = ({ toolIdsToShow = null }) => {
    // Estado para almacenar los datos de las herramientas cargados desde la API
    const [toolImagesData, setToolImagesData] = useState([]);
    // Ya no necesitamos currentIndex ni las funciones de prev/nextSlide para el auto-scroll infinito.
    const carouselContainerRef = useRef(null);

    // 1. Cargar los datos de las herramientas desde la API y filtrarlos si es necesario
    useEffect(() => {
        // Define la URL del backend basada en el entorno
        const BACKEND_URL = process.env.NODE_ENV === 'production'
            ? 'https://backendportfoliorcv.onrender.com'
            : 'http://localhost:10000';

        const fetchTools = async () => {
            try {
                // Realiza la solicitud a la API utilizando la URL definida
                const response = await fetch(`${BACKEND_URL}/api/tools`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                let filteredData = data;
                // Si toolIdsToShow es un array no vacío, filtramos los datos
                if (toolIdsToShow && toolIdsToShow.length > 0) {
                    filteredData = data.filter(tool => toolIdsToShow.includes(tool.id));
                }
                
                // Actualiza el estado con los datos filtrados
                setToolImagesData(filteredData);
            } catch (err) {
                console.error('Error al cargar las herramientas:', err);
                // Si hay un error, puedes establecer los datos a un array vacío
                setToolImagesData([]);
            }
        };

        fetchTools(); // Llama a la función para ejecutarla
        
    }, [toolIdsToShow]); // Añadir toolIdsToShow como dependencia para que se re-ejecute si cambia

    // Si toolImagesData está vacío, muestra un mensaje de carga o de error
    if (toolImagesData.length === 0) {
        return (
            <section className="tools-carousel-section">
                <h2 className="tools-carousel-title">Tools & Technologies</h2>
                <div className="tools-carousel-wrapper">
                    <p>Cargando herramientas...</p>
                </div>
            </section>
        );
    }

    // Duplicamos los datos para crear el efecto de scroll infinito
    const infiniteToolImagesData = [...toolImagesData, ...toolImagesData];

    return (
        <section className="tools-carousel-section">
            <h2 className="tools-carousel-title">Tools & Technologies</h2>
            <div className="tools-carousel-wrapper">
                <div className="tools-carousel-container" ref={carouselContainerRef}>
                    {infiniteToolImagesData.map((tool, index) => (
                        // Usar una clave única para cada elemento, incluso los duplicados
                        <div key={`${tool.id}-${index}`} className="tools-carousel-item">
                            <img src={tool.image} alt={tool.title} className="tool-image" />
                            <h3>{tool.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ToolsCarousel;
