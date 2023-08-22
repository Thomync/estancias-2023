/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Termina código del primer video //

// Inicia código del segundo video //

import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => ( 
  <div>
    <p>{props.contIni}</p> 
  </div>
)

let contador=0;

// Así se puede ir actualizando la información que se renderiza en la pantalla

ReactDOM.render(
  <App contIni={contador}/>,// En este caso, un contador
  document.getElementById('root')
);

contador=contador+1;

ReactDOM.render(
  <App contIni={contador}/>,
  document.getElementById('root')
);

// Pero también se puede hacer con una función y cada cierto tiempo

const refresh = () => {
  ReactDOM.render(
    <App contIni={contador}/>,
    document.getElementById('root')
  );  
}// Creamos una función a repetir

// Y con este comando podemos controlar el tiempo en el que se renderiza la info
// en pantalla cada tantos milisegundos

setInterval( () => {// Le enviamos la función a repetir
  contador++
  refresh()
}, 1000);// Y cada cuantos milisegundos


// Esta función renderiza cada segundo todos los elementos en la pantalla, lo
// resulta poco eficiente, pero a continuación se muestra una alternativa.

// Termina código del segundo video //

// Inicia código del tercer video //

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  
  //const contador = useState(0);
  //const contadorValue = contador[0];
  //const updateContador = contador[1];

  const [getContador, setContador] = useState(0);

  // La línea de arriba equivale a las 3 anteriores

  console.log("render");

  //setContador( prevContador => {
    //return (prevContador+1);
  //})

  const handleClick = () => {
    setContador(getContador+1);
  }
  const handleClickReset = () => {
    setContador(0);
  }

  const isEven = getContador % 2 === 0;
  const mensajePar = isEven ? "Número par" : "Número impar";

  return(
    <div>
      <p>Probando actualizaciones </p>
      <h1>{getContador}</h1>
      <p>{mensajePar}</p>
      <button // Añadimos un elemento de tipo botón
        onClick = {handleClick}// Añadimos un evento de click y le pasamos una
                               // función 
      >
        Incrementar
      </button>

      <button // Añadimos un elemento de tipo botón
        onClick = {handleClickReset}// Añadimos un evento de click y le pasamos una
                               // función 
      >
        Reset
      </button>
    </div>
  );
}// Con esto, cada que se da un click se incrementa el contador

ReactDOM.render(<App />, document.getElementById('root'));

// Termina el primer ejercicio

// Inicia el segundo

import { useState } from "react";
import ReactDOM from "react-dom";
//import "styles.css"

const App = () => {
  //const [ getLeft, setLeft ] = useState(10);
  //const [ getRight, setRoiht ] = useState(20);

  const [ counters, setCounter] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    mensaje: "Funcionando",
  });

  const [ getClicks, setClicks ] = useState([])

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters, // Con esto damos a entender que conservaremos todos los
        // datos sin algún cambio y que solo modificaremos los posteriores
      left: counters.left + 1,
      clicks: counters.clicks + 1,
    }
    setCounter(newCounterState);
    setClicks( prevClicks => ([...prevClicks,  'L']))
  };

  const handleClickRight = () => {
    const newCounterState = {
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1,
    }
    setCounter(newCounterState);
    setClicks( prevClicks => ([...prevClicks,  'R']))
  };

  return(
    <div>
      {counters.left}
      <button onClick = {handleClickLeft} >Left</button>
      <button onClick = {handleClickRight} >right</button>
      {counters.right}
      <p>Clicks totales: {counters.clicks}</p>
      <p>{counters.mensaje}</p>
      {getClicks.join(", ")}
    </div>
  );

}

ReactDOM.render(<App />, document.getElementById('root'));

// Termina código del tercer video
*/
// Inicia código del cuarto video

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const notes = [
  {
    id: 1,
    content: "Mensaje informativo",
    date: "2023-12-08",
    priority: false
  },
  {
    id: 12,
    content: "Mensaje privado",
    date: "2023-13-08",
    priority: true
  },
  {
    id: 3,
    content: "Mensaje público",
    date: "2023-14-08",
    priority: false
  }
];

console.log("Hola");
/*
export default function App(){
  return (
    <ul>
      {
        notes.map(note => {
          return (
            <li key={note.id}>
              <p>{note.content}</p>
              <small>
                <time>{note.date}</time>
              </small>
            </li>
          );
        })
      }
    </ul>
  );
}
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
)