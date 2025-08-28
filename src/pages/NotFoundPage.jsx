import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css'; // Importa los estilos para esta página

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">¡Oops! This page does not exist ;(</p>
            <p className="not-found-description">
                Looks like you're lost. Don't worry, this happens to the best of us.
            </p>
        </div>
    );
};

export default NotFoundPage;
