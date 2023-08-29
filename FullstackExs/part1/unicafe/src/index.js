// Ejercicio 1.6

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const buttons = [
    {
      text : 'Buena',
      counter : good
    },
    {
      text : 'Neutral',
      counter : neutral
    },
    {
      text : 'Mala',
      counter : bad
    }
  ]

  const addGood = () => {
    setGood(good + 1)
  }

  const addNeutral = () => {
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title header='¿Qué tan buena fue tu experiencia utilizando la app?'/>
      <Button onClick={addGood} text={buttons[0].text} />
      <Button onClick={addNeutral} text={buttons[1].text} />
      <Button onClick={addBad} text={buttons[2].text} />
      <Title header='Estadísticas'/>
      <Counter info={buttons}  />
    </div>
  )
}

const Title = ({header}) => {
    console.log({header})

    return(
      <div>
        <h1>{header}</h1>
      </div>
    )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Counter = ({info}) => {
  console.log({info})

  return(
    <div>
      <p>
        {info[0].text}: {info[0].counter}
      </p>
      <p>
      {info[1].text}: {info[1].counter}
      </p>
      <p>
      {info[2].text}: {info[2].counter}
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)