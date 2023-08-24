import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello world from {props.nombre} I'm {props.edad} years old</p>
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
        <Hello name="Carlos"/>
        <Hello name="Sandy"/>
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

ReactDOM.render(<App />, document.getElementById('root')) 