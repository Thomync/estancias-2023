// Ejercicio 1.6
/*
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

// Ejercicio 1.7

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
      <p>
      Comentarios totales: {info[0].counter + info[1].counter + info[2].counter}
      </p>
      <p>
      Puntuación promedio: { (info[0].counter - info[2].counter) / (info[0].counter + info[1].counter + info[2].counter) }
      </p>
      <p>
      Comentarios positivos: { (info[0].counter / (info[0].counter + info[1].counter + info[2].counter)) * 100  }%
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


// Ejercicio 1.8

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
      <Statistics data={buttons}/>
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

const Statistics = ({data}) => {
  console.log({data})

  let bueno = data[0].counter
  let neutro = data[1].counter
  let malo = data[2].counter
  let total = bueno + neutro + malo

  return(
    <div>
      <p>
      Comentarios totales: {total}
      </p>
      <p>
      Puntuación promedio: { (bueno - malo) / total }
      </p>
      <p>
      Comentarios positivos: { (bueno / total) * 100  }%
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


// Ejercicio 1.9

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
      <Statistics data={buttons}/>
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

const Statistics = ({data}) => {
  console.log({data})

  let bueno = data[0].counter
  let neutro = data[1].counter
  let malo = data[2].counter
  let total = bueno + neutro + malo

  if (total === 0) {
    return (
      <div>
        Todavía no hay suficientes estadísticas
      </div>
    )
  }

  return(
    <div>
      <p>
      Comentarios totales: {total}
      </p>
      <p>
      Puntuación promedio: { (bueno - malo) / total }
      </p>
      <p>
      Comentarios positivos: { (bueno / total) * 100  }%
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

// Ejercicio 1.10

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
      <Statistics data={buttons}/>
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
      <StatisticLine text={info[0].text} value={info[0].counter}/>
      <StatisticLine text={info[1].text} value={info[1].counter}/>
      <StatisticLine text={info[2].text} value={info[2].counter}/>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  //console.log(text, ' ', value)

  return(
    <>
      <p>
        {text}: {value}
      </p>
    </>
  )
}

const Statistics = ({data}) => {
  console.log({data})

  let bueno = data[0].counter
  let neutro = data[1].counter
  let malo = data[2].counter
  let total = bueno + neutro + malo

  if (total === 0) {
    return (
      <div>
        Todavía no hay suficientes estadísticas
      </div>
    )
  }

  return(
    <div>
      <p>
      Comentarios totales: {total}
      </p>
      <p>
      Puntuación promedio: { (bueno - malo) / total }
      </p>
      <p>
      Comentarios positivos: { (bueno / total) * 100  }%
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
*/
// Ejercicio 1.11

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
      <Statistics data={buttons}/>
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
      <table>
        <tbody>
          <tr>
            <td>{info[0].text}: </td>
            <td>{info[0].counter}</td>
          </tr>
          <tr>
          <td>{info[1].text}: </td>
            <td>{info[1].counter}</td>
          </tr>
          <tr>
          <td>{info[2].text}: </td>
            <td>{info[2].counter}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({data}) => {
  console.log({data})

  let bueno = data[0].counter
  let neutro = data[1].counter
  let malo = data[2].counter
  let total = bueno + neutro + malo

  if (total === 0) {
    return (
      <div>
        Todavía no hay suficientes estadísticas
      </div>
    )
  }

  return(
    <div>
      <p>
      Comentarios totales: {total}
      </p>
      <p>
      Puntuación promedio: { (bueno - malo) / total }
      </p>
      <p>
      Comentarios positivos: { (bueno / total) * 100  }%
      </p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)