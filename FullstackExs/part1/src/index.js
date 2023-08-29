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

const Display = ({counter}) => {
  return (
    <div>{counter}</div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>

      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

const Display = ({counter}) => <div>{counter}</div>


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  //const handleLeftClick = () => {
    //const newClicks = { 
      //left: clicks.left + 1, 
      //right: clicks.right 
    //}
    //setClicks(newClicks)
  //}

  //const handleRightClick = () => {
    //const newClicks = { 
      //left: clicks.left, 
      //right: clicks.right + 1 
    //}
    //setClicks(newClicks)
  //}

  const handleLeftClick = () =>
  setClicks({ ...clicks, left: clicks.left + 1 })

const handleRightClick = () =>
  setClicks({ ...clicks, right: clicks.right + 1 })

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
    </div>
  )
}
*/

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}

      <History allClicks={allClicks} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) 