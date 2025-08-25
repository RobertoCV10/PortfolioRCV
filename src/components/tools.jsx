import React, { useState, useEffect, useRef } from 'react';

const ToolsCarousel = ({ toolIdsToShow = null }) => {
    // Estado para almacenar los datos de las herramientas cargados desde la API
    const [toolImagesData, setToolImagesData] = useState([]);
    // Ya no necesitamos currentIndex ni las funciones de prev/nextSlide para el auto-scroll infinito.
    const carouselContainerRef = useRef(null);

    // 1. Cargar los datos de las herramientas desde la API y filtrarlos si es necesario
    useEffect(() => {
        fetch('http://localhost:3000/api/tools') // Ruta de tu API
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then(data => {
                let filteredData = data;
                // Si toolIdsToShow es un array no vacío, filtramos los datos
                if (toolIdsToShow && toolIdsToShow.length > 0) {
                    filteredData = data.filter(tool => toolIdsToShow.includes(tool.id));
                }
                
                setToolImagesData(filteredData);
            })
            .catch(err => console.error('Error al cargar las herramientas:', err));
    }, [toolIdsToShow]); // Añadir toolIdsToShow como dependencia para que se re-ejecute si cambia

    // No renderiza nada si aún no hay datos o si los datos filtrados están vacíos
    if (toolImagesData.length === 0) {
        return <section className="tools-carousel-section">No tools to display or loading...</section>;
    }

    // Duplicamos los datos para crear el efecto de scroll infinito
    // Esto asegura que haya suficiente contenido para que la animación CSS sea fluida
    const infiniteToolImagesData = [...toolImagesData, ...toolImagesData];

    return (
        <section className="tools-carousel-section">
            <h2 className="tools-carousel-title">Tools & Technologies</h2>
            <div className="tools-carousel-wrapper">
                {/* Las flechas se han eliminado para un carrusel de auto-scroll infinito */}
                {/* Se mueve directamente el contenedor interno con animación CSS */}
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
