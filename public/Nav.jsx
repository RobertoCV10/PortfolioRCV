import React, { useState } from 'react'; // 1. Importamos useState
import { Link } from 'react-router-dom';

const Nav = () => {
    // 2. Creamos un estado para el menú
    const [isOpen, setIsOpen] = useState(false);

    // 3. Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="logo-link">
                    <img src="/Assets/index/logo.png" alt="Logo" className="nav-logo" />
                </Link>

                {/* 4. El botón del menú hamburguesa, visible solo en móvil */}
                <button className="hamburger-menu" onClick={toggleMenu} aria-label="Abrir menú">
                    <i className="fas fa-bars"></i>
                </button>

                {/* 5. Agregamos una clase condicional al menú */}
                <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
                    <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                    <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
                    <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    <li><Link to="/CV" onClick={toggleMenu}>CV/Resume</Link></li>
                    <li><a href="#about-me" onClick={toggleMenu}>About me</a></li>
                </ul>

                <div className="nav-social-icons">
                    <a href="https://github.com/RobertoCV10" target="_blank" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/roberto-coria-vargas-088231309/" target="_blank" aria-label="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;