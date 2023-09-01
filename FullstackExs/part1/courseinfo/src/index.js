//import React from 'react'
//import ReactDOM from 'react-dom'

//Exercises 1.1 & 1.2
/*
const App = () => {
    
  const header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header titulo={header}/>
      <Content 
        p1={part1} e1={exercises1}
        p2={part2} e2={exercises2}
        p3={part3} e3={exercises3}
      />
      <Total etotal={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)

  return(
    <div>
      <p>
        Course header: {props.titulo}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

    return (
      <>
        <Part desc={props.p1} texs={props.e1} />
        <Part desc={props.p2} texs={props.e2} />
        <Part desc={props.p3} texs={props.e3} />
      </>
    )
}

const Total = (props) => {
  console.log(props)

    return(
      <>
        <p>Total exercises: {props.etotal}</p>
      </>
    )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <li>
        {props.desc}, total exercises: {props.texs}
      </li>
    </>
  )
}

//Exercise 1.3 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header titulo={course}/>
      <Content 
        p1={part1.name} e1={part1.exercises}
        p2={part2.name} e2={part2.exercises}
        p3={part3.name} e3={part3.exercises}
      />
      <Total etotal={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)

  return(
    <div>
      <p>
        Course header: {props.titulo}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

    return (
      <>
        <Part desc={props.p1} texs={props.e1} />
        <Part desc={props.p2} texs={props.e2} />
        <Part desc={props.p3} texs={props.e3} />
      </>
    )
}

const Total = (props) => {
  console.log(props)

    return(
      <>
        <p>Total exercises: {props.etotal}</p>
      </>
    )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <li>
        {props.desc}, total exercises: {props.texs}
      </li>
    </>
  )
}

//Exercise 1.4

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header titulo={course}/>
      <Content partes={parts}/>
      <Total partes={parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)

  return(
    <div>
      <p>
        Course header: {props.titulo}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

    return (
      <>
        <Part desc={props.partes[0].name} texs={props.partes[0].exercises} />
        <Part desc={props.partes[1].name} texs={props.partes[1].exercises} />
        <Part desc={props.partes[2].name} texs={props.partes[2].exercises} />
      </>
    )
}

const Total = (props) => {
  console.log(props)

    return(
      <>
        <p>Total exercises: {props.partes[0].exercises + props.partes[1].exercises
        + props.partes[2].exercises}</p>
      </>
    )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <li>
        {props.desc}, total exercises: {props.texs}
      </li>
    </>
  )
}

//Exercise 1.5

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header titulo={course.name}/>
      <Content partes={course.parts}/>
      <Total partes={course.parts}/>
    </div>
  )
}

const Header = (props) => {
  console.log(props)

  return(
    <div>
      <p>
        Course header: {props.titulo}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

    return (
      <>
        <Part desc={props.partes[0].name} texs={props.partes[0].exercises} />
        <Part desc={props.partes[1].name} texs={props.partes[1].exercises} />
        <Part desc={props.partes[2].name} texs={props.partes[2].exercises} />
      </>
    )
}

const Total = (props) => {
  console.log(props)

    return(
      <>
        <p>Total exercises: {props.partes[0].exercises + props.partes[1].exercises
        + props.partes[2].exercises}</p>
      </>
    )
}

const Part = (props) => {
  console.log(props)

  return (
    <>
      <li>
        {props.desc}, total exercises: {props.texs}
      </li>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

ReactDOM.render(<App courses={courses} />, document.getElementById('root'))