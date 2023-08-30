// Ejercicio 1.12 y 1.13 en progreso

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [selected, setSelected] = useState(0)

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  var votes = new Uint8Array(anecdotes.length)
  var copy = [...votes]

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    console.log(votes)
    console.log(selected)//problema al actualizar el número de votos
    copy[selected] += 1
    console.log(votes)
  }

  return (
    <div>
      <Title header={anecdotes[selected]}/>
      <p>Tiene {votes[selected]} votos</p>
      <Button onClick={addVote()} text='Votar' />
      <Button onClick={randomAnecdote} text='Anécdota aleatoria' />
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

ReactDOM.render(<App />, 
  document.getElementById('root')
)