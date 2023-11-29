import React from 'react';

import '../css/Calculadora.css';
import Pantalla from './Pantalla';
import Boton from './Boton';
import BotonClear from './BotonClear';
import { evaluate } from 'mathjs';
import { useState } from 'react';

function Calculadora(){

    const [input, setInput] = useState('')

    const agregarInput = (val) => {
      setInput(input + val)
    }
  
    const calcularResultado = () => {
      if (input) {
        setInput(evaluate(input))
      } else {
        alert('Por favor ingresar los valores')
      }
    }

    return(
        <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton className="color-igual" manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClic={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    )
}

export default Calculadora;