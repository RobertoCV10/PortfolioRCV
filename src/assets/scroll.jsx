import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    // Cuando pathname (la ruta) cambia, desplaza la ventana al inicio
    window.scrollTo(0, 0);
  }, [pathname]); // Dependencia: se ejecuta cada vez que 'pathname' cambia

  return null; // Este componente no renderiza nada visible
}

export default ScrollToTop;