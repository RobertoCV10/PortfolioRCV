import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../styles/CVpage.css'; // Importa los estilos para esta página

const CVPage = () => {
    // La ruta a tu archivo PDF, asumiendo que está en public/Assets/cv/
    // ¡Asegúrate de cambiar 'your-cv-name.pdf' por el nombre real de tu archivo PDF!
    const cvPdfPath = '/Assets/CV/RCV.pdf'; 

    return (
        <>
            <main className="cv-container">
                <section className="cv-section">
                    <h1 className="cv-title">Curriculum Vitae / Resume</h1>
                    <div className="cv-pdf-viewer">
                        {/* El iframe incrusta el PDF */}
                        <iframe
                            src={cvPdfPath}
                            title="Curriculum Vitae"
                            className="cv-iframe"
                            width="100%"
                            height="800px" // Altura inicial, ajusta con CSS si es necesario
                            frameBorder="0"
                        >
                            {/* Mensaje de fallback si el navegador no soporta iframes o PDF */}
                            This browser does not support PDFs. Please download the PDF to view it:
                            <a href={cvPdfPath} download>Download CV</a>
                        </iframe>
                    </div>
                    {/* Opcionalmente, un botón de descarga por si el iframe no funciona bien o para móviles */}
                    <div className="cv-download-section">
                        <a href={cvPdfPath} download className="cv-download-button">
                            Download CV
                        </a>
                    </div>
                </section>
                <Contact />
            </main>
        </>
    );
};

export default CVPage;
