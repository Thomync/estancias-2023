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
*/ // Termina código del primer video //

///* // Inicia código del segundo video //

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
//*/