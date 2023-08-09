import './App.css';
import Mensaje from './Mensaje';
/*
function App() {
  return (
    <div className="App">
      Hola mundo
    </div>
  )
}

const App = () => {
  const mensaje = 'Hola desde variables'
  return(
    <div className="App">
      {mensaje}
    </div>
  )
}
*/

const Description = () => {
  return <p>App del bootcamp</p>
}

const App = () => {
  return(
    <div className="App">
      <Mensaje color='red' message='Probando'/>
      <Mensaje color='brown' message='Funciones'/>
      <Mensaje color='gray' message='De JavaScript'/>
      <Mensaje color='cyan' message='Nice'/>
      <Description/>
    </div>
  )
}
export default App;