import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import itcLogo from './../assets/itc-logo.png';
import kioslogo from './../assets/logo-kiosco.png';
import icon1 from './../assets/icon1.png';
import icon2 from './../assets/icon2.png';
import icon3 from './../assets/icon3.png';
import estudiante from './../assets/estudiante.png';

function Home() {
  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' }); //Con esto puedo mover el carrusel a la izquierda
  };
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' }); //Con esto puedo mover el carrusl a la derecha
  };

  return (
    <div className='Contenedor-general'>
      <div className="barra-superior">
        <div className="logo-itc">
          <img src={itcLogo} alt="Instituto Tecnológico de Campeche" />
          <h1>INSTITUTO TECNOLÓGICO DE CAMPECHE</h1>
        </div>
        <div className="faq-container">
          PREGUNTAS FRECUENTES
        </div>
      </div>

      <div className="Container-seccions">
        <div className="seccion-izquierda">
          <img src={estudiante} alt="Estudiante" className="img-estudiante" />
        </div>
        
        <div className="seccion-media">
          <h2>¿Qué departamento deseas consultar?</h2>
          <div className="botones" ref={carouselRef}>
            <Link to='/division-estudios'>
              <button>
                <img src={icon1} alt="División de Estudios" className="icon" />
                División de estudios profesionales
              </button>
            </Link>
            <Link to='/servicios-escolares'>
              <button>
                <img src={icon2} alt="Servicios Escolares" className="icon" />
                Servicios Escolares
              </button>
            </Link>
            <Link to='/gestion-tecnologica'>
              <button>
                <img src={icon3} alt="Gestión Tecnológica" className="icon" />
                Gestión Tecnológica y Vinculación
              </button>
            </Link>
            <button>Opción 4</button>
          </div>

          <div className="navegacion"> 
            <button onClick={scrollLeft}>←</button> 
            <button onClick={scrollRight}>→</button>
          </div>
        </div>

        <div className="seccion-derecha">
          <img src={kioslogo} alt="Instituto Tecnológico de Campeche" />
        </div>
      </div>
    </div>
  );
}

export default Home;