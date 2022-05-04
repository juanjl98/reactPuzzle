import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const gameStyles = {
  backgroundColor: 'salmon',
  margin: 10,
  padding: 20         ///omitimos px, está por defecto
}
const Game = () => {
  return (
    <div>
      Game
    </div>
  )
}

/*
Renderiza el componente al DOM
El primer argumento es el componente (JSX)
El segundo argumento es el lugar donde lo renderizaremos
(JavaScript referenciando a un elemento HTML)
*/
ReactDOM.render(
  <Game />, 
  document.getElementById('root')
)