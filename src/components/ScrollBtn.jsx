import React from 'react';
// Importa los estilos, asumiendo que tendrás un archivo CSS para botones globales
import '../styles/ScrollBtn.css'; 

const ScrollDownButton = () => {
    // Función para desplazar la página hacia abajo
    const handleScrollDown = () => {
        window.scrollBy({
            top: window.innerHeight * 0.8, // Desplaza hacia abajo el 80% del alto de la ventana
            behavior: 'smooth' // Desplazamiento suave
        });
    };

    return (
        <button className="scroll-down-button" onClick={handleScrollDown} aria-label="Desplazarse hacia abajo">
            <i className="fas fa-chevron-down"></i>
        </button>
    );
};

export default ScrollDownButton;
