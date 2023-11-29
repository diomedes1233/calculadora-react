import React from 'react';
import logoLeon from '../images/leon-de-fuego.jpg';
import '../css/Logo.css';
function Logo(){
    return(
    <div className="logo-contenedor">
    <img
      src={logoLeon}
      className="logo-calculadora"
      alt="logo calculadora"
    />
  </div>
    )
}

export default Logo;