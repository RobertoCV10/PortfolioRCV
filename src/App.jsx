// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa todos tus estilos globales aquí
import './styles/colors.css';
import './styles/nav.css';
import './styles/footer.css';
import './index.css';
import './styles/projects.css';
import './styles/presentation.css';
import './styles/tools.css';

// Importa los componentes que se ven en TODAS las páginas
import Nav from './components/Nav';
import Footer from './components/Footer';
import Tools from './components/tools';


// Importa los componentes de las páginas individuales
import Home from './pages/Home';
import Projects from './pages/Projects';
import Portfolio from './pages/Portfolio';
import CV from './pages/CV';
import NotFoundPage from './pages/NotFoundPage'; // ¡Importa la nueva página 404!

// Importa los componentes de los proyectos y portafolios
import Arm from './pages/projects/arm';
import Maze from './pages/projects/maze';
import Rocket from './pages/projects/rocket';
import Task from './pages/projects/task';
import PLC from './pages/projects/plc';


//importa ajuste de scroll
import ScrollToTop from './assets/scroll'; // Importa el nuevo componente
import ScrollBtn from './components/ScrollBtn'; // ¡Importa el nuevo botón!


function App() {
    return (
        <>
            {/* El Nav y el Footer van aquí */}
            <Nav />
            <ScrollToTop />
            {/* Routes define qué página mostrar, sin el Router que ya está en main.jsx */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/CV" element={<CV />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/arm" element={<Arm />} />
                <Route path="/maze" element={<Maze />} />
                <Route path="/rocket" element={<Rocket />} />
                <Route path="/task" element={<Task />} />
                <Route path="/plc" element={<PLC />} />

                <Route path="*" element={<NotFoundPage />} /> 
            </Routes>
            <ScrollBtn /> {/* ¡Renderiza el botón de scroll aquí! */}
            
            <Footer />
        </>
    );
}

export default App;