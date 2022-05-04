import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


/*
Declaramos el objeto gameStyles, con las propiedades de estilo para
el elemento div del componente Game.

También podemos poner las propiedades de igual manera tras style, sin
declarar el objeto.

También podemos usar CSS con la propiedad className


*/


const Square = () => {
  return (
    <div className="square">
      X
    </div>
  )
}
const Board = () => {
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20
    }}>
      Board
      <div className = "board-row">
        <Square/><Square/><Square/>
      </div>
      <div className = "board-row">
        <Square/><Square/><Square/>
      </div>
      <div className = "board-row">
        <Square/><Square/><Square/>
      </div>
    </div>
  )
}
const Game = () => {

  return (
    <div className="game">
      Game
      <Board/>
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