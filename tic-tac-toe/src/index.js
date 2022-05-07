import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Image from "./assets/title.png"
import Equis from "./assets/equis.png"
import Circulo from "./assets/circulo.png"
import Empty from "./assets/empty.png"



/*
Declaramos el objeto gameStyles, con las propiedades de estilo para
el elemento div del componente Game.

También podemos poner las propiedades de igual manera tras style, sin
declarar el objeto.

También podemos usar CSS con la propiedad className

*/


const Square = (props) => {

  const [value, setValue] = useState(null)
  //Llamando a setValue actualizamos el estado de value y actualizamos el componente.
  return (
    <div>
    <button style={{background: `url(${props.value == 'X' ? Equis : props.value == 'O' ? Circulo : Empty})`}}
      className="square" onClick={props.onClickEvent}> 
    </button>
    </div>
  )
}

const Board = () => {

  /*
    Al pasar el estado de cada cuadrado al componente Board, hacemos lo que se conoce
    como "lifting state up".
  */
  const initialSquares = Array(9).fill(null)
  const [squares, setSquares] = useState(initialSquares)
  const [xIsNext, setXIsNext] = useState(true)

  const handleClickEvent = (i) => {
    //Para cambiar el estado, tomaremos una copia de initialSquares
    if (calculateWinner(squares) != null) {
      setSquares(initialSquares)
      setXIsNext(true)
    } else {
      if (squares[i] == null) {
        const newSquares = [...squares]
        //La actualizaremos ocn el valor cambiado
        newSquares[i] = xIsNext ? 'X' : 'O';
        //Y llamaremos a la función setSquares, que actualizará los componentes
        setSquares(newSquares)
        setXIsNext(!xIsNext)
      }
    }
    
    
  }

  const winner = calculateWinner(squares)
  const turno = winner == null ? `Turno de ${xIsNext ? 'X' : 'O'}` : winner == 'X' ? `X Ganó` : 'O Ganó'

  const renderSquare = (i) => {
    return ( 
      <Square value={squares[i]}                          //Así se pasan los props.
              onClickEvent={() => handleClickEvent(i)}/>  //Pasamos la función como prop. La función accederá al estado de Board
      )                                                   //y el componente y sus hijos se actualizarán
  }

  return (
    <div className="tablero">
      <div className="turno">{turno}</div>
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
      <img className="imageHeader" src={Image}></img>
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

function calculateWinner(squares) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]

  for (let line of lines) {
    const [a,b,c] = line

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }

  return null
}