/*
import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {

  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Hello = ({ name, edad }) => {
  const bornYear = () => new Date().getFullYear() - edad

  return (
    <div>
      <li>
        Hello {name}, you are {edad} years old
      </li>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => { 
  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Quinn'
  const age  = 16

  console.log('Hola consola, esto viene desde el componente')

    return( //iniciando div pero con el elemento vacío
      <>
        <p>Hola, hoy es {now.toString()}</p>
        <p>
          {a} + {b} = {a + b}
        </p>
        <Hello name="Carlos" edad={23} />
        <Hello name="Sandy" edad={40-15}/>
        <Hello nombre={name} edad={age}/>
        <Footer/>
      </>//cerrando lo mismo
  )
}

const Footer = () => {
  return (
    <div>
      App created by <a href="https://github.com/thomync">thomync</a>
    </div>
  )
}

*/

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/*
const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('renderizando...', counter)

  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
*/

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>

      <Display counter={counter}/>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}> 
        zero
      </button>
    </div>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 