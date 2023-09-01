// Ejercicio 1.12 y 1.13 en progreso
/*
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

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <Title header={anecdotes[selected]}/>
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
*/

// Ejercicio 1.13
/*

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setAllVotes(copy)
  }

  return (
    <div>
      <Anecdote header={anecdotes[selected]} value={allVotes[selected]}/>
      <Button onClick={addVote} text='Votar' />
      <Button onClick={randomAnecdote} text='Anécdota aleatoria' />
    </div>
  )
}

const Anecdote = ({header, value}) => {
    console.log({header})

    return(
      <div>
        <h1>{header}</h1>
        <p>Tiene {value} votos</p>
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
*/

// Ejercicio 1.14

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const [selected, setSelected] = useState(0)
  const [allVotes, setAllVotes] = useState(Array(6).fill(0))


  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setAllVotes(copy)
  }

  return (
    <div>
      <Title header='Anécdota del día'/>
      <Anecdote header={anecdotes[selected]} value={allVotes[selected]}/>
      <Button onClick={addVote} text='Votar' />
      <Button onClick={randomAnecdote} text='Anécdota aleatoria' />
      <Title header='La anécdota con más votos'/>
      <Popular anecdotes={anecdotes} allVotes={allVotes} />
    </div>
  )
}

const Anecdote = ({header, value}) => {
    //console.log({header})

    return(
      <div>
        <h1>{header}</h1>
        <p>Tiene {value} votos</p>
      </div>
    )
}

const Popular = ({anecdotes, allVotes}) => {
  const highestVoteCount = Math.max(...allVotes)
  const winnerIndex = allVotes.indexOf(highestVoteCount)
  const winner = anecdotes[winnerIndex]

  if (highestVoteCount === 0) {
    return (
      <p>No hay suficientes votos aún</p>
    )
  }

  return (
    <div>
      <p>{winner}</p>
      <p>Tiene: {highestVoteCount} votes</p>
    </div>
  )
}

const Title = ({header}) => {
  //console.log({header})

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