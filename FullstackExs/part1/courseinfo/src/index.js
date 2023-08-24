import React from 'react'
import ReactDOM from 'react-dom'

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

  return(
    <div>
      <p>
        Course header: {props.titulo}
      </p>
    </div>
  )
}

const Content = (props) => {

    return (
      <>
        <Part desc={props.p1} texs={props.e1} />
        <Part desc={props.p2} texs={props.e2} />
        <Part desc={props.p3} texs={props.e3} />
      </>
    )
}

const Total = (props) => {
    return(
      <>
        <p>Total exercises: {props.etotal}</p>
      </>
    )
}

const Part = (props) => {
  return (
    <>
      <li>
        {props.desc}, total exercises: {props.texs}
      </li>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))