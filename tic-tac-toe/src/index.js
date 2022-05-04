import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'



/*
Declaramos el objeto gameStyles, con las propiedades de estilo para
el elemento div del componente Game.

También podemos poner las propiedades de igual manera tras style, sin
declarar el objeto.

También podemos usar CSS con la propiedad className


*/


const Square = (props) => {
  return (
    <button className="square" onClick={() => alert(`square ${props.value} clicked`)}>
      {props.value}
    </button>
  )
}

const Board = () => {

  const renderSquare = (i) => {
    return ( 
      <Square value={i}/> //Así se pasan los props.
      )
  }
  return (
    <div style={{
      backgroundColor: 'skyblue',
      margin: 10,
      padding: 20
    }}>
      Board
      <div className = "board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className = "board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className = "board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
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