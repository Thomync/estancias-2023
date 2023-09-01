/*

import React from 'react'
//import Note from './components/Note'

const Course = ({ course }) => (
    <div>
      <Header course={course} />
    </div>
  )

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  )
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
      ],
    }
  
    return <Course course={course} />
  }
  
export default App
*/

// Ejercicio 2.1

import React from 'react'
import Course from './components/Course'

const App = ({courses}) =>
  <div>
    <Course courses={courses} />
  </div>

export default App